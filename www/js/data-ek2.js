/* ===== EK DERSLER 2 + "BUGÜN BİZE NE DİYOR?" + HASSAS DERSLER =====
 Uzman toplantısı kararları: eksik konular (Hz. Ömer'in müslüman oluşu, Kıblenin değişmesi, Suffe ve ezan, Zeyd b. Hârise, Ridde),
 her derse soru/gözlem biçiminde 1-2 cümlelik düşünme kutusu (vaaz tonu yok, emir kipi yok), çocuk modunda hüzünlü derslere nazik uyarı. */
(function () {
  const don = id => DONEMLER.find(d => d.id === id);
  const sonra = (donemId, oncekiId, ders) => { const d = don(donemId), i = d.dersler.findIndex(x => x.id === oncekiId); d.dersler.splice(i + 1, 0, ders); };

  sonra('mekke', 'habese', L('omer-islam', 'Hz. Ömer’in Müslüman Oluşu', '616',
    'Güçlü bir adam olan Ömer önce karşı çıktı, sonra Kur’an’ı dinleyince müslüman oldu.',
    [['Öfkeli yol', 'Ömer önce müslümanlara karşıydı.'], ['Kur’an', 'Kız kardeşinin evinde Tâhâ sûresini okuyanları duydu.'], ['Karar', 'Yumuşadı ve müslüman olmaya karar verdi.']],
    'Bi‘setin 6. yılında (616) müslüman oldu; DİA onun müslüman oluşuna dair iki rivayet bulunduğunu, en meşhurunun Tâhâ sûresiyle ilgili olduğunu kaydeder.',
    [['Önceki tutumu', 'Önceleri Hz. Peygamber’e ve İslâmiyet’e karşı düşmanlık gösteriyor, özellikle kabilesinden müslüman olanlara işkence yapıyordu.', 'DİA, “Ömer” md.'], ['Meşhur rivayet', 'Hamza’nın müslüman oluşundan sonra Hz. Peygamber’i öldürmeye çıktığı, yolda kız kardeşi Fâtıma ile eniştesi Saîd b. Zeyd’in müslüman olduğunu öğrendiği, evlerinde onları Tâhâ sûresini okurken bulduğu ve yumuşadığı anlatılır.', 'DİA, “Ömer” md.'], ['Dârülerkam', 'Habbâb’dan Resûlullah’ın Erkam’ın evinde bulunduğunu öğrenip oraya gitti; Ömer İslâm’ı Dârülerkam’da kabul etmiştir.', 'DİA, “Ömer”, “Dârülerkam” md.']],
    [['Hz. Ömer hangi yıl müslüman oldu?', ['616 (bi‘setin 6. yılı)', '571', '632'], 0, 'Bi‘setin 6. yılında, 616’da.'], ['Meşhur rivayete göre Ömer, kız kardeşi ve eniştesinin evinde hangi sûreyi okuyanları duydu?', ['Tâhâ sûresi', 'Fîl sûresi', 'Nasr sûresi'], 0, 'Tâhâ sûresini.']]));
  sonra('medine', 'medine-ilk', L('kible', 'Kıblenin Kâbe’ye Çevrilmesi', '624',
    'Müslümanlar bir süre Kudüs’e dönüp namaz kıldı. Sonra kıble Kâbe oldu.',
    [['Önce Kudüs', 'Hicretten sonra bir süre Mescid-i Aksâ yönüne namaz kılındı.'], ['Arzu', 'Peygamberimiz Kâbe’nin kıble olmasını istiyordu.'], ['Kâbe', 'İlgili âyet inince Kâbe’ye dönüldü.']],
    'Hicretin 2. yılı Receb ayında (Ocak 624) kıble Mescid-i Aksâ’dan Kâbe’ye çevrildi; sürenin hicretten 16 veya 17 ay sonra olduğu genel kabul görür.',
    [['Kâbe’nin yeri', 'Kâbe, İslâm kaynaklarına göre Hz. İbrâhim’den beri kıble idi; kıblenin Kâbe’ye çevrilmesi Bakara 2/144-146’da anılır.', 'DİA, “Kıble” md.'], ['Süre', 'Dokuz, on, on üç, on sekiz, on dokuz ay veya iki yıl gibi isnadı zayıf rivayetler bir yana bırakılırsa genel olarak hicretten 16 veya 17 ay sonra çevrildiği kabul edilir.', 'DİA, “Kıble” md.'], ['Peygamber’in arzusu', 'Kudüs’e yönelerek namaz kılarken Kâbe’nin kıble yapılmasını arzuluyordu; Bakara 2/144 buna işaret eder.', 'DİA, “Kıble” md.']],
    [['Kıble Kâbe’ye çevrilmeden önce müslümanlar hangi yöne dönüp namaz kıldı?', ['Kudüs’teki Mescid-i Aksâ’ya', 'Medine’ye', 'Tâif’e'], 0, 'Kudüs’teki Mescid-i Aksâ’ya.'], ['Genel kabule göre kıble, hicretten kaç ay sonra çevrildi?', ['16 veya 17 ay', '2 ay', '5 yıl'], 0, 'Genel kabule göre 16 veya 17 ay sonra.']]));
  sonra('medine', 'kible', L('suffe', 'Suffe ve Ezan', '622–623',
    'Mescidin yanında evsiz sahâbîler için bir yer yapıldı ve ezan okunmaya başladı.',
    [['Suffe', 'Evi olmayan sahâbîler mescidin “Suffe” denen bölümünde kaldı.'], ['Rüya', 'Abdullah b. Zeyd ezanı rüyasında öğrendi.'], ['Bilâl', 'Bilâl yüksek bir evin üstünden sabah ezanını okudu.']],
    'Medine’de evi olmayan sahâbîler Mescid-i Nebevî’nin Suffe bölümünde kaldı; ezan hicrî 1. (622) veya bir rivayete göre 2. (623) yılda meşrû kılındı.',
    [['Suffe', 'Suffe, sözlükte “gölgelik” demektir; Mescid-i Nebevî’nin giriş kısmında, Medine’de evleri ve yakınları olmayan sahâbîlerin barınması için yapılan mekânın adıdır. Burada kalanlara ashâb-ı Suffe denir; ihtiyaçları Resûl-i Ekrem ve zengin sahâbîler tarafından karşılanırdı.', 'DİA, “Suffe” md.'], ['Kalanlar', 'Aynı anda yetmiş kişinin kaldığına dair rivayetler vardır; çeşitli zamanlarda kalanların toplam sayısının 400’e ulaştığı söylenir.', 'DİA, “Suffe” md.'], ['Ezan', 'Abdullah b. Zeyd’e rüyada ezan öğretildi; Resûl-i Ekrem Bilâl’e ezan cümlelerini ezanda ikişer, ikāmette birer defa okumasını emretti. Hz. Ömer de aynı rüyayı gördüğünü bildirdi. Bilâl, bir evin üstüne çıkıp ilk olarak sabah ezanını okudu.', 'DİA, “Ezan” md.']],
    [['Ashâb-ı Suffe kimlerdir?', ['Evi olmayıp Mescid-i Nebevî’nin Suffe bölümünde kalan sahâbîler', 'Savaşta bayrak taşıyanlar', 'Hac görevlileri'], 0, 'Medine’de evi ve yakını olmayan, mescidin Suffe bölümünde kalan sahâbîler.'], ['Bilâl bir evin üstünden hangi ezanı okudu?', ['Sabah ezanını', 'Akşam ezanını', 'Yatsı ezanını'], 0, 'DİA’ya göre ilk olarak sabah ezanını okudu.']]));
  sonra('medine', 'kurayza', L('zeyd', 'Zeyd b. Hârise ve Evlâtlık Meselesi', '627',
    'Zeyd, Peygamberimizin çok sevdiği bir sahâbîydi. Ona “Resûlullah’ın sevgilisi” denirdi.',
    [['Çocukken', 'Zeyd küçükken kaçırıldı ve Ukâz’da köle olarak satıldı.'], ['Sevgi', 'Peygamberimiz onu çok sevdi; ona “hibbü Resûlillâh” denirdi.'], ['Adı', 'Âyet inince Zeyd, babasının adıyla anıldı: Zeyd b. Hârise.']],
    'Zeyd b. Hârise, Hz. Peygamber’in evlâtlığı olduğu için önce “Zeyd b. Muhammed” diye anıldı; Ahzâb 33/5 inince babasının adıyla anılmaya başladı.',
    [['Hayatı', 'Bi‘setten yaklaşık otuz beş yıl önce Kelb kabilesinden doğdu; Câhiliye döneminde henüz çocukken kaçırılıp Ukâz panayırında köle olarak satıldı.', 'DİA, “Zeyd b. Hârise” md.'], ['Evlâtlık hükmü', 'Evlâtlıkların öz babalarının adıyla anılmasını emreden âyet (Ahzâb 33/5) inince Zeyd, babası Hârise’nin adıyla anılmaya başladı; Hz. Peygamber’i çok sevdiği için “hibbü Resûlillâh” lakabıyla tanınırdı.', 'DİA, “Zeyd b. Hârise” md.'], ['Kronoloji', 'DİA kronolojisi, Zilkade 5’te (Nisan 627) Hz. Peygamber’in Zeyneb bint Cahş ile evlenmesini ve evlât edinmenin hükmüyle ilgili âyetlerin (Ahzâb 33/4-5) inişini birlikte kaydeder.', 'DİA, “Muhammed” md. (kronoloji)']],
    [['Evlâtlıkların öz babalarının adıyla anılmasını emreden âyet hangi sûrede yer alır?', ['Ahzâb sûresi', 'Fîl sûresi', 'Nasr sûresi'], 0, 'Ahzâb 33/5.'], ['Zeyd b. Hârise hangi lakapla anılırdı?', ['Hibbü Resûlillâh (Resûlullah’ın sevgilisi)', 'Fârûk', 'Zinnûreyn'], 0, 'Hibbü Resûlillâh.']]));
  sonra('halifeler', 'ebubekir', L('ridde', 'Ridde Savaşları', '632–633',
    'Peygamberimizden sonra bazıları yalancı peygamberlik iddia etti, bazıları zekât vermek istemedi. Hz. Ebû Bekir birliği korumaya çalıştı.',
    [['Yalancı peygamberler', 'Müseylime ve Esved el-Ansî gibi kişiler peygamberlik iddia etti.'], ['Zekât', 'Bazı kabileler zekât vermemekte direndi.'], ['Birlik', 'Hz. Ebû Bekir devletin düzenini korumaya çalıştı.']],
    'Hz. Ebû Bekir döneminde yalancı peygamberlerin yandaşları ve zekât vermeye direnen kabilelerle yürütülen mücadeleler “ridde” adıyla anılır; DİA bu olaylarda ridde suçundan çok isyan (bağy) niteliği bulunduğunu belirtir.',
    [['Yalancı peygamberler', 'Müseylime ve Secâh gibi yalancı peygamberlerin yandaşları, İbn Hazm’a göre esasen hiçbir zaman müslüman olmamıştı.', 'DİA, “Ridde” md.'], ['Zekât direnişi', 'Diğer bir bölüm, bir te’vil ardına sığınarak Hz. Ebû Bekir’e zekât vermemekte direndi; ancak dinden çıktıklarını ifade etmedi.', 'DİA, “Ridde” md.'], ['Esved el-Ansî', 'Hz. Peygamber’in rahatsızlığını fırsat bilip Yemen’de peygamber olduğunu iddia etti ve San‘a üzerine yürüdü; kronolojide ölümü 8 Rebîülevvel 11 / 3 Haziran 632’ye konur.', 'DİA, “Ridde”, “Muhammed” md.']],
    [['Hz. Ebû Bekir döneminde zekât vermeye direnen ve yalancı peygamberlere uyanlarla yürütülen mücadele nasıl anılır?', ['Ridde', 'Hendek', 'Fetih'], 0, 'Ridde olayları.'], ['Aşağıdakilerden hangisi yalancı peygamberlik iddia edenlerden biridir?', ['Müseylime', 'Selmân-ı Fârisî', 'Zeyd b. Hârise'], 0, 'Müseylime.']]));

  Object.assign(BOLUM_NO, { 'omer-islam': 6, kible: 9, suffe: 9, zeyd: 12, ridde: 0 });
  DONEMLER.forEach(d => d.dersler.forEach(x => { if (BOLUM_NO[x.id] != null) x.bolum = BOLUM_NO[x.id]; }));

  Object.assign(YERLER, {});
  Object.assign(HARITA, { 'omer-islam': { yer: ['mekke'] }, kible: { yer: ['medine', 'kudus', 'mekke'] }, suffe: { yer: ['medine'] }, zeyd: { yer: ['medine'] }, ridde: { yer: ['medine', 'sana'] } });
  Object.assign(DETAY, {
    'omer-islam': { metin: ['Ömer, Fil Vak‘ası’ndan on üç yıl kadar sonra Mekke’de doğdu; baba tarafından soyu Câhiliye döneminde Kureyş’in sefâret işlerine bakan Adî b. Kâ‘b kabilesine ulaşır. Bi‘setin 6. yılında (616) müslüman oldu.', 'Müslüman oluşuna dair kaynaklarda iki rivayet vardır. Hemen hemen bütün kaynaklarda yer alan meşhur rivayete göre Hamza müslüman olduktan sonra Ömer, Hz. Peygamber’i öldürmek üzere yola çıkar; yolda kız kardeşi Fâtıma ile eniştesi Saîd b. Zeyd’in müslüman olduğunu öğrenir. Evlerinde onları Tâhâ sûresini okurken bulur; yumuşayarak müslüman olmaya karar verir ve Erkam’ın evine gider.'], dia: [DIA('omer', 'Ömer'), DIA('darulerkam', 'Dârülerkam')], sv: [SV_APAYDIN] },
    kible: { metin: ['Kıble, sözlükte “yön, yönelinen cihet” demektir; terim olarak müslümanların namazda yönelmeleri gereken istikamet, yani Kâbe’dir. Kâbe’ye yönelmek ayrıca ezan, ikāmet, cenazenin defni, hayvan kesimi ve dua gibi hususlarda da söz konusudur.', 'Kıblenin Kâbe’ye çevrilmesi üzerine yahudilerin takındığı tutumu kınayan âyetlerde (Bakara 2/144-146) Ehl-i kitabın gerçeği bilip gizlediği ifade edilir. DİA kronolojisi bu olayı Receb 2 (Ocak 624)’e koyar.'], dia: [DIA('kible', 'Kıble'), DIA('kabe', 'Kâbe')], sv: [SV_MEDINE_KRON] },
    suffe: { metin: ['Hz. Peygamber, hicretinin ardından Mescid-i Nebevî’yi yaptırdı; mescidin giriş kısmında evi ve yakını olmayan sahâbîler için bir bölüm ayrıldı. Burada kalan, çoğunluğu muhacirlerden oluşan topluluğa ashâb-ı Suffe denir. İhtiyaçları Resûl-i Ekrem ve zengin sahâbîler tarafından karşılandığı için “adyâfü’l-İslâm” (müslümanların misafirleri) adıyla da anılırlar.', 'Ezan konusunda, çan ve boru gibi seçenekler ile ateş yakmanın Mecûsîler’in âdeti olduğu için Resûlullah tarafından kabul edilmediği, ardından Abdullah b. Zeyd’in rüyasına yatıldığı anlatılır. Ezan böylece hicrî 1. (622) veya bir rivayete göre 2. (623) yılda meşrû kılınmış oldu.'], dia: [DIA('suffe', 'Suffe'), DIA('ehl-i-suffe', 'Ehl-i Suffe'), DIA('ezan', 'Ezan')], sv: [SV_MEDINE_KRON] },
    zeyd: { metin: ['Zeyd b. Hârise, Hz. Peygamber’den yalnızca on yaş küçüktü. Evlâtlığı olduğu için önceleri Zeyd b. Muhammed diye anılırdı; evlâtlıkların öz babalarının adıyla anılmasını emreden âyet (Ahzâb 33/5) indikten sonra babası Hârise’nin adıyla anılmaya başlandı. Resûlullah tarafından çok sevildiği için “hibbü Resûlillâh” lakabıyla tanınırdı.', 'Zeyd, Mûte Savaşı’nda ordunun ilk komutanıydı (bk. Mûte Savaşı).'], dia: [DIA('zeyd-b-harise', 'Zeyd b. Hârise'), DIA('mute-savasi', 'Mûte Savaşı')], sv: [SV_MEDINE_KRON] },
    ridde: { metin: ['Ridde, sözlükte “dönmek, geri çevirmek” anlamındaki redd kökündendir; fıkıh terimi olarak bir müslümanın kendi iradesiyle İslâm’dan çıkmasını ifade eder. İlk dönemde Hz. Ebû Bekir’e karşı çıkan topluluklar için ridde adı kullanılsa da DİA, bu olaylarda ridde suçundan ziyade isyan (bağy) niteliği bulunduğunu belirtir.', 'Esved el-Ansî, Hz. Peygamber’in rahatsızlığını fırsat bilip kendisine “Rahmânü’l-Yemen” sıfatını verdi; Yemen’deki Ans ve Mezhic kabilelerinin desteğini sağlayıp Necran bölgesinde topladığı 600-700 süvariyle San‘a üzerine yürüdü.'], dia: [DIA('ridde', 'Ridde'), DIA('ebu-bekir', 'Ebû Bekir')], sv: [SV('hz-ebu-bekir-ra-ve-donemi-prof-dr-mustafa-fayda', 'UTplGZaJe7E', 'Hz. Ebû Bekir (ra) ve Dönemi', 'Prof. Dr. Mustafa Fayda')] }
  });

  // Hüzünlü / zor konular: çocuk modunda nazik uyarı ve "atla" seçeneği
  window.HASSAS = ['amine', 'acik', 'boykot', 'huzun', 'taif', 'bedir', 'uhud', 'reci', 'nadir', 'ifk', 'hendek', 'kurayza', 'mute', 'hastalik', 'ridde', 'osman', 'ali'];

  // Bugün bize ne diyor? — soru/gözlem biçiminde, vaaz tonu ve emir kipi yok. [TR, EN]
  window.DUSUN = {
    'siyer-ilmi': ['Güzel bir örneği tanımak, onu anlamanın neresinde başlar sence?', 'Where does getting to know a good example begin, do you think?'],
    'mekke-kabe': ['Bir yerin herkes için güvenli ve ortak bir yer olması neden önemli olabilir?', 'Why might it matter that a place is safe and shared by everyone?'],
    'mekke-toplum': ['Ticaretin ve şiirin buluştuğu bir panayırda insanlar birbirinden neler öğrenir?', 'At a fair where trade and poetry meet, what might people learn from one another?'],
    fil: ['Güçlü görünen bir ordu neden her zaman güçlü olmayabilir? Bu olay güç hakkında ne söylüyor?', 'Why might an army that looks strong not always be strong? What does this event say about power?'],
    sut: ['Küçük bir çocuğun büyümesinde doğanın ve ona bakan insanların yeri nedir?', 'What part do nature and the people who care for a child play in growing up?'],
    amine: ['Yetim kalan bir çocuğa dedesi ve amcası sahip çıktı. Toplum yetimlere nasıl destek olabilir?', 'His grandfather and uncle took care of the orphaned child. How can a community support orphans?'],
    sam: ['Yolculuk ve ticaret, bir insanın dünyayı tanımasına nasıl katkı sağlar?', 'How do travel and trade help a person get to know the world?'],
    fudul: ['Haksızlığa uğrayanı korumak için bir araya gelmek bugün neye benzer?', 'What would coming together to protect the wronged look like today?'],
    hatice: ['Dürüstlük ve güven, bir ortaklığı ve evliliği nasıl kurar?', 'How do honesty and trust build a partnership and a marriage?'],
    hacer: ['Bir anlaşmazlığı herkese pay vererek çözmek mümkün mü? Örtü nasıl bir çözümdü?', 'Is it possible to settle a dispute by giving everyone a share? What kind of solution was the cloth?'],
    hira: ['Kalabalıktan uzak sessiz bir zaman, insana neler verebilir?', 'What can a quiet time away from the crowd give a person?'],
    vahiy: ['“Oku” diye başlayan bir mesaj, bilgi ve öğrenme hakkında sence ne söylüyor?', 'What does a message that begins with “Read” say about knowledge and learning, do you think?'],
    gizli: ['Önce güvenilen insanlara anlatmak neden akıllıca bir yol olabilir?', 'Why might it be wise to tell trusted people first?'],
    acik: ['Zor zamanlarda sabretmek ile pes etmek arasındaki fark nedir?', 'What is the difference between being patient in hard times and giving up?'],
    habese: ['Güvende olmak için başka bir ülkeye gitmek zorunda kalanlara nasıl yardım edilir?', 'How can people who must go to another country to be safe be helped?'],
    'omer-islam': ['Bir insanın fikrini değiştirmesine ne yumuşatabilir sence?', 'What might soften a person enough to change their mind?'],
    boykot: ['Zor günlerde bir toplulukta dayanışma neye benzer?', 'In hard days, what does solidarity in a community look like?'],
    huzun: ['Sevdiklerimizi kaybedince üzülmek çok doğal. Teselli veren şeyler neler olabilir?', 'It is natural to grieve when we lose loved ones. What can bring comfort?'],
    taif: ['Reddedildiğimizde öfke yerine başka ne yapabiliriz? Peygamberimiz ne yaptı?', 'When we are turned away, what can we do instead of getting angry? What did the Prophet do?'],
    isra: ['Zor bir dönemin ardından gelen bu hadise, kul ile Rabbi arasındaki bağ hakkında sence ne anlatıyor?', 'After a hard period, what does this event tell us about the bond between a servant and the Lord, do you think?'],
    akabe: ['Bir şehrin bir topluluğa güvenli bir yurt olabilmesi için ne gerekir?', 'What does a city need in order to become a safe home for a community?'],
    hicret: ['Yeni bir yerde hayata başlayan insanlar için neler gerekir?', 'What do people starting a new life in a new place need?'],
    'medine-ilk': ['Ortak bir mekân kurmak bir toplulukta neleri değiştirir?', 'What changes in a community when it builds a shared place?'],
    kible: ['Aynı yöne bakmak insanları nasıl bir araya getirir?', 'How does facing the same direction bring people together?'],
    suffe: ['Evi olmayan birine kapıyı açmak ve herkesi namaza çağıran bir ses ne ifade eder?', 'What does it mean to open the door to someone without a home, and to have a voice that calls everyone to prayer?'],
    bedir: ['Sayıca az olanlar için hazırlık ve kararlılık neden önemlidir?', 'Why do preparation and determination matter for those who are few?'],
    uhud: ['Verilen bir görevin yerinde durulmayınca sonuçları neler olabilir?', 'What can happen when a given post is left?'],
    reci: ['Güvendiğimiz birinin kurduğu tuzağı yaşamak insanı nasıl etkiler? Nasıl dikkatli olunur?', 'How does it affect a person to face a trap set by someone they trusted? How can one be careful?'],
    nadir: ['Verilen sözü ve yapılan anlaşmayı korumak neden önemlidir?', 'Why is it important to keep a promise and an agreement?'],
    ifk: ['Duyduğumuz bir haberin doğruluğunu kontrol etmeden yaymamak için ne yapabiliriz?', 'What can we do so that we do not spread news before checking whether it is true?'],
    hendek: ['Bir problemi birlikte çalışarak ve farklı fikirleri dinleyerek çözmek ne kazandırır?', 'What does solving a problem together and listening to different ideas gain us?'],
    kurayza: ['Ortak bir tehlike karşısında verilen söz ne anlama gelir?', 'What does a promise given in the face of a common danger mean?'],
    zeyd: ['Bir çocuğa verilen sevgiyle, onun asıl ailesine ait hakları birlikte düşünmek ne ifade eder?', 'What does it mean to think together about the love given to a child and the rights of their own family?'],
    hudeybiye: ['İstediğimizi hemen alamadığımızda sabır ve müzakere neyi değiştirir?', 'When we cannot get what we want right away, what do patience and negotiation change?'],
    hayber: ['Bir bölgede farklı toplulukların yaşaması nelere dikkat etmeyi gerektirir?', 'What does it take to pay attention to when different communities live in one region?'],
    mektuplar: ['Farklı inançtan insanları “ortak bir söze” çağırmak (Âl-i İmrân 3:64) ne demek olabilir?', 'What might it mean to call people of other faiths to “a common word” (Ali ‘Imran 3:64)?'],
    kaza: ['Verilen sözü bir yıl sonra yerine getirmek neden güven verir?', 'Why does keeping a promise a year later build trust?'],
    mute: ['Bir elçiye zarar vermek devletler arasında neden büyük bir sorun sayılır?', 'Why is harming an envoy considered a serious problem between states?'],
    fetih: ['Güç sahibi olunca affetmek ne demek? Peygamberimiz Mekke’de ne yaptı?', 'What does forgiving mean when one has power? What did the Prophet do in Mecca?'],
    huneyn: ['Büyük bir başarıdan sonra gelen zorluk bize ne öğretir?', 'What does a difficulty after a great success teach us?'],
    tebuk: ['Zor şartlarda birlikte yola çıkmak ve geride kalanların mazeretleri neyi gösterir?', 'What do setting out together in hard conditions, and the excuses of those who stayed behind, show?'],
    dirar: ['Bir yeri ibadet için yapmakla ayrılık çıkarmak için yapmak arasında ne fark var?', 'What is the difference between building a place for worship and building one to divide people?'],
    veda: ['“Bütün insanlar eşittir” sözü bugün hayatımızda nerede karşımıza çıkıyor?', 'Where does the saying “all people are equal” meet us in our lives today?'],
    hastalik: ['Çok sevdiğimiz birini kaybedince birlikte nasıl teselli buluruz?', 'When we lose someone we love dearly, how do we find comfort together?'],
    esler: ['Bir ailede karşılıklı saygı ve hayâ nasıl görünür?', 'How do mutual respect and modesty look in a family?'],
    cocuklar: ['Çocuklarını kaybeden bir babanın sabrı hakkında ne düşünüyorsun?', 'What do you think about the patience of a father who lost his children?'],
    iliskiler: ['Farklı inanç ve görüşten insanlarla adil ilişki kurmak nasıl mümkün olur?', 'How is it possible to build fair relations with people of different beliefs and views?'],
    ebubekir: ['Bir toplum liderini nasıl seçmeli? Birliği korumak neden önemli?', 'How should a community choose its leader? Why does protecting unity matter?'],
    ridde: ['Bir devlet ve toplum zor bir sınavda birliğini nasıl korur?', 'How does a state and a community keep its unity in a hard test?'],
    omer: ['Adalet, bir yöneticiden ne ister sence?', 'What does justice ask of a ruler, do you think?'],
    osman: ['Ortak bir metnin çoğaltılıp korunması birlik için neden önemli olmuş olabilir?', 'Why might copying and preserving a common text have mattered for unity?'],
    ali: ['İç çatışmalar bir toplumu nasıl yaralar? Barış için neler yapılabilir?', 'How do internal conflicts wound a community? What can be done for peace?']
  };
})();
