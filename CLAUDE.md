# siyer-yolum

Peygamberimizin hayatını ve dört halife dönemini adım adım anlatan Capacitor/Android uygulaması (Kur'an Yolum ile aynı mimari). Saf JS, derleme adımı yok. Web kodu: `www/`.

## Kurallar
- Cevaplar kısa olsun; istenmeyen refactor yapma.
- İçerik `www/js/data.js` içinde (dönemler, dersler, sorular, harita, "daha fazla bilgi"). Tarih ve olaylar TDV İslâm Ansiklopedisi «Muhammed» maddesi ve kronolojisine göre yazılır (islamansiklopedisi.org.tr/muhammed); farklı rivayet varsa ikisi de yazılır. Kaynak uydurma, video adresi uydurma.
- Telifli görsel (ör. Siyer Atlası) kullanma; haritalar ve çizimler kendimizin.

## Test
- `npm run test:smoke` (tools/test/smoke.js): uygulamayı açar, tüm ekranları ve ders zincirini çalıştırır, konsol hatası arar. Kod değişince çalıştır; çıktısı kısa. Yeni ekran eklenince `EKRANLAR` listesine ekle.

## Yapı
- `www/js/app.js`: ekran tablosu (`EKRAN`), ekran yığını (`git/geri/sekme`), alt sekme çubuğu. `www/js/data.js`: içerik. `www/js/surum.js`: sürüm ve yenilikler.
- APK: `.github/workflows/apk.yml` (commit mesajına `[apk]` yazılırsa derlenir). Simgeler `android-res/` ve `www/icons/`.
