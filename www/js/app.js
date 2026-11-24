/* Siyer Yolum — uygulama motoru. Kur'an Yolum ile aynı mantık: ekran tablosu (EKRAN), ekran yığını (git/geri),
   alt sekme çubuğu, çevrimdışı çalışma, ilerleme telefonda saklanır. */
(function () {
  'use strict';
  const app = document.getElementById('app');
  const $ = s => app.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  
  // ------------------------------------------------------------ durum (telefonda saklanır)
  const ANAHTAR = 'siyer-yolum.v1';
  const S = { mod: 'buyuk', tema: 'oto', biten: {}, sinav: {}, seri: { gun: 0, son: '' } };
  try { Object.assign(S, JSON.parse(localStorage.getItem(ANAHTAR) || '{}')); } catch (e) { }
  if (!S.dil) S.dil = String(navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const T = (tr, en) => (S.dil === 'en' ? en : tr);
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(S)); } catch (e) { } };
  const gecti = id => !!S.biten[id];
  const cocuk = () => S.mod === 'cocuk';
  function temaUygula() {
    const k = document.documentElement; if (S.tema === 'oto') k.removeAttribute('data-tema'); else k.dataset.tema = S.tema;
    document.body.dataset.mod = S.mod; k.lang = S.dil;
  }

  // ------------------------------------------------------------ veri yardımcıları
  let DON = DONEMLER, SIN = SINAVLAR, YER = YERLER, DET = DETAY, TUM = [];
  // Dil: İngilizce içerik (content-en.js) Türkçe verinin üstüne yerleştirilir; yapı ve sıra aynıdır
  function yerel() {
    const en = S.dil === 'en' && typeof EN !== 'undefined';
    DON = !en ? DONEMLER : DONEMLER.map(d => Object.assign({}, d, { ad: EN.donem[d.id] || d.ad, dersler: d.dersler.map(x => {
      const e = EN.ders[x.id]; if (!e) return x;
      return Object.assign({}, x, { baslik: e[0],
        cocuk: { ozet: e[1], olaylar: x.cocuk.olaylar.map((o, i) => Object.assign({}, o, { b: e[2][i][0], m: e[2][i][1] })) },
        buyuk: { ozet: e[3], olaylar: x.buyuk.olaylar.map((o, i) => Object.assign({}, o, { b: e[4][i][0], m: e[4][i][1] })) },
        sorular: x.sorular.map((q, i) => Object.assign({}, q, { s: e[5][i][0], sec: e[5][i][1], a: e[5][i][2] })) });
    }) }));
    SIN = !en ? SINAVLAR : SINAVLAR.map(z => Object.assign({}, z, { ad: EN.sinav[z.id] || z.ad }));
    YER = !en ? YERLER : Object.fromEntries(Object.entries(YERLER).map(([k, v]) => [k, Object.assign({}, v, { ad: EN.yer[k] || v.ad })]));
    DET = !en ? DETAY : Object.fromEntries(Object.entries(DETAY).map(([k, v]) => [k, Object.assign({}, v, { metin: (EN.ders[k] && EN.ders[k][6]) || v.metin })]));
    TUM = DON.flatMap(d => d.dersler.map(x => ({ d, x })));
  }
  yerel();
  function dilAyarla(d) { S.dil = d; yerel(); kaydet(); ciz(); }
  const ders = id => TUM.find(e => e.x.id === id);
  const siradaki = () => TUM.find(e => !gecti(e.x.id) && e.x.cocuk);
  const sonraki = id => { const i = TUM.findIndex(e => e.x.id === id); return TUM[i + 1] || null; };
  const donemOran = d => { const l = d.dersler; return [l.filter(x => gecti(x.id)).length, l.length]; };
  const gunBugun = () => new Date().toISOString().slice(0, 10);

  // ------------------------------------------------------------ ikonlar (büyükte çizgi ikon, çocukta emoji)
  const IK = d => `<svg class="ik" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const IKON = {
    ay: IK('<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>'),
    bugun: IK('<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/>'),
    degis: IK('<path d="M7 7h11l-3-3M17 17H6l3 3"/>'),
    geri: IK('<path d="M15 5l-7 7 7 7"/>'),
    sil: IK('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    yol: IK('<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17c0-7 12-4 12-10"/>'),
    sinav: IK('<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>'),
    ben: IK('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
    tik: IK('<path d="M5 12.5l4.5 4.5L19 7"/>'),
    ileri: IK('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    video: IK('<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M17 10l4-2v8l-4-2z"/>'),
    harita: IK('<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    kitap: IK('<path d="M2 5c3-1 6-1 10 1 4-2 7-2 10-1v14c-3-1-6-1-10 1-4-2-7-2-10-1z"/><path d="M12 6v14"/>'),
    cocuk: IK('<circle cx="12" cy="9" r="5"/><path d="M9.5 9h.01M14.5 9h.01M10 11.5c1 1 3 1 4 0"/><path d="M7 21c1-3 3-4 5-4s4 1 5 4"/>'),
    ilerleme: IK('<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>')
  };
  const EMOJI = { bugun: '📅', yol: '🗺️', sinav: '🎯', ben: '🙂', harita: '📍', kitap: '📖', ilerleme: '📊', cocuk: '🧒' };
  const ik = ad => cocuk() && EMOJI[ad] && ad !== 'ay' ? `<span class="ik" aria-hidden="true" style="font-size:1.35rem;line-height:1">${EMOJI[ad]}</span>` : IKON[ad];

  // ------------------------------------------------------------ yönlendirme (Kur'an Yolum'daki ekran yığını)
  const EKRAN = {};
  let yigin = [['ana', []]];
  function git(ad, ...a) { yigin.push([ad, a]); ciz(); window.scrollTo(0, 0); }
  function geri() { if (yigin.length > 1) { yigin.pop(); ciz(); window.scrollTo(0, 0); } }
  function sekme(ad, ...a) { yigin = [[ad, a]]; ciz(); window.scrollTo(0, 0); }
  function ciz() {
    temaUygula();
    const [ad, a] = yigin[yigin.length - 1];
    EKRAN[ad](...a);
    app.querySelectorAll('[data-geri]').forEach(b => b.onclick = geri);
    app.querySelectorAll('[data-git]').forEach(b => { if (!b.onclick) b.onclick = () => git(b.dataset.git); });
    altMenu(yigin[yigin.length - 1][0]);
  }
  function toast(m) { document.querySelectorAll('.toast').forEach(x => x.remove()); const d = document.createElement('div'); d.className = 'toast'; d.setAttribute('role', 'status'); d.textContent = m; document.body.appendChild(d); setTimeout(() => d.remove(), 2600); }

  const ust = (baslik, geriVar, sag) => `<header class="ust">${geriVar ? `<button class="geri" data-geri aria-label="${T('Geri', 'Back')}">${IKON.geri}</button>` : `<span class="logo">${IKON.ay}</span>`}<h1>${esc(baslik)}</h1>${sag || ''}</header>`;
  const modDugme = () => `<button class="sag" data-mod aria-label="${T('Mod: şu an ' + (cocuk() ? 'çocuk' : 'büyük') + '. Değiştirmek için dokun', 'Mode: currently ' + (cocuk() ? 'kids' : 'adult') + '. Tap to change')}">${IKON.degis}<span>${T(cocuk() ? 'Çocuk' : 'Büyük', cocuk() ? 'Kids' : 'Adult')}</span></button>`;
  function modBagla() { const b = $('[data-mod]'); if (b) b.onclick = () => { S.mod = cocuk() ? 'buyuk' : 'cocuk'; kaydet(); ciz(); toast(T(cocuk() ? 'Çocuk modu' : 'Büyük modu', cocuk() ? 'Kids mode' : 'Adult mode')); }; }

  // ------------------------------------------------------------ alt sekme çubuğu
  const SEKME = [['ana', 'bugun', 'Bugün', 'Today'], ['yol', 'yol', 'Yol', 'Path'], ['sinavlar', 'sinav', 'Sınav', 'Quiz'], ['ben', 'ben', 'Ben', 'Me']];
  const SEKME_EKRAN = { ana: 'ana', yol: 'yol', ders: 'yol', sinavlar: 'sinavlar', sinav: 'sinavlar', ben: 'ben', ilerleme: 'ben' };
  const TAM_EKRAN = ['ders', 'soru'];
  function altMenu(ad) {
    document.querySelectorAll('.altmenu').forEach(x => x.remove());
    document.body.classList.toggle('tam', TAM_EKRAN.includes(ad));
    if (TAM_EKRAN.includes(ad)) return;
    const n = document.createElement('nav'); n.className = 'altmenu'; n.setAttribute('aria-label', T('Ana menü', 'Main menu'));
    n.innerHTML = SEKME.map(([e, i, y, z]) => `<button data-sek="${e}" class="${SEKME_EKRAN[ad] === e ? 'on' : ''}" ${SEKME_EKRAN[ad] === e ? 'aria-current="page"' : ''}>${ik(i)}<span>${T(y, z)}</span></button>`).join('');
    document.body.appendChild(n);
    n.querySelectorAll('[data-sek]').forEach(b => b.onclick = () => sekme(b.dataset.sek));
  }

  // ------------------------------------------------------------ harita (gerçek kıyı çizgisi, şematik yollar)
  const DENIZ = [['Kızıldeniz', 'Red Sea', 20.2, 38.3, -52], ['Basra Körfezi', 'Persian Gulf', 27.3, 51.0, -35], ['Akdeniz', 'Mediterranean', 34.2, 30.5, 0], ['Aden Körfezi', 'Gulf of Aden', 12.2, 47.5, 0]];
  const KITA = [['ARABİSTAN', 'ARABIA', 24.5, 44.8, 0], ['AFRİKA', 'AFRICA', 19.0, 30.0, 0], ['ŞAM', 'SYRIA', 35.2, 37.5, 0]];
  function harita(id) {
    const H = HARITA[id]; if (!H) return '';
    const P = H.yer.map(k => Object.assign({ k }, YER[k]));
    const lons = P.map(p => p.lon), lats = P.map(p => p.lat), mn = a => Math.min(...a), mx = a => Math.max(...a);
    const cLon = (mn(lons) + mx(lons)) / 2, cLat = (mn(lats) + mx(lats)) / 2, kx = Math.cos(cLat * Math.PI / 180);
    const u = Math.max((mx(lons) - mn(lons)) * kx * 1.55 / 4, (mx(lats) - mn(lats)) * 1.55 / 3, 0.9), sc = 320 / (4 * u);
    const X = lo => 160 + (lo - cLon) * kx * sc, Y = la => 120 - (la - cLat) * sc;
    const ic = (x, y, m = 12) => x > m && x < 320 - m && y > m && y < 240 - m;
    const f = n => n.toFixed(1), cocukM = cocuk();
    const lonMin = cLon - 160 / (kx * sc), lonMax = cLon + 160 / (kx * sc), latMin = cLat - 120 / sc, latMax = cLat + 120 / sc;
    let g = '<svg viewBox="0 0 320 240" role="img" aria-label="' + T('Şematik harita', 'Schematic map') + '"><defs><marker id="ok" viewBox="0 0 10 10" refX="12" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>';
    g += '<rect width="320" height="240" fill="var(--deniz)"/>';
    // enlem-boylam ızgarası
    const adim = [0.5, 1, 2, 5, 10].find(s => (lonMax - lonMin) / s <= 7) || 10;
    for (let lo = Math.ceil(lonMin / adim) * adim; lo < lonMax; lo += adim) g += `<line x1="${f(X(lo))}" y1="0" x2="${f(X(lo))}" y2="240" stroke="var(--kiyi)" stroke-opacity=".22" stroke-width=".6"/>`;
    for (let la = Math.ceil(latMin / adim) * adim; la < latMax; la += adim) g += `<line x1="0" y1="${f(Y(la))}" x2="320" y2="${f(Y(la))}" stroke="var(--kiyi)" stroke-opacity=".22" stroke-width=".6"/>`;
    // kara: kıyıda yumuşak halka, sonra dolgu
    const d = KARA.map(r => 'M' + r.map(v => f(X(v[1])) + ' ' + f(Y(v[0]))).join('L') + 'Z').join('');
    g += `<path d="${d}" fill="none" stroke="var(--kiyi)" stroke-opacity=".3" stroke-width="6" stroke-linejoin="round"/>`;
    g += `<path d="${d}" fill="var(--kara)" fill-rule="evenodd" stroke="var(--kiyi)" stroke-width="1" stroke-linejoin="round"/>`;
    // deniz ve kıta adları
    DENIZ.forEach(([ad, ad2, la, lo, r]) => { const x = X(lo), y = Y(la); if (ic(x, y, 30)) g += `<text x="${f(x)}" y="${f(y)}" text-anchor="middle" font-size="${cocukM ? 11 : 9}" font-style="italic" letter-spacing="1" fill="var(--soluk)" fill-opacity=".85" transform="rotate(${r} ${f(x)} ${f(y)})">${T(ad, ad2)}</text>`; });
    if (u > 2.2) KITA.forEach(([ad, ad2, la, lo]) => { const x = X(lo), y = Y(la); if (ic(x, y, 30) && !P.some(q => Math.hypot(X(q.lon) - x, Y(q.lat) - y) < 90)) g += `<text x="${f(x)}" y="${f(y)}" text-anchor="middle" font-size="8" letter-spacing="3" fill="var(--soluk)" fill-opacity=".5">${T(ad, ad2)}</text>`; });
    // yol
    const sinir = [];
    if (H.yol) g += `<polyline points="${H.yol.map(k => f(X(YER[k].lon)) + ',' + f(Y(YER[k].lat))).join(' ')}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-dasharray="6 4" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#ok)"/>`;
    // bağlam şehirleri (soluk)
    BAGLAM.filter(k => !H.yer.includes(k)).forEach(k => {
      const p = YER[k], x = X(p.lon), y = Y(p.lat);
      if (!ic(x, y, 22) || P.some(q => Math.hypot(X(q.lon) - x, Y(q.lat) - y) < 34)) return;
      g += `<circle cx="${f(x)}" cy="${f(y)}" r="2.4" fill="var(--soluk)" fill-opacity=".7"/><text x="${f(x + 5)}" y="${f(y + 3)}" font-size="8" fill="var(--soluk)" stroke="var(--kara)" stroke-width="2.5" paint-order="stroke">${esc(p.ad)}</text>`;
    });
    // vurgulanan yerler
    const yerler = P.map(p => ({ p, x: X(p.lon), y: Y(p.lat) })).sort((a, b) => a.y - b.y);
    yerler.forEach((e, i) => { // etiket, yakın komşunun tersi yöne konur; aynı yöndeki etiketler dikeyde ayrılır
      const yakin = yerler.find(o => o !== e && Math.hypot(o.x - e.x, o.y - e.y) < 48);
      e.sol = yakin ? (Math.abs(yakin.x - e.x) < 6 ? e.x > 215 : yakin.x > e.x) : e.x > 215;
      e.ly = e.y;
      for (let j = 0; j < i; j++) { const o = yerler[j]; if (o.sol === e.sol && Math.abs(o.ly - e.ly) < 13 && Math.abs(o.x - e.x) < 80) e.ly = o.ly + 13; }
    });
    yerler.forEach(({ p, x, y, ly, sol }) => {
      const r = cocukM ? 9 : 5.5;
      if (!cocukM && p.t === 'dag') g += `<path d="M${f(x - 6)} ${f(y + 5)}L${f(x)} ${f(y - 6)}L${f(x + 6)} ${f(y + 5)}Z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>`;
      else if (!cocukM && p.t === 'savas') g += `<path d="M${f(x)} ${f(y - 7)}L${f(x + 7)} ${f(y)}L${f(x)} ${f(y + 7)}L${f(x - 7)} ${f(y)}Z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>`;
      else g += `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor" stroke="#fff" stroke-width="2"/>`;
      if (cocukM) g += `<text x="${f(x)}" y="${f(y + 4.5)}" text-anchor="middle" font-size="11">${p.e}</text>`;
      g += `<text x="${f(x + (sol ? -(r + 6) : r + 6))}" y="${f(ly + 4)}" text-anchor="${sol ? 'end' : 'start'}" font-size="${cocukM ? 14 : 11.5}" font-weight="700" fill="var(--metin)" stroke="var(--kara)" stroke-width="4" paint-order="stroke">${esc(p.ad)}</text>`;
    });
    // ölçek çubuğu ve kuzey oku
    const kmPx = sc / 111.32, km = [10, 20, 50, 100, 200, 500, 1000].find(k => k * kmPx >= 40) || 1000, w = km * kmPx;
    g += `<g transform="translate(12 222)"><rect x="-4" y="-12" width="${f(w + 36)}" height="20" rx="4" fill="var(--kara)" fill-opacity=".85"/><path d="M0 0H${f(w)}M0 -4V4M${f(w)} -4V4" stroke="var(--metin)" stroke-width="1.3" fill="none"/><text x="${f(w + 4)}" y="3.5" font-size="9" fill="var(--metin)">${km} km</text></g>`;
    g += `<g transform="translate(300 24)"><circle r="12" fill="var(--kara)" fill-opacity=".85"/><path d="M0 -8L4 4L0 1.5L-4 4Z" fill="var(--metin)"/><text y="11" text-anchor="middle" font-size="7" font-weight="700" fill="var(--metin)" transform="translate(0 -1)">${T('K', 'N')}</text></g>`;
    return `<figure class="harita" style="margin:14px 0">${g}</svg><figcaption>${T('Şematik harita: kıyı çizgisi gerçek verilere dayanır (Natural Earth); yerler ve yollar yaklaşıktır.', 'Schematic map: the coastline is based on real data (Natural Earth); places and routes are approximate.')}</figcaption></figure>`;
  }

  // Özgür lisanslı görseller (Wikimedia Commons): her görselin altında başlık, yazar, lisans ve kaynak bağlantısı
  function gorsel(id) {
    const G = (typeof GORSEL !== 'undefined' && GORSEL[id]) || []; if (!G.length) return '';
    return `<div class="atlas">${G.map(g => `<figure><img src="${esc(g.dosya)}" alt="${esc(T(g.baslik[0], g.baslik[1]))}" loading="lazy" onerror="this.closest('figure').remove()"><figcaption>${esc(T(g.baslik[0], g.baslik[1]))} · ${esc(g.yazar)}, ${esc(g.lisans)} · <a href="${esc(g.kaynak)}" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption></figure>`).join('')}</div>`;
  }
  // Kitaptaki (Siyer-i Nebî) bölüm adı: dersin başlığının altında küçük satır
  function bolumSatiri(x) {
    if (!x.bolum || typeof BOLUMLER === 'undefined') return '';
    const b = BOLUMLER.find(z => z[0] === x.bolum); if (!b) return '';
    return `<p class="soluk kucukyazi" style="margin:-6px 0 12px">${T('Bölüm ', 'Chapter ')}${b[0]}: ${esc(T(b[1], b[2]))}</p>`;
  }
  // Siyer Atlası görselleri (ATLAS boşsa hiçbir şey çizilmez)
  function atlas(id) {
    const A = (typeof ATLAS !== 'undefined' && ATLAS[id]) || []; if (!A.length) return '';
    return `<div class="atlas">${A.map(g => `<figure><img src="${esc(g.dosya)}" alt="${esc(g.baslik)}" loading="lazy" onerror="this.closest('figure').remove()"><figcaption>${esc(g.baslik)} · Siyer Atlası, Siyer Vakfı</figcaption></figure>`).join('')}</div>`;
  }

  // ------------------------------------------------------------ ekranlar
  EKRAN.ana = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length, sira = siradaki();
    const gun = TUM[Math.floor(Date.now() / 864e5) % TUM.length], v = gun.x[S.mod] || gun.x.buyuk, o = v && v.olaylar[0];
    app.innerHTML = `${ust(T('Siyer Yolum', 'Seerah Path'), false, modDugme())}<main>
      <p class="selam"><b>${T('Selâmün aleyküm', 'As-salāmu ‘alaykum')}</b><small>${new Date().toLocaleDateString(T('tr-TR', 'en-GB'), { weekday: 'long', day: 'numeric', month: 'long' })}</small></p>
      ${o ? `<section class="bilgi-kart"><small>${T(cocuk() ? 'Günün bilgisi' : 'Günün siyer bilgisi', cocuk() ? 'Fact of the day' : 'Seerah fact of the day')} · ${esc(gun.x.yil)}</small><h2>${esc(o.b)}</h2><p>${esc(o.m)}</p><button class="btn acik dar" data-ders="${gun.x.id}">${T('Dersi aç', 'Open the lesson')} ${ik('ileri')}</button></section>` : ''}
      ${sira ? `<section class="kart"><h2>${T(cocuk() ? 'Kaldığımız yer' : 'Devam et', cocuk() ? 'Where we left off' : 'Continue')}</h2><p class="soluk" style="margin:0 0 12px">${T(bitti ? 'Sıradaki ders' : 'İlk ders', bitti ? 'Next lesson' : 'First lesson')}: <b>${esc(sira.x.baslik)}</b></p><button class="btn" data-ders="${sira.x.id}">${T(bitti ? 'Devam et' : 'Başla', bitti ? 'Continue' : 'Start')} ${ik('ileri')}</button></section>` : `<section class="kart"><h2>${T('Maşallah!', 'Well done!')}</h2><p class="soluk" style="margin:0">${T('Bütün dersleri bitirdin. Bölüm sınavlarıyla tekrar yapabilirsin.', 'You finished all the lessons. You can review with the section quizzes.')}</p></section>`}
      <div class="bolumler">
        <button class="bolum" data-git="yol"><span class="halka" style="--p:${Math.round(bitti / tum * 100)}"><b>${bitti}/${tum}</b></span><span class="bad"><small>${sira ? T('Sıradaki: ', 'Next: ') + esc(sira.x.baslik) : T('Hepsi tamam', 'All done')}</small>${T('Siyer yolu', 'Seerah path')}</span><span class="ok">›</span></button>
        <button class="bolum" data-git="sinavlar"><span class="ikon">${ik('sinav')}</span><span class="bad"><small>${T(SIN.length + ' bölüm sınavı', SIN.length + ' section quizzes')}</small>${T('Sınavlar', 'Quizzes')}</span><span class="ok">›</span></button>
        <button class="bolum" data-git="ilerleme"><span class="ikon">${ik('ilerleme')}</span><span class="bad"><small>${S.seri.gun ? T(S.seri.gun + ' günlük seri', S.seri.gun + '-day streak') : T('Gelişimin', 'Your growth')}</small>${T('İlerleme', 'Progress')}</span><span class="ok">›</span></button>
      </div>
      <p class="soluk kucukyazi" style="text-align:center;margin-top:18px">${T(esc(SURUM_BILGI.SURUM) + ' sürümü', 'Version ' + esc(SURUM_BILGI.SURUM))}</p></main>`;
    modBagla(); app.querySelectorAll('[data-ders]').forEach(b => b.onclick = () => git('ders', b.dataset.ders));
    // sekme düğmeleri (data-git) ciz() içinde bağlanır; alt menü dışındaki "yol/sinavlar/ilerleme" üst düzeye gider
    app.querySelectorAll('.bolum[data-git]').forEach(b => b.onclick = () => (b.dataset.git === 'ilerleme' ? git('ilerleme') : sekme(b.dataset.git)));
  };

  EKRAN.yol = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length, sira = siradaki();
    let no = 0;
    app.innerHTML = `${ust(T('Siyer yolu', 'Seerah path'), false, modDugme())}<main>
      <section class="kart" style="margin-bottom:0"><b>${bitti} / ${tum}</b> ${T('ders tamamlandı', 'lessons completed')}<div class="ilerle" role="progressbar" aria-valuenow="${bitti}" aria-valuemax="${tum}"><i style="width:${bitti / tum * 100}%"></i></div></section>
      ${DON.map(d => { const [b, t] = donemOran(d);
        return `<section class="donem" style="--renk:${d.renk}"><h2>${esc(d.ad)}<small>${esc(d.alt)} · ${T(b + '/' + t + ' ders', b + '/' + t + ' lessons')}</small></h2><div class="yol">${d.dersler.map(x => { no++;
          return `<div class="dugum ${gecti(x.id) ? 'bitti' : ''} ${sira && sira.x.id === x.id ? 'sirada' : ''}"><button data-ders="${x.id}" ${sira && sira.x.id === x.id ? 'aria-label="' + esc(x.baslik) + T(', sıradaki ders', ', next lesson') + '"' : ''}><span class="no">${gecti(x.id) ? IKON.tik.replace('width="24" height="24"', 'width="18" height="18"') : no}</span><span class="t">${esc(x.baslik)}<em>${esc(x.yil)}${x.bolum ? ' · ' + T('Bölüm ', 'Ch. ') + x.bolum : ''}</em></span></button></div>`; }).join('')}</div></section>`; }).join('')}
    </main>`;
    modBagla(); app.querySelectorAll('[data-ders]').forEach(b => b.onclick = () => git('ders', b.dataset.ders));
    const s = $('.dugum.sirada'); if (s && !EKRAN.yol._kaydirildi) { EKRAN.yol._kaydirildi = 1; setTimeout(() => s.scrollIntoView({ block: 'center' }), 0); }
  };

  EKRAN.ders = function (id) {
    const e = ders(id); if (!e) return geri();
    const { d, x } = e, v = x[S.mod] || x.buyuk, dt = (typeof DET !== 'undefined' && DET[id]) || {}, sn = sonraki(id);
    app.innerHTML = `${ust(d.ad, true)}<main style="--renk:${d.renk}">
      <span class="chip">${esc(x.yil)}</span><h2 class="ders-baslik">${esc(x.baslik)}</h2>${bolumSatiri(x)}
      <div class="ozet">${esc(v.ozet)}</div>${harita(id)}${gorsel(id)}${atlas(id)}
      <div class="zaman">${v.olaylar.map(o => `<div class="olay"><b>${o.e ? `<span aria-hidden="true">${o.e}</span>` : ''}${esc(o.b)}</b>${esc(o.m)}${o.k ? `<div class="kaynak">${T('Kaynak', 'Source')}: ${esc(o.k)}</div>` : ''}</div>`).join('')}</div>
      <details class="detay" ${cocuk() ? '' : 'open'}><summary>${ik('kitap')} ${T(cocuk() ? 'Daha çok öğren' : 'Daha fazla bilgi', cocuk() ? 'Learn more' : 'More information')}</summary>
        ${(dt.metin || []).map(m => `<p>${esc(m)}</p>`).join('') || '<p class="soluk">' + T('Bu ders için ayrıntılı anlatım daha sonra eklenecek.', 'A detailed account for this lesson will be added later.') + '</p>'}
        ${(dt.sv || []).length ? `<p class="baslik" style="margin:16px 0 8px">${T('Siyer Vakfı dersleri', 'Siyer Foundation lectures (in Turkish)')}</p>${dt.sv.map(v => `<div class="kaynak-kart"><b>${esc(v.baslik)}</b><small>${esc(v.kisi)}</small><div class="kaynak-btn">${v.video ? `<a class="video" href="${esc(v.video)}" target="_blank" rel="noopener">${ik('video')} ${T('Videoyu izle', 'Watch the video')}</a>` : ''}<a class="lnk" href="${esc(v.sayfa)}" target="_blank" rel="noopener">${T('Ders sayfası', 'Lecture page')}</a>${v.pdf ? `<a class="lnk" href="${esc(v.pdf)}" target="_blank" rel="noopener">${T('Ders notu (PDF)', 'Lecture notes (PDF)')}</a>` : ''}</div></div>`).join('')}` : ''}
        ${(dt.dia || []).length ? `<p class="baslik" style="margin:16px 0 8px">${T('TDV İslâm Ansiklopedisi maddeleri', 'TDV Encyclopedia of Islam entries (in Turkish)')}</p><div class="kaynak-btn">${dt.dia.map(d => `<a class="lnk" href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.ad)}</a>`).join('')}</div>` : ''}
      </details>
      <button class="btn" id="ileri">${T(sn ? 'İleri' : 'Bitir', sn ? 'Next' : 'Finish')} ${ik('ileri')}</button>
      <button class="btn ikincil" id="soru">${T(cocuk() ? 'Soruları çözelim' : 'Kısa soruları çöz', cocuk() ? 'Let’s solve the questions' : 'Take the short quiz')}</button></main>`;
    // İleri: soruları beklemeden bir sonraki derse geçer (ders okunmuş sayılır); sorular isteğe bağlı
    $('#ileri').onclick = () => { S.biten[id] = 1; serisiYaz(); kaydet(); if (sn) { yigin.pop(); git('ders', sn.x.id); } else { toast(T('Bütün dersleri bitirdin', 'You finished all the lessons')); sekme('yol'); } };
    $('#soru').onclick = () => { Q = { S: karistir(x.sorular), anahtar: id, ileri: sn, baslik: '', renk: d.renk, k: 0, puan: 0 }; git('soru'); };
  };

  // ------------------------------------------------------------ sorular (ders sonu ve bölüm sınavı)
  let Q = null;
  const karistir = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const havuz = z => DON.filter(d => z.donemler.includes(d.id)).flatMap(d => d.dersler).flatMap(x => x.sorular || []);
  function serisiYaz() {
    const b = gunBugun(); if (S.seri.son === b) return;
    const dun = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.seri = { gun: S.seri.son === dun ? S.seri.gun + 1 : 1, son: b };
  }
  EKRAN.soru = function () {
    if (!Q) return sekme('ana');
    const ders_ = ders(Q.anahtar), sinavMi = Q.anahtar.startsWith('s-');
    const renk = Q.renk || '#0f5a47';
    if (Q.k >= Q.S.length) {
      if (sinavMi) S.sinav[Q.anahtar] = Math.max(S.sinav[Q.anahtar] || 0, Q.puan); else { S.biten[Q.anahtar] = 1; serisiYaz(); }
      kaydet();
      const iyi = Q.puan >= Q.S.length * 0.7;
      app.innerHTML = `${ust(Q.baslik || (ders_ && ders_.x.baslik) || T('Sınav', 'Quiz'), true)}<main style="--renk:${renk}"><div class="sonuc"><div class="buyuk" aria-hidden="true">${cocuk() ? (iyi ? '🏆' : '💪') : ''}</div><h2>${Q.puan} / ${Q.S.length} ${T('doğru', 'correct')}</h2>
        <p class="soluk">${iyi ? T(cocuk() ? 'Aferin!' : 'Ders tamamlandı.', cocuk() ? 'Well done!' : 'Lesson completed.') : T('Konuyu bir daha okuyup tekrar deneyebilirsin.', 'You can read the topic again and retry.')}</p></div>
        ${Q.ileri ? `<button class="btn" id="sonraki">${T('Sonraki ders', 'Next lesson')}: ${esc(Q.ileri.x.baslik)} ${ik('ileri')}</button>` : ''}
        ${sinavMi ? `<button class="btn" id="tekrar">${T('Yeniden dene', 'Try again')}</button>` : ''}
        <button class="btn ikincil" id="yola">${T(sinavMi ? 'Sınavlara dön' : 'Yola dön', sinavMi ? 'Back to quizzes' : 'Back to the path')}</button></main>`;
      const sn = $('#sonraki'); if (sn) sn.onclick = () => { yigin.pop(); yigin.pop(); git('ders', Q.ileri.x.id); };
      const tk = $('#tekrar'); if (tk) tk.onclick = () => { Q = Object.assign({}, Q, { S: karistir(Q.S), k: 0, puan: 0 }); ciz(); window.scrollTo(0, 0); };
      $('#yola').onclick = () => sekme(sinavMi ? 'sinavlar' : 'yol');
      return;
    }
    const q = Q.S[Q.k];
    app.innerHTML = `${ust(Q.baslik || (ders_ && ders_.x.baslik) || T('Sınav', 'Quiz'), true)}<main style="--renk:${renk}">
      <p class="sorusay">${T('Soru', 'Question')} ${Q.k + 1} / ${Q.S.length}</p><div class="ilerle"><i style="width:${Q.k / Q.S.length * 100}%"></i></div>
      <h2 class="ders-baslik" style="font-size:1.25rem">${esc(q.s)}</h2><div id="sec"></div><p class="soluk" id="ac" role="status" aria-live="polite"></p><div id="dev"></div></main>`;
    // seçenek sırası her seferinde karışır; doğru cevap sırası ezberlenmesin
    const sira = karistir(q.sec.map((s, i) => i));
    sira.forEach(i => { const b = document.createElement('button'); b.className = 'sik'; b.textContent = q.sec[i];
      b.onclick = () => {
        app.querySelectorAll('.sik').forEach(e => { e.disabled = true; if (e.dataset.i == q.d) { e.classList.add('dogru'); e.dataset.ek = '✓ ' + T('Doğru', 'Correct'); } });
        if (i !== q.d) { b.classList.add('yanlis'); b.dataset.ek = '✕ ' + T('Yanlış', 'Wrong'); } else Q.puan++;
        $('#ac').textContent = (i === q.d ? T('Doğru. ', 'Correct. ') : T('Yanlış. ', 'Wrong. ')) + q.a;
        const n = document.createElement('button'); n.className = 'btn'; n.innerHTML = `${T(Q.k + 1 >= Q.S.length ? 'Bitir' : 'Devam', Q.k + 1 >= Q.S.length ? 'Finish' : 'Continue')} ${ik('ileri')}`;
        n.onclick = () => { Q.k++; ciz(); window.scrollTo(0, 0); }; $('#dev').append(n); n.focus();
      };
      b.dataset.i = i; $('#sec').append(b); });
  };

  EKRAN.sinavlar = function () {
    app.innerHTML = `${ust(T('Sınavlar', 'Quizzes'), false, modDugme())}<main><p class="soluk" style="margin-top:0">${T('Soruları ilgili derslerden gelir. Her seferinde karışık.', 'Questions come from the related lessons, shuffled every time.')}</p>
      ${SIN.map(z => { const n = havuz(z).length, en = S.sinav[z.id], say = Math.min(10, n);
        return `<button class="sinav-satir" data-z="${z.id}"><span><b>${esc(z.ad)}</b><small>${T(n + ' soruluk havuz', n + ' questions in the pool')}${en != null ? T(' · en iyi ', ' · best ') + en + '/' + say : ''}</small></span><span class="ok" aria-hidden="true">›</span></button>`; }).join('')}</main>`;
    modBagla(); app.querySelectorAll('[data-z]').forEach(b => b.onclick = () => git('sinav', b.dataset.z));
  };
  EKRAN.sinav = function (id) {
    const z = SIN.find(x => x.id === id); if (!z) return geri();
    Q = { S: karistir(havuz(z)).slice(0, 10), anahtar: id, ileri: null, baslik: z.ad, renk: '#0f5a47', k: 0, puan: 0 };
    yigin[yigin.length - 1] = ['soru', []]; ciz(); window.scrollTo(0, 0);
  };

  EKRAN.ilerleme = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length;
    app.innerHTML = `${ust(T('İlerleme', 'Progress'), true)}<main>
      <section class="kart"><h2>${S.seri.gun ? T(S.seri.gun + ' günlük seri', S.seri.gun + '-day streak') : T('Seri', 'Streak')}</h2><p class="soluk" style="margin:0">${S.seri.gun ? T('Her gün bir ders bitirince seri uzar.', 'Finish a lesson every day to extend the streak.') : T('Bir ders bitirince seri başlar.', 'Finish a lesson to start a streak.')}</p></section>
      <p class="baslik">${T('Dönemler', 'Periods')}</p>
      ${DON.map(d => { const [b, t] = donemOran(d); return `<section class="kart" style="--renk:${d.renk}"><b>${esc(d.ad)}</b> <span class="soluk">${b}/${t}</span><div class="ilerle"><i style="width:${b / t * 100}%;background:${d.renk}"></i></div></section>`; }).join('')}
      <p class="baslik">${T('Sınav sonuçları', 'Quiz results')}</p>
      ${SIN.map(z => `<div class="sinav-satir" style="cursor:default"><span><b>${esc(z.ad)}</b></span><span class="soluk">${S.sinav[z.id] != null ? T('en iyi ', 'best ') + S.sinav[z.id] + '/' + Math.min(10, havuz(z).length) : '—'}</span></div>`).join('')}
      <p class="soluk kucukyazi" style="text-align:center">${T('Toplam', 'Total')}: ${bitti}/${tum} ${T('ders', 'lessons')}</p></main>`;
  };

  EKRAN.ben = function () {
    const sifirlaOnay = EKRAN.ben._onay;
    app.innerHTML = `${ust(T('Ben', 'Me'), false)}<main>
      <p class="baslik" style="margin-top:4px">${T('Dil', 'Language')}</p>
      <div class="secim" style="grid-template-columns:repeat(2,1fr)" role="group" aria-label="${T('Dil', 'Language')}"><button data-dil="tr" class="${S.dil === 'tr' ? 'on' : ''}" lang="tr">Türkçe</button><button data-dil="en" class="${S.dil === 'en' ? 'on' : ''}" lang="en">English</button></div>
      <p class="baslik">${T('Görünüm modu', 'Display mode')}</p>
      <div class="secim" style="grid-template-columns:repeat(2,1fr)" role="group" aria-label="${T('Mod', 'Mode')}"><button data-m="buyuk" class="${cocuk() ? '' : 'on'}">${T('Büyük', 'Adult')}</button><button data-m="cocuk" class="${cocuk() ? 'on' : ''}">${T('Çocuk', 'Kids')}</button></div>
      <p class="soluk kucukyazi">${T('Çocuk modunda anlatım kısa ve emojili, büyük modunda ayrıntılı ve kaynaklıdır.', 'In kids mode the account is short and with emoji; in adult mode it is detailed and sourced.')}</p>
      <p class="baslik">${T('Tema', 'Theme')}</p>
      <div class="secim" role="group" aria-label="${T('Tema', 'Theme')}"><button data-t="oto" class="${S.tema === 'oto' ? 'on' : ''}">${T('Otomatik', 'Auto')}</button><button data-t="acik" class="${S.tema === 'acik' ? 'on' : ''}">${T('Açık', 'Light')}</button><button data-t="koyu" class="${S.tema === 'koyu' ? 'on' : ''}">${T('Koyu', 'Dark')}</button></div>
      <p class="baslik">${T('Uygulama', 'App')}</p>
      <div class="bolumler"><button class="bolum" data-git="ilerleme"><span class="ikon">${ik('ilerleme')}</span><span class="bad">${T('İlerleme', 'Progress')}<small>${T('Dönemler ve sınav sonuçları', 'Periods and quiz results')}</small></span><span class="ok">›</span></button>
      <button class="bolum tehlike" id="sifirla"><span class="ikon" style="color:var(--kotu)">${IKON.sil}</span><span class="bad">${T(sifirlaOnay ? 'Emin misin? Tekrar dokun' : 'İlerlemeyi sıfırla', sifirlaOnay ? 'Are you sure? Tap again' : 'Reset progress')}<small>${T(sifirlaOnay ? 'Tüm dersler ve sınav sonuçları silinir' : 'Dersler ve sınav sonuçları silinir', sifirlaOnay ? 'All lessons and quiz results will be deleted' : 'Lessons and quiz results are deleted')}</small></span></button></div>
      <p class="soluk kucukyazi" style="margin-top:18px">${T('İçerik taslaktır: tarihler TDV İslâm Ansiklopedisi «Muhammed» maddesi ve kronolojisiyle karşılaştırılmıştır; yayın öncesi Diyanet yayınlarıyla da doğrulanmalıdır.', 'The content is a draft: dates were compared with the TDV Encyclopedia of Islam “Muhammed” article and its chronology, and should also be verified against Diyanet publications before release. The English text is a translation of the Turkish content.')}</p>
      <p class="soluk kucukyazi">${T('Siyer Yolum', 'Seerah Path')} ${esc(SURUM_BILGI.SURUM)}</p></main>`;
    app.querySelectorAll('[data-dil]').forEach(b => b.onclick = () => dilAyarla(b.dataset.dil));
    app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { S.mod = b.dataset.m; kaydet(); ciz(); });
    app.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { S.tema = b.dataset.t; kaydet(); ciz(); });
    $('#sifirla').onclick = () => { if (!EKRAN.ben._onay) { EKRAN.ben._onay = 1; ciz(); return; } EKRAN.ben._onay = 0; S.biten = {}; S.sinav = {}; S.seri = { gun: 0, son: '' }; kaydet(); ciz(); toast(T('İlerleme sıfırlandı', 'Progress was reset')); };
  };

  window.SY = { EKRAN, git, sekme, geri, S, get TUM() { return TUM; }, ciz, dilAyarla, durum: () => yigin.slice() };
  temaUygula(); ciz();
})();
