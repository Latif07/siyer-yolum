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
 Kıyı çizgisi: Natural Earth 1:10m "land" verisi (kamu malı), 24–64°D ve 6–42°K aralığına kırpılıp sadeleştirildi.
 Yer adları ve koordinatlar yaklaşıktır; yollar şematiktir. Telifli atlas görseli kullanılmadı.
 YERLER: ad, enlem, boylam, e (çocuk modu emojisi), t (tür: sehir|dag|savas). BAGLAM: yön bulmak için soluk gösterilen şehirler.
 HARITA[dersId] = {yer:[vurgulanan yerler], yol:[sırayla geçilen yerler]} */
const YERLER={
 mekke:{ad:'Mekke',lat:21.42,lon:39.83,e:'🕋',t:'sehir'},
 medine:{ad:'Medine',lat:24.47,lon:39.61,e:'🕌',t:'sehir'},
 taif:{ad:'Tâif',lat:21.27,lon:40.42,e:'⛰️',t:'sehir'},
 bedir:{ad:'Bedir',lat:23.78,lon:38.77,e:'⚔️',t:'savas'},
 ebva:{ad:'Ebvâ',lat:23.17,lon:39.15,e:'📍',t:'sehir'},
 kudeyd:{ad:'Kudeyd',lat:22.0,lon:39.15,e:'📍',t:'sehir'},
 cidde:{ad:'Cidde',lat:21.49,lon:39.19,e:'⛵',t:'sehir'},
 hudeybiye:{ad:'Hudeybiye',lat:21.43,lon:39.63,e:'📜',t:'sehir'},
 arafat:{ad:'Arafat',lat:21.35,lon:39.98,e:'🤲',t:'dag'},
 busra:{ad:'Busrâ',lat:32.52,lon:36.48,e:'🐪',t:'sehir'},
 sam:{ad:'Şam',lat:33.51,lon:36.29,e:'🏙️',t:'sehir'},
 kudus:{ad:'Kudüs',lat:31.78,lon:35.23,e:'🕌',t:'sehir'},
 habes:{ad:'Habeşistan (Aksum)',lat:14.13,lon:38.72,e:'👑',t:'sehir'},
 sana:{ad:'San‘a',lat:15.35,lon:44.2,e:'🏙️',t:'sehir'},
 kufe:{ad:'Kûfe',lat:32.03,lon:44.4,e:'🏙️',t:'sehir'},
 basra:{ad:'Basra',lat:30.5,lon:47.8,e:'📍',t:'sehir'}
};
const BAGLAM=['mekke','medine','taif','sam','kudus','sana','kufe','basra','habes','cidde'];
const HARITA={
 fil:{yer:['mekke']},sut:{yer:['mekke','taif']},fudul:{yer:['mekke']},hacer:{yer:['mekke']},hira:{yer:['mekke']},
 vahiy:{yer:['mekke']},gizli:{yer:['mekke']},acik:{yer:['mekke']},boykot:{yer:['mekke']},huzun:{yer:['mekke']},
 amine:{yer:['mekke','medine','ebva'],yol:['mekke','medine','ebva']},
 sam:{yer:['mekke','busra'],yol:['mekke','busra']},
 hatice:{yer:['mekke','busra'],yol:['mekke','busra']},
 habese:{yer:['mekke','cidde','habes'],yol:['mekke','cidde','habes']},
 taif:{yer:['mekke','taif'],yol:['mekke','taif']},
 isra:{yer:['mekke','kudus'],yol:['mekke','kudus']},
 akabe:{yer:['mekke','medine'],yol:['mekke','medine']},
 hicret:{yer:['mekke','kudeyd','medine'],yol:['mekke','kudeyd','medine']},
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
/* Kara kütleleri: [enlem, boylam] halkaları (Afrika-Avrasya, Arabistan yarımadası dahil) */
const KARA=[[[25.43,63.99],[25.34,64],[25.38,63.74],[25.36,63.55],[25.29,63.47],[25.22,63.52],[25.19,63.5],[25.26,63.14],[25.22,63.03],[25.26,62.77],[25.26,62.48],[25.22,62.47],[25.21,62.49],[25.21,62.42],[25.16,62.34],[25.12,62.34],[25.09,62.38],[25.1,62.26],[25.13,62.31],[25.19,62.3],[25.21,62.25],[25.22,62.15],[25.2,62.08],[25.16,62.06],[25.11,62.1],[25.1,61.88],[25.04,61.85],[25.01,61.75],[25.04,61.72],[25.19,61.78],[25.17,61.75],[25.2,61.7],[25.2,61.59],[25.25,61.56],[25.22,61.54],[25.2,61.56],[25.19,61.48],[25.16,61.52],[25.12,61.49],[25.1,61.42],[25.09,61.44],[25.06,61.41],[25.12,61.18],[25.16,61.17],[25.21,61.03],[25.28,60.63],[25.41,60.6],[25.45,60.55],[25.43,60.45],[25.38,60.4],[25.29,60.47],[25.33,60.32],[25.35,60.29],[25.37,60.3],[25.38,60.27],[25.36,60.19],[25.32,60.21],[25.37,60.08],[25.35,59.94],[25.33,59.9],[25.39,59.77],[25.4,59.54],[25.46,59.45],[25.39,59.12],[25.4,59.04],[25.42,59],[25.51,58.92],[25.53,58.85],[25.56,58.83],[25.59,58.43],[25.61,58.42],[25.54,58.17],[25.56,58.07],[25.69,57.96],[25.69,57.88],[25.63,57.77],[25.71,57.78],[25.74,57.76],[25.74,57.52],[25.78,57.31],[25.96,57.25],[26,57.2],[26.09,57.16],[26.17,57.21],[26.26,57.13],[26.36,57.12],[26.41,57.08],[26.62,57.09],[26.85,57.03],[26.96,56.93],[26.97,56.97],[27,56.97],[26.99,56.93],[27.01,56.86],[27.04,56.84],[27.08,56.89],[27.1,56.83],[27.14,56.81],[27.13,56.76],[27.15,56.72],[27.15,56.58],[27.2,56.35],[27.16,56.12],[27.02,55.93],[27,55.67],[26.9,55.55],[26.91,55.58],[26.86,55.58],[26.78,55.52],[26.76,55.44],[26.79,55.27],[26.73,55.2],[26.7,55.1],[26.5,54.8],[26.51,54.62],[26.58,54.56],[26.59,54.43],[26.72,54.31],[26.71,54.17],[26.75,54.02],[26.7,53.84],[26.71,53.71],[26.85,53.49],[26.98,53.44],[27.1,53.03],[27.3,52.73],[27.35,52.6],[27.41,52.59],[27.41,52.67],[27.45,52.67],[27.49,52.6],[27.63,52.46],[27.7,52.21],[27.83,52.01],[27.83,51.68],[27.89,51.5],[27.96,51.43],[27.93,51.4],[28.05,51.35],[28.14,51.27],[28.24,51.28],[28.4,51.14],[28.53,51.08],[28.69,51.07],[28.77,51.04],[28.82,50.98],[28.83,50.88],[28.91,50.81],[28.98,50.8],[28.99,50.84],[28.94,50.89],[29.05,50.93],[29.1,50.89],[29.1,50.85],[29.14,50.84],[29.12,50.69],[29.14,50.64],[29.21,50.64],[29.25,50.66],[29.24,50.68],[29.29,50.69],[29.32,50.66],[29.47,50.64],[29.5,50.61],[29.47,50.61],[29.6,50.49],[29.66,50.4],[29.87,50.24],[29.94,50.14],[30.12,50.13],[30.2,50.07],[30.22,49.99],[30.2,49.92],[30.03,49.6],[30.02,49.53],[30.16,49.48],[30.18,49.35],[30.16,49.25],[30.22,49.21],[30.26,49.22],[30.22,49.16],[30.3,49.02],[30.36,48.98],[30.38,48.92],[30.41,49.06],[30.35,49.2],[30.45,49.26],[30.45,49.23],[30.51,49.21],[30.48,49.17],[30.51,49.17],[30.52,49.03],[30.51,48.98],[30.48,48.94],[30.43,49.04],[30.42,48.93],[30.35,48.86],[30.3,48.87],[30.21,48.94],[30.06,48.93],[30.03,48.9],[30.03,48.7],[30.06,48.64],[29.97,48.65],[29.97,48.54],[29.95,48.56],[29.93,48.52],[29.96,48.34],[30.05,48.12],[30,47.97],[30.11,47.94],[29.83,47.99],[29.74,48.05],[29.74,48.08],[29.54,48.18],[29.58,48.04],[29.58,47.97],[29.47,47.81],[29.36,47.71],[29.39,47.84],[29.34,47.82],[29.32,47.86],[29.39,47.99],[29.35,48.03],[29.35,48.1],[29.26,48.09],[29.02,48.16],[28.92,48.22],[28.89,48.28],[28.82,48.29],[28.76,48.33],[28.74,48.39],[28.67,48.39],[28.69,48.36],[28.67,48.38],[28.64,48.35],[28.65,48.39],[28.57,48.4],[28.49,48.5],[28.42,48.51],[28.39,48.47],[28.41,48.53],[28.32,48.52],[28.2,48.62],[28.13,48.61],[28.05,48.65],[28.01,48.79],[27.96,48.74],[27.84,48.88],[27.77,48.88],[27.73,48.84],[27.82,48.85],[27.76,48.8],[27.83,48.81],[27.72,48.78],[27.74,48.81],[27.69,48.81],[27.71,48.84],[27.66,48.86],[27.69,48.88],[27.64,48.86],[27.61,48.87],[27.61,48.83],[27.61,48.87],[27.63,48.9],[27.59,48.89],[27.57,48.92],[27.61,48.92],[27.62,48.97],[27.57,49.06],[27.54,49.06],[27.56,49.07],[27.54,49.24],[27.49,49.3],[27.45,49.31],[27.48,49.29],[27.45,49.26],[27.44,49.12],[27.39,49.21],[27.43,49.24],[27.41,49.26],[27.38,49.23],[27.33,49.23],[27.36,49.28],[27.35,49.31],[27.21,49.32],[27.18,49.34],[27.22,49.37],[27.22,49.41],[27.15,49.38],[27.13,49.41],[27.17,49.43],[27.14,49.43],[27.13,49.52],[27.17,49.49],[27.19,49.57],[27.1,49.57],[26.95,49.71],[26.86,49.87],[26.84,49.97],[26.73,50.07],[26.66,50.16],[26.64,50.16],[26.69,50.09],[26.7,50.02],[26.75,50.01],[26.72,49.99],[26.49,50.03],[26.4,50.19],[26.32,50.22],[26.19,50.21],[26.16,50.18],[26.18,50.18],[26.17,50.15],[26.04,50.14],[26.2,50.03],[26.14,49.98],[26.09,50.01],[26,49.99],[26,50.02],[26.04,50.02],[25.99,50.1],[25.94,50.13],[25.92,50.11],[25.87,50.12],[25.63,50.26],[25.72,50.18],[25.73,50.14],[25.7,50.15],[25.67,50.18],[25.69,50.2],[25.61,50.23],[25.46,50.37],[25.5,50.36],[25.51,50.38],[25.46,50.41],[25.44,50.47],[25.31,50.52],[25.06,50.56],[25.04,50.61],[24.88,50.73],[24.74,50.76],[24.75,50.83],[24.8,50.86],[24.89,50.85],[24.99,50.8],[25.07,50.81],[25.09,50.78],[25.19,50.76],[25.49,50.75],[25.53,50.8],[25.47,50.82],[25.47,50.85],[25.58,50.83],[25.6,50.78],[25.62,50.79],[25.65,50.85],[25.64,50.87],[25.53,50.89],[25.6,50.91],[25.6,50.95],[25.65,50.98],[25.63,50.92],[25.68,50.89],[25.79,50.9],[25.81,50.93],[25.78,50.95],[25.8,50.97],[25.86,50.95],[25.98,50.99],[25.97,51],[26.05,51.05],[26.08,51.13],[26.14,51.18],[26.16,51.25],[26.1,51.35],[26.04,51.35],[26.02,51.38],[25.95,51.4],[25.95,51.49],[25.9,51.57],[25.76,51.59],[25.74,51.54],[25.71,51.59],[25.68,51.56],[25.71,51.55],[25.69,51.5],[25.66,51.55],[25.63,51.55],[25.62,51.49],[25.52,51.47],[25.44,51.52],[25.3,51.52],[25.28,51.59],[25.25,51.61],[25.02,51.61],[24.95,51.59],[24.86,51.5],[24.68,51.44],[24.57,51.34],[24.65,51.34],[24.66,51.28],[24.63,51.21],[24.61,51.31],[24.52,51.3],[24.6,51.39],[24.63,51.4],[24.58,51.5],[24.45,51.33],[24.34,51.28],[24.3,51.28],[24.32,51.41],[24.26,51.57],[24.28,51.59],[24.37,51.57],[24.39,51.59],[24.34,51.62],[24.23,51.63],[24.23,51.66],[24.28,51.67],[24.22,51.7],[24.29,51.76],[24.26,51.78],[24.18,51.77],[24,51.81],[23.96,51.93],[23.99,51.93],[23.97,52.16],[24.01,52.34],[24.15,52.57],[24.21,52.6],[24.14,52.68],[24.14,52.95],[24.17,53.01],[24.12,53.07],[24.12,53.15],[24.13,53.16],[24.17,53.14],[24.17,53.16],[24.1,53.25],[24.12,53.44],[24.05,53.59],[24.07,53.7],[24.06,53.88],[24.15,54.12],[24.27,54.32],[24.26,54.38],[24.29,54.43],[24.39,54.48],[24.45,54.48],[24.43,54.54],[24.47,54.51],[24.45,54.57],[24.47,54.57],[24.54,54.42],[24.56,54.45],[24.54,54.47],[24.57,54.48],[24.5,54.54],[24.5,54.56],[24.52,54.54],[24.51,54.58],[24.6,54.64],[24.62,54.61],[24.67,54.67],[24.75,54.64],[24.8,54.71],[24.8,54.77],[24.83,54.76],[25.02,55.08],[25.26,55.28],[25.22,55.32],[25.19,55.3],[25.2,55.33],[25.28,55.3],[25.32,55.36],[25.36,55.37],[25.41,55.47],[25.58,55.55],[25.58,55.57],[25.53,55.55],[25.54,55.63],[25.6,55.66],[25.68,55.76],[25.74,55.88],[25.82,55.96],[25.78,55.94],[25.77,55.95],[25.83,55.96],[25.92,56.04],[25.93,56.03],[25.91,56.01],[26.11,56.09],[26.25,56.18],[26.26,56.21],[26.21,56.21],[26.23,56.27],[26.19,56.3],[26.21,56.4],[26.24,56.37],[26.22,56.31],[26.29,56.32],[26.26,56.36],[26.28,56.36],[26.31,56.32],[26.34,56.36],[26.39,56.36],[26.33,56.46],[26.36,56.5],[26.32,56.51],[26.32,56.45],[26.27,56.4],[26.24,56.49],[26.2,56.46],[26.22,56.43],[26.15,56.48],[26.16,56.41],[26.19,56.4],[26.17,56.38],[26.2,56.39],[26.17,56.33],[26.11,56.34],[26.15,56.36],[26.1,56.36],[26.1,56.47],[26.04,56.38],[26.02,56.42],[25.98,56.4],[25.95,56.45],[25.93,56.44],[25.93,56.38],[25.9,56.4],[25.81,56.36],[25.75,56.32],[25.74,56.3],[25.76,56.3],[25.67,56.27],[25.63,56.28],[25.59,56.35],[25.53,56.37],[25.06,56.36],[24.98,56.38],[24.7,56.49],[24.5,56.61],[24.3,56.8],[24.12,56.94],[23.93,57.18],[23.79,57.65],[23.78,57.8],[23.72,57.89],[23.71,58.13],[23.62,58.32],[23.62,58.45],[23.66,58.5],[23.65,58.59],[23.56,58.66],[23.53,58.73],[23.54,58.76],[23.4,58.82],[23.32,58.93],[23.05,59.08],[22.94,59.23],[22.79,59.3],[22.76,59.35],[22.67,59.41],[22.58,59.54],[22.56,59.52],[22.58,59.63],[22.54,59.72],[22.5,59.74],[22.5,59.76],[22.54,59.74],[22.53,59.8],[22.51,59.82],[22.45,59.85],[22.28,59.82],[22.2,59.79],[22.08,59.69],[21.93,59.64],[21.91,59.6],[21.76,59.5],[21.45,59.34],[21.38,59.19],[21.28,59.05],[21.05,58.84],[20.93,58.79],[20.83,58.68],[20.77,58.67],[20.79,58.73],[20.77,58.73],[20.75,58.67],[20.69,58.65],[20.66,58.6],[20.42,58.52],[20.36,58.44],[20.38,58.36],[20.37,58.28],[20.39,58.28],[20.41,58.2],[20.47,58.21],[20.42,58.24],[20.49,58.23],[20.59,58.26],[20.61,58.21],[20.57,58.09],[20.48,58.08],[20.4,57.96],[20.33,57.97],[20.26,57.85],[20.2,57.82],[20.11,57.85],[19.98,57.81],[19.73,57.69],[19.65,57.72],[19.55,57.7],[19.41,57.78],[19.27,57.75],[19.16,57.81],[19.09,57.8],[19.02,57.84],[18.95,57.72],[18.95,57.5],[18.91,57.21],[18.81,56.91],[18.75,56.81],[18.56,56.64],[18.47,56.64],[18.19,56.55],[18.15,56.56],[18.09,56.46],[17.97,56.36],[17.94,56.36],[17.94,56.03],[17.91,55.91],[17.9,55.65],[17.84,55.45],[17.7,55.37],[17.56,55.23],[17.49,55.23],[17.42,55.3],[17.37,55.3],[17.28,55.25],[17.25,55.27],[17.2,55.21],[17.14,55.19],[17.13,55.14],[17.01,55.03],[17.03,55.01],[16.95,54.81],[16.97,54.7],[17.02,54.68],[17.04,54.59],[17.01,54.09],[16.98,54.01],[16.91,53.98],[16.87,53.75],[16.76,53.62],[16.73,53.34],[16.63,53.07],[16.63,52.98],[16.56,52.85],[16.45,52.53],[16.26,52.29],[16.16,52.22],[16.11,52.22],[16,52.16],[15.92,52.19],[15.88,52.18],[15.85,52.22],[15.72,52.22],[15.66,52.25],[15.62,52.23],[15.52,51.91],[15.49,51.87],[15.45,51.86],[15.47,51.83],[15.45,51.76],[15.39,51.67],[15.34,51.68],[15.32,51.53],[15.23,51.37],[15.05,50.55],[14.84,50.18],[14.82,50.04],[14.85,50.03],[14.84,49.94],[14.74,49.58],[14.64,49.35],[14.55,49.19],[14.52,49.18],[14.52,49.09],[14.4,49.01],[14.32,49],[14.25,48.89],[14.17,48.85],[14.04,48.7],[14.05,48.57],[13.99,48.47],[14.01,48.45],[14.02,48.34],[13.97,48.19],[13.99,48.19],[14.03,48.14],[14.06,48.02],[14.03,47.93],[13.94,47.82],[13.87,47.64],[13.65,47.4],[13.53,46.91],[13.43,46.7],[13.44,46.6],[13.41,46.52],[13.41,46.31],[13.44,46.23],[13.34,45.66],[13.2,45.5],[13.07,45.4],[13.01,45.19],[12.96,45.12],[12.82,45.06],[12.76,45.06],[12.78,44.98],[12.8,45.03],[12.86,45.02],[12.8,44.92],[12.8,44.87],[12.77,44.87],[12.77,44.92],[12.73,44.88],[12.77,44.79],[12.74,44.73],[12.8,44.69],[12.82,44.61],[12.8,44.54],[12.67,44.42],[12.69,44.41],[12.62,44.17],[12.64,44.14],[12.63,44.19],[12.65,44.2],[12.66,44.15],[12.6,44.03],[12.6,43.95],[12.65,43.89],[12.76,43.6],[12.69,43.53],[12.68,43.47],[12.85,43.47],[13.21,43.25],[13.28,43.23],[13.53,43.25],[13.59,43.3],[13.72,43.28],[13.79,43.24],[13.88,43.23],[13.95,43.16],[14.08,43.09],[14.48,42.99],[14.51,42.96],[14.52,42.98],[14.44,43.02],[14.54,43.03],[14.63,42.99],[14.66,43],[14.88,42.89],[14.91,42.89],[14.86,42.9],[14.81,42.95],[14.96,42.93],[15.01,42.89],[15.14,42.86],[15.21,42.73],[15.19,42.64],[15.24,42.61],[15.25,42.68],[15.31,42.68],[15.37,42.71],[15.31,42.7],[15.26,42.77],[15.21,42.78],[15.27,42.81],[15.47,42.78],[15.57,42.72],[15.68,42.72],[15.7,42.69],[15.92,42.84],[16.05,42.84],[16.42,42.78],[16.45,42.8],[16.55,42.73],[16.67,42.74],[16.73,42.71],[16.88,42.54],[17,42.54],[17.05,42.45],[17.16,42.41],[17.18,42.36],[17.12,42.39],[17.11,42.36],[17.02,42.36],[17.44,42.31],[17.57,42.14],[17.65,42.09],[17.65,42.05],[17.82,41.87],[17.83,41.79],[17.96,41.68],[18.01,41.67],[18.1,41.59],[18.11,41.6],[18.19,41.56],[18.22,41.49],[18.27,41.51],[18.28,41.47],[18.47,41.43],[18.57,41.36],[18.59,41.28],[18.69,41.22],[18.83,41.25],[18.87,41.17],[18.94,41.14],[19.07,41.18],[19.13,41.07],[19.26,41.04],[19.34,40.96],[19.51,40.95],[19.55,40.84],[19.61,40.76],[19.6,40.79],[19.69,40.8],[19.78,40.74],[19.8,40.68],[19.78,40.65],[19.76,40.66],[19.77,40.64],[19.91,40.53],[19.94,40.54],[19.97,40.52],[20.09,40.32],[20.18,40.24],[20.2,40.16],[20.28,40.08],[20.27,39.99],[20.31,39.9],[20.26,39.94],[20.35,39.76],[20.57,39.57],[20.59,39.59],[20.63,39.54],[20.71,39.49],[20.75,39.5],[20.77,39.42],[20.81,39.42],[20.79,39.46],[20.83,39.45],[20.86,39.36],[20.89,39.34],[20.91,39.34],[20.9,39.36],[20.92,39.35],[20.92,39.3],[21.06,39.24],[21.11,39.17],[21.19,39.17],[21.32,39.08],[21.38,39.16],[21.44,39.17],[21.54,39.14],[21.52,39.12],[21.58,39.09],[21.69,39.08],[21.75,39.11],[21.73,39.06],[21.92,38.95],[22.01,38.93],[22.03,38.96],[22,39],[22.15,39.05],[22.13,39.02],[22.24,39.04],[22.4,39.14],[22.42,39.12],[22.37,39.07],[22.55,39.08],[22.72,38.99],[22.76,39.02],[22.83,38.95],[22.75,38.97],[22.93,38.85],[22.93,38.88],[22.86,38.91],[22.85,38.95],[22.87,38.96],[22.97,38.89],[23,38.8],[23.04,38.78],[23.09,38.81],[23.15,38.8],[23.14,38.78],[23.27,38.69],[23.57,38.6],[23.56,38.56],[23.52,38.59],[23.54,38.54],[23.59,38.54],[23.64,38.49],[23.78,38.45],[24.07,38.08],[24.07,38.05],[24.14,37.94],[24.17,37.98],[24.16,37.94],[24.21,37.94],[24.19,37.91],[24.15,37.92],[24.15,37.87],[24.29,37.68],[24.28,37.63],[24.25,37.63],[24.27,37.52],[24.37,37.43],[24.4,37.42],[24.42,37.43],[24.41,37.46],[24.44,37.46],[24.74,37.23],[24.8,37.23],[24.8,37.18],[24.85,37.15],[24.85,37.24],[24.96,37.28],[25.19,37.23],[25.32,37.1],[25.42,37.06],[25.43,37.08],[25.49,37.02],[25.63,36.95],[25.67,36.88],[25.76,36.82],[25.76,36.79],[25.72,36.79],[25.78,36.7],[25.88,36.66],[25.94,36.7],[26.02,36.7],[26.06,36.64],[26.08,36.53],[26.11,36.51],[26.5,36.31],[26.63,36.23],[26.75,36.1],[26.91,36.03],[27,35.91],[27.15,35.8],[27.2,35.81],[27.46,35.56],[27.54,35.51],[27.62,35.5],[27.78,35.39],[27.8,35.35],[27.86,35.33],[27.95,35.26],[28.01,35.16],[28.03,35.23],[28.05,35.22],[28.08,35.11],[28.12,35.05],[28.07,34.85],[28.11,34.86],[28.12,34.84],[28.07,34.8],[28.11,34.82],[28.09,34.77],[28.14,34.71],[28.1,34.65],[28.07,34.67],[28.03,34.61],[28.1,34.61],[28.09,34.57],[28.18,34.63],[28.17,34.66],[28.2,34.65],[28.26,34.69],[28.28,34.67],[28.53,34.8],[28.66,34.78],[28.83,34.84],[28.9,34.82],[28.96,34.86],[29.05,34.85],[29.23,34.91],[29.25,34.94],[29.29,34.93],[29.31,34.95],[29.34,34.94],[29.53,35],[29.56,34.95],[29.31,34.73],[29.19,34.72],[29.11,34.67],[29,34.69],[28.97,34.64],[28.86,34.65],[28.85,34.62],[28.75,34.63],[28.31,34.41],[28.23,34.41],[28.18,34.45],[28.08,34.43],[27.98,34.44],[27.91,34.33],[27.86,34.32],[27.86,34.28],[27.8,34.26],[27.79,34.21],[27.77,34.22],[27.77,34.26],[27.73,34.25],[27.79,34.19],[27.81,34.05],[27.89,33.98],[27.94,33.92],[27.93,33.88],[28.02,33.76],[28.3,33.56],[28.37,33.44],[28.54,33.26],[28.58,33.26],[28.57,33.24],[28.55,33.26],[28.57,33.23],[28.67,33.19],[28.76,33.23],[28.82,33.18],[29,33.17],[29.24,32.88],[29.36,32.82],[29.41,32.82],[29.46,32.74],[29.48,32.73],[29.46,32.72],[29.54,32.72],[29.6,32.68],[29.72,32.69],[29.82,32.6],[29.87,32.63],[29.93,32.57],[30.01,32.57],[29.94,32.57],[29.96,32.51],[29.92,32.47],[29.88,32.47],[29.87,32.51],[29.73,32.39],[29.59,32.34],[29.35,32.59],[29.09,32.66],[29.05,32.63],[28.97,32.63],[28.8,32.75],[28.78,32.81],[28.58,32.87],[28.49,33],[28.4,33.04],[28.35,33.11],[28.29,33.13],[28.14,33.25],[28.08,33.34],[28.06,33.33],[28.02,33.44],[27.9,33.55],[27.79,33.59],[27.85,33.49],[27.82,33.47],[27.75,33.52],[27.76,33.56],[27.71,33.54],[27.65,33.59],[27.68,33.56],[27.66,33.56],[27.68,33.53],[27.65,33.5],[27.57,33.56],[27.54,33.56],[27.5,33.63],[27.34,33.69],[27.24,33.84],[27.12,33.84],[27.06,33.9],[27.03,33.89],[26.93,33.95],[26.9,34],[26.84,34],[26.85,33.96],[26.83,33.95],[26.65,33.94],[26.61,34.01],[26,34.34],[25.72,34.55],[25.43,34.68],[24.91,34.99],[24.82,35],[24.76,35.06],[24.57,35.16],[24.5,35.15],[24.48,35.18],[24.4,35.24],[24.31,35.37],[24.11,35.49],[24.14,35.51],[24.08,35.59],[24.02,35.61],[23.98,35.74],[23.9,35.79],[23.93,35.75],[23.91,35.69],[23.93,35.6],[23.98,35.51],[23.92,35.48],[23.8,35.48],[23.76,35.51],[23.5,35.49],[23.39,35.55],[23.21,35.57],[23.07,35.65],[22.97,35.67],[22.88,35.74],[22.87,35.76],[22.93,35.72],[22.92,35.76],[22.83,35.79],[22.76,35.85],[22.69,35.98],[22.64,36.23],[22.57,36.29],[22.49,36.31],[22.43,36.43],[22.36,36.44],[22.3,36.56],[22.16,36.73],[22.16,36.78],[22.1,36.83],[22.07,36.89],[21.98,36.88],[21.97,36.84],[21.94,36.87],[21.65,36.89],[21.28,37.11],[21.06,37.31],[21.01,37.29],[21.02,37.23],[21.1,37.19],[21.06,37.27],[21.14,37.22],[21.15,37.16],[21.21,37.16],[21.22,37.12],[21.18,37.1],[21.09,37.12],[21.04,37.09],[20.94,37.15],[20.75,37.17],[20.57,37.23],[20.47,37.22],[20.45,37.18],[20.35,37.18],[20.12,37.23],[20.01,37.19],[19.79,37.27],[19.57,37.24],[19.47,37.29],[19.16,37.33],[18.86,37.43],[18.72,37.54],[18.74,37.68],[18.71,37.74],[18.63,37.76],[18.64,37.78],[18.59,37.92],[18.46,38.04],[18.43,38.11],[18.41,38.12],[18.35,38.08],[18.25,38.15],[18.24,38.24],[18.28,38.25],[18.31,38.31],[18.24,38.28],[18.22,38.22],[18.19,38.37],[18.22,38.39],[18.14,38.43],[18.14,38.49],[18.07,38.51],[18.09,38.54],[18.13,38.53],[18.08,38.58],[17.95,38.62],[17.4,38.93],[17.29,38.96],[17.25,38.95],[17.03,39.05],[16.66,39.16],[16.55,39.15],[16.52,39.18],[16.12,39.23],[15.93,39.29],[15.81,39.44],[15.77,39.42],[15.66,39.48],[15.64,39.44],[15.63,39.48],[15.61,39.48],[15.6,39.43],[15.53,39.46],[15.54,39.57],[15.5,39.61],[15.34,39.66],[15.26,39.72],[15.09,39.71],[15.07,39.77],[15.1,39.83],[15.19,39.86],[15.28,39.82],[15.26,39.79],[15.4,39.77],[15.46,39.81],[15.45,39.83],[15.5,39.88],[15.34,40.08],[15.24,40.03],[15.23,40.05],[15.2,40.04],[15.17,40.08],[15.06,40.1],[15.03,40.16],[14.98,40.16],[14.91,40.29],[14.94,40.35],[15,40.39],[14.97,40.4],[15.01,40.46],[14.96,40.51],[15.02,40.51],[14.95,40.56],[14.95,40.62],[14.89,40.63],[14.9,40.69],[14.88,40.67],[14.83,40.73],[14.76,40.73],[14.69,40.77],[14.72,40.81],[14.71,40.88],[14.67,40.97],[14.64,41.17],[14.57,41.21],[14.49,41.31],[14.42,41.33],[14.21,41.51],[14.14,41.53],[14.06,41.62],[13.94,41.68],[13.93,41.8],[13.88,41.85],[13.88,41.9],[13.85,41.97],[13.78,41.99],[13.64,42.11],[13.65,42.14],[13.55,42.22],[13.6,42.2],[13.63,42.22],[13.66,42.16],[13.67,42.18],[13.58,42.29],[13.22,42.38],[13.2,42.48],[13.23,42.53],[13.07,42.66],[13.03,42.73],[12.85,42.78],[12.86,42.84],[12.82,42.87],[12.81,42.93],[12.79,42.93],[12.82,42.98],[12.9,43],[12.88,43.03],[12.81,43.09],[12.64,43.16],[12.48,43.3],[12.49,43.33],[12.31,43.37],[12.22,43.41],[12.03,43.4],[11.99,43.35],[11.96,43.21],[11.8,43.05],[11.78,42.9],[11.73,42.78],[11.57,42.67],[11.58,42.53],[11.5,42.54],[11.47,42.6],[11.48,42.67],[11.53,42.67],[11.6,42.86],[11.58,43.11],[11.61,43.15],[11.53,43.18],[11.46,43.27],[11.46,43.29],[11.5,43.28],[11.39,43.38],[11.35,43.46],[11.38,43.49],[11.24,43.49],[11.17,43.56],[10.99,43.66],[10.8,43.83],[10.41,44.35],[10.38,44.58],[10.43,44.75],[10.42,44.96],[10.46,44.99],[10.54,45.16],[10.66,45.32],[10.68,45.49],[10.88,45.77],[10.87,45.82],[10.82,45.86],[10.84,45.88],[10.77,46.1],[10.79,46.24],[10.71,46.33],[10.69,46.45],[10.75,46.65],[10.9,46.89],[10.94,47.01],[11.08,47.18],[11.18,47.39],[11.19,47.52],[11.1,47.71],[11.13,47.77],[11.14,48.13],[11.21,48.22],[11.23,48.3],[11.28,48.34],[11.32,48.52],[11.33,48.66],[11.25,48.89],[11.25,48.98],[11.3,49.24],[11.35,49.3],[11.34,49.42],[11.39,49.52],[11.46,49.58],[11.46,49.8],[11.51,49.94],[11.51,50.07],[11.69,50.44],[11.77,50.51],[11.86,50.53],[11.92,50.58],[11.99,50.8],[11.94,50.87],[11.93,50.97],[11.88,51.03],[11.83,51.29],[11.73,51.25],[11.65,51.25],[11.51,51.13],[11.34,51.08],[11.19,51.09],[11.14,51.19],[10.99,51.12],[10.6,51.16],[10.58,51.11],[10.48,51.09],[10.47,51.04],[10.43,51.01],[10.42,51.04],[10.44,51.22],[10.56,51.18],[10.48,51.29],[10.48,51.4],[10.45,51.42],[10.37,51.37],[10.38,51.27],[10.43,51.24],[10.41,51.09],[10.33,50.93],[10.3,50.91],[10.18,50.91],[10.1,50.88],[10.01,50.9],[9.62,50.81],[9.42,50.83],[9.32,50.77],[9.27,50.69],[9.21,50.65],[9.07,50.63],[8.86,50.42],[8.73,50.39],[8.62,50.32],[8.5,50.31],[8.47,50.25],[8.33,50.16],[8.16,50.09],[8.05,49.93],[7.93,49.82],[7.83,49.8],[7.74,49.82],[7.65,49.75],[7.59,49.74],[7.32,49.59],[7.03,49.37],[6.81,49.25],[6.42,49.07],[6.22,49.07],[6,48.95],[6,24],[32.05,24],[32.01,24.09],[31.99,24.55],[32.03,24.73],[31.97,24.98],[31.92,25.03],[31.84,25.03],[31.66,25.16],[31.53,25.19],[31.5,25.4],[31.62,25.87],[31.52,26.36],[31.48,26.75],[31.44,26.87],[31.45,26.97],[31.37,27.23],[31.38,27.33],[31.25,27.39],[31.21,27.48],[31.18,27.66],[31.24,27.85],[31.11,27.9],[31.1,27.93],[31.09,28.15],[31.06,28.32],[31.08,28.42],[30.96,28.81],[30.91,28.83],[30.83,29.03],[30.84,29.22],[30.96,29.5],[31.15,29.78],[31.15,29.84],[31.19,29.89],[31.21,29.87],[31.2,29.9],[31.33,30.07],[31.31,30.07],[31.28,30.09],[31.27,30.17],[31.24,30.14],[31.22,30.17],[31.24,30.21],[31.22,30.22],[31.26,30.27],[31.24,30.29],[31.28,30.29],[31.28,30.18],[31.35,30.31],[31.42,30.35],[31.5,30.34],[31.44,30.4],[31.51,30.36],[31.46,30.46],[31.46,30.54],[31.59,30.97],[31.42,30.56],[31.39,30.54],[31.39,30.56],[31.39,30.63],[31.42,30.67],[31.39,30.74],[31.45,30.8],[31.42,30.89],[31.46,30.94],[31.44,30.98],[31.52,31.03],[31.49,31.12],[31.51,31.11],[31.52,31.13],[31.57,31.07],[31.58,30.98],[31.61,31.1],[31.44,31.56],[31.48,31.75],[31.54,31.87],[31.52,31.94],[31.4,32.02],[31.29,32.2],[31.39,32],[31.44,31.97],[31.44,31.99],[31.53,31.89],[31.5,31.84],[31.5,31.87],[31.43,31.88],[31.47,31.84],[31.44,31.82],[31.42,31.88],[31.41,31.83],[31.37,31.83],[31.35,31.86],[31.36,31.8],[31.31,31.8],[31.28,31.77],[31.27,31.83],[31.22,31.89],[31.25,31.91],[31.22,31.89],[31.21,31.93],[31.19,31.93],[31.23,31.99],[31.22,32.04],[31.13,32.02],[31.14,32.05],[31.11,32.07],[31.09,32.05],[31.08,32.09],[31.05,32.11],[31.07,32.13],[31.09,32.1],[31.08,32.15],[31.12,32.18],[31.1,32.23],[31.14,32.28],[31.17,32.26],[31.17,32.29],[31.26,32.28],[31.29,32.21],[31.27,32.33],[31.09,32.54],[31.06,32.6],[31.08,32.76],[31.15,32.93],[31.1,32.84],[31.05,32.66],[31.05,32.72],[31.04,32.7],[31.1,32.89],[31.08,32.92],[31.09,32.94],[31.1,32.91],[31.11,32.93],[31.1,32.96],[31.07,32.96],[31.06,33.01],[31.09,33.01],[31.1,33.06],[31.13,33.06],[31.1,33.02],[31.11,32.95],[31.2,33.11],[31.19,33.13],[31.18,33.1],[31.12,33.16],[31.11,33.12],[31.08,33.14],[31.05,33.13],[31.06,33.22],[31.07,33.19],[31.1,33.26],[31.08,33.31],[31.1,33.32],[31.11,33.28],[31.11,33.38],[31.15,33.41],[31.12,33.65],[31.23,34.05],[31.33,34.22],[31.44,34.35],[31.77,34.61],[31.95,34.71],[32.28,34.84],[32.83,34.95],[32.82,35.02],[32.86,35.06],[33.1,35.1],[33.23,35.21],[33.28,35.19],[33.31,35.22],[33.46,35.27],[33.51,35.35],[33.8,35.48],[33.9,35.47],[33.91,35.57],[33.99,35.61],[34,35.64],[34.2,35.63],[34.31,35.66],[34.32,35.71],[34.39,35.75],[34.42,35.81],[34.46,35.8],[34.48,35.9],[34.54,35.98],[34.62,35.99],[34.92,35.87],[35.02,35.9],[35.11,35.89],[35.2,35.96],[35.29,35.92],[35.42,35.92],[35.51,35.82],[35.5,35.77],[35.54,35.78],[35.58,35.72],[35.61,35.78],[35.67,35.77],[35.74,35.84],[35.85,35.8],[35.85,35.87],[36.02,35.98],[36.3,35.79],[36.45,35.92],[36.6,36.19],[36.66,36.21],[36.8,36.19],[36.9,36.1],[36.93,36.02],[36.77,35.8],[36.75,35.65],[36.72,35.61],[36.74,35.61],[36.68,35.58],[36.7,35.63],[36.73,35.65],[36.71,35.66],[36.72,35.71],[36.66,35.61],[36.71,35.7],[36.6,35.62],[36.59,35.56],[36.62,35.51],[36.6,35.48],[36.58,35.53],[36.6,35.44],[36.54,35.35],[36.72,34.98],[36.72,34.9],[36.74,34.91],[36.78,34.85],[36.82,34.73],[36.77,34.55],[36.59,34.28],[36.47,34.17],[36.41,34.08],[36.33,34.08],[36.3,34],[36.21,33.96],[36.29,33.93],[36.32,33.87],[36.23,33.8],[36.18,33.71],[36.14,33.69],[36.19,33.65],[36.13,33.55],[36.16,33.46],[36.12,33.2],[36.14,33.16],[36.08,33.09],[36.1,32.94],[36.03,32.81],[36.05,32.67],[36.18,32.37],[36.24,32.29],[36.29,32.28],[36.49,32.1],[36.55,32.02],[36.59,31.82],[36.64,31.74],[36.77,31.38],[36.81,31.34],[36.86,30.94],[36.85,30.77],[36.89,30.68],[36.84,30.6],[36.78,30.57],[36.53,30.57],[36.49,30.52],[36.4,30.48],[36.35,30.49],[36.34,30.52],[36.23,30.43],[36.21,30.4],[36.27,30.38],[36.31,30.25],[36.3,30.16],[36.25,30.14],[36.27,30.13],[36.24,30.11],[36.26,30.05],[36.22,29.99],[36.19,29.84],[36.14,29.78],[36.14,29.76],[36.16,29.77],[36.16,29.71],[36.12,29.67],[36.16,29.63],[36.19,29.63],[36.19,29.58],[36.2,29.62],[36.23,29.42],[36.27,29.41],[36.23,29.35],[36.39,29.1],[36.41,29.13],[36.47,29.1],[36.49,29.12],[36.55,29.12],[36.55,29.01],[36.62,29.04],[36.64,29.1],[36.63,29.09],[36.63,29.11],[36.66,29.1],[36.75,28.94],[36.66,28.85],[36.63,28.87],[36.67,28.88],[36.66,28.9],[36.61,28.87],[36.6,28.83],[36.64,28.84],[36.65,28.79],[36.7,28.75],[36.71,28.61],[36.82,28.61],[36.79,28.6],[36.82,28.55],[36.79,28.53],[36.8,28.49],[36.82,28.5],[36.83,28.46],[36.88,28.45],[36.85,28.38],[36.83,28.42],[36.79,28.4],[36.82,28.32],[36.79,28.32],[36.8,28.28],[36.83,28.32],[36.85,28.26],[36.81,28.24],[36.77,28.25],[36.72,28.29],[36.72,28.23],[36.6,28.11],[36.6,28.06],[36.57,28.04],[36.57,27.98],[36.6,27.96],[36.6,28.04],[36.64,28.09],[36.64,28.05],[36.66,28.06],[36.69,28.04],[36.67,28.03],[36.69,27.97],[36.72,28.04],[36.72,28.12],[36.75,28.08],[36.77,28.11],[36.75,28.13],[36.8,28.12],[36.76,28.05],[36.74,27.92],[36.76,27.72],[36.73,27.68],[36.66,27.67],[36.68,27.55],[36.65,27.47],[36.66,27.41],[36.71,27.35],[36.71,27.42],[36.75,27.45],[36.77,27.61],[36.81,27.65],[36.78,27.76],[36.81,27.8],[36.81,27.9],[36.78,28.03],[36.81,28.06],[36.83,28.01],[36.83,28.02],[36.86,28.01],[36.87,28.06],[36.93,28.03],[36.94,28.12],[36.91,28.16],[36.95,28.16],[36.94,28.19],[37,28.21],[36.99,28.24],[37.04,28.33],[37.04,28.13],[37.01,28.11],[37.03,27.98],[36.99,27.78],[37.01,27.69],[36.98,27.64],[37,27.57],[36.97,27.56],[36.99,27.47],[37.03,27.44],[37.03,27.4],[36.99,27.38],[37.03,27.38],[37.01,27.33],[36.96,27.31],[36.96,27.26],[37.06,27.23],[37.11,27.29],[37.12,27.25],[37.12,27.32],[37.16,27.32],[37.13,27.34],[37.15,27.38],[37.09,27.46],[37.13,27.56],[37.19,27.53],[37.19,27.6],[37.2,27.61],[37.23,27.59],[37.27,27.62],[37.27,27.55],[37.23,27.51],[37.27,27.51],[37.25,27.46],[37.33,27.49],[37.34,27.47],[37.31,27.44],[37.32,27.4],[37.37,27.4],[37.39,27.44],[37.41,27.41],[37.37,27.32],[37.35,27.33],[37.34,27.25],[37.36,27.19],[37.41,27.23],[37.48,27.22],[37.47,27.18],[37.6,27.21],[37.67,27.01],[37.69,27.02],[37.71,27.21],[37.74,27.25],[37.82,27.26],[37.84,27.24],[37.93,27.28],[37.99,27.24],[37.99,27.12],[38.05,27.06],[38.06,26.98],[38.04,26.87],[38.13,26.84],[38.17,26.78],[38.22,26.76],[38.2,26.63],[38.1,26.6],[38.15,26.57],[38.12,26.56],[38.15,26.52],[38.18,26.52],[38.22,26.42],[38.2,26.42],[38.22,26.39],[38.26,26.39],[38.23,26.35],[38.27,26.24],[38.3,26.24],[38.29,26.26],[38.32,26.31],[38.37,26.29],[38.38,26.32],[38.33,26.32],[38.32,26.39],[38.34,26.38],[38.37,26.48],[38.43,26.45],[38.41,26.49],[38.43,26.51],[38.47,26.44],[38.45,26.39],[38.49,26.4],[38.62,26.35],[38.66,26.36],[38.68,26.4],[38.65,26.51],[38.52,26.63],[38.47,26.64],[38.46,26.59],[38.45,26.61],[38.42,26.59],[38.42,26.61],[38.31,26.67],[38.33,26.7],[38.4,26.67],[38.43,26.7],[38.36,26.8],[38.41,27.01],[38.4,27.09],[38.45,27.16],[38.46,27.02],[38.43,26.93],[38.5,26.9],[38.54,26.81],[38.51,26.89],[38.55,26.84],[38.6,26.85],[38.6,26.79],[38.65,26.72],[38.67,26.75],[38.72,26.72],[38.76,26.82],[38.73,26.9],[38.78,26.93],[38.82,26.9],[38.83,26.94],[38.81,26.96],[38.84,26.96],[38.89,27.06],[38.89,27.04],[38.92,27.06],[38.94,27.04],[38.92,26.98],[38.94,26.92],[38.91,26.87],[38.95,26.81],[39.02,26.81],[39.02,26.79],[39.07,26.88],[39.09,26.88],[39.18,26.75],[39.26,26.72],[39.28,26.61],[39.32,26.65],[39.3,26.63],[39.28,26.67],[39.31,26.67],[39.4,26.81],[39.43,26.8],[39.49,26.93],[39.57,26.94],[39.52,26.46],[39.47,26.25],[39.47,26.07],[39.6,26.11],[39.65,26.16],[39.7,26.16],[39.76,26.14],[39.83,26.16],[39.84,26.14],[39.97,26.17],[40.01,26.2],[39.99,26.25],[40.05,26.35],[40.1,26.37],[40.12,26.4],[40.19,26.41],[40.21,26.5],[40.4,26.74],[40.39,26.99],[40.45,27.1],[40.47,27.29],[40.41,27.33],[40.41,27.29],[40.32,27.45],[40.32,27.76],[40.39,27.88],[40.39,27.79],[40.46,27.75],[40.5,27.68],[40.54,27.76],[40.51,27.78],[40.5,27.97],[40.47,28.04],[40.4,27.91],[40.37,27.91],[40.37,27.95],[40.4,28.35],[40.37,28.64],[40.4,28.77],[40.36,28.96],[40.37,29.05],[40.43,29.09],[40.43,29.15],[40.47,29.11],[40.48,29.01],[40.46,28.97],[40.52,28.77],[40.55,28.79],[40.64,28.97],[40.67,29.28],[40.71,29.39],[40.69,29.42],[40.73,29.5],[40.69,29.55],[40.72,29.75],[40.72,29.93],[40.74,29.94],[40.76,29.93],[40.75,29.77],[40.78,29.67],[40.76,29.38],[40.83,29.32],[40.81,29.26],[40.84,29.3],[40.85,29.28],[40.98,29.03],[41.03,29.01],[41.08,29.06],[41.14,29.09],[41.15,29.07],[41.23,29.17],[41.15,29.89],[41.14,30.14],[41.22,30.28],[41.08,30.83],[41.09,31.23],[41.19,31.39],[41.28,31.42],[41.32,31.4],[41.4,31.66],[41.58,32.04],[41.6,32.14],[41.72,32.26],[41.74,32.4],[41.84,32.61],[41.88,32.93],[42,33.28],[41.98,34],[41.95,34.33],[41.98,34.48],[41.95,34.7],[42,34.87],[42,35.11],[41.93,35.09],[41.81,35.21],[41.78,35.21],[41.72,35.3],[41.64,35.49],[41.63,35.62],[41.74,35.96],[41.65,35.92],[41.73,35.98],[41.7,36.05],[41.6,36.14],[41.46,36.14],[41.36,36.24],[41.32,36.33],[41.26,36.39],[41.24,36.45],[41.26,36.52],[41.38,36.62],[41.37,36.76],[41.29,36.98],[41.24,37.03],[41.18,37.04],[41.15,37.14],[41.14,37.3],[41.04,37.52],[41.05,37.61],[41.14,37.69],[41.11,37.72],[41.12,37.78],[41.06,37.78],[40.98,37.9],[41,37.94],[40.94,38.2],[40.95,38.27],[40.92,38.33],[40.93,38.54],[40.98,38.64],[40.95,38.68],[40.96,38.72],[41,38.78],[41.04,38.91],[41.04,39.04],[41.08,39.17],[41.05,39.27],[41.11,39.43],[41.1,39.49],[41.01,39.63],[41.02,39.73],[40.96,39.9],[40.98,40],[40.92,40.12],[40.94,40.2],[41.05,40.47],[41.04,40.53],[41.09,40.69],[41.2,40.83],[41.19,40.92],[41.35,41.28],[41.38,41.39],[41.63,41.61],[41.66,41.68],[41.81,41.77],[42,41.76],[42,28.02],[41.89,28.05],[41.89,27.98],[41.82,27.97],[41.68,28.09],[41.66,28.07],[41.63,28.1],[41.52,28.23],[41.27,28.91],[41.24,29.11],[41.16,29.04],[41.13,29.07],[41.01,28.99],[40.96,28.82],[40.97,28.63],[40.98,28.6],[41.01,28.6],[41.08,28.55],[41.09,28.53],[41.03,28.56],[40.99,28.54],[41.04,28.43],[41.09,28.16],[41.04,28.01],[40.97,27.94],[41.01,27.78],[40.99,27.52],[40.98,27.49],[40.83,27.42],[40.7,27.29],[40.63,27.18],[40.61,27.05],[40.56,26.99],[40.46,26.68],[40.35,26.6],[40.21,26.36],[40.15,26.38],[40.07,26.23],[40.06,26.16],[40.23,26.27],[40.32,26.21],[40.5,26.56],[40.51,26.69],[40.56,26.73],[40.56,26.79],[40.6,26.83],[40.66,26.79],[40.64,26.61],[40.6,26.51],[40.62,26.44],[40.61,26.09],[40.66,26.06],[40.8,26.03],[40.8,26],[40.83,26.06],[40.84,26],[40.82,26],[40.85,25.92],[40.87,25.54],[40.95,25.3],[40.93,25.27],[40.94,25.18],[40.96,25.13],[41,25.17],[41.01,25.14],[41.01,25.04],[40.94,24.99],[40.92,24.89],[40.85,24.8],[40.85,24.71],[40.88,24.66],[40.86,24.63],[40.95,24.57],[40.95,24.42],[40.88,24.31],[40.86,24.33],[40.84,24.31],[40.83,24.34],[40.73,24.11],[40.73,24],[40.39,24],[40.45,24.01],[40.37,24.09],[40.35,24.19],[40.15,24.39],[40.13,24.3],[40.27,24.17],[40.32,24],[40.04,24],[40.02,24.02],[40,24],[38.25,24],[38.2,24.07],[38.17,24.08],[38.13,24.06],[38.13,24],[38.07,24],[38.01,24.03],[37.93,24.01],[37.91,24.05],[37.89,24.01],[37.87,24.07],[37.82,24.05],[37.8,24.09],[37.73,24.06],[37.69,24.07],[37.65,24.03],[37.66,24],[42,24],[42,64]],[[41.07,54.68],[41.04,54.77],[41.08,54.72],[41.1,54.73],[41.12,54.72],[41.13,54.64],[41.19,54.6],[41.35,54.29],[41.5,54.06],[41.76,54.01],[41.88,53.93],[41.89,53.9],[42,53.92],[41.98,52.96],[41.68,52.77],[41.66,52.79],[41.7,52.83],[41.67,52.92],[41.57,52.9],[41.39,52.81],[41.24,52.84],[41.12,52.91],[41.05,52.88],[41.08,52.85],[41.16,52.85],[41.38,52.76],[41.52,52.56],[41.64,52.59],[41.69,52.56],[41.75,52.44],[41.9,52.49],[41.96,52.48],[42,52.43],[42,48.35],[41.91,48.42],[41.88,48.55],[41.8,48.66],[41.52,48.9],[41.43,49.03],[41.27,49.14],[41.15,49.16],[41,49.24],[40.85,49.4],[40.79,49.54],[40.71,49.51],[40.65,49.54],[40.57,49.82],[40.58,50.05],[40.53,50.11],[40.5,50.24],[40.39,50.35],[40.23,50.39],[40.34,50.23],[40.36,50.13],[40.32,49.98],[40.37,49.89],[40.34,49.84],[40.31,49.85],[40.29,49.82],[40.21,49.56],[40.15,49.49],[40.09,49.5],[40.08,49.44],[40.04,49.43],[39.99,49.48],[39.94,49.42],[39.87,49.44],[39.78,49.39],[39.71,49.42],[39.65,49.34],[39.52,49.29],[39.48,49.3],[39.39,49.41],[39.32,49.41],[39.35,49.37],[39.29,49.41],[39.35,49.31],[39.34,49.27],[39.28,49.24],[39.17,49.24],[39.03,49.2],[38.96,49.08],[39.01,49.06],[39.03,49.12],[39.08,49.15],[39.11,49.07],[39.18,49.04],[39.18,48.97],[39.12,48.93],[39.03,48.95],[38.94,48.92],[38.86,48.87],[38.87,48.83],[38.76,48.86],[38.24,48.88],[37.9,48.94],[37.74,49.02],[37.62,49.13],[37.52,49.37],[37.45,49.83],[37.48,49.93],[37.46,49.97],[37.45,49.93],[37.39,50.2],[37.19,50.29],[37.13,50.36],[37.03,50.48],[36.77,51],[36.58,51.91],[36.88,53.45],[36.91,53.89],[36.95,54.01],[36.91,54.01],[36.9,53.95],[36.88,53.61],[36.86,53.66],[36.86,53.64],[36.82,53.7],[36.79,53.89],[36.83,54.03],[36.95,54.03],[36.98,54],[37.03,54.02],[37.24,53.93],[37.51,53.89],[37.75,53.83],[38.03,53.81],[38.31,53.87],[38.53,53.83],[38.61,53.84],[38.92,53.98],[38.98,53.89],[39.03,53.87],[39.03,53.77],[39.11,53.72],[39.06,53.73],[39.08,53.7],[39.15,53.7],[39.17,53.73],[39.18,53.7],[39.24,53.73],[39.2,53.66],[39.08,53.69],[39.14,53.64],[39.19,53.62],[39.19,53.6],[39.24,53.61],[39.19,53.57],[39.3,53.59],[39.28,53.56],[39.33,53.58],[39.32,53.55],[39.35,53.56],[39.32,53.45],[39.34,53.44],[39.31,53.4],[39.34,53.4],[39.33,53.29],[39.35,53.3],[39.36,53.24],[39.34,53.15],[39.32,53.2],[39.27,53.17],[39.19,53.18],[39.18,53.16],[39.32,53.14],[39.4,53.08],[39.67,53.28],[39.66,53.31],[39.6,53.24],[39.53,53.22],[39.54,53.43],[39.49,53.48],[39.47,53.57],[39.53,53.57],[39.49,53.62],[39.52,53.74],[39.57,53.63],[39.59,53.66],[39.62,53.63],[39.62,53.57],[39.68,53.53],[39.63,53.54],[39.7,53.44],[39.67,53.46],[39.69,53.43],[39.67,53.43],[39.63,53.45],[39.65,53.42],[39.76,53.43],[39.77,53.38],[39.87,53.5],[39.88,53.48],[39.9,53.54],[39.91,53.53],[39.97,53.57],[40.01,53.4],[39.94,53.28],[40,53.17],[39.97,53.05],[39.99,53.08],[39.98,52.94],[40.02,52.92],[40,52.9],[39.9,52.93],[39.77,53.05],[39.78,53.01],[39.74,53.04],[39.87,52.9],[39.95,52.88],[40.05,52.74],[40.15,52.77],[40.27,52.7],[40.31,52.7],[40.52,52.75],[40.66,52.86],[40.69,52.87],[40.72,52.83],[40.76,52.87],[40.79,52.86],[40.94,52.92],[41.09,52.92],[41.06,52.96],[41.02,52.96],[40.89,53.04],[40.87,53.12],[40.84,53.07],[40.77,53.12],[40.77,53.18],[40.82,53.26],[40.77,53.25],[40.78,53.33],[40.84,53.37],[40.76,53.4],[40.74,53.48],[40.77,53.56],[40.89,53.59],[40.89,53.62],[40.87,53.66],[40.81,53.67],[40.78,53.65],[40.73,53.67],[40.69,53.73],[40.65,53.7],[40.63,53.72],[40.63,53.86],[40.67,53.95],[40.66,54.01],[40.68,54.09],[40.7,54.1],[40.72,54.05],[40.73,54.17],[40.73,54.23],[40.69,54.22],[40.68,54.25],[40.67,54.4],[40.69,54.36],[40.72,54.43],[40.72,54.32],[40.87,54.27],[40.89,54.25],[40.93,54.33],[40.87,54.47],[40.82,54.44],[40.84,54.64],[40.88,54.71],[40.97,54.76]],[[38.05,24.59],[37.99,24.57],[37.97,24.53],[37.96,24.48],[38.02,24.43],[37.97,24.37],[38.09,24.29],[38.09,24.2],[38.13,24.21],[38.14,24.18],[38.17,24.21],[38.22,24.19],[38.22,24.13],[38.28,24.15],[38.26,24.11],[38.31,24.12],[38.33,24.02],[38.34,24.06],[38.38,24.06],[38.4,24.04],[38.4,24],[38.68,24],[38.65,24.15],[38.64,24.13],[38.6,24.13],[38.52,24.23],[38.44,24.18],[38.3,24.25],[38.23,24.25],[38.16,24.35],[38.14,24.48],[38.16,24.59]],[[39.02,26.57],[39.04,26.52],[39.08,26.53],[39.11,26.49],[39.1,26.44],[39.01,26.55],[38.98,26.52],[38.97,26.41],[39.02,26.17],[39.08,26.09],[39.13,26.22],[39.18,26.29],[39.2,26.27],[39.2,26.17],[39.09,26.06],[39.15,25.89],[39.18,25.84],[39.23,25.84],[39.3,25.92],[39.28,25.94],[39.28,26.03],[39.3,26.05],[39.29,26.06],[39.32,26.16],[39.38,26.16],[39.38,26.36],[39.36,26.35],[39.33,26.42],[39.28,26.38],[39.17,26.54],[39.15,26.53],[39.05,26.61],[39.01,26.6]],[[40.62,27.73],[40.58,27.6],[40.6,27.53],[40.64,27.53],[40.66,27.63],[40.65,27.7]],[[12.19,52.39],[12.17,52.37],[12.15,52.39],[12.16,52.24],[12.24,52.07]],[[35.48,27.21],[35.4,27.14],[35.42,27.14],[35.45,27.09],[35.49,27.12],[35.56,27.11],[35.59,27.07],[35.72,27.15],[35.8,27.16],[35.83,27.22],[35.73,27.22],[35.63,27.16],[35.55,27.22],[35.53,27.2],[35.47,27.23]],[[36.74,24.54],[36.69,24.55],[36.67,24.52],[36.65,24.33],[36.72,24.33],[36.75,24.36],[36.7,24.43],[36.7,24.47],[36.75,24.41],[36.77,24.42],[36.75,24.47],[36.77,24.53]],[[36.85,27.32],[36.82,27.21],[36.76,27.13],[36.77,27.05],[36.75,26.99],[36.68,26.97],[36.72,26.92],[36.77,26.93],[36.77,26.99],[36.84,27.06],[36.89,27.16],[36.91,27.28],[36.86,27.35]],[[36.9,26.07],[36.89,26],[36.79,25.88],[36.77,25.76],[36.79,25.74],[36.81,25.85],[36.84,25.86],[36.85,25.85],[36.9,25.97],[36.92,25.95],[36.94,26]],[[37.02,25.25],[36.99,25.19],[37.02,25.1],[37.13,25.18],[37.15,25.24],[37.13,25.22],[37.12,25.26],[37.15,25.27],[37.15,25.29],[37.09,25.26],[37.05,25.28]],[[37.16,25.59],[37.02,25.58],[36.97,25.55],[36.92,25.45],[37.08,25.34],[37.19,25.49],[37.2,25.53]],[[37.64,25],[37.68,24.99],[37.68,25.05],[37.64,25.09],[37.62,25.25],[37.59,25.26],[37.54,25.23],[37.54,25.17]],[[37.57,24.34],[37.53,24.28],[37.62,24.28],[37.68,24.32],[37.69,24.37],[37.66,24.4],[37.63,24.4]],[[37.56,26.21],[37.56,26.13],[37.52,26.06],[37.52,25.98],[37.54,25.97],[37.64,26.07],[37.63,26.2],[37.68,26.31],[37.69,26.36],[37.66,26.34]],[[37.71,27.06],[37.68,26.91],[37.64,26.87],[37.64,26.8],[37.71,26.72],[37.68,26.6],[37.74,26.58],[37.79,26.66],[37.81,26.81],[37.75,26.97],[37.79,26.94],[37.77,27.07],[37.75,27.03],[37.73,27.07]],[[37.71,24.96],[37.69,24.96],[37.71,24.93],[37.82,24.83],[37.82,24.8],[37.89,24.74],[37.88,24.72],[37.93,24.68],[37.97,24.69],[38,24.78],[37.96,24.83],[37.91,24.85],[37.9,24.96],[37.84,24.94],[37.82,24.99],[37.77,24.96],[37.75,24.99]],[[38.79,24.68],[38.77,24.66],[38.79,24.59],[38.76,24.57],[38.8,24.53],[38.81,24.58],[38.85,24.56],[38.88,24.44],[38.97,24.46],[38.98,24.49],[38.94,24.56],[38.87,24.58]],[[40.02,25.44],[39.99,25.45],[39.91,25.35],[39.9,25.37],[39.85,25.34],[39.82,25.37],[39.79,25.35],[39.86,25.24],[39.89,25.28],[39.92,25.25],[39.89,25.2],[39.88,25.22],[39.84,25.18],[39.84,25.2],[39.8,25.21],[39.82,25.14],[39.86,25.17],[39.84,25.14],[39.86,25.12],[39.84,25.05],[39.92,25.07],[39.99,25.03],[40.01,25.22],[39.95,25.28],[40.02,25.38],[40.04,25.45]],[[40.12,25.9],[40.1,25.75],[40.13,25.66],[40.21,25.76],[40.24,25.93],[40.22,25.97],[40.16,25.96],[40.17,26.01],[40.15,26.01]],[[40.4,25.57],[40.48,25.44],[40.51,25.55],[40.49,25.67],[40.43,25.7]],[[40.71,24.79],[40.67,24.77],[40.61,24.78],[40.57,24.64],[40.62,24.59],[40.64,24.52],[40.67,24.51],[40.76,24.57],[40.8,24.64],[40.78,24.73],[40.74,24.79],[40.72,24.76]],[[24.19,53.64],[24.28,53.85],[24.24,53.86],[24.2,53.96],[24.17,53.97],[24.15,53.95],[24.14,53.88],[24.18,53.84],[24.15,53.83],[24.13,53.78],[24.16,53.63]],[[24.27,53.27],[24.28,53.19],[24.3,53.19],[24.34,53.33],[24.31,53.36],[24.41,53.42],[24.38,53.45],[24.34,53.44],[24.29,53.33],[24.26,53.32],[24.29,53.28]],[[26.17,50.63],[26.15,50.65],[26.11,50.61],[25.85,50.6],[25.79,50.56],[25.88,50.53],[25.96,50.47],[26.05,50.49],[26.18,50.45],[26.24,50.47],[26.24,50.59],[26.2,50.6],[26.19,50.55],[26.16,50.59],[26.19,50.62]],[[36.73,25.28],[36.73,25.25],[36.77,25.26],[36.79,25.31],[36.71,25.41],[36.65,25.37]],[[36.98,26.93],[37.03,26.96],[37.04,26.92],[37.09,26.89],[37.05,26.99],[37.04,26.97],[37,27.01],[37.01,27.04],[36.96,27.05],[36.93,26.94],[36.95,26.91]],[[36.36,28.21],[36.24,28.16],[36.12,28.06],[36.1,28.1],[36.08,28.07],[36.06,28.09],[36.06,27.99],[35.91,27.83],[35.89,27.78],[35.91,27.73],[35.95,27.71],[36.08,27.76],[36.16,27.68],[36.2,27.77],[36.27,27.81],[36.34,27.9],[36.43,28.12],[36.42,28.18],[36.46,28.22],[36.43,28.24],[36.37,28.24]],[[38.49,26.12],[38.46,26.16],[38.42,26.14],[38.3,26.16],[38.28,26.11],[38.22,26.11],[38.2,26.04],[38.16,26.01],[38.23,25.91],[38.22,25.89],[38.25,25.89],[38.25,25.86],[38.28,25.88],[38.3,25.97],[38.38,25.99],[38.41,25.95],[38.46,25.93],[38.52,25.84],[38.58,25.85],[38.6,25.99],[38.59,26.06],[38.54,26.11],[38.56,26.15],[38.54,26.16]],[[12.55,54.54],[12.52,54.46],[12.48,54.45],[12.43,54.25],[12.35,54.14],[12.3,53.73],[12.33,53.57],[12.42,53.51],[12.54,53.31],[12.56,53.39],[12.66,53.4],[12.67,53.47],[12.71,53.52],[12.71,53.65],[12.62,53.76],[12.6,53.85],[12.65,53.88],[12.65,54.01],[12.7,54.12],[12.54,54.47]],[[15.58,40.41],[15.61,39.98],[15.7,39.94],[15.66,39.97],[15.66,40.08],[15.74,40.01],[15.74,39.93],[15.79,39.93],[15.77,39.99],[15.82,39.98],[15.84,40.04],[15.89,39.95],[15.85,40.09],[15.79,40.1],[15.81,40.14],[15.71,40.13],[15.64,40.16],[15.63,40.23],[15.66,40.26],[15.7,40.23],[15.7,40.31],[15.66,40.33],[15.64,40.41]],[[16.63,42.18],[16.58,42.18],[16.59,42.15],[16.64,42.07],[16.66,42.12],[16.69,42.09],[16.67,41.96],[16.75,41.85],[16.81,41.81],[16.81,41.78],[16.9,41.76],[16.86,41.83],[16.75,41.9],[16.73,41.95],[16.74,42.01],[16.72,42.04],[16.73,42.06],[16.76,42.02],[16.81,42.05],[16.79,42.1],[16.74,42.12],[16.71,42.19]],[[16.88,41.84],[16.96,41.93],[16.98,41.92],[17,41.85],[16.99,41.92],[16.88,41.94],[16.85,41.99],[16.84,41.93],[16.8,42],[16.76,42],[16.8,41.9]],[[20.52,58.95],[20.4,58.82],[20.28,58.79],[20.17,58.65],[20.36,58.64],[20.43,58.7],[20.45,58.77],[20.54,58.79],[20.69,58.89],[20.68,58.92],[20.6,58.91]],[[26.97,56.28],[26.96,56.29],[26.92,56.19],[26.79,56.09],[26.7,55.95],[26.74,55.88],[26.69,55.77],[26.68,55.67],[26.6,55.5],[26.54,55.31],[26.56,55.28],[26.66,55.28],[26.65,55.35],[26.8,55.77],[26.89,55.78],[26.94,55.73],[26.95,55.76],[26.91,55.9],[26.98,56.04],[27,56.17]],[[29.6,48.23],[29.6,48.18],[29.8,48.04],[29.84,48.11],[29.87,48.12],[29.88,48.08],[29.9,48.09],[29.88,48.16],[29.92,48.2],[29.97,48.12],[29.99,48.15],[29.98,48.19],[29.75,48.36],[29.65,48.3]],[[35.26,26.27],[35.19,26.3],[35.2,26.32],[35.1,26.28],[35.03,26.24],[35,26.13],[35.04,25.98],[35.01,25.81],[34.99,25.35],[34.94,25.11],[34.93,24.74],[35.04,24.76],[35.09,24.72],[35.11,24.56],[35.19,24.4],[35.2,24.03],[35.23,24],[35.52,24],[35.55,24.09],[35.59,24.08],[35.6,24.16],[35.54,24.2],[35.51,24.18],[35.5,24.07],[35.45,24.19],[35.48,24.25],[35.37,24.27],[35.35,24.34],[35.43,24.7],[35.4,24.84],[35.43,24.9],[35.4,24.96],[35.43,24.97],[35.4,25.05],[35.36,25.05],[35.34,25.08],[35.34,25.37],[35.29,25.45],[35.35,25.66],[35.34,25.77],[35.29,25.72],[35.26,25.73],[35.29,25.74],[35.26,25.76],[35.25,25.73],[35.17,25.71],[35.13,25.73],[35.11,25.8],[35.19,25.9],[35.23,26.06],[35.2,26.16],[35.29,26.29],[35.32,26.29],[35.32,26.32]],[[35.69,34.58],[35.64,34.57],[35.42,34.14],[35.32,34.04],[35.31,33.95],[35.26,33.91],[35.17,33.9],[34.97,34.1],[34.99,34.01],[34.97,33.91],[34.94,33.86],[34.97,33.8],[34.97,33.68],[34.82,33.6],[34.76,33.44],[34.77,33.4],[34.74,33.4],[34.7,33.26],[34.69,33.09],[34.63,33.01],[34.57,33.03],[34.57,32.94],[34.66,32.91],[34.67,32.83],[34.65,32.71],[34.72,32.46],[34.75,32.41],[34.85,32.38],[34.9,32.32],[35.05,32.28],[35.1,32.29],[35.04,32.37],[35.06,32.45],[35.18,32.55],[35.19,32.65],[35.16,32.87],[35.23,32.93],[35.4,32.92],[35.36,33.07],[35.33,33.43],[35.36,33.66],[35.42,33.78],[35.41,33.83],[35.47,34.04],[35.55,34.18]]];

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

/* ===== SİYER ATLASI GÖRSELLERİ (yalnızca kendi kullanımımız) =====
 Görsel dosyaları www/img/atlas/ klasörüne konur (klasör .gitignore'dadır, GitHub'a ve web yayınına gitmez).
 ATLAS[dersId] = [{dosya:'img/atlas/hicret-1.jpg', baslik:'Hicret güzergâhı'}, ...]
 Dosya yoksa görsel gösterilmez; ders ekranı bozulmaz. İzin alınırsa .gitignore satırı kaldırılır. */
const ATLAS={};

/* ===== ÖZGÜR LİSANSLI GÖRSELLER (Wikimedia Commons) =====
 Lisanslar tek tek kontrol edildi: kamu malı, CC0, CC BY, CC BY-SA. Her görselin altında yazar, lisans ve kaynak bağlantısı gösterilir.
 GORSEL[dersId] = [{dosya, baslik:[tr,en], yazar, lisans, kaynak}] — dosyalar www/img/foto/ içinde.
 Not: Osmanlı Siyer-i Nebî minyatürleri (kamu malı) da Commons'ta var; Peygamberimizi tasvir ettikleri için bilerek kullanılmadı. */
const GORSEL={
 "fil": [
  {
   "dosya": "img/foto/fil-1.jpg",
   "baslik": [
    "Kâbe",
    "The Ka‘ba"
   ],
   "yazar": "Moataz Egbaria (معتز اغبارية)",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Kaaba,_Makkah3.jpg"
  }
 ],
 "fetih": [
  {
   "dosya": "img/foto/fil-1.jpg",
   "baslik": [
    "Kâbe",
    "The Ka‘ba"
   ],
   "yazar": "Moataz Egbaria (معتز اغبارية)",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Kaaba,_Makkah3.jpg"
  }
 ],
 "hacer": [
  {
   "dosya": "img/foto/hacer-1.jpg",
   "baslik": [
    "Hacerülesved",
    "The Black Stone"
   ],
   "yazar": "omar_chatriwala",
   "lisans": "CC BY 2.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Coveting_the_Black_Stone.jpg"
  }
 ],
 "hira": [
  {
   "dosya": "img/foto/hira-1.jpg",
   "baslik": [
    "Hira Mağarası",
    "The Cave of Hira"
   ],
   "yazar": "saudipics",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Hira_Cave.jpg"
  }
 ],
 "acik": [
  {
   "dosya": "img/foto/acik-1.jpg",
   "baslik": [
    "Safâ Tepesi (Mescid-i Harâm içinde)",
    "Mount Safa (inside the Sacred Mosque)"
   ],
   "yazar": "Swerveut (talk)",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mount_Safa_Mecca.jpg"
  }
 ],
 "habese": [
  {
   "dosya": "img/foto/habese-1.jpg",
   "baslik": [
    "Aksum (Habeşistan) dikilitaşları",
    "Stelae of Aksum (Abyssinia)"
   ],
   "yazar": "Adam Jones from Kelowna, BC, Canada",
   "lisans": "CC BY-SA 2.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Stela_in_Main_Stelae_Field_-_Axum_(Aksum)_-_Ethiopia_-_01_(8701108913).jpg"
  }
 ],
 "sam": [
  {
   "dosya": "img/foto/sam-1.jpg",
   "baslik": [
    "Busrâ (Bosra) kalıntıları",
    "The ruins of Busra"
   ],
   "yazar": "Jacky Lee",
   "lisans": "CC BY 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Roman_amphitheatre_in_Bosra_-_panoramio.jpg"
  }
 ],
 "isra": [
  {
   "dosya": "img/foto/isra-1.jpg",
   "baslik": [
    "Mescid-i Aksâ",
    "Masjid al-Aqsa"
   ],
   "yazar": "Godot13",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Jerusalem-2013-Temple_Mount-Al-Aqsa_Mosque_01.jpg"
  }
 ],
 "hicret": [
  {
   "dosya": "img/foto/hicret-1.jpg",
   "baslik": [
    "Sevr Dağı",
    "Mount Thawr"
   ],
   "yazar": "Yousefmadari at ml.wikipedia",
   "lisans": "Public domain",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mount_sour1.jpg"
  },
  {
   "dosya": "img/foto/hicret-2.jpg",
   "baslik": [
    "Kubâ Mescidi",
    "Quba Mosque"
   ],
   "yazar": "Kaliper1",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Quba_Mosque_(2024).jpg"
  }
 ],
 "medine-ilk": [
  {
   "dosya": "img/foto/medine-ilk-1.jpg",
   "baslik": [
    "Mescid-i Nebevî",
    "The Prophet’s Mosque"
   ],
   "yazar": "Meshari Alawfi",
   "lisans": "CC BY 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Al-Masjid_an_Nabawi.jpg"
  }
 ],
 "uhud": [
  {
   "dosya": "img/foto/uhud-1.jpg",
   "baslik": [
    "Uhud Dağı",
    "Mount Uhud"
   ],
   "yazar": "Ahmed",
   "lisans": "CC BY 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mount_Uhud,_Medina,_20241002_091210_028.jpg"
  }
 ],
 "veda": [
  {
   "dosya": "img/foto/veda-1.jpg",
   "baslik": [
    "Arafat, Rahmet Dağı",
    "Arafat, Mount of Mercy"
   ],
   "yazar": "Edibiz",
   "lisans": "CC0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mount_Arafat(Jabal_ar-Raḥmah).jpg"
  }
 ],
 "omer": [
  {
   "dosya": "img/foto/omer-1.jpg",
   "baslik": [
    "Kudüs’teki Ömer Camii",
    "The Mosque of Omar in Jerusalem"
   ],
   "yazar": "Hoshvilim",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Mosque_of_Omar,_Jerusalem,_01.jpg"
  }
 ],
 "osman": [
  {
   "dosya": "img/foto/osman-1.jpg",
   "baslik": [
    "Hz. Osman’a nisbet edilen mushaf (Taşkent); nisbet geleneksel bir rivayettir",
    "The mushaf traditionally attributed to Uthman (Tashkent)"
   ],
   "yazar": "Wiggum",
   "lisans": "CC BY-SA 3.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Uthman_Koran_Taschkent_a.jpg"
  }
 ],
 "ali": [
  {
   "dosya": "img/foto/ali-1.jpg",
   "baslik": [
    "Kûfe Camii",
    "The Mosque of Kufa"
   ],
   "yazar": "Ali Alturaihy",
   "lisans": "CC BY-SA 4.0",
   "kaynak": "https://commons.wikimedia.org/wiki/File:Kufa_Mosque.jpg"
  }
 ]
};
