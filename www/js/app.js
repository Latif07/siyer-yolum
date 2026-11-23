/* Siyer Yolum — uygulama motoru. Kur'an Yolum ile aynı mantık: ekran tablosu (EKRAN), ekran yığını (git/geri),
   alt sekme çubuğu, çevrimdışı çalışma, ilerleme telefonda saklanır. */
(function () {
  'use strict';
  const app = document.getElementById('app');
  const $ = s => app.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const DIA_URL = 'https://islamansiklopedisi.org.tr/muhammed#19-hz-peygamber-devri-kronolojisi';

  // ------------------------------------------------------------ durum (telefonda saklanır)
  const ANAHTAR = 'siyer-yolum.v1';
  const S = { mod: 'buyuk', tema: 'oto', biten: {}, sinav: {}, seri: { gun: 0, son: '' } };
  try { Object.assign(S, JSON.parse(localStorage.getItem(ANAHTAR) || '{}')); } catch (e) { }
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(S)); } catch (e) { } };
  const gecti = id => !!S.biten[id];
  const cocuk = () => S.mod === 'cocuk';
  function temaUygula() {
    const k = document.documentElement; if (S.tema === 'oto') k.removeAttribute('data-tema'); else k.dataset.tema = S.tema;
    document.body.dataset.mod = S.mod;
  }

  // ------------------------------------------------------------ veri yardımcıları
  const TUM = DONEMLER.flatMap(d => d.dersler.map(x => ({ d, x })));
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

  const ust = (baslik, geriVar, sag) => `<header class="ust">${geriVar ? `<button class="geri" data-geri aria-label="Geri">${IKON.geri}</button>` : `<span class="logo">${IKON.ay}</span>`}<h1>${esc(baslik)}</h1>${sag || ''}</header>`;
  const modDugme = () => `<button class="sag" data-mod aria-label="Mod: şu an ${cocuk() ? 'çocuk' : 'büyük'}. Değiştirmek için dokun">${IKON.degis}<span>${cocuk() ? 'Çocuk' : 'Büyük'}</span></button>`;
  function modBagla() { const b = $('[data-mod]'); if (b) b.onclick = () => { S.mod = cocuk() ? 'buyuk' : 'cocuk'; kaydet(); ciz(); toast(cocuk() ? 'Çocuk modu' : 'Büyük modu'); }; }

  // ------------------------------------------------------------ alt sekme çubuğu
  const SEKME = [['ana', 'bugun', 'Bugün'], ['yol', 'yol', 'Yol'], ['sinavlar', 'sinav', 'Sınav'], ['ben', 'ben', 'Ben']];
  const SEKME_EKRAN = { ana: 'ana', yol: 'yol', ders: 'yol', sinavlar: 'sinavlar', sinav: 'sinavlar', ben: 'ben', ilerleme: 'ben' };
  const TAM_EKRAN = ['ders', 'soru'];
  function altMenu(ad) {
    document.querySelectorAll('.altmenu').forEach(x => x.remove());
    document.body.classList.toggle('tam', TAM_EKRAN.includes(ad));
    if (TAM_EKRAN.includes(ad)) return;
    const n = document.createElement('nav'); n.className = 'altmenu'; n.setAttribute('aria-label', 'Ana menü');
    n.innerHTML = SEKME.map(([e, i, y]) => `<button data-sek="${e}" class="${SEKME_EKRAN[ad] === e ? 'on' : ''}" ${SEKME_EKRAN[ad] === e ? 'aria-current="page"' : ''}>${ik(i)}<span>${y}</span></button>`).join('');
    document.body.appendChild(n);
    n.querySelectorAll('[data-sek]').forEach(b => b.onclick = () => sekme(b.dataset.sek));
  }

  // ------------------------------------------------------------ harita (şematik; ölçekli değil)
  function harita(id) {
    const H = HARITA[id]; if (!H) return '';
    const P = H.yer.map(k => Object.assign({ k }, YERLER[k]));
    const lons = P.map(p => p.lon), lats = P.map(p => p.lat), mn = a => Math.min(...a), mx = a => Math.max(...a);
    const cLon = (mn(lons) + mx(lons)) / 2, cLat = (mn(lats) + mx(lats)) / 2;
    const u = Math.max((mx(lons) - mn(lons)) * 0.9 * 1.5 / 4, (mx(lats) - mn(lats)) * 1.5 / 3, 0.9), sc = 320 / (4 * u);
    const X = lo => 160 + (lo - cLon) * 0.9 * sc, Y = la => 120 - (la - cLat) * sc, pt = (la, lo) => X(lo).toFixed(1) + ',' + Y(la).toFixed(1);
    const fs = cocuk() ? 14 : 11;
    let g = '<svg viewBox="0 0 320 240" role="img" aria-label="Şematik harita"><defs><marker id="ok" viewBox="0 0 10 10" refX="14" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs><rect width="320" height="240" fill="var(--deniz)"/>';
    KARA.forEach(a => g += `<polygon points="${a.map(v => pt(v[0], v[1])).join(' ')}" fill="var(--kara)" stroke="var(--kiyi)" stroke-width="1.2"/>`);
    const sx = X(38.6), sy = Y(20.2);
    if (sx > 30 && sx < 290 && sy > 20 && sy < 220) g += `<text x="${sx}" y="${sy}" text-anchor="middle" font-size="10" font-style="italic" fill="var(--soluk)" transform="rotate(-35 ${sx} ${sy})">Kızıldeniz</text>`;
    if (H.yol) g += `<polyline points="${H.yol.map(k => pt(YERLER[k].lat, YERLER[k].lon)).join(' ')}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4" stroke-linecap="round" marker-end="url(#ok)"/>`;
    P.forEach(p => {
      const x = X(p.lon), y = Y(p.lat), sol = x > 220;
      g += `<circle cx="${x}" cy="${y}"  r="${cocuk() ? 9 : 5}" fill="currentColor" stroke="#fff" stroke-width="2"/>`;
      if (cocuk()) g += `<text x="${x}" y="${y + 4.5}" text-anchor="middle" font-size="11">${p.e}</text>`;
      g += `<text x="${x + (sol ? -13 : 13)}" y="${y + 4}" text-anchor="${sol ? 'end' : 'start'}" font-size="${fs}" font-weight="bold" fill="var(--metin)" stroke="var(--kara)" stroke-width="4" paint-order="stroke">${esc(p.ad)}</text>`;
    });
    return `<figure class="harita" style="margin:14px 0">${g}</svg><figcaption>Şematik harita, ölçekli değildir.</figcaption></figure>`;
  }

  // ------------------------------------------------------------ ekranlar
  EKRAN.ana = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length, sira = siradaki();
    const gun = TUM[Math.floor(Date.now() / 864e5) % TUM.length], v = gun.x[S.mod] || gun.x.buyuk, o = v && v.olaylar[0];
    app.innerHTML = `${ust('Siyer Yolum', false, modDugme())}<main>
      <p class="selam"><b>Selâmün aleyküm</b><small>${new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' })}</small></p>
      ${o ? `<section class="bilgi-kart"><small>${cocuk() ? 'Günün bilgisi' : 'Günün siyer bilgisi'} · ${esc(gun.x.yil)}</small><h2>${esc(o.b)}</h2><p>${esc(o.m)}</p><button class="btn acik dar" data-ders="${gun.x.id}">Dersi aç ${ik('ileri')}</button></section>` : ''}
      ${sira ? `<section class="kart"><h2>${cocuk() ? 'Kaldığımız yer' : 'Devam et'}</h2><p class="soluk" style="margin:0 0 12px">${bitti ? 'Sıradaki ders' : 'İlk ders'}: <b>${esc(sira.x.baslik)}</b></p><button class="btn" data-ders="${sira.x.id}">${bitti ? 'Devam et' : 'Başla'} ${ik('ileri')}</button></section>` : `<section class="kart"><h2>Maşallah!</h2><p class="soluk" style="margin:0">Bütün dersleri bitirdin. Bölüm sınavlarıyla tekrar yapabilirsin.</p></section>`}
      <div class="bolumler">
        <button class="bolum" data-git="yol"><span class="halka" style="--p:${Math.round(bitti / tum * 100)}"><b>${bitti}/${tum}</b></span><span class="bad"><small>${sira ? 'Sıradaki: ' + esc(sira.x.baslik) : 'Hepsi tamam'}</small>Siyer yolu</span><span class="ok">›</span></button>
        <button class="bolum" data-git="sinavlar"><span class="ikon">${ik('sinav')}</span><span class="bad"><small>${SINAVLAR.length} bölüm sınavı</small>Sınavlar</span><span class="ok">›</span></button>
        <button class="bolum" data-git="ilerleme"><span class="ikon">${ik('ilerleme')}</span><span class="bad"><small>${S.seri.gun ? S.seri.gun + ' günlük seri' : 'Gelişimin'}</small>İlerleme</span><span class="ok">›</span></button>
      </div>
      <p class="soluk kucukyazi" style="text-align:center;margin-top:18px">${esc(SURUM_BILGI.SURUM)} sürümü</p></main>`;
    modBagla(); app.querySelectorAll('[data-ders]').forEach(b => b.onclick = () => git('ders', b.dataset.ders));
    // sekme düğmeleri (data-git) ciz() içinde bağlanır; alt menü dışındaki "yol/sinavlar/ilerleme" üst düzeye gider
    app.querySelectorAll('.bolum[data-git]').forEach(b => b.onclick = () => (b.dataset.git === 'ilerleme' ? git('ilerleme') : sekme(b.dataset.git)));
  };

  EKRAN.yol = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length, sira = siradaki();
    let no = 0;
    app.innerHTML = `${ust('Siyer yolu', false, modDugme())}<main>
      <section class="kart" style="margin-bottom:0"><b>${bitti} / ${tum}</b> ders tamamlandı<div class="ilerle" role="progressbar" aria-valuenow="${bitti}" aria-valuemax="${tum}"><i style="width:${bitti / tum * 100}%"></i></div></section>
      ${DONEMLER.map(d => { const [b, t] = donemOran(d);
        return `<section class="donem" style="--renk:${d.renk}"><h2>${esc(d.ad)}<small>${esc(d.alt)} · ${b}/${t} ders</small></h2><div class="yol">${d.dersler.map(x => { no++;
          return `<div class="dugum ${gecti(x.id) ? 'bitti' : ''} ${sira && sira.x.id === x.id ? 'sirada' : ''}"><button data-ders="${x.id}" ${sira && sira.x.id === x.id ? 'aria-label="' + esc(x.baslik) + ', sıradaki ders"' : ''}><span class="no">${gecti(x.id) ? IKON.tik.replace('width="24" height="24"', 'width="18" height="18"') : no}</span><span class="t">${esc(x.baslik)}<em>${esc(x.yil)}</em></span></button></div>`; }).join('')}</div></section>`; }).join('')}
    </main>`;
    modBagla(); app.querySelectorAll('[data-ders]').forEach(b => b.onclick = () => git('ders', b.dataset.ders));
    const s = $('.dugum.sirada'); if (s && !EKRAN.yol._kaydirildi) { EKRAN.yol._kaydirildi = 1; setTimeout(() => s.scrollIntoView({ block: 'center' }), 0); }
  };

  EKRAN.ders = function (id) {
    const e = ders(id); if (!e) return geri();
    const { d, x } = e, v = x[S.mod] || x.buyuk, dt = (typeof DETAY !== 'undefined' && DETAY[id]) || {}, sn = sonraki(id);
    app.innerHTML = `${ust(d.ad, true)}<main style="--renk:${d.renk}">
      <span class="chip">${esc(x.yil)}</span><h2 class="ders-baslik">${esc(x.baslik)}</h2>
      <div class="ozet">${esc(v.ozet)}</div>${harita(id)}
      <div class="zaman">${v.olaylar.map(o => `<div class="olay"><b>${o.e ? `<span aria-hidden="true">${o.e}</span>` : ''}${esc(o.b)}</b>${esc(o.m)}${o.k ? `<div class="kaynak">Kaynak: ${esc(o.k)}</div>` : ''}</div>`).join('')}</div>
      <details class="detay"><summary>${ik('kitap')} ${cocuk() ? 'Daha çok öğren' : 'Daha fazla bilgi'}</summary>
        ${(dt.metin || []).map(m => `<p>${esc(m)}</p>`).join('') || '<p class="soluk">Bu ders için geniş anlatım ve video daha sonra eklenecek.</p>'}
        ${dt.video ? `<a class="video" href="${esc(dt.video.url)}" target="_blank" rel="noopener">${ik('video')} ${esc(dt.video.baslik)}</a>` : ''}
        <p class="soluk kucukyazi">Kaynak: <a href="${DIA_URL}" target="_blank" rel="noopener">DİA, Muhammed maddesi</a> · <a href="https://siyervakfi.org/siyer/" target="_blank" rel="noopener">Siyer Vakfı</a></p></details>
      <button class="btn" id="ileri">${sn ? 'İleri' : 'Bitir'} ${ik('ileri')}</button>
      <button class="btn ikincil" id="soru">${cocuk() ? 'Soruları çözelim' : 'Kısa soruları çöz'}</button></main>`;
    // İleri: soruları beklemeden bir sonraki derse geçer (ders okunmuş sayılır); sorular isteğe bağlı
    $('#ileri').onclick = () => { S.biten[id] = 1; serisiYaz(); kaydet(); if (sn) { yigin.pop(); git('ders', sn.x.id); } else { toast('Bütün dersleri bitirdin'); sekme('yol'); } };
    $('#soru').onclick = () => { Q = { S: karistir(x.sorular), anahtar: id, ileri: sn, baslik: '', renk: d.renk, k: 0, puan: 0 }; git('soru'); };
  };

  // ------------------------------------------------------------ sorular (ders sonu ve bölüm sınavı)
  let Q = null;
  const karistir = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const havuz = z => DONEMLER.filter(d => z.donemler.includes(d.id)).flatMap(d => d.dersler).flatMap(x => x.sorular || []);
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
      app.innerHTML = `${ust(Q.baslik || (ders_ && ders_.x.baslik) || 'Sınav', true)}<main style="--renk:${renk}"><div class="sonuc"><div class="buyuk" aria-hidden="true">${cocuk() ? (iyi ? '🏆' : '💪') : ''}</div><h2>${Q.puan} / ${Q.S.length} doğru</h2>
        <p class="soluk">${iyi ? (cocuk() ? 'Aferin!' : 'Ders tamamlandı.') : 'Konuyu bir daha okuyup tekrar deneyebilirsin.'}</p></div>
        ${Q.ileri ? `<button class="btn" id="sonraki">Sonraki ders: ${esc(Q.ileri.x.baslik)} ${ik('ileri')}</button>` : ''}
        ${sinavMi ? `<button class="btn" id="tekrar">Yeniden dene</button>` : ''}
        <button class="btn ikincil" id="yola">${sinavMi ? 'Sınavlara dön' : 'Yola dön'}</button></main>`;
      const sn = $('#sonraki'); if (sn) sn.onclick = () => { yigin.pop(); yigin.pop(); git('ders', Q.ileri.x.id); };
      const tk = $('#tekrar'); if (tk) tk.onclick = () => { Q = Object.assign({}, Q, { S: karistir(Q.S), k: 0, puan: 0 }); ciz(); window.scrollTo(0, 0); };
      $('#yola').onclick = () => sekme(sinavMi ? 'sinavlar' : 'yol');
      return;
    }
    const q = Q.S[Q.k];
    app.innerHTML = `${ust(Q.baslik || (ders_ && ders_.x.baslik) || 'Sınav', true)}<main style="--renk:${renk}">
      <p class="sorusay">Soru ${Q.k + 1} / ${Q.S.length}</p><div class="ilerle"><i style="width:${Q.k / Q.S.length * 100}%"></i></div>
      <h2 class="ders-baslik" style="font-size:1.25rem">${esc(q.s)}</h2><div id="sec"></div><p class="soluk" id="ac" role="status" aria-live="polite"></p><div id="dev"></div></main>`;
    // seçenek sırası her seferinde karışır; doğru cevap sırası ezberlenmesin
    const sira = karistir(q.sec.map((s, i) => i));
    sira.forEach(i => { const b = document.createElement('button'); b.className = 'sik'; b.textContent = q.sec[i];
      b.onclick = () => {
        app.querySelectorAll('.sik').forEach(e => { e.disabled = true; if (e.dataset.i == q.d) e.classList.add('dogru'); });
        if (i !== q.d) b.classList.add('yanlis'); else Q.puan++;
        $('#ac').textContent = (i === q.d ? 'Doğru. ' : 'Yanlış. ') + q.a;
        const n = document.createElement('button'); n.className = 'btn'; n.innerHTML = `${Q.k + 1 >= Q.S.length ? 'Bitir' : 'Devam'} ${ik('ileri')}`;
        n.onclick = () => { Q.k++; ciz(); window.scrollTo(0, 0); }; $('#dev').append(n); n.focus();
      };
      b.dataset.i = i; $('#sec').append(b); });
  };

  EKRAN.sinavlar = function () {
    app.innerHTML = `${ust('Sınavlar', false, modDugme())}<main><p class="soluk" style="margin-top:0">Soruları ilgili derslerden gelir. Her seferinde karışık.</p>
      ${SINAVLAR.map(z => { const n = havuz(z).length, en = S.sinav[z.id], say = Math.min(10, n);
        return `<button class="sinav-satir" data-z="${z.id}"><span><b>${esc(z.ad)}</b><small>${n} soruluk havuz${en != null ? ' · en iyi ' + en + '/' + say : ''}</small></span><span class="ok" aria-hidden="true">›</span></button>`; }).join('')}</main>`;
    modBagla(); app.querySelectorAll('[data-z]').forEach(b => b.onclick = () => git('sinav', b.dataset.z));
  };
  EKRAN.sinav = function (id) {
    const z = SINAVLAR.find(x => x.id === id); if (!z) return geri();
    Q = { S: karistir(havuz(z)).slice(0, 10), anahtar: id, ileri: null, baslik: z.ad, renk: '#0f5a47', k: 0, puan: 0 };
    yigin[yigin.length - 1] = ['soru', []]; ciz(); window.scrollTo(0, 0);
  };

  EKRAN.ilerleme = function () {
    const tum = TUM.length, bitti = TUM.filter(e => gecti(e.x.id)).length;
    app.innerHTML = `${ust('İlerleme', true)}<main>
      <section class="kart"><h2>${S.seri.gun ? S.seri.gun + ' günlük seri' : 'Seri'}</h2><p class="soluk" style="margin:0">${S.seri.gun ? 'Her gün bir ders bitirince seri uzar.' : 'Bir ders bitirince seri başlar.'}</p></section>
      <p class="baslik">Dönemler</p>
      ${DONEMLER.map(d => { const [b, t] = donemOran(d); return `<section class="kart" style="--renk:${d.renk}"><b>${esc(d.ad)}</b> <span class="soluk">${b}/${t}</span><div class="ilerle"><i style="width:${b / t * 100}%;background:${d.renk}"></i></div></section>`; }).join('')}
      <p class="baslik">Sınav sonuçları</p>
      ${SINAVLAR.map(z => `<div class="sinav-satir" style="cursor:default"><span><b>${esc(z.ad)}</b></span><span class="soluk">${S.sinav[z.id] != null ? 'en iyi ' + S.sinav[z.id] + '/' + Math.min(10, havuz(z).length) : '—'}</span></div>`).join('')}
      <p class="soluk kucukyazi" style="text-align:center">Toplam: ${bitti}/${tum} ders</p></main>`;
  };

  EKRAN.ben = function () {
    const sifirlaOnay = EKRAN.ben._onay;
    app.innerHTML = `${ust('Ben', false)}<main>
      <p class="baslik" style="margin-top:4px">Görünüm modu</p>
      <div class="secim" style="grid-template-columns:repeat(2,1fr)" role="group" aria-label="Mod"><button data-m="buyuk" class="${cocuk() ? '' : 'on'}">Büyük</button><button data-m="cocuk" class="${cocuk() ? 'on' : ''}">Çocuk</button></div>
      <p class="soluk kucukyazi">Çocuk modunda anlatım kısa ve emojili, büyük modunda ayrıntılı ve kaynaklıdır.</p>
      <p class="baslik">Tema</p>
      <div class="secim" role="group" aria-label="Tema"><button data-t="oto" class="${S.tema === 'oto' ? 'on' : ''}">Otomatik</button><button data-t="acik" class="${S.tema === 'acik' ? 'on' : ''}">Açık</button><button data-t="koyu" class="${S.tema === 'koyu' ? 'on' : ''}">Koyu</button></div>
      <p class="baslik">Uygulama</p>
      <div class="bolumler"><button class="bolum" data-git="ilerleme"><span class="ikon">${ik('ilerleme')}</span><span class="bad">İlerleme<small>Dönemler ve sınav sonuçları</small></span><span class="ok">›</span></button>
      <button class="bolum tehlike" id="sifirla"><span class="ikon" style="color:var(--kotu)">${IKON.sil}</span><span class="bad">${sifirlaOnay ? 'Emin misin? Tekrar dokun' : 'İlerlemeyi sıfırla'}<small>${sifirlaOnay ? 'Tüm dersler ve sınav sonuçları silinir' : 'Dersler ve sınav sonuçları silinir'}</small></span></button></div>
      <p class="soluk kucukyazi" style="margin-top:18px">İçerik taslaktır: tarihler TDV İslâm Ansiklopedisi «Muhammed» maddesi ve kronolojisiyle karşılaştırılmıştır; yayın öncesi Diyanet yayınlarıyla da doğrulanmalıdır.</p>
      <p class="soluk kucukyazi">Siyer Yolum ${esc(SURUM_BILGI.SURUM)}</p></main>`;
    app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { S.mod = b.dataset.m; kaydet(); ciz(); });
    app.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { S.tema = b.dataset.t; kaydet(); ciz(); });
    $('#sifirla').onclick = () => { if (!EKRAN.ben._onay) { EKRAN.ben._onay = 1; ciz(); return; } EKRAN.ben._onay = 0; S.biten = {}; S.sinav = {}; S.seri = { gun: 0, son: '' }; kaydet(); ciz(); toast('İlerleme sıfırlandı'); };
  };

  window.SY = { EKRAN, git, sekme, geri, S, TUM, ciz, durum: () => yigin.slice() };
  temaUygula(); ciz();
})();
