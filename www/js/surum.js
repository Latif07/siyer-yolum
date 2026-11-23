// Sürüm ve yenilikler. Yeni sürümde: SURUM'u artır, LISTE'nin başına ekle (APK notu buradan alınır).
(function () {
  const SURUM = '0.1.0';
  const LISTE = [
    { s: '0.1.0', t: '2026-11-23', l: [
      'İlk sürüm: 30 ders, çocuk ve büyük modu, şematik haritalar, bölüm sınavları',
    ] },
  ];
  const d = { SURUM, LISTE };
  if (typeof module !== 'undefined') module.exports = d; else window.SURUM_BILGI = d;
})();
