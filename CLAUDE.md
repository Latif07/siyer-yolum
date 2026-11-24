# siyer-yolum

Peygamberimizin hayatını ve dört halife dönemini adım adım anlatan Capacitor/Android uygulaması (Kur'an Yolum ile aynı mimari). Saf JS, derleme adımı yok. Web kodu: `www/`.

## Kurallar
- Cevaplar kısa olsun; istenmeyen refactor yapma.
- İçerik `www/js/data.js` içinde (dönemler, dersler, sorular, harita, "daha fazla bilgi"). Tarih ve olaylar TDV İslâm Ansiklopedisi «Muhammed» maddesi ve kronolojisine göre yazılır (islamansiklopedisi.org.tr/muhammed); farklı rivayet varsa ikisi de yazılır. Kaynak uydurma, video adresi uydurma.
- Telifli görsel (ör. Siyer Atlası) yalnızca Siyer Vakfı'ndan yazılı izin gelirse kullanılır (talep taslağı: docs/izin-talebi-siyer-atlasi.md). Haritalarda kıyı çizgisi Natural Earth (kamu malı) verisidir; yerler ve yollar kendimizin.
- Görseller: yalnızca özgür lisanslı (kamu malı, CC0, CC BY, CC BY-SA; NC/ND değil) Wikimedia Commons fotoğrafları, `GORSEL` listesinde; yazar-lisans-kaynak ekrana yazılır. Peygamberimizi tasvir eden minyatür kullanılmaz.

## Test
- `npm run test:smoke` (tools/test/smoke.js): uygulamayı açar, tüm ekranları ve ders zincirini çalıştırır, konsol hatası arar. Kod değişince çalıştır; çıktısı kısa. Yeni ekran eklenince `EKRANLAR` listesine ekle.

## Yapı
- `www/js/app.js`: ekran tablosu (`EKRAN`), ekran yığını (`git/geri/sekme`), alt sekme çubuğu. `www/js/data.js`: içerik. `www/js/surum.js`: sürüm ve yenilikler.
- Dil: `www/js/content-en.js` İngilizce içerik (aynı sıra ve yapı); arayüz metinleri `T(tr, en)` ile. Yeni ders eklenince ikisine de ekle.
- Kitap sırası: dersler «Siyer-i Nebî» (Habib Yazıcı) içindekiler sırasını izler (`BOLUMLER`, `BOLUM_NO` data-ek.js). Ek dersler `www/js/data-ek.js` (TR) ve `www/js/content-en-2.js` (EN). Kitaptan yalnız bölüm/konu sırası alınır; metin DİA kaynaklıdır, kendi cümlelerimizle.
- Çizimler: `www/js/cizim.js` (kendi SVG illüstrasyonlarımız; insan figürü yok, Peygamberimiz ve sahâbîler çizilmez). Yeni çizim: `CIZIM[dersId]` ekle, render edip gözle kontrol et.
- APK: `.github/workflows/apk.yml` (commit mesajına `[apk]` yazılırsa derlenir). Simgeler `android-res/` ve `www/icons/`.
- Web yayını: `.github/workflows/pages.yml` (GitHub Pages; ayarlarda Pages kaynağı "GitHub Actions" olmalı).
