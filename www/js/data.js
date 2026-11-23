/* ===== VERİ =====
 Ana kaynak: TDV İslâm Ansiklopedisi (DİA), «Muhammed» maddesi ve «Hz. Peygamber Devri Kronolojisi» tablosu (islamansiklopedisi.org.tr/muhammed).
 Doğum yılı: DİA metni 20 Nisan 571 (Pazartesi, 12 Rebîülevvel) der; kronoloji tablosu 17 Haziran 569'u esas alır. Burada 571 esas alındı; çocukluk olayları yaşa göre «yaklaşık» yazıldı.
 siyervakfi.org'da tarih tablosu yok (video ders ve makale ağırlıklı), tarih kontrolünde kullanılmadı. Diyanet yayınları ayrıca kontrol edilmeli.

 Ders eklemek: bir döneme L(...) satırı ekle.
 L(id, başlık, yıl,
   çocukÖzeti, [[emoji, başlık, kısa metin], ...],
   büyükÖzeti, [[başlık, detay, kaynak(isteğe bağlı)], ...],
   [[soru, [seçenekler], doğruİndeks, açıklama], ...])
 Sınavlar: SINAVLAR içinde hangi dönemlerin sorularından oluşacağı yazılır. */
const L=(id,baslik,yil,co,ce,bo,be,q)=>({id,baslik,yil,
  cocuk:{ozet:co,olaylar:ce.map(([e,b,m])=>({e,b,m}))},
  buyuk:{ozet:bo,olaylar:be.map(([b,m,k])=>({b,m,k}))},
  sorular:q.map(([s,sec,d,a])=>({s,sec,d,a}))});

const DONEMLER=[
{id:'cocukluk',ad:'Çocukluk',alt:'571 – 595',renk:'#e08a2e',dersler:[
 L('fil','Fil Olayı ve Doğum','571',
  'Çok sevilen bir bebek dünyaya geldi: Hz. Muhammed (s.a.v.)!',
  [['🐘','Fil geldi','Ebrehe, koca fillerle Kâbe’yi yıkmaya geldi.'],['🐦','Kuşlar yetişti','Allah küçük kuşlar gönderdi, ordu dağıldı.'],['👶','Bebek doğdu','Aynı yıl Mekke’de Peygamberimiz doğdu.']],
  'Fil Vakası’ndan elli (veya elli beş) gün sonra, Rebîülevvel’in 12’sinde Pazartesi günü Mekke’de doğdu. Miladi tarih DİA’ya göre 20 Nisan 571’dir (bir rivayete göre 569).',
  [['Fil Vakası','Yemen valisi Ebrehe, Kâbe’yi yıkmak için Mekke üzerine yürüdü; ordusu helak oldu. Araplar bu yılı “Fil Yılı” saydı.','Fîl sûresi'],
   ['Doğum','Rebîülevvel’in 12’si Pazartesi, Mekke. Miladi karşılığı için iki rivayet var: 20 Nisan 571 (Felekî hesabı, DİA metni) ve 17 Haziran 569 (DİA kronoloji tablosu).','DİA, “Muhammed” md.'],
   ['Aile','Annesi Âmine bint Vehb, babası Abdullah b. Abdülmuttalib’dir. Soyu Hz. İsmail’e dayanır.','DİA, “Muhammed” md.']],
  [['Peygamberimiz hangi olayın yaşandığı yıl doğdu?',['Hicret','Fil Olayı','Bedir Savaşı'],1,'Doğum, Fil Olayı yılına denk gelir.'],
   ['Ebrehe neyi yıkmak istedi?',['Mescid-i Nebevî’yi','Kâbe’yi','Mescid-i Aksâ’yı'],1,'Hedef Kâbe’ydi.']]),
 L('sut','Süt Annesi Halime','571–576',
  'Küçük Muhammed bir süre çölde, süt annesi Halime’nin yanında büyüdü.',
  [['🏜️','Çöle gidiş','Mekke’de bebekler sağlıklı büyüsün diye çöldeki ailelere verilirdi.'],['👩','Halime','Sa‘d kabilesinden Halime onu evine aldı ve çok sevdi.'],['🏠','Mekke’ye dönüş','İlk iki yıldan sonra annesine getirildi; annesi çöl havası iyi geldiği için bir süre daha çöle gönderdi.']],
  'Mekke geleneğine uyularak bedevi bir sütanneye verildi: Hevâzin’in Sa‘d b. Bekir koluna mensup Halîme bint Ebû Züeyb. Çocukluğunun ilk iki yılını onun yanında geçirdi.',
  [['Süt annelik geleneği','Mekkeliler çocuklarını sağlıklı iklim ve fasih Arapça için bedevilere verirdi.','İbn Hişâm, es-Sîre'],
   ['Halîme','İlk iki yıl sütannesi Halîme, sütbabası Hâris ve sütkardeşleri Abdullah, Üneyse ve Şeymâ ile geçti. İki yıl sonunda Mekke’ye getirildi; Âmine, çöl havası oğluna yaradığı için (bir rivayete göre Mekke’de veba çıktığı için) onu bir süre daha Halîme’ye verdi.','DİA, “Muhammed” md.'],
   ['Dönüş','Yaklaşık beş yaşında sütannesi tarafından Mekke’ye getirilip annesine teslim edildi.','DİA, “Muhammed” md. (kronoloji)']],
  [['Peygamberimizin süt annesi kimdir?',['Halime','Ümmü Eymen','Hatice'],0,'Süt annesi Halime’dir.'],
   ['Çocuklar neden çöle gönderilirdi?',['Ticaret öğrensinler diye','Sağlıklı büyüsünler ve güzel Arapça öğrensinler diye','Savaşa hazırlansınlar diye'],1,'Çöl havası ve fasih dil için.']]),
 L('amine','Annesi ve Dedesinin Vefatı','576–578',
  'Küçük Muhammed önce annesini, sonra dedesini kaybetti. Amcası Ebû Tâlib ona baktı.',
  [['💔','Annesi vefat etti','Âmine, Medine dönüşünde Ebvâ’da vefat etti.'],['👴','Dedesi','Dedesi Abdülmuttalib ona çok iyi baktı.'],['🤝','Amcası','Dedesinden sonra amcası Ebû Tâlib onu evine aldı.']],
  'Altı yaşında annesini, sekiz yaşında dedesini kaybetti; Ebû Tâlib’in himayesine girdi.',
  [['Âmine’nin vefatı','Âmine, oğluyla Yesrib’deki akrabalarını ziyaret etti; orada bir ay kadar kaldıktan sonra dönüşte Medine’ye yaklaşık 190 km uzaklıktaki Ebvâ’da hastalanıp vefat etti. Dadısı Ümmü Eymen onu Mekke’ye götürüp Abdülmuttalib’e teslim etti.','İbn Hişâm, es-Sîre'],
   ['Abdülmuttalib','Abdülmuttalib ona çok ihtimam gösterdi, Dârünnedve toplantılarına yanında götürdü. Yaklaşık iki yıl sonra o da vefat edince Muhammed amcası Ebû Tâlib’e emanet edildi.','İbn Sa‘d, Tabakât'],
   ['Ebû Tâlib','Vasiyet üzerine amcası Ebû Tâlib onu yanına aldı ve ömrü boyunca korudu.','DİA, “Ebû Tâlib” md.']],
  [['Âmine nerede vefat etti?',['Mekke’de','Ebvâ’da','Şam’da'],1,'Medine dönüşünde Ebvâ’da vefat etti.'],
   ['Dedesinden sonra Peygamberimize kim baktı?',['Ebû Leheb','Hz. Hamza','Ebû Tâlib'],2,'Amcası Ebû Tâlib baktı.']]),
 L('sam','Suriye Yolculuğu','~582',
  'On iki yaşında amcasıyla kervana katıldı, yolda Bahîra adlı rahiple tanıştı.',
  [['🐪','Kervan','Ebû Tâlib ticaret için Şam’a gitti, Muhammed’i de götürdü.'],['🌍','Yeni yerler','Yolda yeni şehirler ve insanlar gördü.'],['🐑','Çobanlık','Daha küçükken amcasına yardım için koyun da gütmüştü.']],
  'Amcası Ebû Tâlib’le Suriye’ye ticaret seferine çıktı. Bu yolculukta rahip Bahîra ile karşılaştığına dair rivayet vardır; değerlendirmeleri DİA’da ayrı maddelerde (Bahîrâ, Busrâ) tartışılır.',
  [['Ticaret yolları','Mekkelilerin ticaret yolları Suriye ve Yemen’e uzanırdı; sonraki yıllarda Peygamber Şam, Yemen ve Habeşistan’a da gitmiştir.','DİA, “Muhammed” md.'],
   ['Çobanlık','Kalabalık bir ailesi olan Ebû Tâlib’e yardım için on yaşlarında koyun güttüğü bilinir; sonra “her peygamber koyun gütmüştür” demiştir.','DİA, “Muhammed” md.'],
   ['Tarih','Yolculuğun yaşı ve yılı kaynaklara göre değişir; DİA kronolojisi Ebû Tâlib ile Suriye seyahatini çocukluk yıllarına koyar.','DİA, “Muhammed” md. (kronoloji)']],
  [['Peygamberimiz Suriye’ye çocukken kimle gitti?',['Dedesiyle','Amcası Ebû Tâlib’le','Hz. Hatice’yle'],1,'Amcası Ebû Tâlib’le gitti.'],
   ['Peygamberimiz çocukken hangi işi yaptı?',['Koyun güttü','Demircilik','Denizcilik'],0,'On yaşlarında koyun güttüğü bilinir.']]),
 L('fudul','Hılfü’l-Fudûl ve “el-Emîn”','~590–595',
  'Herkes ona güvendi ve ona “el-Emîn” dedi.',
  [['🌟','El-Emîn','Dürüstlüğü yüzünden ona “güvenilir” anlamında el-Emîn dendi.'],['🤲','Mazlumun yanında','Haksızlığa uğrayanı koruyan bir ittifaka katıldı.'],['🐑','Çobanlık ve ticaret','Gençken koyun güttü, sonra ticaret yaptı.']],
  'Gençlik yıllarında Ficâr’a amcalarıyla katıldı (savaşmadan), ardından Hılfü’l-Fudûl’e iştirak etti; dürüstlüğüyle “el-Emîn” diye tanındı.',
  [['Hılfü’l-Fudûl','Ficâr’ın hemen ardından toplanan, haksızlığa uğrayanı koruma yeminine dayalı ittifak. Peygamber, peygamberlikten sonra da bu ittifaktan övgüyle bahsetmiştir.','İbn Hişâm, es-Sîre'],
   ['Ficâr Savaşı','Ficâr savaşlarının ilk grubunun dördüncüsüne amcalarıyla birlikte katıldı, fakat fiilen savaşmadı. O sıradaki yaşı için 14, 15, 17 ve 20 rivayetleri vardır.','DİA, “Muhammed” md.'],
   ['El-Emîn','Doğruluğu ve emanete riayeti sebebiyle Mekkeliler ona el-Emîn dedi.','DİA, “Muhammed” md.']],
  [['“El-Emîn” ne demektir?',['Cesur','Güvenilir','Zengin'],1,'El-Emîn, güvenilir demektir.'],
   ['Hılfü’l-Fudûl’ün amacı nedir?',['Mazlumu korumak','Kervan yağmalamak','Savaş ilan etmek'],0,'Haksızlığa uğrayanı korumak.']])
]},
{id:'genclik',ad:'Gençlik',alt:'595 – 610',renk:'#2f8f83',dersler:[
 L('hatice','Hz. Hatice ile Evlilik','595',
  'Muhammed (s.a.v.) Hatice ile evlendi ve mutlu bir yuva kurdu.',
  [['💼','Ticaret','Hatice, güvenilir Muhammed’e ticaret malı verdi.'],['💍','Evlilik','İkisi evlendi; Hatice onun en büyük destekçisi oldu.'],['👨‍👩‍👧','Çocuklar','Kızları Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma’dır.']],
  'Yirmi beş yaşında, Hz. Hatice ile evlendi; Hatice sonraki yıllarda en büyük destekçisi oldu.',
  [['Ticaret ortaklığı','Hatice b. Huveylid’in malıyla Şam’a gitti; kervanda hizmetçisi Meysere de vardı. Dürüstlüğü ve kazancı Hatice’yi etkiledi.','İbn Hişâm, es-Sîre'],
   ['Evlilik','Amcaları Hatice’yi onun amcası Amr b. Esed’den istedi; Muhammed evlenince Ebû Tâlib’in evinden Hatice’nin evine taşındı. Evlilikte kendisinin yirmi beş, Hatice’nin kırk yaşında olduğu söylenir; ancak yedi (veya altı) çocuk doğduğu için DİA, İbn Abbas’tan nakledilen yirmi sekiz yaşı daha isabetli görür.','DİA, “Hatice” md.'],
   ['Çocukları','Kızları Zeyneb, Rukıyye, Ümmü Külsûm ve Fâtıma’dır. Oğlu İbrâhim ise Mâriye’dendir.','DİA, “Muhammed” md.']],
  [['Peygamberimizin ilk evliliği kimledir?',['Hz. Âişe','Hz. Hatice','Hz. Hafsa'],1,'İlk eşi Hz. Hatice’dir.'],
   ['Aşağıdakilerden hangisi Peygamberimizin kızıdır?',['Şeymâ','Fâtıma','Sümeyye'],1,'Hz. Fâtıma onun kızıdır.']]),
 L('hacer','Hacerülesved Hakemliği','605',
  'Kâbe tamir edilirken büyük kavgayı önledi.',
  [['🧱','Kâbe tamiri','Mekkeliler Kâbe’yi yeniden yaptı.'],['⚫','Kara Taş','Hacerülesved’i kim yerine koyacak diye tartıştılar.'],['🧣','Akıllı çözüm','Taşı bir örtüye koydu, her kabile bir ucundan tuttu.']],
  'Kâbe’nin yenilenmesinde Hacerülesved’in yerine konması anlaşmazlığını adil bir yöntemle çözdü.',
  [['Kâbe’nin yenilenmesi','Kureyş, Kâbe’yi miladi 605’te yeniden inşa etti.','DİA, “Muhammed” md.'],
   ['Anlaşmazlık','Hacerülesved’i yerine koyma şerefi için kabileler savaşa hazırlandı.','DİA, “Hacerülesved” md.'],
   ['Hakemlik','Ebû Ümeyye b. Mugīre’nin teklifiyle, Benî Şeybe Kapısı’ndan Kâbe’ye ilk girecek kişinin kararına uyulacaktı. Giren Hz. Muhammed, taşı bir örtüye koydu, kabile reisleriyle birlikte kaldırdı ve kendi eliyle yerine yerleştirdi.','DİA, “Muhammed” md.']],
  [['Kâbe tamirinde anlaşmazlık neydi?',['Kapı yeri','Hacerülesved’i kimin yerleştireceği','İnşaat parası'],1,'Taşı kimin yerleştireceği tartışıldı.'],
   ['Peygamberimiz taşı nasıl taşıttı?',['Tek başına taşıdı','Bir örtüye koyup kabilelere tutturdu','Fil kullandı'],1,'Örtünün ucundan herkes tuttu.']]),
 L('hira','Hira’da Tefekkür','~605–610',
  'Muhammed (s.a.v.) Hira Mağarası’nda yalnız kalıp düşünmeyi severdi.',
  [['⛰️','Nûr Dağı','Mekke yakınındaki Hira Mağarası’na çıkardı.'],['🌙','Tefekkür','Yaratılış üzerine düşünür, Allah’a ibadet ederdi.'],['💭','Güzel rüyalar','Gördüğü rüyalar aynen çıkıyordu.']],
  'Kırk yaşına yaklaşırken Hira Mağarası’nda inzivaya çekilip tefekkürle zaman geçirdi; sadık rüyalar vahyin başlangıcı oldu.',
  [['İnziva','Ramazan ayında günlerce Hira’da kalır, yiyecek bitince Hatice’nin yanına dönerdi.','Buhârî, Bed’ü’l-vahy 3'],
   ['Sadık rüyalar','Vahiyin ilk işareti, sabah aydınlığı gibi çıkan sadık rüyalardı.','Buhârî, Bed’ü’l-vahy 3'],
   ['Toplumdan uzaklık','Putperest Mekke’nin ahlaksızlığından rahatsızdı; putlara hiç tapmadı.','DİA, “Muhammed” md.']],
  [['Peygamberimiz inzivaya nerede çekilirdi?',['Sevr Mağarası','Hira Mağarası','Uhud Dağı'],1,'Hira Mağarası’nda.'],
   ['Vahyin ilk işareti neydi?',['Sadık rüyalar','Ateş görmek','Sesler duymak'],0,'Gerçek çıkan rüyalardı.']])
]},
{id:'mekke',ad:'Mekke Dönemi',alt:'610 – 622',renk:'#3d6fb6',dersler:[
 L('vahiy','İlk Vahiy','610',
  'Cebrail geldi ve “Oku!” dedi. Peygamberlik başladı.',
  [['📖','Oku!','Cebrail Hira’da “İkra” dedi, ilk âyetler indi.'],['😰','Korku','Peygamberimiz titreyerek eve gitti, Hatice onu sakinleştirdi.'],['⭐','İlk müslümanlar','Hatice, Ebû Bekir, Ali ve Zeyd ilk iman edenlerdendir.']],
  'Ramazan ayında (DİA kronolojisinde 27. gece, soru işaretli) Hira Mağarası’nda Alak sûresinin ilk beş âyetiyle peygamberlik başladı (610).',
  [['İlk âyetler','Cebrail “Oku!” dedi. “Yaratan Rabbinin adıyla oku…” âyetleri indi.','Alak sûresi 1-5; Buhârî, Bed’ü’l-vahy 3'],
   ['Hatice’nin desteği','Heyecanla eve dönen Peygamberi Hatice teselli etti ve amcaoğlu Varaka b. Nevfel’e götürdü.','Buhârî, Bed’ü’l-vahy 3'],
   ['İlk iman edenler','Hatice, Ebû Bekir, Ali ve Zeyd b. Hârise ilk müslümanlardandır.','İbn Hişâm, es-Sîre']],
  [['İlk inen âyetler hangi surededir?',['Fâtiha','Alak','Bakara'],1,'Alak sûresinin ilk beş âyeti.'],
   ['Vahiy ilk kez hangi meleğin aracılığıyla geldi?',['Cebrail','Mikâil','İsrâfil'],0,'Cebrail aracılığıyla.']]),
 L('gizli','Gizli Davet','610–613',
  'İlk üç yıl İslam’ı sadece güvendiği insanlara anlattı.',
  [['🤫','Sessiz davet','Önce yakın dostlarını İslam’a çağırdı.'],['🏠','Erkam’ın evi','Müslümanlar Erkam’ın evinde toplanıp öğrenirdi.'],['👥','Yeni katılanlar','Osman, Zübeyr, Talha gibi isimler müslüman oldu.']],
  'Davet yaklaşık üç yıl gizlice sürdü. Önce eşi Hatice, ardından Ebû Bekir, Ali, Zeyd b. Hârise ve kızları Zeyneb, Rukıyye ve Ümmü Külsûm müslüman oldu; Dârülerkam toplantı yeri oldu.',
  [['Güvenilir kişilere davet','Ebû Bekir’in çabasıyla Osman, Zübeyr, Abdurrahman b. Avf, Sa‘d b. Ebû Vakkâs, Talha müslüman oldu.','İbn Hişâm, es-Sîre'],
   ['Dâru’l-Erkam','Erkam b. Ebü’l-Erkam’ın evi; Hz. Ömer müslüman olana kadar Müslümanlar burada toplandı (DİA kronolojisi: 616).','DİA, “Muhammed” md.'],
   ['Namaz','Müslümanlar sabah-akşam namaz kılar, ibadetlerini gizli yapardı.','İbn Sa‘d, Tabakât']],
  [['Gizli davet yaklaşık kaç yıl sürdü?',['1','3','10'],1,'Yaklaşık üç yıl sürdü.'],
   ['Müslümanların toplandığı ev kimindi?',['Ebû Bekir’in','Erkam’ın','Ebû Tâlib’in'],1,'Erkam’ın evinde.']]),
 L('acik','Açık Davet ve Eziyetler','613–',
  'Peygamberimiz Safâ Tepesi’nde herkesi İslam’a çağırdı. Müşrikler müslümanlara eziyet etti.',
  [['📣','Safâ Tepesi','Herkese yüksek sesle Allah’ın birliğini anlattı.'],['😠','Ebû Leheb','Amcası Ebû Leheb ona karşı çıktı.'],['💪','Sabır','Bilâl ve Sümeyye gibi sahabiler işkencelere dayandı.']],
  'Nübüvvetin 4. yılından (613) itibaren davet açıktan yapılmaya başlandı; Kureyş müşrikleri müslümanlara baskı ve işkence uyguladı.',
  [['Açık davet','“En yakın akrabanı uyar” (Şuarâ 26/214) emri üzerine önce yakın akrabasını bir ziyafete davet etti; Hâşimoğulları ve Muttaliboğulları’ndan yaklaşık kırk beş kişi katıldı. Amcası Ebû Leheb karşı çıktı.','Şuarâ sûresi 214; DİA, “Muhammed” md.'],
   ['Muhalefet','Ebû Leheb, Ebû Cehil gibi Kureyş ileri gelenleri alay etti, baskı yaptı.','İbn Hişâm, es-Sîre'],
   ['İşkenceler','Bilâl-i Habeşî, Yâsir ailesi (Sümeyye, Ammâr) gibi köle ve zayıflar ağır işkence gördü.','DİA, “Bilâl-i Habeşî” md.']],
  [['Açık davete hangi tepeden başlandı?',['Safâ','Uhud','Hira'],0,'Safâ tepesinden.'],
   ['Aşağıdakilerden hangisi işkence gören sahabedir?',['Bilâl-i Habeşî','Mus‘ab b. Umeyr','Hz. Ömer'],0,'Bilâl-i Habeşî ağır işkence gördü.']]),
 L('habese','Habeşistan’a Hicret','615',
  'Müslümanlar adil Habeş kralı Necâşî’nin ülkesine gitti.',
  [['⛵','Yolculuk','Bir grup müslüman güvenli yer aramak için Habeşistan’a gitti.'],['👑','Necâşî','Adil kral Necâşî onları korudu.'],['📜','Meryem sûresi','Cafer, kralın huzurunda Meryem sûresini okudu.']],
  'Baskılardan korunmak için 615’te on bir erkek ve dört kadından oluşan bir kafile Habeşistan’a hicret etti; aralarında Hz. Osman ve eşi Rukıyye vardı. İslam’daki ilk hicrettir. İkinci hicret 616’dadır.',
  [['İlk hicret','Zulmü engelleyemeyen Peygamber, hıristiyan Necâşî Ashame’nin ülkesine hicrete izin verdi (615).','DİA, “Muhammed” md.'],
   ['Kureyş elçileri','Kureyş, Amr b. Âs’ı hediyelerle Necâşî’ye gönderip müslümanları geri istedi.','İbn Sa‘d, Tabakât'],
   ['Cafer b. Ebû Tâlib','Müslümanların sözcüsü Cafer, Meryem sûresini okudu; Necâşî müslümanları korudu.','DİA, “Câfer b. Ebû Tâlib” md.']],
  [['Müslümanlar hangi ülkeye hicret etti?',['Habeşistan','Mısır','Yemen'],0,'Habeşistan’a.'],
   ['Hicret eden müslümanların sözcüsü kimdi?',['Hz. Cafer','Hz. Ömer','Hz. Ali'],0,'Cafer b. Ebû Tâlib.']]),
 L('boykot','Boykot Yılları','617–620',
  'Mekkeliler müslümanlarla üç yıl alışveriş yapmadı. Çok zor günlerdi.',
  [['🚫','Boykot','Kureyş müslümanlarla konuşmayı ve alışverişi kesti.'],['🍃','Şi‘b-i Ebû Tâlib','Müslümanlar bir vadide yaşadı, yiyecek bulmak zordu.'],['🕊️','Sona erdi','Üç yıl sonra boykot kalktı.']],
   'Kureyş, Hâşimoğulları ve Muttaliboğulları’na 617’den 620’ye sosyal ve ekonomik boykot uyguladı (daha kısa sürdüğü de rivayet edilir).',
  [['Sahife','Kureyş, onlarla konuşmamaya ve alışveriş yapmamaya karar verip şartları bir kâğıda yazarak Kâbe’nin duvarına astı. Ebû Tâlib, yeğenini ve mensuplarını kendi mahallesinde topladı.','DİA, “Muhammed” md.'],
   ['Şi‘b-i Ebû Tâlib','Boykot süresince Hz. Hatice ile Ebû Tâlib’in servetleri tükendi; ticaret ve hac mevsimi dışında alışveriş yapılamadı.','DİA, “Muhammed” md.'],
   ['Boykotun sonu','Züheyr b. Ümeyye ve Hişâm b. Amr gibi kişiler Mut‘im b. Adî ve Zem‘a b. Esved ile anlaşıp boykota son verdi (620).','DİA, “Muhammed” md.']],
  [['Boykot kaç yıl sürdü?',['1','3','7'],1,'617–620 arasında yaklaşık üç yıl sürdü.'],
   ['Müslümanlar boykot sırasında nerede kaldı?',['Şi‘b-i Ebû Tâlib’de','Medine’de','Habeşistan’da'],0,'Şi‘b-i Ebû Tâlib’de.']]),
 L('huzun','Hüzün Yılı','620',
  'Aynı yıl hem Ebû Tâlib hem Hz. Hatice vefat etti. O yıla “Hüzün Yılı” dendi.',
  [['💔','Hatice','Sevgili eşi Hatice vefat etti.'],['😢','Ebû Tâlib','Yaklaşık bir ay sonra koruyucu amcası da vefat etti.'],['📅','Hüzün Yılı','Bu yıla “Âmü’l-Huzn” dendi.']],
   'Nübüvvetin 10. yılında (620) önce Hz. Hatice, ardından yaklaşık bir ay sonra Ebû Tâlib vefat etti; bu yıla “hüzün yılı” (âmü’l-huzn) denildi.',
  [['Hz. Hatice’nin vefatı','10 Ramazan / 19 Nisan 620’de vefat etti.','DİA, “Muhammed” md.'],
   ['Ebû Tâlib’in vefatı','Yaklaşık bir ay sonra (Şevval) vefat etti; tarih için farklı rivayetler vardır.','DİA, “Muhammed” md.'],
   ['Sonuç','Müşriklerin baskısı artınca Peygamber yeni davet yolları aradı.','DİA, “Muhammed” md.']],
  [['Hüzün Yılı’nda kimler vefat etti?',['Hamza ve Ömer','Ebû Tâlib ve Hatice','Abdülmuttalib ve Âmine'],1,'Hz. Hatice ve yaklaşık bir ay sonra Ebû Tâlib.'],
   ['Bu yıla ne ad verilir?',['Fil Yılı','Âmü’l-Huzn','Hicret Yılı'],1,'Âmü’l-Huzn (Hüzün Yılı).']]),
 L('taif','Tâif Yolculuğu','620',
  'Tâif halkına İslam’ı anlatmaya gitti ama taşlandı. Yine de beddua etmedi.',
  [['🚶','Tâif’e yürüdü','Zeyd b. Hârise ile Tâif’e gitti.'],['🪨','Taşlandılar','Sakîf halkı onları kovdu ve taşladı.'],['🤲','Dua etti','Yaralı olduğu halde beddua yerine dua etti.']],
  'Hüzün yılında (Şevval 620) Peygamber, Zeyd b. Hârise ile Sakīf kabilesinin yaşadığı Tâif’e gitti; reddedildi ve Mut‘im b. Adî’nin himayesiyle Mekke’ye döndü.',
  [['Tâif’e gidiş','Amr b. Umeyr’in üç oğlunu ve kabilenin diğer önemli kişilerini İslâm’a davet etti; kimse kabul etmedi.','DİA, “Muhammed” md.'],
   ['Taşlama','Sakîf, serseri ve çocukları onlara saldırttı; Zeyd ve Peygamber yaralandı.','İbn Sa‘d, Tabakât'],
   ['Mut‘im b. Adî','Mekke’ye girebilmesi için bir Kureyşlinin himayesi gerekiyordu; başvurduğu pek çok kişi kabul etmedi, sonunda Nevfeloğulları’nın reisi Mut‘im b. Adî himayesine aldı.','DİA, “Muhammed” md.']],
  [['Peygamberimiz Tâif’e kiminle gitti?',['Zeyd b. Hârise','Ebû Bekir','Hz. Ali'],0,'Zeyd b. Hârise ile.'],
   ['Taşlanınca nasıl davrandı?',['Beddua etti','Dua etti','Öfkelendi'],1,'Beddua etmedi, hidayet duası yaptı.']]),
 L('isra','İsrâ ve Mi‘râc','~621',
  'Bir gece Mescid-i Haram’dan Mescid-i Aksâ’ya, oradan göğe yükseldi. Namaz farz oldu.',
  [['🌌','İsrâ','Mekke’den Kudüs’e bir gecede gitti.'],['🚀','Mi‘râc','Oradan yedi kat göğe yükseldi.'],['🕌','Namaz','Beş vakit namaz bu gece farz kılındı.']],
  'DİA kronolojisine göre 27 Receb 621’de İsrâ ve Mi‘râc gerçekleşti; beş vakit namaz farz kılındı.',
  [['İsrâ','Mescid-i Haram’dan Mescid-i Aksâ’ya yolculuk, Kur’an’da anılır.','İsrâ sûresi 1'],
   ['Mi‘râc','Peygamber göklere yükseltildi, çeşitli peygamberlerle görüştü ve ilâhî huzura erdi.','Buhârî, Mi‘râc'],
   ['Namaz','Günde elli vakit olarak başlayan namaz, Mûsâ’nın tavsiyesiyle beşe indi.','Buhârî; Müslim, Îmân']],
  [['İsrâ yolculuğu hangi iki mescit arasındadır?',['Mescid-i Haram – Mescid-i Aksâ','Mescid-i Nebevî – Kuba','Kuba – Mescid-i Aksâ'],0,'Mescid-i Haram ile Mescid-i Aksâ.'],
   ['Hangi ibadet bu gece farz kılındı?',['Oruç','Zekât','Namaz'],2,'Beş vakit namaz farz kılındı.']]),
 L('akabe','Akabe Biatları','621–622',
  'Medineli müslümanlar Peygamberimize söz verdi ve onu Medine’ye davet etti.',
  [['🤝','Birinci Akabe','Medineliler Akabe’de İslam’a ve Peygamberimize söz verdi.'],['👨‍🏫','Mus‘ab','Medine’ye öğretmen olarak Mus‘ab b. Umeyr gönderildi.'],['🌙','İkinci Akabe','Bir yıl sonra daha çok kişi geldi, onu Medine’ye davet etti.']],
  'Hac mevsiminde Medineli Evs ve Hazrec’ten gruplarla yapılan iki Akabe Biatı, Hicret’in zeminini hazırladı.',
  [['Birinci Akabe (621)','620 hac mevsiminde altı Hazrecli müslüman oldu. Ertesi yıl on ikisi (on Hazrecli, iki Evsli) Akabe’de gizlice görüştü; şirk koşmama, hırsızlık ve zina yapmama gibi şartlara biat ettiler.','DİA, “Muhammed” md.'],
   ['Mus‘ab b. Umeyr','Medine’ye Kur’an ve İslam öğretmek için Mus‘ab gönderildi; Medine’de İslam hızla yayıldı.','DİA, “Mus‘ab b. Umeyr” md.'],
   ['İkinci Akabe (622)','Hac mevsiminde ikisi kadın yetmiş beş Yesribli müslüman Akabe’de buluştu; Peygamber’i ve Mekkeli müslümanları kendi canları gibi koruyacaklarına söz verdiler.','DİA, “Muhammed” md.']],
  [['Medine’ye öğretmen olarak kim gönderildi?',['Ebû Bekir','Mus‘ab b. Umeyr','Hz. Ali'],1,'Mus‘ab b. Umeyr.'],
   ['Akabe Biatları kimlerle yapıldı?',['Medinelilerle','Habeşlilerle','Tâiflilerle'],0,'Medineli Evs ve Hazrec’le.']])
]},
{id:'medine',ad:'Medine Dönemi',alt:'622 – 632',renk:'#8a54b5',dersler:[
 L('hicret','Hicret','622',
  'Peygamberimiz ve Ebû Bekir Mekke’den Medine’ye gitti. Yolda mağarada saklandılar.',
  [['🌃','Gece yola çıktı','Hz. Ali onun yatağında yattı, müşrikleri oyaladı.'],['🕳️','Sevr Mağarası','Ebû Bekir’le üç gün mağarada saklandı.'],['🎉','Medine’de karşılama','Medineliler “Tala‘al-bedru” diye karşıladı.']],
  'Müşriklerin suikast planı üzerine Peygamber, Ebû Bekir’le Mekke’den Medine’ye hicret etti (622).',
  [['Suikast planı','Kureyş, Peygamberi öldürmek için her kabileden genç seçti; Hz. Ali yatağına yattı.','İbn Hişâm, es-Sîre'],
   ['Sevr Mağarası','Peygamber ve Ebû Bekir üç gün Sevr’de kaldı; Allah onları müşriklerden korudu.','Tevbe sûresi 40'],
   ['Medine’ye varış','13 Eylül 622’de Sevr’den yola çıktı; 8 Rebîülevvel / 20 Eylül’de Kubâ’ya vardı ve Kubâ Mescidi’ni kurdu. 12 Rebîülevvel / 24 Eylül’de Rânûnâ vadisinde ilk cuma namazını kıldırıp Medine’ye ulaştı, Ebû Eyyûb el-Ensârî’nin evine yerleşti.','DİA, “Muhammed” md. (kronoloji)']],
  [['Hicrette Peygamberimizin yatağında kim yattı?',['Ebû Bekir','Hz. Ali','Hz. Ömer'],1,'Hz. Ali yattı.'],
   ['Hicrette Peygamberimiz hangi mağaraya sığındı?',['Hira','Sevr','Erkam'],1,'Sevr Mağarası’na.']]),
 L('medine-ilk','Medine’de İlk Adımlar','622–623',
  'Mescid yapıldı, muhacirler ve ensar kardeş oldu.',
  [['🕌','Mescid-i Nebevî','İlk iş olarak mescit inşa edildi.'],['🤝','Kardeşlik','Muhacirlerle Ensar kardeş yapıldı.'],['📜','Medine Vesikası','Medine’de herkesin haklarını koruyan bir sözleşme yazıldı.']],
  'Medine’de Mescid-i Nebevî inşa edildi, Muâhât (kardeşlik) kuruldu ve Medine Vesikası ile ortak yaşam düzenlendi.',
  [['Mescid-i Nebevî','Mescit, ibadet, eğitim ve yönetim merkezi oldu; yoksul muhacirlere Suffe verildi.','İbn Hişâm, es-Sîre'],
   ['Muâhât','Hicretin 1. yılında (Receb/Ocak 623) muhacirlerle ensar arasında kardeşlik kuruldu.','DİA, “Muhammed” md. (kronoloji)'],
   ['Medine Vesikası','Hicretin 1. yılında (Ramazan/Mart 623) düzenlenen Medine Vesikası ile Medine Haremi’nin sınırları belirlendi.','DİA, “Muhammed” md. (kronoloji)']],
  [['Muhacirlerle Ensar arasındaki kardeşliğe ne ad verilir?',['Muâhât','Biat','Hudeybiye'],0,'Muâhât.'],
   ['Medine’de kurulan ilk toplumsal sözleşme hangisidir?',['Medine Vesikası','Hudeybiye','Veda Hutbesi'],0,'Medine Vesikası.']]),
 L('bedir','Bedir Savaşı','624',
  'Az sayıdaki müslümanlar, çok sayıdaki müşriklere karşı Allah’ın yardımıyla kazandı.',
  [['⚔️','Bedir’de karşılaştılar','Müslümanlar yaklaşık 300, müşrikler yaklaşık 1000 kişiydi.'],['🙏','Dua','Peygamberimiz gece boyunca Allah’a dua etti.'],['🏆','Zafer','Müslümanlar kazandı.']],
  '17 Ramazan 2 / 13 Mart 624’te Bedir’de Müslümanlar, Ebû Cehil komutasındaki bin kişilik Kureyş ordusuyla savaşıp kazandı.',
  [['Sebep','Resûl-i Ekrem, Ebû Süfyân’ın Suriye’den dönen ticaret kervanına Bedir’de baskın için yola çıktı; kervan kurtulunca Kureyş yine de bin kişiyle yürüdü.','DİA, “Muhammed” md.'],
   ['Savaş','Sayıca az Müslümanlar kuvvetli düşmana karşı zafer kazandı.','İbn Hişâm, es-Sîre'],
   ['Esirler','Okuma yazma bilen esirler Müslüman çocuklara yazı öğretince serbest bırakıldı.','İbn Sa‘d, Tabakât']],
  [['Bedir Savaşı ne zaman yapıldı?',['Hicretin 2. yılında','Hicretin 6. yılında','Hicretten önce'],0,'Hicretin 2. yılında (624).'],
   ['Bedir’de hangi taraf kazandı?',['Müslümanlar','Müşrikler','Beraber kaldı'],0,'Müslümanlar kazandı.']]),
 L('uhud','Uhud Savaşı','625',
  'Okçular emre uymayınca savaşın sonucu değişti.',
  [['🏹','Okçular','Peygamberimiz okçulara tepeden ayrılmamalarını söyledi.'],['💥','Dönüş','Bazı okçular tepeyi bıraktı, düşman arkadan vurdu.'],['😔','Ders','Hz. Hamza şehit oldu; emre uymanın önemi anlaşıldı.']],
  '7 veya 11 Şevval 3 (Mart 625) günü Uhud’da yaklaşık 700 sahabi düşmanla karşılaştı; Abdullah b. Übey 300 kadar adamıyla yoldan dönmüştü. Okçuların yerlerini terk etmesiyle müslümanlar zor durumda kaldı.',
  [['Savaşın başı','Müslümanlar üstünlük sağladı.','İbn Hişâm, es-Sîre'],
   ['Okçuların yeri','Peygamberin emrine rağmen birçok okçu ganimet için tepeyi bıraktı; Halid b. Velîd arkadan saldırdı.','Âl-i İmrân sûresi 152-153'],
   ['Kayıplar','Hz. Hamza dahil yetmiş civarı sahabe şehit oldu; Peygamber de yaralandı.','DİA, “Uhud Gazvesi” md.']],
  [['Uhud’da okçular hangi tepeye yerleştirilmişti?',['Aynâyn','Hira','Safâ'],0,'Aynâyn tepesine.'],
   ['Uhud’da şehit olan Peygamberimizin amcası kimdir?',['Hz. Hamza','Ebû Tâlib','Abbâs'],0,'Hz. Hamza.']]),
 L('hendek','Hendek Savaşı','627',
  'Müslümanlar şehri hendek kazarak korudu.',
  [['🛡️','Kuşatma','Düşman orduları Medine’yi kuşatmaya geldi.'],['⛏️','Hendek','Selmân-ı Fârisî’nin fikriyle şehrin etrafı kazıldı.'],['🌪️','Fırtına','Soğuk ve fırtına düşmanı geri çekilmeye zorladı.']],
  'Şevval-Zilkade 5 (Mart-Nisan 627) arasında Kureyş, çeşitli Arap kabileleri ve Benî Nadîr’in oluşturduğu ahzâb Medine’yi kuşattı; Selmân-ı Fârisî’nin önerisiyle hendek kazıldı.',
  [['Ahzâb','Kureyş, Gatafân ve Yahudi kabilelerinden birleşik ordu Medine’ye yürüdü.','Ahzâb sûresi'],
   ['Hendek','Selmân-ı Fârisî’nin önerisiyle şehrin açık tarafına hendek kazıldı.','İbn Hişâm, es-Sîre'],
   ['Sonuç','Kuşatma uzayınca soğuk, fırtına ve ittifak çatlağı yüzünden düşman çekildi.','DİA, “Hendek Gazvesi” md.']],
  [['Hendek fikrini kim verdi?',['Selmân-ı Fârisî','Bilâl','Ebû Zer'],0,'Selmân-ı Fârisî.'],
   ['Hendek Savaşı’nda düşman neden çekildi?',['Müslümanlar çıkıp yendi','Soğuk ve fırtına yüzünden','Kâbe’ye gitti'],1,'Kuşatma uzadı, soğuk ve fırtına çıktı.']]),
 L('hudeybiye','Hudeybiye Antlaşması','628',
  'Umre için yola çıktılar ama Mekkeliler izin vermedi; barış antlaşması yapıldı.',
  [['🕋','Umre yolu','Müslümanlar umre yapmak için Mekke’ye yürüdü.'],['✋','Engel','Mekkeliler girmelerine izin vermedi.'],['📝','Antlaşma','10 yıl savaşmama antlaşması yapıldı; Allah buna “apaçık fetih” dedi.']],
  'Zilkade 6 (Mart 628) 1400-1500 kişiyle umre için çıkan Müslümanlar, Hudeybiye’de Kureyş’le antlaşma yaptı; Feth sûresi bu vesileyle indi.',
  [['Rıdvan Biatı','Hz. Osman’ın öldürüldüğü haberi üzerine ağaç altında biat alındı.','Fetih sûresi 18'],
   ['Antlaşma','On yıl savaş yok; müslümanlar bu yıl dönecek, gelecek yıl umre yapacaktı.','İbn Hişâm, es-Sîre'],
   ['Sonuç','Fetih sûresinde “apaçık bir fetih” denilen bu antlaşma, İslam’ın yayılmasını hızlandırdı.','Fetih sûresi 1']],
  [['Hudeybiye Antlaşması kaç yıllık barış öngördü?',['2','10','30'],1,'On yıl.'],
   ['Hudeybiye’den sonra inen sûre hangisi?',['Fetih','Maun','İhlâs'],0,'Fetih sûresi.']]),
 L('fetih','Mekke’nin Fethi','630',
  'Müslümanlar Mekke’ye girdi. Peygamberimiz herkesi affetti.',
  [['🌄','Büyük ordu','On bin kişilik ordu Mekke’ye ilerledi.'],['🕋','Putlar kırıldı','Kâbe putlardan temizlendi.'],['💖','Af','“Bugün size kınama yok, gidin hepiniz serbestsiniz” dedi.']],
  'Kureyş Hudeybiye Antlaşması’nı bozunca Peygamber 13 Ramazan 8 / 4 Ocak 630’da yola çıktı; 20 Ramazan / 11 Ocak 630’da Mekke fethedildi.',
  [['Sebep','Kureyş’in müttefiki Hudeybiye’deki ahdi bozunca Müslümanlar Mekke’ye yürüdü.','İbn Hişâm, es-Sîre'],
   ['Fetih','Savaşsız denecek kadar az çatışmayla şehre girildi; Kâbe putlardan arındırıldı.','Nasr sûresi'],
   ['Genel af','Kureyşlilere “Bugün size kınama yoktur, gidin hepiniz serbestsiniz.” denildi.','İbn Hişâm, es-Sîre']],
  [['Mekke ne zaman fethedildi?',['Hicretin 8. yılında','Hicretin 2. yılında','Hicretten önce'],0,'Hicretin 8. yılında (630).'],
   ['Peygamberimiz Mekkelilere ne yaptı?',['Cezalandırdı','Affetti','Sürgün etti'],1,'Genel af ilan etti.']]),
 L('veda','Veda Haccı','632',
  'Peygamberimiz son haccında insanlara büyük bir hutbe okudu.',
  [['🏔️','Arafat','Binlerce müslüman Arafat’ta toplandı.'],['🗣️','Veda Hutbesi','İnsan haklarını ve kardeşliği anlattı.'],['✅','Din tamamlandı','“Bugün dininizi tamamladım” âyeti indi.']],
  'Hicretin 10. yılında (632) 26 Zilkade’de Medine’den çıkan Peygamber, 9 Zilhicce / 7 Mart’ta Arafat’ta, sayıları 120.000’i aşan sahabeye Veda Hutbesi’ni okudu.',
  [['Hac','Peygamber hac menâsikini öğretti: “Menâsikinizi benden alın.”','Müslim, Hac'],
   ['Veda Hutbesi','Aynı anne babadan türeyen bütün insanların eşit olduğunu söyleyerek başladığı hutbesinde genellikle insan hakları üzerinde durdu.','DİA, “Muhammed” md.'],
   ['Âyet','“Bugün size dininizi tamamladım” âyeti indi.','Mâide sûresi 3']],
  [['Veda Hutbesi nerede okundu?',['Arafat','Mina','Medine'],0,'Arafat’ta.'],
   ['Veda Haccı ne zaman yapıldı?',['Hicretin 10. yılı','Hicretin 5. yılı','Hicretten önce'],0,'Hicretin 10. yılı (632).']])
]},
{id:'vefat',ad:'Vefat',alt:'632',renk:'#5a6472',dersler:[
 L('hastalik','Son Hastalık ve Vefat','632',
  'Peygamberimiz hastalandı, Ebû Bekir’i imam yaptı ve vefat etti.',
  [['🤒','Hastalık','Safer ayında hastalandı.'],['🕌','Ebû Bekir imam','Namazı Ebû Bekir kıldırdı.'],['🌙','Vefat','Rebîülevvel ayında, Pazartesi günü vefat etti.']],
  '27 Safer 11’de (24 Mayıs 632) şiddetli baş ağrısı ve ateşle hastalandı; DİA kronolojisine göre 13 Rebîülevvel / 8 Haziran 632 Pazartesi günü vefat etti, ertesi gün defnedildi (bazı rivayetlerde 12 Rebîülevvel).',
  [['Hastalık','Hz. Âişe’nin odasında bakıldı; bazı vasiyetlerde bulundu.','Buhârî, Meğâzî'],
   ['İmamlık','Hastalığı sırasında Ebû Bekir’e imamlık görevi verdi.','Buhârî, Ezân'],
   ['Vefat','Naaşı vefat ettiği yerde kazılan mezara Hz. Ali, Fazl, Kusem ve Üsâme tarafından indirildi.','DİA, “Muhammed” md.']],
  [['Peygamberimiz hangi gün vefat etti?',['Pazartesi','Cuma','Pazar'],0,'DİA kronolojisine göre Pazartesi günü.'],
   ['Hastalığında namazı kim kıldırdı?',['Hz. Ömer','Ebû Bekir','Hz. Ali'],1,'Ebû Bekir.']])
]},
{id:'halifeler',ad:'Dört Halife Dönemi',alt:'632 – 661',renk:'#b5483f',dersler:[
 L('ebubekir','Hz. Ebû Bekir','632–634',
  'İlk halife Ebû Bekir oldu. Kur’an kitap haline getirilmeye başlandı.',
  [['🤝','Halife seçildi','Müslümanlar Ebû Bekir’i halife seçti.'],['🛡️','Ridde savaşları','Zekât vermek istemeyenlere karşı devlet düzeni korundu.'],['📚','Kur’an toplandı','Kur’an yazılı bir nüshada bir araya getirildi.']],
  'Peygamber’in vefatıyla Sakîfe’de seçilen ilk halife; 632–634 arasında devleti ve Kur’an’ın tek nüshada toplanmasını yürüttü.',
  [['Seçim','Peygamberin vefatından sonra Sakîfetü Benî Sâide’de halife seçildi.','İbn Hişâm, es-Sîre'],
   ['Ridde Savaşları','Zekâtı inkâr eden ve yalancı peygamberlere karşı mücadele etti.','DİA, “Ebû Bekir” md.'],
   ['Kur’an’ın cem‘i','Yemâme’de çok hafızın şehit olması üzerine Zeyd b. Sâbit’in başkanlığında Kur’an toplandı.','Buhârî, Fezâilü’l-Kur’ân']],
  [['İlk halife kimdir?',['Hz. Ömer','Hz. Ebû Bekir','Hz. Osman'],1,'Hz. Ebû Bekir.'],
   ['Kur’an’ı toplama işini kim yürüttü?',['Zeyd b. Sâbit','Bilâl','Hz. Hamza'],0,'Zeyd b. Sâbit.']]),
 L('omer','Hz. Ömer','634–644',
  'Büyük fetihler yapıldı, hicrî takvim başladı.',
  [['🗺️','Fetihler','Şam, Kudüs ve Mısır fethedildi.'],['📅','Takvim','Hicret yılı başlangıç alınarak takvim yapıldı.'],['⚖️','Adalet','Ömer, adaletiyle tanındı.']],
  'Hz. Ömer döneminde Şam, Irak, Mısır fethedildi; divan teşkilatı ve hicrî takvim uygulandı.',
  [['Fetihler','Yermük (636) ve Kâdisiyye (636) zaferleri, Kudüs’ün teslimi (637), Mısır’ın fethi (641).','DİA, “Ömer” md.'],
   ['Devlet teşkilatı','Divan, vilayetler, kadılık ve maaş sistemi kuruldu.','DİA, “Ömer” md.'],
   ['Hicrî takvim','Hicret, takvimin başlangıcı olarak kabul edildi.','DİA, “Takvim” md.']],
  [['Hicrî takvimin başlangıcı hangi olaydır?',['Hicret','Bedir','Fetih'],0,'Hicret.'],
   ['Hz. Ömer’in lakabı nedir?',['Fârûk','Sıddîk','Zinnûreyn'],0,'Fârûk (hak ile batılı ayıran).']]),
 L('osman','Hz. Osman','644–656',
  'Kur’an çoğaltılıp şehirlere gönderildi. Sonra çıkan fitne üzücü sonuçlar doğurdu.',
  [['📖','Mushaflar','Kur’an nüshaları çoğaltılıp gönderildi.'],['⛵','İlk deniz savaşı','İslam donanması Kıbrıs’a gitti.'],['😢','Fitne','Çıkan karışıklıklar yüzünden Hz. Osman şehit oldu.']],
  'Mushaf çoğaltılıp şehirlere gönderildi, Kıbrıs fethedildi (649) ve çıkan fitne Hz. Osman’ın şehadetiyle sonuçlandı (656).',
  [['Mushaf','Okunuş farklılıkları büyüyünce Zeyd b. Sâbit başkanlığında komisyon kuruldu; mushaflar çoğaltılıp gönderildi.','Buhârî, Fezâilü’l-Kur’ân'],
   ['Fetihler','Kıbrıs’a ilk deniz seferi (649) yapıldı.','DİA, “Osman” md.'],
   ['Fitne ve şehadet','Çıkan isyanlar sonrası evi kuşatıldı, Zilhicce 35/656’da şehit edildi.','İbn Sa‘d, Tabakât']],
  [['Hz. Osman döneminde Kur’an için ne yapıldı?',['Mushaflar çoğaltılıp gönderildi','Kur’an yasaklandı','Kur’an ezberlenmesi yasaklandı'],0,'Mushaflar çoğaltıldı.'],
   ['Hz. Osman’ın lakabı nedir?',['Zinnûreyn','Fârûk','Sıddîk'],0,'Zinnûreyn (iki nur sahibi).']]),
 L('ali','Hz. Ali','656–661',
  'Dördüncü halife Hz. Ali, merkezi Kûfe yaptı. Müslümanlar arasında savaşlar yaşandı.',
  [['🏙️','Kûfe','Başkent Kûfe oldu.'],['⚔️','Cemel ve Sıffîn','Müslümanlar kendi aralarında savaştı.'],['🕯️','Şehadet','Ramazan ayında Kûfe’de şehit edildi.']],
  '656–661 arasında halifelik yapan Hz. Ali döneminde Cemel (656) ve Sıffîn (657) savaşları yaşandı, Haricîler ortaya çıktı; 661’de şehit edildi.',
  [['Halifelik','Hz. Osman’ın şehadetinden sonra halife seçildi; merkezi Kûfe’ye taşıdı.','DİA, “Ali b. Ebû Tâlib” md.'],
   ['İç savaşlar','Cemel (656), Sıffîn (657) ve Nehrevan (658) olaylarında müslümanlar kendi arasında çatıştı.','İbn Sa‘d, Tabakât'],
   ['Şehadet','Ramazan 40/661’de Kûfe’de İbn Mülcem tarafından şehit edildi.','DİA, “Ali b. Ebû Tâlib” md.']],
  [['Dört halifenin doğru sırası hangisidir?',['Ebû Bekir, Ömer, Osman, Ali','Ömer, Ebû Bekir, Ali, Osman','Ali, Osman, Ömer, Ebû Bekir'],0,'Ebû Bekir, Ömer, Osman, Ali.'],
   ['Hz. Ali hangi şehri merkez yaptı?',['Kûfe','Şam','Mekke'],0,'Kûfe.']])
]}
];

/* Dönem ve bölüm sınavları: sorular ilgili dönemlerin derslerinden çekilir. */
const SINAVLAR=[
 {id:'s-cocukluk',ad:'Çocukluk Sınavı',donemler:['cocukluk']},
 {id:'s-genclik',ad:'Gençlik Sınavı',donemler:['genclik']},
 {id:'s-oncesi',ad:'Nübüvvet Öncesi',donemler:['cocukluk','genclik']},
 {id:'s-mekke',ad:'Mekke Dönemi Sınavı',donemler:['mekke']},
 {id:'s-medine',ad:'Medine Dönemi Sınavı',donemler:['medine']},
 {id:'s-sonrasi',ad:'Nübüvvet Sonrası',donemler:['mekke','medine','vefat']},
 {id:'s-halifeler',ad:'Dört Halife Sınavı',donemler:['halifeler']}
];

/* ===== HARİTA VERİSİ =====
 Şematik harita: kıyı çizgisi kabadır, ölçekli değildir (kendi çizimimiz; kitap görseli kullanılmadı).
 Koordinatlar yaklaşık [enlem, boylam]. Derse yer eklemek için HARITA[dersId] = {yer:[...], yol:[...]} yaz. */
const YERLER={
 mekke:{ad:'Mekke',lat:21.42,lon:39.83,e:'🕋'},
 medine:{ad:'Medine',lat:24.47,lon:39.61,e:'🕌'},
 taif:{ad:'Tâif',lat:21.27,lon:40.42,e:'⛰️'},
 bedir:{ad:'Bedir',lat:23.78,lon:38.77,e:'⚔️'},
 ebva:{ad:'Ebvâ',lat:23.17,lon:39.15,e:'📍'},
 hudeybiye:{ad:'Hudeybiye',lat:21.43,lon:39.63,e:'📜'},
 arafat:{ad:'Arafat',lat:21.35,lon:39.98,e:'🤲'},
 busra:{ad:'Busrâ',lat:32.52,lon:36.48,e:'🐪'},
 sam:{ad:'Şam',lat:33.51,lon:36.29,e:'🏙️'},
 kudus:{ad:'Kudüs',lat:31.78,lon:35.23,e:'🕌'},
 habes:{ad:'Habeşistan',lat:14.13,lon:38.72,e:'👑'},
 kufe:{ad:'Kûfe',lat:32.03,lon:44.4,e:'🏙️'},
 basra:{ad:'Basra',lat:30.5,lon:47.8,e:'📍'}
};
const HARITA={
 fil:{yer:['mekke']},sut:{yer:['mekke']},fudul:{yer:['mekke']},hacer:{yer:['mekke']},hira:{yer:['mekke']},
 vahiy:{yer:['mekke']},gizli:{yer:['mekke']},acik:{yer:['mekke']},boykot:{yer:['mekke']},huzun:{yer:['mekke']},
 amine:{yer:['mekke','medine','ebva'],yol:['mekke','medine','ebva']},
 sam:{yer:['mekke','busra'],yol:['mekke','busra']},
 hatice:{yer:['mekke','busra'],yol:['mekke','busra']},
 habese:{yer:['mekke','habes'],yol:['mekke','habes']},
 taif:{yer:['mekke','taif'],yol:['mekke','taif']},
 isra:{yer:['mekke','kudus'],yol:['mekke','kudus']},
 akabe:{yer:['mekke','medine'],yol:['mekke','medine']},
 hicret:{yer:['mekke','medine'],yol:['mekke','medine']},
 'medine-ilk':{yer:['medine']},
 bedir:{yer:['medine','bedir','mekke'],yol:['medine','bedir']},
 uhud:{yer:['medine','mekke']},hendek:{yer:['medine','mekke']},
 hudeybiye:{yer:['medine','hudeybiye','mekke'],yol:['medine','hudeybiye']},
 fetih:{yer:['medine','mekke'],yol:['medine','mekke']},
 veda:{yer:['medine','mekke','arafat'],yol:['medine','mekke','arafat']},
 hastalik:{yer:['medine']},
 ebubekir:{yer:['medine','sam'],yol:['medine','sam']},
 omer:{yer:['medine','kudus','sam'],yol:['medine','kudus','sam']},
 osman:{yer:['medine']},
 ali:{yer:['medine','basra','kufe','sam']}
};
/* Kaba kara kütleleri: [enlem, boylam] köşeleri */
const KARA=[
 [[34,35.5],[29.5,35.0],[27.35,35.7],[26.2,36.45],[24.1,38.05],[22.8,39.0],[21.5,39.15],[20.15,40.27],[19.1,41.07],[16.9,42.55],[14.8,42.95],[13.3,43.25],[12.7,43.4],[12.7,52],[34,52]],
 [[34,32.3],[34,35.5],[29.5,35.0],[27.9,34.3],[28.6,33.6],[29.95,32.65]],
 [[34,26],[34,32.3],[29.95,32.45],[28.5,32.9],[27.25,33.7],[26.1,34.3],[25.1,34.9],[23.9,35.8],[19.6,37.2],[15.6,39.45],[13.0,42.7],[11.6,43.15],[11.6,26]]
];

/* ===== DAHA FAZLA BİLGİ =====
 Her ders için konuya özel ayrıntı: metin (DİA maddelerinden kendi cümlelerimizle), dia (DİA'nın o konudaki maddesi),
 sv (Siyer Vakfı'nın o konudaki ders sayfası, videosu ve PDF ders notu). Bağlantılar tek tek açılıp doğrulandı (23.11.2026).
 DIA(madde-adresi, ad) · SV(sayfa-adresi, youtube-kimliği, ders başlığı, anlatıcı, pdf) */
const DIA=(slug,ad)=>({ad,url:'https://islamansiklopedisi.org.tr/'+slug});
const SV=(slug,yt,baslik,kisi,pdf)=>({baslik,kisi,sayfa:'https://siyervakfi.org/'+slug+'/',video:yt?'https://www.youtube.com/watch?v='+yt:'',pdf:pdf||''});
const KM='https://siyervakfi.org/dokuman/kuran-cografyasi-mekke/', IM='https://siyervakfi.org/dokuman/iman-sehri-medine/';
const SV_APAYDIN=SV('dr-mehmet-apaydin-kutlu-dogumdan-hicrete-mekke-doneminin-kronolojisi','fQROakFQ7ko','Kutlu Doğumdan Hicrete Mekke Dönemi’nin Kronolojisi','Dr. Mehmet Apaydın',KM+'ders2-dr-mehmet-apaydin.pdf');
const SV_MEDINE_KRON=SV('medine-donemi-kronolojisi-mehmet-apaydin','iu61yP37Wl8','Medine Dönemi Kronolojisi','Mehmet Apaydın',IM+'ders-3-mehmet-apaydin.pdf');
const SV_SAVAS=SV('amac-ve-hedefleri-acisindan-hz-peygamberin-savaslari-prof-dr-kasim-sulul','ZvTYSonZsZ8','Amaç ve Hedefleri Açısından Hz. Peygamber’in Savaşları','Prof. Dr. Kâsım Şulul',IM+'ders-8-prof-dr-kasim-sulul.pdf');
const SV_APAK=SV('prof-dr-adem-apak-yeni-arayislar-huzun-yilindan-taife-taiften-akabe-gorusmelerine','Dh8ljyajrU0','Yeni Arayışlar (Hüzün Yılından Tâif’e, Tâif’ten Akabe Görüşmelerine)','Prof. Dr. Adem Apak');
const DETAY={
 fil:{metin:[
  'Fil Vak‘ası’nın sebebi, tarihi ve sonucu hakkında kaynaklarda değişik rivayetler vardır. Olayın kahramanı Ebrehe, Habeş Krallığı’nın Yemen valisi ve mutaassıp bir hıristiyandı. Araplar’ın Kâbe’yi ziyaret için Mekke’ye gittiğini görünce San‘a’da büyük bir katedral yaptırdı; bunun amacı insanları oraya çekmekti.',
  'Kur’an’ın 105. sûresinde ordu mensuplarından “ashâbü’l-fîl” diye söz edilir. Askerin önünde bir fil bulunduğu için hem sûreye hem olaya “Fil” denmiştir.',
  'Genel kabul gören kanaate göre Hz. Muhammed, bu olaydan elli (veya elli beş) gün sonra Rebîülevvel’in 12’sinde Pazartesi günü Mekke’de doğdu. Miladi tarih için DİA iki hesabı birlikte verir: 20 Nisan 571 ve 17 Haziran 569.']
  ,dia:[DIA('fil-vakasi','Fil Vak‘ası'),DIA('ebrehe','Ebrehe')],
  sv:[SV('prof-dr-huseyin-algul-hz-peygamberin-sas-dogumu-ve-dogumunda-meydana-geldigi-rivayet-edilen-hadiseler','p4fqNOt9wQ8','Hz. Peygamber’in (sas) Doğumu ve Doğumunda Meydana Geldiği Rivayet Edilen Hadiseler','Prof. Dr. Hüseyin Algül',KM+'ders4-prof-dr-huseyin-algul.pdf'),SV_APAYDIN]},
 sut:{metin:[
  'Mekkeli aileler çocuklarını, çölün sağlıklı havasında büyüsünler ve fasih Arapça öğrensinler diye bedevî kabilelerden bir sütanneye verirdi. Sütanneliği gelir kaynağı olan kadınlar zengin ailelerin çocuklarını tercih ederdi.',
  'Halîme, Hevâzin kabilesinin Sa‘d b. Bekir koluna mensuptu. Kıtlık yılında Mekke’ye geldiğinde zengin bir aile çocuğu bulamadı; yetim olduğu için Muhammed’i almakta tereddüt etti, ama boş dönmemek için kabul etti.',
  'İki yıl sonra Halîme çocuğu sütten kesip ailesine getirdi. Âmine, çöl havasının çocuğa yaradığını görünce (bir rivayete göre Mekke’de veba çıktığı için) onu bir süre daha geri gönderdi. Hz. Muhammed beş yaşına gelince Halîme onu ailesine teslim etti.']
  ,dia:[DIA('halime','Halîme')],
  sv:[SV('prof-dr-kasim-sulul-hz-peygamberin-cocuklugu-sutanneye-verilisi-ve-serhus-sadr-hadisesi','MB_-fqyC22k','Hz. Peygamber’in Çocukluğu, Sütanneye Verilişi ve Şerhu’s-Sadr Hadisesi','Prof. Dr. Kâsım Şulul',KM+'ders5-prof-dr-kasim-sulul.pdf')]},
 amine:{metin:[
  'Âmine, Kureyş’in Benî Zühre koluna mensup Vehb b. Abdümenâf’ın kızıdır. Oğluyla birlikte Yesrib’deki akrabalarını ziyaret etti; orada bir ay kadar kaldıktan sonra dönüşte, Medine’ye yaklaşık 190 km uzaklıktaki Ebvâ’da hastalanıp vefat etti. Dadısı Ümmü Eymen çocuğu Mekke’ye götürüp dedesi Abdülmuttalib’e teslim etti.',
  'Abdülmuttalib’in asıl adı Şeybe’dir; Yesrib’de doğdu. Mekke’ye amcası Muttalib’le gelince onu köle sanan Mekkeliler “Abdülmuttalib” dedi ve ad ona kaldı. Zemzem Kuyusu’nu yeniden buldu, hacılara su dağıtma görevini üstlendi. Torununa çok ihtimam gösterdi, Dârünnedve toplantılarına yanında götürdü.',
  'Abdülmuttalib vefat etmeden önce sekiz yaşındaki torununun bakımını Ebû Tâlib’e vasiyet etti. Ebû Tâlib, Abdullah’ın öz kardeşiydi ve Hâşimoğulları’nın reisliği ölümüne kadar onda kaldı.']
  ,dia:[DIA('amine','Âmine'),DIA('abdulmuttalib','Abdülmuttalib'),DIA('ebu-talib','Ebû Tâlib'),DIA('ebva','Ebvâ')],sv:[SV_APAYDIN]},
 sam:{metin:[
  'Mekkelilerin ticaret yolları Suriye ve Yemen’e uzanırdı. Hz. Muhammed’in sonraki yıllarda Hubâşe panayırına, bir veya iki defa Yemen’e, Doğu Arabistan’daki panayırlara ve Habeşistan’a gittiği bilinir; bu seferler ona insanları, dilleri ve adetleri tanıma imkânı verdi.',
  'Busrâ, Suriye’nin güneyinde, Yermük nehrinin kaynağına yakın, Şam’ın yaklaşık 141 km güneyinde eski bir şehirdir; Mekke kervanlarının uğrak yeriydi. Çocukken amcası Ebû Tâlib’le Suriye’ye yaptığı yolculukta rahip Bahîra ile karşılaştığı rivayeti, kaynaklarda farklı ayrıntılarla anlatılır ve ilim çevrelerinde ayrıca tartışılır.']
  ,dia:[DIA('busra','Busrâ'),DIA('bahira','Bahîrâ')],
  sv:[SV('prof-dr-mustafa-fayda-rahib-bahira-hadisesi','OtJq7myIWrs','Rahib Bahira Hadisesi','Prof. Dr. Mustafa Fayda',KM+'ders7-prof-dr-mustafa-fayda.pdf'),SV('mehmet-kaya-hz-peygamberin-nubuvvet-oncesi-ticari-seferleri','PQq0VaaAW2Y','Hz. Peygamber’in Nübüvvet Öncesi Ticari Seferleri','Mehmet Kaya',KM+'ders6-prof-dr-ahmet-turan-yuksel.pdf')]},
 fudul:{metin:[
  'Ficâr, sözlükte “haktan ayrılmak, günaha dalmak” demektir. Haram aylarda (zilkade, zilhicce, muharrem, receb) yapıldığı için bu adı alan dört savaş vardı. Hz. Muhammed, ilk grubun dördüncüsüne amcalarıyla birlikte katıldı, fakat fiilen savaşmadı. O sıradaki yaşı için 14, 15, 17 ve 20 rivayetleri vardır.',
  'Bu savaşın hemen ardından Hılfü’l-Fudûl toplantısına katıldı: katılanlar haksızlığa uğrayanları koruyacaklarına yemin etmişti. Hz. Peygamber, peygamber olduktan sonra da bu ittifaktan övgüyle bahsetmiş; böyle bir fazilet antlaşmasına yeniden çağrılsa tereddüt etmeyeceğini söylemiştir.']
  ,dia:[DIA('ficar','Ficâr')],
  sv:[SV('doc-dr-mithat-eser-hilful-fudul-cemiyeti','iX1dg9SX2Po','Hılfü’l-Fudûl Cemiyeti','Doç. Dr. Mithat Eser',KM+'ders9-doc-dr-mithat-eser.pdf')]},
 hatice:{metin:[
  'Hatice, Mekke’de doğdu; soyu Kusay’da Hz. Peygamber’in soyuyla birleşir. Üstün iffeti sebebiyle İslâm’dan önce “Tâhire” lakabıyla anılırdı. Hz. Muhammed’le evlenmeden önce iki evlilik yapmıştı.',
  'Kaynaklarda evlilik sırasında kendisinin 25, Hatice’nin 40 yaşında olduğu söylenir; DİA, çocuk sayısını göz önüne alarak İbn Abbas’tan nakledilen 28 yaşı daha isabetli bulur. Hz. Peygamber, hicretten sonra da Hatice’yi vefayla anmıştır.']
  ,dia:[DIA('hatice','Hatice')],
  sv:[SV('doc-dr-casim-avci-hz-peygamberin-gencliginden-nubuvvete-kadar-olan-hayati','mFPZNUE6xKg','Hz. Peygamber’in Gençliğinden Nübüvvete Kadar Olan Hayatı','Doç. Dr. Casim Avcı',KM+'ders8-prof-dr-casim-avci.pdf')]},
 hacer:{metin:[
  'Hacerülesved, “siyah taş” demektir: yerden yaklaşık 1,5 m yükseklikte, yaklaşık 30 cm çapında, yumurta biçiminde, siyaha yakın koyu kırmızı bir taştır. Kaynaklar, Hz. İbrâhim’in Kâbe’yi inşa ederken tavafın başlangıç noktasını belirlemek için onu yerleştirdiği konusunda görüş birliği içindedir.',
  'Kureyş Kâbe’yi miladi 605’te yeniden inşa ederken taşı kimin yerine koyacağı konusunda savaşı göze alacak kadar anlaşmazlığa düştü. Ebû Ümeyye b. Mugīre’nin teklifiyle Benî Şeybe Kapısı’ndan ilk girecek kişinin kararına uyulacaktı; giren Hz. Muhammed oldu. Taşı bir örtüye koydu, kabile reisleriyle birlikte kaldırdı ve kendi eliyle yerine yerleştirdi.']
  ,dia:[DIA('hacerulesved','Hacerülesved')],
  sv:[SV('doc-dr-casim-avci-hz-peygamberin-gencliginden-nubuvvete-kadar-olan-hayati','mFPZNUE6xKg','Hz. Peygamber’in Gençliğinden Nübüvvete Kadar Olan Hayatı','Doç. Dr. Casim Avcı',KM+'ders8-prof-dr-casim-avci.pdf')]},
 hira:{metin:[
  'Hira, Mekke’nin kuzeydoğusunda, Kâbe’ye yaklaşık 5 km uzaklıktadır; Cebelinur (Nur dağı) adıyla da bilinir. Dağ çevresindekilerden daha dik ve yüksektir; ünlü mağara zirvenin yaklaşık 20 m aşağısındadır.',
  'Peygamberlikten önceki yıllarda Hz. Muhammed Ramazan’da burada inzivaya çekilir, tefekkür ederdi. Vahiy de bu mağarada başladı.']
  ,dia:[DIA('hira','Hira'),DIA('vahiy','Vahiy')],
  sv:[SV('prof-dr-omer-celik-peygamberligin-gelisi-nubuvvet-kurumu-ve-vahiy','YxQJgFKjxlY','Peygamberliğin Gelişi, Nübüvvet Kurumu ve Vahiy','Prof. Dr. Ömer Çelik',KM+'ders10-prof-dr-omer-celik.pdf')]},
 vahiy:{metin:[
  'Vahiy, sözlükte “hızlıca ve gizlice söylemek, işaret etmek, ilham etmek” demektir; terim olarak Allah’ın bir emri veya bilgiyi peygamberine gizli olarak bildirmesidir. Kur’an’da yetmişi aşkın yerde fiil kalıplarıyla geçer.',
  'Siyer âlimleri, Cebrâil’in ilk vahyi getirirken Resûlullah’a abdesti ve namazı öğrettiği konusunda görüş birliği içindedir. İlk vahyin heyecanından sonra bir süre vahiy gelmedi; Hz. Peygamber sık sık Hira’ya gidip Cebrâil’in yeniden görünmesini bekledi, bu arada rabbinin kendisini terk ettiği endişesine kapıldı.']
  ,dia:[DIA('vahiy','Vahiy'),DIA('hira','Hira')],
  sv:[SV('prof-dr-omer-celik-peygamberligin-gelisi-nubuvvet-kurumu-ve-vahiy','YxQJgFKjxlY','Peygamberliğin Gelişi, Nübüvvet Kurumu ve Vahiy','Prof. Dr. Ömer Çelik',KM+'ders10-prof-dr-omer-celik.pdf')]},
 gizli:{metin:[
  'Davet yaklaşık üç yıl gizli sürdü. Hz. Peygamber, Mescid-i Harâm içinde Safâ tepesinin eteklerindeki Erkam b. Ebü’l-Erkam’ın evini kendine merkez seçti. Burada ashâba dinî bilgiler öğretiyor, ilâhî gerçeği arayanları İslâm’a davet ediyor, onlara Kur’an okuyor ve onlarla namaz kılıyordu.',
  'Evin seçilmesinin sebepleri arasında Harem’e dahil oluşu ve hac-umre sebebiyle Mekkelilerle ve dışarıdan gelenlerle dikkat çekmeden temas kolaylığı sayılır. Hz. Ömer de İslâm’ı bu evde kabul etti. Ev, kaynaklarda sahâbîlerin müslüman oluş zamanını tarihlendirmek için kullanılır.']
  ,dia:[DIA('darulerkam','Dârülerkam')],sv:[SV_APAYDIN]},
 acik:{metin:[
  'Açık davetle emrolununca Hz. Peygamber önce yakın akrabasını bir ziyafete çağırdı; Hâşimoğulları ve Muttaliboğulları’ndan yaklaşık kırk beş kişi katıldı. Amcası Ebû Leheb karşı çıktı.',
  'Ebû Leheb, peygamberlikten önce Hz. Muhammed’in dostuydu; iki oğlunu onun kızları Rukıyye ve Ümmü Külsûm’la evlendirmişti. Peygamber olduktan sonra ise ona şiddetle karşı çıktı. Bu dönemde zayıf müslümanlara, Bilâl-i Habeşî gibi, eziyet edilmeye başlandı.']
  ,dia:[DIA('ebu-leheb','Ebû Leheb'),DIA('bilal-i-habesi','Bilâl-i Habeşî')],
  sv:[SV('hz-peygamberin-sas-akrabalari-ve-bu-baglarin-islami-davete-etkisi','TB7nHf2a2CE','Hz. Peygamber’in (sas) Akrabaları ve Bu Bağların İslamî Davete Etkisi','Siyer Vakfı')]},
 habese:{metin:[
  'Zulmü engelleyemeyen Hz. Peygamber, bazı müslümanlara hıristiyan Necâşî Ashame’nin ülkesi Habeşistan’a hicret etme izni verdi. Aralarında Hz. Osman ve eşi Rukıyye’nin de bulunduğu on bir erkek ve dört kadından oluşan kafile 615’te gitti. Bu, İslâm’da ilk hicrettir.',
  'Kureyş heyet gönderip müslümanları geri istedi, Necâşî kabul etmedi; Bedir’den sonra gelen ikinci heyeti de reddetti. Habeş muhacirlerinden otuz üç kişi, Şi‘b-i Ebû Tâlib boykotunun bitmesinin ardından Mekke’ye döndü (620). Kalanların bir kısmı hicretten sonra, diğerleri 7 (628) yılında Medine’ye geldi.']
  ,dia:[DIA('cafer-b-ebu-talib','Ca‘fer b. Ebû Tâlib')],
  sv:[SV('prof-dr-levent-ozturk-habesistan-hicretleri-ve-garanik-hadisesi','4sgEvMUE6PU','Habeşistan Hicretleri ve Garanik Hadisesi','Prof. Dr. Levent Öztürk',KM+'ders13-prof-dr-levent-ozturk.pdf')]},
 boykot:{metin:[
  'Kureyş, Hâşimoğulları ve Muttaliboğulları’yla (Ebû Leheb ve oğulları hariç) konuşmamaya ve alışveriş yapmamaya karar verdi, kararın şartlarını bir kâğıda yazıp Kâbe’nin duvarına astı. Ebû Tâlib, yeğenini ve mensuplarını kendi mahallesinde (Şi‘bü Ebî Tâlib) topladı.',
  'DİA’ya göre boykot 617–620 yıllarını kapsar; daha kısa sürdüğü de rivayet edilmiştir. Hatice ile Ebû Tâlib’in servetleri bu yıllarda tükendi, hac mevsimi dışında alışveriş yapılamadı. Ebû Tâlib’in yeğeni Züheyr b. Ümeyye ve Hişâm b. Amr, Mut‘im b. Adî ve Zem‘a b. Esved’le anlaşıp boykota son verdi.']
  ,dia:[DIA('ebu-talib','Ebû Tâlib')],
  sv:[SV('prof-dr-unal-kilic-sib-i-ebi-talip-muhasarasi-ve-bu-agir-imtihanin-etkileri','SUfoVL8E_m4','Şib-i Ebî Tâlib Muhasarası ve Bu Ağır İmtihanın Etkileri','Prof. Dr. Ünal Kılıç',KM+'ders15-prof-dr-unal-kilic.pdf')]},
 huzun:{metin:[
  'Nübüvvetin 10. yılında önce Hz. Hatice (10 Ramazan / 19 Nisan 620), ardından yaklaşık bir ay sonra Ebû Tâlib vefat etti. Vefat tarihleri hakkında farklı rivayetler vardır. Bu yıla “senetü’l-hüzn” (hüzün yılı) denilmiştir.',
  'Ebû Tâlib’in himayesi sona erince Peygamber’in Mekke’de eskisi gibi korunması zorlaştı ve yeni yollar aramaya yöneldi: önce Tâif, sonra hac mevsiminde Medineli gruplarla görüşmeler.']
  ,dia:[DIA('hatice','Hatice'),DIA('ebu-talib','Ebû Tâlib')],sv:[SV_APAK]},
 taif:{metin:[
  'Tâif, Mekke’nin 88 km doğusunda, denizden yaklaşık 1700 m yükseklikteki Vec vadisindedir; Hicaz’ın kışın en soğuk şehridir, yazın ise Mekke eşrafının sayfiyesiydi. Hz. Peygamber, Zeyd b. Hârise’yle Sakīf kabilesinin yaşadığı bu şehre gitti.',
  'Amr b. Umeyr’in üç oğlunu (Abdüyâlîl, Mes‘ûd ve Habîb) ve kabilenin diğer önemli kişilerini İslâm’a davet etti; Kureyş’le akrabalık ve ticaret bağları olan Sakīfliler kabul etmedi. Mekke’ye girebilmek için bir Kureyşlinin himayesi gerekiyordu; başvurduğu pek çok kişi reddetti, sonunda Nevfeloğulları’nın reisi Mut‘im b. Adî himayesine aldı.',
  'Hz. Âişe sonradan “Uhud’dan daha zor bir gün yaşadınız mı?” diye sorunca Resûlullah, Tâif dönüşünü anlattı.']
  ,dia:[DIA('taif','Tâif')],
  sv:[SV('prof-dr-riza-savas-hz-peygamberin-sas-geldigi-donemde-taif','Z3ZzUGXAK9o','Hz. Peygamber’in (sas) Geldiği Dönemde Tâif','Prof. Dr. Rıza Savaş'),SV_APAK]},
 isra:{metin:[
  'İsrâ, Hz. Peygamber’in mi‘râc sırasında Mescid-i Harâm’dan Mescid-i Aksâ’ya yolculuğunu ifade eder; Kur’an’da İsrâ sûresinin ilk âyetinde anılır. DİA kronolojisi İsrâ ve mi‘râcı 27 Receb 621’e koyar ve beş vakit namazın bu olayla farz kılındığını belirtir.',
  'Siyer Vakfı’nın Mekke dersleri serisinde bu hadise ve Tâif’ten Akabe görüşmelerine uzanan süreç birlikte ele alınır.']
  ,dia:[DIA('isra','İsrâ'),DIA('mirac','Mi‘râc')],
  sv:[SV('prof-dr-cagfer-karadas-isra-ve-mirac-hadiseleri','dFqjS1A__E4','İsra ve Mirac Hadiseleri','Prof. Dr. Cağfer Karadaş',KM+'ders18-prof-dr-cagfer-karadas.pdf'),SV_APAK]},
 akabe:{metin:[
  'Akabe, sözlükte “sarp yol, dağdaki aşılması zor dik geçit” demektir. 620 hac mevsiminde Hazrecli bir grup Akabe’de Hz. Peygamber’le görüşüp müslüman oldu; Es‘ad b. Zürâre Yesrib’e dönüp yeni dini anlattı.',
  'Ertesi yıl on iki kişi (on Hazrecli, iki Evsli) gizlice Akabe’de buluştu; Allah’a ortak koşmamak, hırsızlık ve zina yapmamak gibi şartlara biat ettiler (Birinci Akabe). Öğretmen olarak Mus‘ab b. Umeyr gönderildi.',
  'Bir sonraki hac mevsiminde ikisi kadın yetmiş beş Yesribli geldi; Peygamber’i ve Mekkeli müslümanları kendi canlarını korudukları gibi koruyacaklarına söz verdiler (İkinci Akabe). Bundan sonra hicret izni verildi; ilk giden Âmir b. Rebîa ile eşi Leylâ oldu.']
  ,dia:[DIA('akabe','Akabe'),DIA('musab-b-umeyr','Mus‘ab b. Umeyr')],
  sv:[SV('prof-dr-adnan-demircan-akabe-biatlari-ve-bu-gorusmelerin-islam-toplumunun-olusumuna-etkileri','_mwHm3vpsS0','Akabe Biatları ve Bu Görüşmelerin İslam Toplumunun Oluşumuna Etkileri','Prof. Dr. Adnan Demircan',KM+'ders17-prof-dr-adnan-demircan.pdf'),SV_APAK]},
 hicret:{metin:[
  'Hicret terim olarak özellikle Hz. Peygamber’in ve Mekkeli müslümanların Medine’ye göçünü ifade eder. Medine’ye göç edenlere muhâcir, onlara yardım eden Medinelilere ensâr denildi. Kur’an’da “hicret” kelimesi geçmez ama aynı kökten türeyen kelimeler yirmi yedi âyette otuz bir kez yer alır.',
  'Müşrikler Dârünnedve’de toplanıp Hz. Peygamber’i öldürmeye karar verdi (26 Safer / 9 Eylül 622). O gece Peygamber, Ebû Bekir’le Mekke’den ayrılıp Sevr dağındaki mağaraya saklandı; Kureyş onu yakalayana 100 deve vaat etti. Üç gün sonra, kılavuzun getirdiği develerle Yesrib’e doğru yola çıktılar (1 Rebîülevvel / 13 Eylül).',
  '8 Rebîülevvel / 20 Eylül’de Kubâ’ya vardılar ve Kubâ Mescidi’ni kurdular. 12 Rebîülevvel / 24 Eylül’de Rânûnâ vadisinde ilk cuma namazı kılındı; aynı gün Medine’ye ulaşıp Ebû Eyyûb el-Ensârî’nin evine yerleştiler.']
  ,dia:[DIA('hicret','Hicret'),DIA('sevr-magarasi','Sevr Mağarası'),DIA('kuba-mescidi','Kubâ Mescidi')],
  sv:[SV('prof-dr-mustafa-agirman-mukaddes-yolculuk-hicret','pBKYtIAY1kI','Mukaddes Yolculuk Hicret','Prof. Dr. Mustafa Ağırman',KM+'ders19-prof-dr-mustafa-agirman.pdf'),SV('hicret-yurdu-yesribten-medineye-yrd-doc-dr-mahmut-kelpetin','MekYKiatPjg','Hicret Yurdu: Yesrib’ten Medine’ye','Yrd. Doç. Dr. Mahmut Kelpetin',IM+'ders-2-yrd-doc-mahmut-kelpetin.pdf')]},
 'medine-ilk':{metin:[
  'Mescid-i Nebevî, hicretten sonraki ilk faaliyetlerden biri olarak bizzat Hz. Peygamber tarafından yaptırıldı (bizzat yaptırdığı iki mescitten biri; diğeri Kubâ’dır). Medine’deki bütün faaliyetlerinin merkezinde yer aldı ve sonraki camilere örnek oldu.',
  'Muâhât, “kardeş edinme”dir: selâmın yayılması, açların doyurulması ve mescit yapılması gibi sosyal emirlerin yanında Mekkeli sahâbîler önce kendi aralarında, sonra ensardan bazılarıyla kardeş ilân edildi. Ebû Bekir–Ömer, Osman–Abdurrahman b. Avf, Talha–Zübeyr, Sa‘d b. Ebû Vakkās–Mus‘ab b. Umeyr bu çiftlerdendir.',
  'Medine vesikası, hicretten kısa bir süre sonra Medine’deki müslümanlar, yahudiler ve müşrik Araplar arasında hazırlandı. Tam metni İbn Hişâm’ın es-Sîre’sinde günümüze ulaşmıştır; literatürde “Medine Sözleşmesi” ya da “Medine anayasası” da denir.']
  ,dia:[DIA('mescid-i-nebevi','Mescid-i Nebevî'),DIA('muahat','Muâhât'),DIA('medine-vesikasi','Medine Vesikası')],
  sv:[SV('ilk-yazili-anayasa-medine-vesikasi-prof-dr-servet-armagan','TWgTtwtaKHw','İlk Yazılı Anayasa: Medine Vesikası','Prof. Dr. Servet Armağan',IM+'ders-7-prof-dr-servet-armagan.pdf'),SV_MEDINE_KRON]},
 bedir:{metin:[
  'Bedir, Medine’nin yaklaşık 160 km güneybatısında, Kızıldeniz sahiline 30 km uzaklıkta, Medine–Mekke yolunun Suriye kervan yoluyla birleştiği küçük bir kasabaydı; her yıl zilkade başından itibaren sekiz gün süren bir panayır kurulurdu.',
  'Hicretin 2. yılında (624) Ebû Süfyân idaresindeki büyük bir Kureyş ticaret kervanı Suriye’den dönüyordu. Peygamber, kervanı Bedir’de karşılamak için ashâbını topladı. Ebû Süfyân baskını öğrenince yardım istedi ve kendisi sahil yolundan kurtuldu; Kureyşliler kervan kurtulduğunu öğrenmelerine rağmen Ebû Cehil kumandasında yaklaşık 1000 kişiyle Bedir’e yürüdü. Savaş 17 Ramazan 2 / 13 Mart 624’te yapıldı.',
  'Bedir, Kur’an’da adı geçen iki gazveden biridir (diğeri Huneyn).']
  ,dia:[DIA('bedir-gazvesi','Bedir Gazvesi')],sv:[SV_SAVAS]},
 uhud:{metin:[
  'Uhud dağı Medine’nin kuzeyinde, Mescid-i Nebevî’ye yaklaşık 5 km uzaktadır; 8 km uzunluğunda, 720 m yüksekliğinde, koyu kırmızı görünümlü, tek başına bir dağdır. Hz. Peygamber “Uhud bizi sever, biz de Uhud’u severiz” demiştir.',
  'Peygamber önce Medine dışında savaşmak istemiyordu; bazı sahâbîlerin ısrarı üzerine Uhud’a çıkıldı. Yolda Abdullah b. Übey 300 kadar adamıyla geri dönünce 700 sahâbî Uhud’un eteklerine geldi ve 7 veya 11 Şevval 3 (23 veya 27 Mart 625) günü düşmanla karşılaştı.']
  ,dia:[DIA('uhud-gazvesi','Uhud Gazvesi')],sv:[SV_SAVAS]},
 hendek:{metin:[
  'Savaş, hicretin 5. yılı Şevval ayı sonlarında (Mart 627) başlayıp Zilkade’nin 23’ünde (15 Nisan) sona erdi. Şehrin savunması çevresine kazılan hendeklerle sağlandığı için Hendek denildi.',
  'Saldıran tarafta Kureyşliler, Hayber yahudileri, Gatafânlılar, Fezâreliler, Esedoğulları, Süleymoğulları gibi birçok grup vardı; bu gruplar Kur’an’da “ahzâb” (hizipler) diye anıldığı için savaşa Ahzâb Gazvesi de denir. Ahzâb sûresi (33. sûre) 20 ve 22. âyetlerle bu kuşatmaya değinir. Hendek fikri Selmân-ı Fârisî’den gelir.']
  ,dia:[DIA('hendek-gazvesi','Hendek Gazvesi'),DIA('selman-i-farisi','Selmân-ı Fârisî')],sv:[SV_SAVAS]},
 hudeybiye:{metin:[
  'Hudeybiye, Mekke’nin 17 km batısında, eski Cidde yolu üzerindedir. Adını, altında Bey‘atürrıdvân’ın yapıldığı ağaçtan (veya yanındaki kuyudan) alır.',
  'Hz. Peygamber Zilkade 6’da (Mart 628) 1400–1500 kişiyle umre için Medine’den çıktı. Kureyş, Hâlid b. Velîd komutasında 200 kişilik bir süvari birliği gönderdi. Hz. Osman elçi olarak Mekke’ye gönderilince alıkonuldu; bunun üzerine Bey‘atürrıdvân yapıldı, ardından antlaşma imzalandı ve Feth sûresi indi.',
  'Antlaşma “feth-i mübîn” (apaçık fetih) diye anılır: Mekke’nin fethine kadar geçen iki yılda müslüman olanların sayısı, o güne kadarki on sekiz yılda olanları aştı.']
  ,dia:[DIA('hudeybiye-antlasmasi','Hudeybiye Antlaşması')],
  sv:[SV('hikmet-ve-mesajlari-ile-hudeybiye-antlasmasi-prof-dr-casim-avci','5-9CREZCJKA','Hikmet ve Mesajları İle Hudeybiye Antlaşması','Prof. Dr. Casim Avcı',IM+'ders-17-prof-dr-casim-avci.pdf')]},
 fetih:{metin:[
  'Kureyşli müşrikler Hudeybiye Antlaşması’nı ihlâl edince Ebû Süfyân barışın devamı için girişimde bulundu. Hz. Peygamber 13 Ramazan 8 / 4 Ocak 630’da Mekke fethi için yola çıktı; Mekke 20 Ramazan / 11 Ocak 630’da fethedildi. Benî Süleym ve Benî Gıfâr kabileleri de Hâlid b. Velîd’in kumandasında fetihe katıldı.',
  'Fetihten kısa süre önce (Safer 8) Hâlid b. Velîd, Amr b. Âs ve Osman b. Talha müslüman olmuştu. Mekke’den sonra Huneyn Gazvesi (11 Şevval / 1 Şubat) ve Tâif Gazvesi yapıldı.']
  ,dia:[DIA('mekke','Mekke'),DIA('huneyn-gazvesi','Huneyn Gazvesi')],
  sv:[SV('farkli-yonleri-ile-mekkenin-fethi-prof-dr-unal-kilic','48yuJOdl44A','Farklı Yönleri İle Mekke’nin Fethi','Prof. Dr. Ünal Kılıç',IM+'ders-21-prof-dr-unal-kilic.pdf')]},
 veda:{metin:[
  'Hz. Peygamber Veda Haccı için 26 Zilkade / 23 Şubat’ta Medine’den ayrıldı. 9 Zilhicce / 7 Mart 632’de Arafat vadisinde, sayıları 120.000’i aşan ashâbına Veda Hutbesi’ni okudu; 14 Zilhicce / 12 Mart’ta veda tavafını yaptı.',
  'Hutbeye “aynı anne ve babadan türeyen bütün insanlar eşittir” sözüyle başlandı ve genellikle insan hakları üzerinde duruldu. Hutbenin ardından, dinin kemale erdiğini bildiren Mâide 5/3. âyeti indi. Haccı tamamlayan Peygamber Medine’ye döndü.']
  ,dia:[DIA('veda-hacci','Vedâ Haccı'),DIA('veda-hutbesi','Vedâ Hutbesi')],sv:[SV_MEDINE_KRON]},
 hastalik:{metin:[
  'Veda Haccı’ndan sonra Safer’de Üsâme b. Zeyd, Suriye’ye gidecek orduya kumandan tayin edildi. Hz. Peygamber 27 Safer / 24 Mayıs 632 Pazar günü şiddetli baş ağrısı ve hummaya yakalandı. Hastalığında namazı Ebû Bekir’in kıldırmasını istedi.',
  'DİA kronolojisine göre 13 Rebîülevvel / 8 Haziran 632 Pazartesi günü vefat etti, ertesi gün defnedildi. Naaşı, Ebû Bekir’in naklettiği bir hadise dayanılarak vefat ettiği yerde kazılan mezara Hz. Ali, Fazl, Kusem ve Üsâme tarafından indirildi.']
  ,dia:[DIA('muhammed','Muhammed (kronoloji)')],sv:[SV_MEDINE_KRON]},
 ebubekir:{metin:[
  'Ebû Bekir, Fil Vak‘ası’ndan üç yıl kadar sonra Mekke’de doğdu. Hz. Peygamber’in vefatı üzerine, ensarın Sakīfetü Benî Sâide’de halife seçimini görüştüğünü öğrenince Hz. Ömer’le oraya gitti; ensar ve muhacirlerden birer emîr seçilmesi görüşüne karşı, birliğin korunması gerektiğini savundu ve halife seçildi.',
  'Hilâfeti sırasında Kur’ân-ı Kerîm’i mushaf haline getirmesi, DİA’nın ifadesiyle İslâmiyet’e en büyük hizmetlerinden biridir; bu konuda Hz. Ömer onu ikna etmişti.']
  ,dia:[DIA('ebu-bekir','Ebû Bekir'),DIA('sakifetu-beni-saide','Sakīfetü Benî Sâide'),DIA('ridde','Ridde'),DIA('mushaf','Mushaf')],
  sv:[SV('hz-ebu-bekir-ra-ve-donemi-prof-dr-mustafa-fayda','UTplGZaJe7E','Hz. Ebû Bekir (ra) ve Dönemi','Prof. Dr. Mustafa Fayda')]},
 omer:{metin:[
  'Ömer, Fil Vak‘ası’ndan on üç yıl kadar sonra Mekke’de doğdu. Sakīfe’de Ebû Bekir’i halife seçilmesi için destekledi; Kur’an’ın mushaf haline getirilmesi için Ebû Bekir’i ikna eden de odur.',
  'Hilâfeti döneminde Suriye ve Irak fetihleri hızlandı; Antakya, Urfa, Rakka ve Nusaybin kısa aralıklarla müslümanlara teslim oldu. Kudüs kuşatılınca Patrik Sophronios şehrin anahtarlarını Câbiye’de bulunan Hz. Ömer’e teslim etmek istediğini bildirdi.']
  ,dia:[DIA('omer','Ömer'),DIA('yermuk-savasi','Yermük Savaşı')],
  sv:[SV('hz-omer-ra-ve-donemi-prof-dr-mustafa-fayda','8RE_4OOhkEQ','Hz. Ömer (ra) ve Dönemi','Prof. Dr. Mustafa Fayda')]},
 osman:{metin:[
  'Osman, Fil Vak‘ası’ndan altı yıl sonra Tâif’te doğdu; Kureyş’in en zengin tüccarlarından birinin oğluydu. Hz. Ömer’in görevlendirdiği altı kişilik heyet arasından halife seçildi.',
  'Kıraat farklarından doğan tartışmaları önlemek için, Ebû Bekir zamanında mushaf haline getirilen Kur’an’ı beş veya yedi nüsha olarak çoğalttı; Mekke, Basra, Kûfe, Şam, Yemen ve Bahreyn’e birer nüsha gönderdi, “imam mushaf” denilen nüshayı Medine’de bıraktı.',
  'Şikâyetlerle başlayan isyan Hz. Osman’ın öldürülmesine, ardından Cemel ve Sıffîn savaşlarına uzanan iç savaşlar dönemine yol açtı. Kaynaklar bu isyanı çok ayrıntılı ama birbiriyle çelişen rivayetlerle anlatır.']
  ,dia:[DIA('osman','Osman'),DIA('mushaf','Mushaf')],
  sv:[SV('hz-osman-ra-ve-donemi-prof-dr-unal-kilic','TE0hcmceAQ8','Hz. Osman (ra) ve Dönemi','Prof. Dr. Ünal Kılıç')]},
 ali:{metin:[
  'Ali, Ebû Tâlib’in en küçük oğludur. Mekke’de kıtlık olunca Hz. Peygamber, amcasının yükünü hafifletmek için onu himayesine aldı; Ali beş yaşından hicrete kadar onun yanında büyüdü.',
  'Cemel Vak‘ası, 15 Cemâziyelâhir 36 / 9 Aralık 656’da Basra önlerinde Hureybe mevkiinde yapıldı; Hz. Ali galip geldi, Talha ve Zübeyr de dahil pek çok müslüman öldü. Sıffîn’de (Zilhicce 36 / Haziran 657) Muâviye ile karşılaştılar; mushafların mızrak uçlarına bağlanması üzerine hakem olayı gündeme geldi, buna karşı çıkanlar Haricîler olarak ayrıldı.']
  ,dia:[DIA('ali','Ali'),DIA('cemel-vakasi','Cemel Vak‘ası'),DIA('siffin-savasi','Sıffîn Savaşı'),DIA('kufe','Kûfe')],
  sv:[SV('hz-ali-ra-ve-donemi-prof-dr-unal-kilic','OzzMvpB6LYk','Hz. Ali (ra) ve Dönemi','Prof. Dr. Ünal Kılıç')]}
};
