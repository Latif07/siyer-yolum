/* ===== EK DERSLER: «Siyer-i Nebî» (Habib Yazıcı) kitabının içindekiler sırasına göre =====
 Kitabın yalnızca bölüm ve konu sırası (içindekiler) esas alındı; metinler DİA maddeleri ve «Muhammed» kronolojisinden kendi cümlelerimizle yazıldı.
 Yeni dersler data.js'teki DONEMLER'e burada eklenir (sıra: kitaptaki sıra). Yardımcılar (L, DIA, SV, KM, IM, SV_*) data.js'tedir. */

const BOLUMLER = [ // [no, TR, EN]
 [1, 'Siyer İlmi ve Siyer Öğrenmenin Değeri', 'The Science of Seerah and the Value of Learning It'],
 [2, 'Mekke Şehri ve Mekke’de Hayat', 'The City of Mecca and Life in Mecca'],
 [3, 'Fil Yılı ve Kutlu Doğum', 'The Year of the Elephant and the Blessed Birth'],
 [4, 'Risalet Öncesi Hayatı', 'Life Before Prophethood'],
 [5, 'Vahiy ve Risalet', 'Revelation and Prophethood'],
 [6, 'Mekke’de Artan Baskılar ve Müslümanlar', 'Growing Pressure on the Muslims in Mecca'],
 [7, 'Daralan Peygamber, Sıkışan Din ve Açılım Arayışları', 'A Narrowing Horizon and the Search for a New Opening'],
 [8, 'Risalete Dar Gelen Yurt, Süren Arayışlar ve Hicret', 'A Homeland Too Narrow, the Search Continues, and the Hijra'],
 [9, 'Risalete Kucak Açan Şehir: Yesrib Medine’ye Dönüşüyor', 'The City That Opened Its Arms: Yathrib Becomes Medina'],
 [10, 'Medine İslam Topluluğunun Zorlu İnşa Süreci', 'The Hard Building of the Medinan Community'],
 [11, 'Müslümanlara Kurulan Tuzaklar', 'Traps Set for the Muslims'],
 [12, 'İfk Hadisesi ve Müslümanların Varlık Mücadelesi', 'The Slander Affair and the Struggle to Survive'],
 [13, 'Barış Süreci ve Davet Mektupları', 'The Peace Process and the Letters of Invitation'],
 [14, 'Mekke’nin Fethi, İslam’ın Yerleşmesi ve Yayılması', 'The Conquest of Mecca and the Spread of Islam'],
 [15, '“Veda” Zamanı', 'The Time of Farewell'],
 [16, 'Risaletin Sona Ermesi: Resûlullah’ın Vefatı', 'The End of the Mission: The Passing of the Messenger'],
 [17, 'Peygamberimizin Eşleri ve Çocukları', 'The Prophet’s Wives and Children'],
 [18, 'Peygamberimizin Müminler, Müşrikler ve Ehl-i Kitap ile Münasebeti', 'The Prophet’s Relations with Believers, Polytheists and the People of the Book']
];
// ders → kitap bölümü numarası (0: kitapta olmayan, Dört Halife Dönemi)
const BOLUM_NO = { 'siyer-ilmi': 1, 'mekke-kabe': 2, 'mekke-toplum': 2, fil: 3, sut: 3, amine: 3, sam: 4, fudul: 4, hatice: 4, hacer: 4, hira: 5, vahiy: 5, gizli: 5, acik: 5,
 habese: 6, boykot: 6, huzun: 6, taif: 7, isra: 7, akabe: 8, hicret: 8, 'medine-ilk': 9, bedir: 10, uhud: 10, reci: 11, nadir: 11, ifk: 12, hendek: 12, kurayza: 12,
 hudeybiye: 13, hayber: 13, mektuplar: 13, kaza: 13, mute: 13, fetih: 14, huneyn: 14, tebuk: 14, dirar: 14, veda: 15, hastalik: 16, esler: 17, cocuklar: 17, iliskiler: 18,
 ebubekir: 0, omer: 0, osman: 0, ali: 0 };

(function () {
  const don = id => DONEMLER.find(d => d.id === id);
  const sonra = (donemId, oncekiId, ders) => { const d = don(donemId), i = d.dersler.findIndex(x => x.id === oncekiId); d.dersler.splice(i + 1, 0, ders); };
  // yeni dönemler
  DONEMLER.unshift({ id: 'giris', ad: 'Siyer’e Giriş', alt: 'Giriş', renk: '#6b7a3f', dersler: [
    L('siyer-ilmi', 'Siyer İlmi ve Önemi', 'Giriş',
      'Siyer, Peygamberimizin hayatını anlatan ilimdir. Onu öğrenerek en güzel örneği tanırız.',
      [['Siyer ne demek?', 'Siyer “yol, davranış, hayat tarzı” demektir. Peygamberimizin hayatına bu ad verilmiştir.'], ['Kaynaklar', 'Siyeri İbn İshak, İbn Hişâm ve İbn Sa‘d gibi büyük âlimlerin kitaplarından öğreniriz.'], ['Neden öğreniriz?', 'Allah, Peygamberimizi bize güzel bir örnek olarak göstermiştir.']],
      'Siyer, “hâl, davranış, yol” anlamındaki siretin çoğuludur; terim olarak Hz. Peygamber’in hayatını ve davranışlarını konu alan ilimdir. Fıkıhta ise savaş ve barış hükümlerini içeren özel bir bölümün adıdır.',
      [['Kelime anlamı', 'Siyer, sözlükte “hal, durum, davranış, idare, yol” gibi anlamlara gelen sîret kelimesinin çoğuludur.', 'DİA, “Siyer” md.'], ['Hem fıkıh hem tarih', 'Siyer, klasik fıkıh literatüründe hem özel bir tür hem de fıkıh sisteminde özel bir bölümün adıdır; Hz. Peygamber’in hayatını anlatan eserler de bu adla anılır.', 'DİA, “Siyer” md.'], ['Başlıca kaynaklar', 'İlk dönem siyer yazarlarından İbn İshak ile onun eserini aktaran İbn Hişâm’ın es-Sîre’si, İbn Sa‘d’ın Tabakât’ı en çok başvurulan kaynaklardandır.', 'DİA, “İbn İshak”, “İbn Hişâm” md.']],
      [['Siyer kelimesi ne anlama gelir?', ['Yol, davranış, hayat tarzı', 'Savaş meydanı', 'Ticaret kervanı'], 0, 'Siyer, “yol, davranış, hâl” anlamındaki siretin çoğuludur.'], ['Aşağıdakilerden hangisi siyerin başlıca kaynaklarındandır?', ['İbn Hişâm’ın es-Sîre’si', 'Bir seyahatname', 'Bir şiir divanı'], 0, 'İbn Hişâm’ın es-Sîre’si en çok başvurulan siyer kaynaklarındandır.']]),
    L('mekke-kabe', 'Mekke, İbrâhim ve Kâbe', 'Giriş',
      'Kâbe, Allah’ın evidir. Onu İbrâhim ve İsmâil yaptı. Mekke bu eve komşu bir şehirdir.',
      [['Kâbe', 'Kâbe “küp biçimli ev” demektir. Müslümanlar namazda ona yönelir.'], ['İbrâhim ve İsmâil', 'İbrâhim ve oğlu İsmâil, Kâbe’yi temiz tutmakla görevlendirildi.'], ['Mekke’nin yöneticileri', 'Sonra Mekke ve Kâbe’nin yönetimi Kureyş kabilesine geçti.']],
      'Kâbe, Kur’an’a göre Hz. İbrâhim ve İsmâil’in yaptığı ve temiz tutmakla görevlendirildikleri mukaddes evdir. Mekke’nin yönetimi Kusay b. Kilâb döneminde Kureyş’e geçti.',
      [['Kâbe’nin adı', 'Kâbe, “küp biçimli nesne” anlamındaki kâbe kelimesindendir; Kur’an’da Beyt, Beytullah, el-Beytü’l-atîk, Mescid-i Harâm gibi adlarla da anılır.', 'DİA, “Kâbe” md.'], ['İbrâhim ve İsmâil', 'Bakara 2/125-127’de İbrâhim ve İsmâil’e, evi tavaf edenler ve ibadet edenler için temiz tutmaları emredilir; İbrâhim, Mekke’nin emin bir şehir olması için dua eder.', 'DİA, “Kâbe” md.'], ['Kureyş’in yönetimi', 'Beşinci yüzyılın ilk yarısında Kusay b. Kilâb Mekke’ye hâkim oldu; Mekke ve Kâbe’nin yönetimi Kureyş’e geçti. Kureyş Kâbe’yi 605’te yeniden inşa etti.', 'DİA, “Mekke”, “Kâbe” md.']],
      [['Kâbe’yi kimler inşa etti?', ['İbrâhim ve İsmâil', 'Kusay ve Abdüddâr', 'Ebrehe ve askerleri'], 0, 'Kur’an’a göre İbrâhim ve İsmâil.'], ['Kâbe kelimesi ne anlama gelir?', ['Küp biçimli ev', 'Su kuyusu', 'Geniş vadi'], 0, 'Kâbe, “küp biçimli nesne” demektir.']]),
    L('mekke-toplum', 'Mekke’nin Toplum Yapısı ve Değerleri', 'Giriş',
      'Peygamberimizin zamanında Mekke’de Kureyş kabilesi yaşardı. İnsanlar ticaret yapar, şiir yarışmalarına katılırdı.',
      [['Kureyş', 'Kureyş, Mekke’nin en önemli kabilesiydi ve şehri yönetirdi.'], ['Dârünnedve', 'Mekke’nin önemli kararları Dârünnedve’de büyükler toplanarak alınırdı.'], ['Ukâz panayırı', 'Ukâz’da alışveriş yapılır, şiir yarışmaları düzenlenirdi.']],
      'Mekke’de görevler Kureyş’in kolları arasında paylaşılmıştı; kararlar Dârünnedve’de alınır, Ukâz gibi panayırlar ticarî ve edebî hayatın merkeziydi.',
      [['Görev paylaşımı', 'Kusay’ın soyundan gelenler arasındaki anlaşmazlık üzerine hicâbe, livâ ve nedve Abdüddâroğulları’na; sikâye, rifâde ve kıyâde Abdümenâfoğulları’na verildi; bu düzen Mekke’nin fethine kadar sürdü.', 'DİA, “Mekke” md.'], ['Dârünnedve', 'Mekke ile ilgili kararların alındığı bir asiller meclisiydi; kırk yaşın üstündeki Kureyş boy başkanları katılabilirdi.', 'DİA, “Mekke” md.'], ['Ukâz panayırı', 'Ukâz, Tâif ile Nahle arasında kurulan en tanınmış panayırdı; insanlar burada alışveriş yapar, şiir başta olmak üzere yarışmalar düzenler, kabilelerinin şerefi için mücadele ederdi.', 'DİA, “Ukâz” md.']],
      [['Mekke’de önemli kararların alındığı asiller meclisinin adı nedir?', ['Dârünnedve', 'Dârülerkam', 'Suffe'], 0, 'Dârünnedve.'], ['Ukâz nedir?', ['Tâif ile Nahle arasında kurulan ünlü bir panayır', 'Bir dağ', 'Bir savaşın adı'], 0, 'Ukâz, şiir ve ticaretle ünlü bir panayırdı.']])
  ] });

  // Medine dönemi: kitaptaki sıraya göre yeni dersler
  sonra('medine', 'uhud', L('reci', 'Recî‘ ve Bi’rimaûne Olayları', '625',
    'Bazı kabileler “bize İslam’ı öğretecek kimseler gönderin” dedi, ama bu bir tuzaktı.',
    [['Tuzak', 'Adal ve Kâre kabileleri, öğretmen istedi ama müslümanlardan öç almak istiyordu.'], ['Recî‘', 'Gönderilen küçük heyet Recî‘ suyu yanında kuşatıldı.'], ['Bi’rimaûne', 'Yetmiş kadar Kur’an hocası da Bi’rimaûne’de tuzağa düşürüldü.']],
    'Uhud’dan sonra, hicretin 4. yılında (625) iki kabile İslam’ı öğretecek kişiler istedi; heyetlere tuzak kuruldu ve çok sayıda sahâbî şehit oldu.',
    [['Recî‘ Vak‘ası', 'Benî Lihyân, Adal ve Kâre kabileleriyle birlikte müslümanlardan öç almak için bir plan yaptı; İslam’ı öğretecek kişi istemeleri üzerine gönderilen Mersed b. Ebû Mersed (veya Âsım b. Sâbit) başkanlığındaki heyet, Recî‘ suyu yanında Lihyânoğulları’ndan 100 kişilik bir birlik tarafından kuşatıldı.', 'DİA, “Recî‘ Vak‘ası” md.'], ['Bi’rimaûne', 'Âmir b. Sa‘saa reisi Ebû Berâ, kabilesine İslam’ı anlatacak kimseler istedi; yetmiş kadar kurrâ (çoğu ensardan, ehl-i Suffe’den), başkan Münzir b. Amr ile gönderildi.', 'DİA, “Bi’rimaûne” md.'], ['Tarih', 'DİA kronolojisinde her iki olay hicretin 4. yılı Safer ayına (Temmuz 625) konur.', 'DİA, “Muhammed” md. (kronoloji)']],
    [['Bi’rimaûne’ye kaç kurrâ gönderildi?', ['Yaklaşık yetmiş', 'Yedi', 'Yedi yüz'], 0, 'Sahih rivayetlere göre yetmiş kişi.'], ['Recî‘ ve Bi’rimaûne hangi gazveden sonra yaşandı?', ['Uhud', 'Bedir', 'Hendek'], 0, 'Uhud’dan sonra, hicretin 4. yılında.']]));
  sonra('medine', 'reci', L('nadir', 'Nadîroğulları’nın Medine’den Çıkarılması', '625',
    'Medine’de farklı topluluklar birlikte yaşıyordu. Nadîroğulları anlaşmayı bozunca şehirden ayrıldı.',
    [['Birlikte yaşam', 'Medine’de müslümanlar ve yahudiler bir sözleşmeyle birlikte yaşıyordu.'], ['Gizli anlaşma', 'Nadîroğulları Mekkelilerle gizli bir anlaşma yaptı.'], ['Hayber', 'Bu yüzden Medine’den ayrılıp Hayber’e yerleştiler.']],
    'Mekkelilerle gizli anlaşma yapan Benî Nadîr, hicretin 4. yılında (625) Medine’den çıkarıldı; Hayber’e yerleşenler daha sonra Hendek’te ahzâbı tahrik etti.',
    [['Sebep', 'Medine Vesikası’yla Medine’de bir arada yaşayan Benî Nadîr, Mekkelilerle gizli bir anlaşma yapmıştı.', 'DİA, “Muhammed” md.'], ['Sürgün', 'Benî Nadîr Gazvesi DİA kronolojisinde Rebîülevvel 4 (Ağustos 625)’e konur; onlar Medine’den çıkarıldı.', 'DİA, “Muhammed” md. (kronoloji)'], ['Sonrası', 'Hayber’e yerleşen Benî Nadîr yahudilerinin tahrikiyle Hendek’te müttefik güçler (ahzâb) Medine’ye yürüdü.', 'DİA, “Hendek Gazvesi” md.']],
    [['Benî Nadîr Medine’den çıkarılınca nereye yerleşti?', ['Hayber', 'Tâif', 'Habeşistan'], 0, 'Hayber’e.'], ['Benî Nadîr neden Medine’den çıkarıldı?', ['Mekkelilerle gizli anlaşma yaptığı için', 'Zekât vermediği için', 'Savaşa katılmadığı için'], 0, 'Mekkelilerle gizli anlaşma yaptığı için.']]));
  sonra('medine', 'nadir', L('ifk', 'İfk Hadisesi', '627',
    'Hz. Âişe’ye yalan söylendi. Allah onu temize çıkardı.',
    [['Gerdanlık', 'Hz. Âişe kaybolan gerdanlığını ararken kafile hareket etti.'], ['Yalan söz', 'Bazı kişiler Hz. Âişe hakkında çirkin bir yalan yaydı.'], ['Allah temize çıkardı', 'Nûr sûresinin âyetleri Hz. Âişe’nin masum olduğunu bildirdi.']],
    'Benî Mustaliḳ Gazvesi dönüşünde (Şâban 5, Aralık 626–Ocak 627) Hz. Âişe hakkında yayılan iftira, Nûr sûresinin âyetleriyle sona erdi.',
    [['Adı', 'İfk, “iftira, en kötü ve en çirkin yalan” demektir; olay Nûr sûresi 24/11-22 âyetlerinde anlatılır.', 'DİA, “İfk Hadisesi” md.'], ['Olay', 'Gazveden dönerken Hz. Âişe, ordugâhtan uzaklaşıp gerdanlığını aradı; geri döndüğünde kafile hareket etmişti. Bu durum hakkında dedikodular çıktı.', 'DİA, “İfk Hadisesi” md.'], ['Sonuç', 'Peygamber, Âişe’ye “Eğer masumsan Allah seni temize çıkaracaktır” dedi; Âişe sabırdan başka çare görmediğini söyledi. Ardından inen âyetler iftirayı çürüttü.', 'DİA, “İfk Hadisesi” md.']],
    [['“İfk” ne demektir?', ['İftira', 'Hırsızlık', 'Savaş'], 0, 'İfk, “iftira, çirkin yalan” demektir.'], ['Hz. Âişe’yi temize çıkaran âyetler hangi sûrede yer alır?', ['Nûr sûresi', 'Hucurât sûresi', 'Mâide sûresi'], 0, 'Nûr sûresi, 11-22. âyetler.']]));
  sonra('medine', 'hendek', L('kurayza', 'Benî Kurayza', '627',
    'Hendek’ten sonra, Medine’deki yahudi kabilelerden Kurayza ile de hesaplaşıldı.',
    [['Hendek’te', 'Benî Kurayza, Medine’de kalan yahudi kabilelerinden biriydi.'], ['Ahzâb’a katılma', 'Düşman ordularına destek verdi.'], ['Hendek’ten hemen sonra', 'Peygamberimiz, Hendek’ten hemen sonra Kurayza’nın üzerine yürüdü.']],
    'Hendek’te ahzâba katılan Benî Kurayza’nın üzerine, Hendek’ten hemen sonra Zilhicce 5’te (Mayıs 627) yürünüldü.',
    [['Hendek’teki rolü', 'Hendek kuşatmasında Medine’de kalan Benî Kurayza yahudileri ahzâbın saflarında yer aldı; düşman saflarındaki ihtilaf, Kurayza’nın saf dışı kalmasına yol açtı.', 'DİA, “Hendek Gazvesi” md.'], ['Kurayza Gazvesi', 'Resûl-i Ekrem, Hendek Gazvesi’nden hemen sonra Benî Kurayza yahudilerinin üzerine yürüdü.', 'DİA, “Hendek Gazvesi” md.'], ['Tarih', 'DİA kronolojisi, Benî Kurayza Gazvesi’ni Zilhicce 5 (Mayıs 627)’e koyar.', 'DİA, “Muhammed” md. (kronoloji)']],
    [['Benî Kurayza’nın üzerine ne zaman yürünüldü?', ['Hendek Gazvesi’nden hemen sonra', 'Bedir’den önce', 'Hicretten önce'], 0, 'Hendek Gazvesi’nden hemen sonra.'], ['Benî Kurayza Hendek’te nerede bulunuyordu?', ['Medine’de', 'Mekke’de', 'Hayber’de'], 0, 'O sırada Medine’de kalan bir yahudi kabilesiydi.']]));
  sonra('medine', 'hudeybiye', L('hayber', 'Hayber’in Fethi', '628',
    'Hayber, kaleleriyle ünlü bir yerdi. Müslümanlar orayı fethetti.',
    [['Kaleler', 'Hayber’de yahudilerin oturduğu yedi sağlam kale vardı.'], ['Ticaret yolu', 'Hayber, önemli bir ticaret yolunun üzerindeydi.'], ['Fetih', 'Hicretin 7. yılında müslümanlar Hayber’i fethetti.']],
    'Medine’nin yaklaşık 180 km kuzeyindeki Hayber, hicretin 7. yılında (628) fethedildi; yahudiler Hz. Ömer’e kadar burada kaldı.',
    [['Hayber’in yapısı', 'Hayber, Medine’nin yaklaşık 180 km kuzeyinde, volkanik topraklarla çevrili geniş bir vadidir; Câhiliye döneminde yahudilerin oturduğu yedi sağlam kaleden oluşur ve önemli bir ticaret merkeziydi.', 'DİA, “Hayber” md.'], ['Fetih', 'DİA kronolojisine göre Hayber Gazvesi, hicretin 7. yılı Safer ayında (Temmuz 628) yapıldı. Fethin ardından yahudi Zeyneb bint Hâris, Peygamber’i zehirlemeye teşebbüs etti.', 'DİA, “Muhammed” md. (kronoloji)'], ['Sonrası', 'Yahudilerin Hayber’deki ikameti Hz. Ömer’in hilâfetine, 20 (641) yılına kadar sürdü.', 'DİA, “Hayber” md.']],
    [['Hayber nerededir?', ['Medine’nin yaklaşık 180 km kuzeyinde', 'Mekke’nin güneyinde', 'Habeşistan’da'], 0, 'Medine’nin yaklaşık 180 km kuzeyinde.'], ['Hayber’in belirgin özelliği nedir?', ['Yedi sağlam kaleden oluşması', 'Liman olması', 'Hac merkezi olması'], 0, 'Yedi sağlam kalesi vardı.']]));
  sonra('medine', 'hayber', L('mektuplar', 'Davet Mektupları', '628',
    'Peygamberimiz ülkelerin yöneticilerine mektup gönderip onları İslam’a davet etti.',
    [['Mektuplar', 'Bizans ve İran imparatorlarına, başka yöneticilere mektuplar gönderildi.'], ['Necâşî', 'Habeşistan kralı Necâşî Ashame müslüman oldu.'], ['Hediyeler', 'Mısır yöneticisi Peygamberimize hediyeler gönderdi.']],
    'Hudeybiye’den sonra, hicretin 7. yılı başında (Mayıs 628) Bizans ve Sâsânî imparatorları başta olmak üzere çevre ülke yöneticilerine elçiler ve davet mektupları gönderildi.',
    [['Mektuplar', 'DİA kronolojisi, Muharrem 7 (Mayıs 628)’de Bizans ve Sâsânî imparatorları başta olmak üzere civar ülke yöneticilerine ve kabile reislerine elçiler ve davet mektupları gönderildiğini kaydeder.', 'DİA, “Muhammed” md. (kronoloji)'], ['Yanıtlar', 'Aynı kronolojiye göre Habeş Necâşîsi Ashame müslüman oldu; Mısır mukavkısı hediyelerle birlikte câriyesi Mâriye’yi gönderdi.', 'DİA, “Muhammed” md. (kronoloji)'], ['Bizans ile ilişki', 'Herakleios’a gönderilen davet mektubu, elçiye güzel muamele edilmesiyle dostane bir başlangıç yaptı; ilişkiler Mûte’den sonra gerginleşti.', 'DİA, “Tebük Gazvesi” md.']],
    [['Davet mektupları hangi yıl gönderildi?', ['Hicretin 7. yılı başında', 'Hicretten önce', 'Bedir’den önce'], 0, 'Hudeybiye’den sonra, hicretin 7. yılı başında.'], ['Habeşistan kralı Necâşî’nin adı nedir?', ['Ashame', 'Kisra', 'Herakleios'], 0, 'Ashame.']]));
  sonra('medine', 'mektuplar', L('kaza', 'Kaza Umresi', '629',
    'Hudeybiye’de yapılamayan umre, bir yıl sonra yapıldı.',
    [['Söz', 'Hudeybiye’de “gelecek yıl umre yapacaksınız” denmişti.'], ['Umre', 'Müslümanlar bir yıl sonra Mekke’ye geldi.'], ['Üç gün', 'Antlaşmaya göre Mekke’de üç günden fazla kalmadılar.']],
    'Hudeybiye Antlaşması’nda kararlaştırıldığı gibi, hicretin 7. yılı Zilkade ayında (Mart 629) umre yapıldı.',
    [['Adı', 'Yapılamayan umrenin ertesi yıl yapılan kazâsı olduğu için Umretü’l-kazâ; antlaşmada kararlaştırıldığı için Umretü’l-kazıyye ve Umretü’s-sulh adıyla da anılır.', 'DİA, “Umretü’l-kazâ” md.'], ['Şartlar', 'Antlaşmaya göre müslümanlar Kâbe’yi bir yıl sonra ziyaret edebilecek, üzerlerinde yalnız yolcu kılıcı taşıyacak ve şehirde üç günden fazla kalmayacaktı.', 'DİA, “Umretü’l-kazâ” md.'], ['Katılım', 'Umreye gidenlerin sayısı kadın ve çocuklar hariç 2000’e ulaştı. Aynı ay Hz. Peygamber, Meymûne bint Hâris ile evlendi.', 'DİA, “Umretü’l-kazâ” md.; “Muhammed” md. (kronoloji)']],
    [['Umretü’l-kazâ’da Mekke’de en fazla kaç gün kalındı?', ['Üç gün', 'Yedi gün', 'On gün'], 0, 'Antlaşmaya göre üç günden fazla kalınmayacaktı.'], ['Bu umreye neden “kazâ” umresi denir?', ['Yapılamayan umrenin ertesi yıl yapılması olduğu için', 'Savaştan sonra yapıldığı için', 'Kâbe’nin tamirinden sonra yapıldığı için'], 0, 'Hudeybiye’de yapılamayan umrenin kazâsı olduğu için.']]));
  sonra('medine', 'kaza', L('mute', 'Mûte Savaşı', '629',
    'Elçiyi öldüren bir yöneticiye karşı ordu gönderildi. Üç komutan peş peşe şehit oldu; sancağı Hâlid b. Velîd aldı.',
    [['Elçi', 'Peygamberimizin elçisi Hâris b. Umeyr öldürüldü.'], ['Üç komutan', 'Ordunun başına sırasıyla Zeyd, Cafer ve Abdullah b. Revâha getirildi.'], ['Allah’ın kılıcı', 'Sancağı Hâlid b. Velîd aldı; Peygamberimiz ona “Allah’ın kılıçlarından bir kılıç” dedi.']],
    'Cemâziyelevvel 8’de (Eylül 629) Gassânî reisinin elçiyi öldürmesi üzerine 3000 kişilik ordu gönderildi; üç komutanın şehit olmasından sonra sancağı Hâlid b. Velîd aldı.',
    [['Sebep', 'Gassânî-hıristiyan Arapları’nın reislerinden Şürahbîl b. Amr, Resûlullah’ın mektubunu Busrâ valisine götüren Hâris b. Umeyr’i öldürdü; bu, devletler arası bir teamülü bozmak demekti.', 'DİA, “Mûte Savaşı” md.'], ['Ordu', 'Hz. Peygamber, 3000 kişilik ordunun komutanlığına sırasıyla Zeyd b. Hârise, Ca‘fer b. Ebû Tâlib ve Abdullah b. Revâha’yı tayin etti. Hz. Peygamber katılmadığı için Mûte bir seriyye sayılır.', 'DİA, “Mûte Savaşı” md.'], ['Sancak', 'Üç komutan da şehit düşünce sancak Hâlid b. Velîd’e verildi. Hz. Peygamber Medine’de bunu anlatırken “Sancağı Allah’ın kılıçlarından bir kılıç aldı” dedi.', 'DİA, “Mûte Savaşı” md.; Buhârî, Meġāzî']],
    [['Mûte’de ordunun ilk komutanı kimdi?', ['Zeyd b. Hârise', 'Hâlid b. Velîd', 'Hz. Ömer'], 0, 'Önce Zeyd b. Hârise, sonra Ca‘fer, sonra Abdullah b. Revâha.'], ['Mûte’de üç komutan şehit olunca sancağı kim aldı?', ['Hâlid b. Velîd', 'Hz. Ali', 'Ebû Ubeyde'], 0, 'Hâlid b. Velîd.']]));
  sonra('medine', 'fetih', L('huneyn', 'Huneyn Gazvesi ve Tâif Kuşatması', '630',
    'Mekke’nin fethinden sonra Huneyn’de bir savaş oldu, ardından Tâif kuşatıldı.',
    [['Huneyn', 'Hevâzin kabilesiyle Huneyn vadisinde karşılaşıldı.'], ['Kur’an’da', 'Huneyn’in adı Kur’an’da geçer.'], ['Tâif', 'Sonra Tâif kuşatıldı.']],
    '11 Şevval 8 / 1 Şubat 630’da yapılan Huneyn Gazvesi’nin ardından Zilkade ayında Tâif kuşatıldı.',
    [['Huneyn', 'Hevâzin Gazvesi de denir; Kur’an’da adı geçen iki gazveden biridir (diğeri Bedir). Mekke’den on küsur mil uzaklıktaki, çöllerle kaplı bir vadidir.', 'DİA, “Huneyn Gazvesi” md.'], ['Tâif kuşatması', 'DİA kronolojisinde Tâif Gazvesi Zilkade/Şubat 8’e konur; Huneyn ganimetleri Ci‘râne’de taksim edildi.', 'DİA, “Muhammed” md. (kronoloji)'], ['Tâif’in tutumu', 'Hicaz’ın önemli şehri Tâif, uzun süre İslam’a karşı tavrını sürdürdü; İslam’a düşman olanlar da oraya sığınıyordu.', 'DİA, “Muhammed” md.']],
    [['Kur’an’da adı geçen iki gazve hangileridir?', ['Bedir ve Huneyn', 'Uhud ve Hendek', 'Mûte ve Tebük'], 0, 'Bedir ve Huneyn.'], ['Huneyn Gazvesi’nin diğer adı nedir?', ['Hevâzin Gazvesi', 'Hendek Gazvesi', 'Tebük Gazvesi'], 0, 'Hevâzin Gazvesi.']]));
  sonra('medine', 'huneyn', L('tebuk', 'Tebük Seferi', '630',
    'Çok sıcak bir günde, uzak bir yere büyük bir ordu yürüdü. Tebük, Peygamberimizin son gazvesidir.',
    [['Çok uzak', 'Tebük, Medine’ye 700 km uzaktaydı.'], ['Büyük ordu', 'Yaklaşık 30.000 kişi katıldı.'], ['Zor zaman', 'Kur’an bu zamana “güçlük zamanı” der.']],
    'Receb 9’da (Ekim 630) 30.000 kişilik ordu Medine’den çıktı; sefer yaklaşık elli gün sürdü ve Hz. Peygamber’in son gazvesi oldu.',
    [['Yer ve ad', 'Tebük, Medine–Suriye ticaret yolu üzerinde, Medine’ye 700 km uzaklıktadır; büyük güçlükler yaşandığı için Kur’an’da “sâatü’l-usre” (güçlük zamanı) denir (Tevbe 9/117).', 'DİA, “Tebük Gazvesi” md.'], ['Ordu ve münafıklar', 'Kısa sürede 30.000 kişilik ordu hazırlandı; Abdullah b. Übey yetmiş seksen taraftarıyla Medine’ye döndü.', 'DİA, “Tebük Gazvesi” md.'], ['Sonuç', 'Eyle piskoposu Yuhannâ b. Rü’be ile Cerbâ, Maknâ ve Ezruh halkının temsilcileri gelip cizye ödemeyi kabul etti. Sefer Ramazan’da sona erdi; Tebük Hz. Peygamber’in son gazvesidir.', 'DİA, “Tebük Gazvesi” md.']],
    [['Tebük ne zaman yapıldı?', ['Hicretin 9. yılında', 'Hicretten önce', 'Hicretin 2. yılında'], 0, 'Receb 9 (Ekim 630).'], ['Tebük, Hz. Peygamber’in kaçıncı gazvesidir?', ['Sonuncusu', 'İlki', 'Ortadakilerden biri'], 0, 'Son gazvesidir.']]));
  sonra('medine', 'tebuk', L('dirar', 'Mescid-i Dırâr ve Heyetler Yılı', '630–631',
    'Zarar vermek için yapılan bir mescit yıktırıldı. Birçok kabile heyet gönderip müslüman oldu.',
    [['Zarar mescidi', 'Münafıklar müslümanlar arasında ayrılık çıkarmak için bir mescit yaptı.'], ['Yıkıldı', 'Allah Peygamberimizi haberdar etti ve mescit yıkıldı.'], ['Heyetler', 'Hicretin 9. yılında birçok kabile Medine’ye heyet gönderdi.']],
    'Münafıkların yaptığı Mescid-i Dırâr yıktırıldı; hicretin 9. yılında (630) çok sayıda kabileden heyet Medine’ye gelip müslüman oldu (Heyetler Yılı).',
    [['Mescid-i Dırâr', 'Kur’an’da “mesciden dırâren” (zarar veren mescit) olarak anılır (Tevbe 9/107); münafıklar, müslümanların birliğini bozmak için yaptı. Sabaha mescidin yıkılmış olduğunu görünce sırlarının ifşa edildiğini anladılar.', 'DİA, “Mescid-i Dırâr” md.'], ['Heyetler', 'DİA kronolojisi, 9/630 yılında Benî Sa‘lebe, Benî Sudâ’, Benî Bâhile, Benî Cerm ve Benî Hüzeyl gibi birçok kabile heyetinin Medine’ye gelip müslüman olduğunu kaydeder.', 'DİA, “Muhammed” md. (kronoloji)'], ['Zekât âmilleri', 'Aynı yıl Muharrem’de bazı şehir ve kabilelere zekât âmilleri gönderildi.', 'DİA, “Muhammed” md. (kronoloji)']],
    [['Mescid-i Dırâr’ı kimler yaptı?', ['Münafıklar', 'Yahudiler', 'Müşrikler'], 0, 'Münafıklar.'], ['Hicretin 9. yılına ne ad verilir?', ['Heyetler Yılı', 'Fil Yılı', 'Hüzün Yılı'], 0, 'Heyetler Yılı.']]));

  // Aile ve toplumsal ilişkiler
  DONEMLER.splice(DONEMLER.findIndex(d => d.id === 'halifeler'), 0, { id: 'aile', ad: 'Aile ve Toplumsal İlişkiler', alt: 'Konu bölümleri', renk: '#a05a7a', dersler: [
    L('esler', 'Peygamberimizin Eşleri', 'Konu',
      'Peygamberimizin hanımları, müslümanların anneleri sayılır. İlk hanımı Hz. Hatice’dir.',
      [['Hz. Hatice', 'İlk hanımı Hz. Hatice’dir; Peygamberimizi hep destekledi.'], ['Diğer hanımları', 'Hz. Sevde, Hz. Âişe ve Hz. Hafsa da hanımlarındandır.'], ['Örnek aile', 'Hz. Âişe, onun kötülüğe kötülükle karşılık vermediğini anlatır.']],
      'Hz. Hatice’den sonra Peygamber, Medine yıllarına uzanan süreçte çeşitli hanımlarla evlendi; DİA kronolojisi bu evlilikleri tarihleriyle kaydeder.',
      [['Hz. Hatice’den sonra', 'Hz. Hatice’nin vefatından sonra, Ramazan 620’de Sevde bint Zem‘a ile evlendi.', 'DİA, “Muhammed” md. (kronoloji)'], ['Medine yılları', 'Hz. Âişe (2/623), Hafsa (3/625), Zeyneb bint Cahş (5/627), Cüveyriye (5/627), Ümmü Habîbe (7/628), Safiyye (7/628) ve Meymûne (7/629) ile evlilikler kronolojide yer alır.', 'DİA, “Muhammed” md. (kronoloji)'], ['Ahlakı', 'Hz. Âişe, Resûl-i Ekrem’in kötülüğe kötülükle karşılık vermediğini, insanları bağışlayıp kusurlarını görmezden geldiğini anlatır.', 'DİA, “Muhammed” md.']],
      [['Peygamberimizin ilk hanımı kimdir?', ['Hz. Hatice', 'Hz. Âişe', 'Hz. Hafsa'], 0, 'Hz. Hatice.'], ['Hz. Hatice’nin vefatından sonra evlendiği ilk hanımı kimdir?', ['Sevde bint Zem‘a', 'Hafsa', 'Meymûne'], 0, 'Sevde bint Zem‘a (620).']]),
    L('cocuklar', 'Peygamberimizin Çocukları', 'Konu',
      'Peygamberimizin kızları Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma’dır.',
      [['Oğulları', 'İlk oğlu Kâsım, sonra Abdullah doğdu; ikisi de küçük yaşta vefat etti.'], ['Kızları', 'Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma.'], ['İbrâhim', 'Son oğlu İbrâhim, Mâriye’den dünyaya geldi.']],
      'Hz. Hatice’den Kâsım, Zeyneb, Rukıyye, Ümmü Külsûm, Fâtıma ve Abdullah doğdu; İbrâhim ise Mâriye’dendir.',
      [['Hz. Hatice’den çocukları', 'Peygamberlikten önce doğan ilk oğlu ve ilk ölen çocuğu Kâsım’dır (Ebü’l-Kāsım künyesi); ardından Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma doğdu. Oğulları Tayyib ile Tâhir’in aslında Abdullah adlı bir oğlunun lakapları olduğu da rivayet edilir.', 'DİA, “Muhammed” md.'], ['Kızlarının hayatı', 'Rukıyye, Ramazan 2’de (Mart 624) vefat etti; Ümmü Külsûm Hz. Osman’la evlendi (Rebîülevvel 3); Hz. Ali ile Fâtıma’nın evliliği Zilkade 2’ye (Mayıs 624) konur; Zeyneb 8/629’da vefat etti.', 'DİA, “Muhammed” md. (kronoloji)'], ['İbrâhim', 'Oğlu İbrâhim, DİA kronolojisinde Zilhicce 8’de (Mart-Nisan 630) doğdu; 29 Şevval 10’da (28 Ocak 632) vefat etti, o gün güneş tutulması oldu.', 'DİA, “Muhammed” md. (kronoloji)']],
      [['Peygamberimizin ilk çocuğu kimdir?', ['Kâsım', 'Fâtıma', 'İbrâhim'], 0, 'Kâsım; Peygamberimiz “Ebü’l-Kâsım” künyesiyle anılırdı.'], ['İbrâhim hangi hanımından dünyaya geldi?', ['Mâriye', 'Hatice', 'Âişe'], 0, 'Mâriye’den.']]),
    L('iliskiler', 'Müminler, Müşrikler ve Ehl-i Kitapla İlişkiler', 'Konu',
      'Peygamberimiz müminlere kardeşçe, başkalarına adaletle davrandı.',
      [['Müminler', 'Muhacir ve Ensar kardeş oldu, birbirine yardım etti.'], ['Müşrikler', 'Mekke’yi fethedince herkesi affetti.'], ['Ehl-i Kitap', 'Yahudilerle ve hıristiyanlarla sözleşmeler yaptı.']],
      'Medine’de müminler arasında kardeşlik, yahudi ve müşriklerle Medine Vesikası, Mekke müşrikleriyle savaş ve barış, hıristiyanlarla cizye antlaşmaları dönemin ilişki biçimleridir.',
      [['Müminlerle', 'Muhacirler ve Ensar arasında kardeşlik kuruldu (Muâhât); ortak yaşam Mescid-i Nebevî etrafında şekillendi.', 'DİA, “Muâhât”, “Mescid-i Nebevî” md.'], ['Müşriklerle', 'Medine döneminde Mekke müşrikleriyle Bedir, Uhud ve Hendek karşılaşmaları yaşandı; Hudeybiye ile barış sağlandı, Mekke fethedilince genel af ilân edildi.', 'DİA, “Muhammed” md.'], ['Ehl-i Kitapla', 'Medine Vesikası, müslümanlar, yahudiler ve müşrik Araplar arasında düzenlendi; Tebük’te Eyle piskoposu ve diğer bölgelerin halkı cizye ödemeyi kabul etti; Habeş Necâşîsi Ashame müslüman oldu.', 'DİA, “Medine Vesîkası”, “Tebük Gazvesi” md.']],
      [['Medine’de müslümanlar, yahudiler ve müşrik Araplar arasında hangi belge düzenlendi?', ['Medine Vesikası', 'Hudeybiye Antlaşması', 'Veda Hutbesi'], 0, 'Medine Vesikası.'], ['Peygamberimiz Mekke’yi fethedince müşriklere ne yaptı?', ['Genel af ilân etti', 'Sürgün etti', 'Savaş ilân etti'], 0, 'Genel af ilân etti.']])
  ] });

  // tüm derslere kitap bölümü numarası
  DONEMLER.forEach(d => d.dersler.forEach(x => { if (BOLUM_NO[x.id] != null) x.bolum = BOLUM_NO[x.id]; }));

  // yeni sınavlar ve mevcut sınavların kapsamı
  SINAVLAR.push({ id: 's-giris', ad: 'Siyer’e Giriş Sınavı', donemler: ['giris'] }, { id: 's-aile', ad: 'Aile ve İlişkiler Sınavı', donemler: ['aile'] });
  SINAVLAR.find(z => z.id === 's-sonrasi').donemler.push('aile');

  // yerler ve haritalar
  Object.assign(YERLER, {
    hayber: { ad: 'Hayber', lat: 25.70, lon: 39.30, e: '🏰', t: 'sehir' },
    tebuk: { ad: 'Tebük', lat: 28.38, lon: 36.57, e: '🏜️', t: 'sehir' },
    mute: { ad: 'Mûte', lat: 31.07, lon: 35.70, e: '⚔️', t: 'savas' }
  });
  Object.assign(HARITA, {
    'mekke-kabe': { yer: ['mekke'] }, 'mekke-toplum': { yer: ['mekke', 'taif'] },
    nadir: { yer: ['medine', 'hayber'], yol: ['medine', 'hayber'] }, kurayza: { yer: ['medine'] }, ifk: { yer: ['medine'] }, reci: { yer: ['medine', 'mekke'] },
    hayber: { yer: ['medine', 'hayber'], yol: ['medine', 'hayber'] }, mektuplar: { yer: ['medine', 'sam', 'habes'] }, kaza: { yer: ['medine', 'mekke'], yol: ['medine', 'mekke'] },
    mute: { yer: ['medine', 'mute'], yol: ['medine', 'mute'] }, huneyn: { yer: ['mekke', 'taif'], yol: ['mekke', 'taif'] },
    tebuk: { yer: ['medine', 'tebuk'], yol: ['medine', 'tebuk'] }, dirar: { yer: ['medine'] }
  });

  // ayrıntılı anlatım, DİA maddeleri, Siyer Vakfı dersleri
  const SV_YIL = SV('medine-doneminin-genel-bir-degerlendirmesi-muhammed-emin-yildirim', '1rnKPyAHXWc', 'Medine Döneminin Genel Bir Değerlendirmesi', 'Muhammed Emin Yıldırım');
  const SV_MEKKE_GENEL = SV('muhammed-emin-yildirim-mekke-doneminin-genel-bir-degerlendirilmesi', '5A-Nap_VQIY', 'Mekke Dönemi’nin Genel Bir Değerlendirilmesi', 'Muhammed Emin Yıldırım');
  Object.assign(DETAY, {
    'siyer-ilmi': { metin: ['Siyer kelimesi, sözlükte “hal, durum, davranış, idare, yol, hareket” gibi anlamlara gelen sîretin çoğuludur. Kur’an’da sîret bir yerde “durum” anlamında geçer (Tâhâ 20/21); hadis kaynaklarında ise “tutum, davranış biçimi” anlamında kullanılır.', 'Siyer; fıkıh literatüründe cihad, haraç, ganimet, cizye, eman gibi konuları içeren özel bir bölümün adıdır. Peygamber’in hayatını anlatan eserler de aynı adla anılır. İlk dönem yazarlardan İbn İshak’ın eserinin İbn Hişâm tarafından aktarılan hâli ile İbn Sa‘d’ın Tabakât’ı en çok başvurulan kaynaklardandır.'], dia: [DIA('siyer', 'Siyer'), DIA('ibn-ishak', 'İbn İshak'), DIA('ibn-hisam', 'İbn Hişâm')], sv: [SV('neden-siyer-ogrenmeliyiz-2', '', 'Neden Siyer Öğrenmeliyiz?', 'Siyer Vakfı'), SV_MEKKE_GENEL] },
    'mekke-kabe': { metin: ['Kâbe, Kur’an’da Beyt, Beytullah, el-Beytü’l-atîk, el-Beytü’l-harâm ve Mescid-i Harâm gibi adlarla anılır. Âl-i İmrân 3/96’da insanlar için kurulan “ilk ev” olarak zikredilir; Bakara 2/125-127’de İbrâhim ve İsmâil’in evi temiz tutmakla görevlendirildiği, İbrâhim’in Mekke’nin emin bir şehir olması için dua ettiği anlatılır.', 'Kusay, o güne kadar damı bulunmayan Kâbe’nin üzerini hurma dallarıyla örtmüştür. Kureyş, Kâbe’yi 605’te yeniden inşa etti; Hz. Muhammed’in bu sırada amcası Abbas’la taş taşıdığı bilinir. Mekke’nin yönetimi V. yüzyılın ilk yarısında Kusay b. Kilâb ile Kureyş’e geçti.'], dia: [DIA('kabe', 'Kâbe'), DIA('mekke', 'Mekke'), DIA('hacerulesved', 'Hacerülesved')], sv: [SV('prof-dr-mustafa-sabri-kucukasci-hz-peygamberin-sasgeldigi-donemde-mekke', 'QwGXAozhEsA', 'Hz. Peygamber’in (sas) Geldiği Dönemde Mekke', 'Prof. Dr. Mustafa Sabri Küçükaşçı')] },
    'mekke-toplum': { metin: ['Kusay’dan sonra Mekke ve Kâbe’nin yönetimini oğlu Abdüddâr devraldı; bu durum Kureyş’in diğer kolları arasında ihtilafa yol açtı ve görevler paylaşıldı: hicâbe, livâ ve nedve Abdüddâroğulları’na; sikâye, rifâde ve kıyâde Abdümenâfoğulları’na verildi. Bu düzen Mekke’nin fethine kadar sürdü.', 'Dârünnedve, Mekke ile ilgili kararların alındığı bir asiller meclisiydi; kırk yaşın üstündeki Kureyş boy başkanları katılabilirdi. Ukâz gibi panayırlar ise ticaretin, şiirin ve kabile şerefi mücadelesinin merkeziydi. “Câhiliye” kelimesi cehl kökündendir; Kur’an bilgisizlik anlamının ötesinde, doğru olanın tersine inanmayı ve davranmayı da anlatır.'], dia: [DIA('mekke', 'Mekke'), DIA('ukaz', 'Ukâz'), DIA('cahiliye', 'Câhiliye')], sv: [SV('prof-dr-adem-apak-hz-peygamber-sas-donemi-siyer-cografyasi-nin-sosyal-ve-siyasal-hayati', 'OCtkh7unrKM', 'Hz. Peygamber (sas) Dönemi Siyer Coğrafyası’nın Sosyal ve Siyasal Hayatı', 'Prof. Dr. Adem Apak'), SV('prof-dr-ali-bardakoglu-siyer-cografyasinda-nubuvvet-oncesi-hukuk-ve-gelenek', 'LYEQqJQbprk', 'Siyer Coğrafyası’nda Nübüvvet Öncesi Hukuk ve Gelenek', 'Prof. Dr. Ali Bardakoğlu')] },
    reci: { metin: ['Uhud’dan sonra Benî Lihyân reisi Hâlid b. Süfyân Medine’ye saldırı hazırlığına girişti; Hz. Peygamber, Abdullah b. Üneys’i görevlendirerek tehdidi ortadan kaldırdı. Bunun üzerine Lihyânoğulları akrabaları Adal ve Kâre kabileleriyle birlikte öç almak için plan yaptı; Adal ve Kâre bir heyet gönderip kendilerine İslam’ı öğretecek kimseler istedi.', 'Heyette Mersed b. Ebû Mersed (veya Âsım b. Sâbit) başkanlığında Hâlid b. Bükeyr, Hubeyb b. Adî, Zeyd b. Desine, Abdullah b. Târık ve Muattib b. Ubeyd bulunuyordu. Mekke ile Usfân arasındaki Recî‘ suyu yanında 100 kişilik bir birlik tarafından kuşatıldılar. Bi’rimaûne’de ise Âmir b. Sa‘saa reisi Ebû Berâ’nın güvencesine güvenilerek yetmiş kadar kurrâ gönderilmişti.'], dia: [DIA('reci-vakasi', 'Recî‘ Vak‘ası'), DIA('birimaune', 'Bi’rimaûne')], sv: [SV_YIL, SV_MEDINE_KRON] },
    nadir: { metin: ['Medine Vesikası ile yahudi kabileler de şehrin ortak düzenine dahil edilmişti. Mekkelilerle gizli anlaşma yapan Benî Nadîr’in Medine’den çıkarılması, DİA kronolojisinde Rebîülevvel 4 (Ağustos 625) olarak geçer. Çıkarılmalarının ardından Hz. Peygamber, ailesinin yıllık geçimine yetecek miktarı onların topraklarında yetişen ürünlerden almaya başladı; “fey” denen bu gelirler, fethedilen yerlerden alınan bazı malları da kapsar.', 'Hayber’e yerleşen Benî Nadîr yahudilerinin tahrikiyle oluşan müttefik güçler (ahzâb) 10-12.000 kişilik bir orduyla Medine’yi kuşattı; komutanları Ebû Süfyân’dı. Bu olay Hendek Gazvesi’dir.'], dia: [DIA('medine-vesikasi', 'Medine Vesikası'), DIA('hendek-gazvesi', 'Hendek Gazvesi'), DIA('hayber', 'Hayber')], sv: [SV('medine-doneminde-yahudilerle-iliskiler-prof-dr-nuh-arslantas', 'Oc9vWaI4uNc', 'Medine Döneminde Yahudilerle İlişkiler', 'Prof. Dr. Nuh Arslantaş', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-10-prof-dr-nuh-arslantas.pdf'), SV_MEDINE_KRON] },
    ifk: { metin: ['İfk Hadisesi hemen hemen bütün kaynaklarda Hz. Âişe’den aynı şekilde nakledilir: Benî Mustaliḳ Gazvesi’nden dönerken Âişe, hareket emri verildiğinde tabii ihtiyacı için ordugâhtan uzaklaştı; geri gelirken gerdanlığının düştüğünü fark edip aramaya koyuldu, kafile ise haberi olmadan hareket etti.', 'Bu durum hakkında çıkan dedikodular üzerine Hz. Peygamber, Âişe’ye “Masumsan Allah seni temize çıkaracaktır, bir günah işlediysen tövbe et” dedi; Âişe de Hz. Yâkub gibi sabredip Allah’tan yardım dilemekten başka çaresi olmadığını söyledi (Yûsuf 12/18). Nûr sûresi 24/11-22 âyetleri olayı ve beraati bildirir.'], dia: [DIA('ifk-hadisesi', 'İfk Hadisesi'), DIA('ezvac-i-tahirat', 'Ezvâc-ı Tâhirât')], sv: [SV_YIL] },
    kurayza: { metin: ['Hendek kuşatmasında, Hayber’e yerleşen Benî Nadîr’in tahrikiyle oluşan ahzâb 10-12.000 kişiydi. Medine’de kalan Benî Kurayza da ahzâbın safında yer aldı; ancak düşman saflarında ortaya çıkan ihtilaf, Kurayza yahudilerinin saf dışı kalmasıyla sonuçlandı.', 'DİA, Hendek Gazvesi maddesinde Resûl-i Ekrem’in Hendek’ten hemen sonra Benî Kurayza yahudilerinin üzerine yürüdüğünü kaydeder; kronolojide bu gazve Zilhicce 5 (Mayıs 627)’e konur.'], dia: [DIA('hendek-gazvesi', 'Hendek Gazvesi'), DIA('medine-vesikasi', 'Medine Vesikası')], sv: [SV('medine-doneminde-yahudilerle-iliskiler-prof-dr-nuh-arslantas', 'Oc9vWaI4uNc', 'Medine Döneminde Yahudilerle İlişkiler', 'Prof. Dr. Nuh Arslantaş', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-10-prof-dr-nuh-arslantas.pdf'), SV_SAVAS] },
    hayber: { metin: ['Hayber adı, aslında Medine’nin yaklaşık 180 km kuzeyinden başlayan, denizden 850-1000 m yükseklikte, volkanik topraklarla çevrili geniş bir vadiye aittir. Bölgedeki yahudilerin dilinde “kale” anlamına geldiği söylenir; Câhiliye döneminde yedi ayrı kaleden oluşan, yarımadanın güney-kuzey ana yolu üzerindeki önemli bir ticaret merkeziydi.', 'Fetihten sonra Ketîbe vahasından elde edilen yıllık mahsul bazı kimselerin maaş ve atıyyeleri için kullanıldı. Yahudilerin Hayber’deki ikameti Hz. Ömer’in hilâfetine kadar devam etti; Hz. Ömer 20’de (641) onları bölgeden çıkardı.'], dia: [DIA('hayber', 'Hayber')], sv: [SV_MEDINE_KRON, SV_SAVAS] },
    mektuplar: { metin: ['Hudeybiye’den sonra, hicretin 7. yılı başında Hz. Peygamber Bizans ve Sâsânî imparatorları başta olmak üzere civar ülke yöneticilerine ve kabile reislerine elçiler ve İslam’a davet mektupları gönderdi. Kronolojiye göre aynı yıl Habeş Necâşîsi Ashame müslüman oldu, Mısır mukavkısı hediyelerle birlikte Mâriye’yi gönderdi; Bahreyn yöneticisi Münzir b. Sâvâ’ya Alâ b. Hadramî elçi olarak gitti.', 'Herakleios’a gönderilen mektuba karşı elçiye güzel davranıldı; Bizans’la ilişkiler Mûte Savaşı’ndan (Eylül 629) itibaren gerginleşti.'], dia: [DIA('tebuk-gazvesi', 'Tebük Gazvesi'), DIA('muhammed', 'Muhammed (kronoloji)')], sv: [SV('islama-davet-mektuplari-cevre-devletlerle-ve-hristiyanlarla-iliskiler-prof-dr-levent-ozturk', 'oPp3rpVI0ZM', 'İslâm’a Davet Mektupları, Çevre Devletlerle ve Hristiyanlarla İlişkiler', 'Prof. Dr. Levent Öztürk', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-16-prof-dr-levent-ozturk.pdf'), SV_MEDINE_KRON] },
    kaza: { metin: ['Hudeybiye Antlaşması’nda müslümanların bir yıl sonra Kâbe’yi ziyarete gelebilecekleri, üzerlerinde sadece yolcu kılıcı taşıyacakları ve şehirde üç günden fazla kalmayacakları hükme bağlanmıştı. Hz. Peygamber, ertesi yıl Hudeybiye’de bulunanların umre için hazırlanmasını söyledi; isteyen diğer müminler de katılabildi. Kadın ve çocuklar hariç umreye gidenlerin sayısı 2000’e ulaştı.', 'İbn Abbas, Bakara 2/194 âyetinin (“Haram ay haram aya karşılıktır”) bu umre hakkında indiğini söyler. Aynı ay Hz. Peygamber Meymûne bint Hâris ile evlendi.'], dia: [DIA('umretul-kaza', 'Umretü’l-kazâ'), DIA('hudeybiye-antlasmasi', 'Hudeybiye Antlaşması')], sv: [SV_MEDINE_KRON] },
    mute: { metin: ['Mûte, Lût gölünün güneyinde, Kerek’e yakın tarım arazilerine sahip bir yerdir. Hz. Peygamber katılmadığı için burada yapılan savaş bir seriyyedir; üç komutan tayin edildiği için kaynaklarda “ceyşü’l-ümerâ” (komutanlar ordusu) de denir.', 'Gassânî reisi Şürahbîl b. Amr’ın elçi Hâris b. Umeyr’i öldürmesi üzerine 3000 kişilik ordu hazırlandı. Komutan olarak sırasıyla Zeyd b. Hârise, Ca‘fer b. Ebû Tâlib ve Abdullah b. Revâha atandı; üçü de şehit düştü. Sancağı alan Hâlid b. Velîd, kanatları değiştirerek ordunun düzenini yeniden kurdu.'], dia: [DIA('mute-savasi', 'Mûte Savaşı'), DIA('cafer-b-ebu-talib', 'Ca‘fer b. Ebû Tâlib')], sv: [SV_SAVAS, SV_MEDINE_KRON] },
    huneyn: { metin: ['Huneyn Gazvesi, Hevâzin Gazvesi olarak da bilinir ve Kur’an’da adı geçen iki gazveden biridir. Yeri tam tespit edilememiştir; Mekke’den on küsur mil uzaklıkta, su kaynaklarından mahrum, çöllerle kaplı bir vadidir.', 'Kronolojide Huneyn 11 Şevval 8 (1 Şubat 630), Tâif Gazvesi ve Huneyn ganimetlerinin Ci‘râne’de taksimi Zilkade 8’e konur. Tâif, Hicaz’ın önemli şehirlerinden biridir ve İslam’a düşman olanların sığındığı bir yerdi.'], dia: [DIA('huneyn-gazvesi', 'Huneyn Gazvesi'), DIA('taif', 'Tâif')], sv: [SV_SAVAS, SV_MEDINE_KRON] },
    tebuk: { metin: ['Tebük, Medine’ye 700 km uzaktadır ve Medine–Suriye ticaret yolu üzerindedir. Sefer sırasındaki güçlükler yüzünden Kur’an’da “sâatü’l-usre” (güçlük zamanı) denir; münafıkların iç yüzünü ortaya koyan âyetler indiği için “Gazvetü’l-fâdıha” da denir.', 'Kısa sürede 30.000 kişilik bir ordu hazırlandı; Seniyyetülvedâ’daki karargâhta 10.000 at ve 12.000 deve vardı. Hz. Peygamber, Hz. Ali’yi ehl-i beyti başında bıraktı (bazı rivayetlerde Muhammed b. Mesleme umumi vekil). Seferden Receb’de çıkıldı, Ramazan’da dönüldü; sefere mazeretsiz katılmayanlar arasında üç sahâbî kaldı.'], dia: [DIA('tebuk-gazvesi', 'Tebük Gazvesi'), DIA('mescid-i-dirar', 'Mescid-i Dırâr')], sv: [SV_MEDINE_KRON, SV_SAVAS] },
    dirar: { metin: ['Mescid-i Dırâr’ın adı Kur’an’da “mesciden dırâren” (zarar vermek için yapılan mescit) olarak geçer (Tevbe 9/107). Münafıklar, İslam’ın Medine’de güçlenmesinden rahatsızdı; Hz. Bilâl’in ezanından sonra müminlerin saf tutmasını, birliklerinin artmasını izliyor ve bu mescitle ayrılık çıkarmayı amaçlıyorlardı. Mescit, Hz. Peygamber’in emriyle yıkıldı.', 'Hicretin 9. yılı Heyetler Yılı olarak bilinir: DİA kronolojisi, Benî Sa‘lebe, Benî Sudâ’, Benî Bâhile, Benî Cerm, Benî Hüzeyl gibi kabilelerin heyetlerinin Medine’ye gelip müslüman olduğunu, Himyer krallarının İslam’a davet edilip Müslümanlığı benimsediğini kaydeder.'], dia: [DIA('mescid-i-dirar', 'Mescid-i Dırâr'), DIA('munafik', 'Münâfık')], sv: [SV('heyetler-yili-ve-gelen-heyetlerin-gorusmeleri-prof-dr-mustafa-fayda', '4ycKK_CUsPw', 'Heyetler Yılı ve Gelen Heyetlerin Görüşmeleri', 'Prof. Dr. Mustafa Fayda', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-18-prof-dr-mustafa-fayda.pdf'), SV_MEDINE_KRON] },
    esler: { metin: ['DİA kronolojisinde Hz. Peygamber’in evlilikleri tarihleriyle yer alır: Sevde bint Zem‘a (Ramazan 620), Âişe (Şevval 2/623), Hafsa (Şâban 3/625), Zeyneb bint Cahş (Zilkade 5/627), Cüveyriye bint Hâris (Şâban 5/627), Ümmü Habîbe bint Ebû Süfyân (7/628), Safiyye bint Huyey (7/628) ve Meymûne bint Hâris (Zilkade 7/629); Zeyneb bint Huzeyme’nin vefatı da Rebîülâhir 4’te kayıtlıdır.', 'Hz. Âişe, Resûl-i Ekrem’in ahlâkından söz ederken onun kötülüğe kötülükle karşılık vermediğini, insanları bağışlayıp kusurlarını görmezden geldiğini anlatır. Peygamber’in hayâya çok önem verdiği, hoşlanmadığı bir şeyin ancak yüzünden anlaşıldığı belirtilir.'], dia: [DIA('ezvac-i-tahirat', 'Ezvâc-ı Tâhirât'), DIA('hatice', 'Hatice')], sv: [SV('en-ideal-es-muhammed-emin-yildirim', 'MAl8_5RYnAc', 'En İdeal Eş', 'Muhammed Emin Yıldırım'), SV('es-olarak-hz-peygamber-sas-prof-dr-mustafa-agirman', 'mrdy335FmWU', 'Eş Olarak Hz. Peygamber (sas)', 'Prof. Dr. Mustafa Ağırman')] },
    cocuklar: { metin: ['Hz. Hatice’den sekiz çocuğu olduğu, oğullarının sayısının üç olduğu da söylenir. Peygamberlikten önce doğan ilk oğlu ve ilk ölen çocuğu Kâsım’dır; onun ardından sırasıyla Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma doğdu. Tayyib ile Tâhir’in, Abdullah adlı bir oğlunun lakapları olduğu da rivayet edilmiştir.', 'Rukıyye’nin vefatı Ramazan 2’de (Mart 624), Hz. Osman’ın Ümmü Külsûm ile evlenmesi Rebîülevvel 3’te, Hz. Ali ile Fâtıma’nın evliliği 2. yılın Zilkade’sinde, Zeyneb’in vefatı Safer 8’de kayıtlıdır. Oğlu İbrâhim Mâriye’den doğdu; vefatı 29 Şevval 10’da (28 Ocak 632) güneş tutulması sırasında oldu.'], dia: [DIA('hatice', 'Hatice'), DIA('muhammed', 'Muhammed (kronoloji)')], sv: [SV('en-ideal-cocuk-muhammed-emin-yildirim', '2Q41IywvWGM', 'En İdeal Çocuk', 'Muhammed Emin Yıldırım'), SV('baba-olarak-hz-peygamber-sas-doc-dr-erdinc-ahatli', 'QxCmOcsLzDg', 'Baba Olarak Hz. Peygamber (sas)', 'Doç. Dr. Erdinç Ahatlı')] },
    iliskiler: { metin: ['Müminlerle ilişki: Medine’ye hicretten sonra Mescid-i Nebevî toplumsal hayatın merkezi oldu; muhacir ve ensar arasında kardeşlik (muâhât) kuruldu. Müşriklerle ilişki: Medine döneminde Bedir, Uhud ve Hendek gibi karşılaşmalar yaşandı; Hudeybiye ile barış yolu açıldı ve Mekke’nin fethinde genel af ilân edildi.', 'Ehl-i Kitapla ilişki: Medine Vesikası müslümanlar, yahudiler ve müşrik Araplar arasında hazırlandı. Hıristiyanlarla ilişkide Habeş Necâşîsi Ashame’nin müslüman olması, Tebük’te Eyle piskoposu Yuhannâ b. Rü’be’nin cizye anlaşması örnek verilebilir. Medine kronolojisi ve DİA maddeleri bu ilişkilerin ayrıntılı bir resmini verir.'], dia: [DIA('medine-vesikasi', 'Medine Vesikası'), DIA('muahat', 'Muâhât'), DIA('ehl-i-kitap', 'Ehl-i Kitap')], sv: [SV('medine-doneminde-mekke-musrikleriyle-iliskiler-prof-dr-m-ali-kapar', 'S0eQw4xIRoA', 'Medine Döneminde Mekke Müşrikleriyle İlişkiler', 'Prof. Dr. M. Ali Kapar', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-9-prof-dr-m-ali-kapar.pdf'), SV('medine-doneminde-diger-musriklerle-iliskiler-prof-dr-adem-apak', '1oseb6wvLso', 'Medine Döneminde Diğer Müşriklerle İlişkiler', 'Prof. Dr. Adem Apak', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-11-prof-dr-adem-apak.pdf'), SV('medine-doneminde-yahudilerle-iliskiler-prof-dr-nuh-arslantas', 'Oc9vWaI4uNc', 'Medine Döneminde Yahudilerle İlişkiler', 'Prof. Dr. Nuh Arslantaş', 'https://siyervakfi.org/dokuman/iman-sehri-medine/ders-10-prof-dr-nuh-arslantas.pdf')] }
  });

  Object.assign(GORSEL, {
 "hayber": [
  {
   "dosya": "img/foto/hayber-1.jpg",
   "baslik": [
    "Hayber kalelerinden görünüm",
    "A view over the fortress of Khaybar"
   ],
   "yazar": "Hardscarf",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Khaybar_-_view_over_the_fortress.jpg"
  }
 ],
 "mektuplar": [
  {
   "dosya": "img/foto/mektuplar-1.jpg",
   "baslik": [
    "Resûlullah’ın Mısır Mukavkısı’na mektubu (Topkapı Sarayı Müzesi)",
    "The Prophet’s letter to the Muqawqis of Egypt (Topkapı Palace Museum)"
   ],
   "yazar": "Benjaminkhas07",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Letter_of_Prophet_Muhammad_to_the_Muqawqis_of_egypt_-_Topkapi_Palace_Museum.jpg"
  },
  {
   "dosya": "img/foto/mektuplar-2.jpg",
   "baslik": [
    "Resûlullah’ın Necâşî’ye mektubu",
    "The Prophet’s letter to the Negus"
   ],
   "yazar": "Zak.kapadia",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Najjasi1.jpg"
  }
 ],
 "hudeybiye": [
  {
   "dosya": "img/foto/hudeybiye-1.jpg",
   "baslik": [
    "Hudeybiye Mescidi",
    "The Hudaybiyya Mosque"
   ],
   "yazar": "GusJuned",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Hudaibiyah_Mosque_-_panoramio.jpg"
  }
 ],
 "mekke-kabe": [
  {
   "dosya": "img/foto/mekke-kabe-1.jpg",
   "baslik": [
    "Mescid-i Harâm, 1889 (Snouck Hurgronje)",
    "The Sacred Mosque in 1889 (Snouck Hurgronje)"
   ],
   "yazar": "C. Snouck Hurgronje",
   "lisans": "Public domain",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Masjid_Haram_1889_Snouck_Hurgronje.jpg"
  }
 ],
 "tebuk": [
  {
   "dosya": "img/foto/tebuk-1.jpg",
   "baslik": [
    "Tebük Kalesi",
    "Tabuk Fortress"
   ],
   "yazar": "amanderson2",
   "lisans": "CC BY 2.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Tabuk_Fortress_2022.jpg"
  }
 ],
 "hendek": [
  {
   "dosya": "img/foto/hendek-1.jpg",
   "baslik": [
    "Selmân-ı Fârisî Mescidi (Hendek bölgesi, Medine)",
    "The Mosque of Salman al-Farisi (Trench area, Medina)"
   ],
   "yazar": "marviikad",
   "lisans": "CC BY-SA 2.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mosque_Salman_Al_farissi.jpg"
  }
 ],
 "kaza": [
  {
   "dosya": "img/foto/fil-1.jpg",
   "baslik": [
    "Kâbe (umre burada yapılır)",
    "The Ka‘ba (where umra is performed)"
   ],
   "yazar": "Moataz Egbaria (معتز اغبارية)",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Kaaba,_Makkah3.jpg"
  }
 ]
});
})();
