// Duman testi: uygulama açılıyor mu, ekranlar hata vermeden çiziliyor mu, ders zinciri baştan sona gidiyor mu?
// Çalıştır: npm run test:smoke   (Playwright gerekir: npm i -D playwright)
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '../../www');
const TIP = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const sunucu = http.createServer((q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TIP[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});
// Çizilmesi gereken ekranlar. Yeni ekran eklenince buraya ekle.
const EKRANLAR = [['ana'], ['yol'], ['sinavlar'], ['ilerleme'], ['ben'], ['tekrar'], ['mola']];

(async () => {
  await new Promise(c => sunucu.listen(0, c));
  const url = `http://localhost:${sunucu.address().port}/`;
  const tarayici = await chromium.launch();
  const sayfa = await (await tarayici.newContext({ viewport: { width: 390, height: 800 }, serviceWorkers: 'block' })).newPage();
  const hatalar = [];
  sayfa.on('pageerror', e => hatalar.push('pageerror: ' + e.message));
  sayfa.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) hatalar.push('console: ' + m.text()); });
  await sayfa.goto(url);
  let sayi = 0;
  const dene = async (ad, arg) => {
    try {
      await sayfa.evaluate(([a, g]) => { window.SY.sekme('ana'); window.SY.git(a, ...g); }, [ad, arg]);
      const bos = await sayfa.evaluate(() => document.getElementById('app').innerText.trim().length < 5);
      if (bos) hatalar.push(`bos ekran: ${ad} ${JSON.stringify(arg)}`); else sayi++;
    } catch (e) { hatalar.push(`${ad} ${JSON.stringify(arg)}: ${e.message.split('\n')[0]}`); }
  };
  for (const dil of ['tr', 'en']) for (const mod of ['buyuk', 'cocuk']) {
    await sayfa.evaluate(([m, d]) => { window.SY.S.mod = m; window.SY.dilAyarla(d); }, [mod, dil]);
    for (const [ad, ...a] of EKRANLAR) await dene(ad, a[0] || []);
    const idler = await sayfa.evaluate(() => window.SY.TUM.map(e => e.x.id));
    for (const id of idler) {
      await dene('ders', [id]);
      // İngilizcede ders başlığı çevrilmiş olmalı (Türkçe başlıkla aynı olmamalı)
      if (dil === 'en') { const bsl = await sayfa.evaluate(() => document.querySelector('.ders-baslik') && document.querySelector('.ders-baslik').textContent); const tr = await sayfa.evaluate(i => DONEMLER.flatMap(d => d.dersler).find(x => x.id === i).baslik, id); if (!bsl || bsl === tr) hatalar.push('İngilizce başlık yok: ' + id); }
    }
    const zler = await sayfa.evaluate(() => SINAVLAR.map(z => z.id));
    for (const z of zler) await dene('sinav', [z]);
  }
  await sayfa.evaluate(() => window.SY.dilAyarla('tr'));
  // Ders zinciri: İleri ile (soru çözmeden) son derse kadar; sonra bir derste soruları çöz
  await sayfa.evaluate(() => { window.SY.S.mod = 'buyuk'; window.SY.S.biten = {}; window.SY.sekme('yol'); });
  await sayfa.click('[data-ders]');
  let adim = 0;
  for (;;) {
    adim++;
    const son = await sayfa.evaluate(() => !document.querySelector('#ileri').textContent.includes('İleri'));
    await sayfa.click('#ileri');
    if (son) break;
  }
  await sayfa.evaluate(() => window.SY.git('ders', 'fil'));
  await sayfa.click('#soru');
  for (let k = 0; k < 2; k++) { await sayfa.click('.sik >> nth=0'); await sayfa.click('.btn'); }
  if (!(await sayfa.$('#sonraki'))) hatalar.push('sorulardan sonra "Sonraki ders" yok');
  // Veri bütünlüğü: her derste "Bugün bize ne diyor?" var, âyet kimlikleri geçerli
  const eksik = await sayfa.evaluate(() => { const id = window.SY.TUM.map(e => e.x.id); return { dusun: id.filter(i => !DUSUN[i]), ayet: Object.keys(AYET).filter(i => !id.includes(i)), hassas: HASSAS.filter(i => !id.includes(i)) }; });
  if (eksik.dusun.length) hatalar.push('DUSUN yok: ' + eksik.dusun.join(','));
  if (eksik.ayet.length) hatalar.push('AYET geçersiz ders: ' + eksik.ayet.join(','));
  if (eksik.hassas.length) hatalar.push('HASSAS geçersiz ders: ' + eksik.hassas.join(','));
  // Hassas ders çocuk modunda kapıyla açılır; "Birlikte okuyalım" içeriği açar
  await sayfa.evaluate(() => { window.SY.S.mod = 'cocuk'; window.SY.sekme('ana'); window.SY.git('ders', 'uhud'); });
  if (!(await sayfa.$('#birlikte'))) hatalar.push('hassas ders kapısı yok');
  else { await sayfa.click('#birlikte'); if (!(await sayfa.$('#ileri'))) hatalar.push('birlikte okuyalım dersi açmadı'); }
  // Yanlış cevap sonrası tekrar kutusu dolar ve tekrar ekranı çalışır
  await sayfa.evaluate(() => { window.SY.S.tekrar = { 'fil#0': { lvl: 0, due: '2000-01-01' } }; window.SY.sekme('tekrar'); });
  if (!(await sayfa.$('.sik'))) hatalar.push('tekrar ekranında soru yok');
  const toplam = await sayfa.evaluate(() => window.SY.TUM.length);
  if (adim !== toplam) hatalar.push(`zincir ${adim}/${toplam} derste kesildi`);
  console.log(`${sayi} ekran çizildi, zincir ${adim}/${toplam} ders, ${hatalar.length} hata`);
  hatalar.slice(0, 15).forEach(h => console.log('  ' + h));
  await tarayici.close(); sunucu.close();
  process.exit(hatalar.length ? 1 : 0);
})();
