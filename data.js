/* ===== VERİ KALIBI =====
 Yeni ders eklemek için bir döneme şu şekilde nesne ekle:
 {id,baslik,yil, cocuk:{ozet,olaylar:[{e:'emoji',b:'başlık',m:'kısa metin'}]},
  buyuk:{ozet,olaylar:[{b:'başlık',m:'detay',k:'kaynak'}]},
  sorular:[{s:'soru',sec:['a','b','c'],d:doğruİndeks,a:'açıklama'}]}
 İçeriği olmayan ders (cocuk/buyuk yok) "yakında" olarak görünür. Örnek içerik taslaktır; yayın öncesi kaynaklarla doğrulanmalı. */
const DONEMLER=[
{id:'cocukluk',ad:'Çocukluk',alt:'570 – 595',renk:'#e08a2e',dersler:[
 {id:'fil',baslik:'Fil Olayı ve Doğum',yil:'570',
  cocuk:{ozet:'Çok sevilen bir bebek dünyaya geldi: Muhammed (s.a.v.)!',olaylar:[
   {e:'🐘',b:'Fil geldi',m:'Ebrehe, koca fillerle Kâbe’yi yıkmaya geldi.'},
   {e:'🐦',b:'Kuşlar yetişti',m:'Allah küçük kuşlar gönderdi, ordu dağıldı.'},
   {e:'👶',b:'Bebek doğdu',m:'Aynı yıl Mekke’de Hz. Muhammed doğdu.'}]},
  buyuk:{ozet:'Miladi 570 civarı: Fil Vakası yılında Mekke’de, Hâşimoğulları’nda doğum.',olaylar:[
   {b:'Fil Vakası',m:'Yemen valisi Ebrehe, Kâbe’yi yıkmak için Mekke üzerine yürüdü ve ordusu helak oldu.',k:'Fîl Sûresi'},
   {b:'Doğum',m:'Babası Abdullah, doğumundan önce vefat etmişti; dedesi Abdülmuttalib kendisine “Muhammed” adını verdi.',k:'İbn Hişâm, es-Sîre'}]},
  sorular:[{s:'Peygamberimiz hangi olaydan sonra/yıl doğdu?',sec:['Hicret','Fil Olayı yılı','Bedir'],d:1,a:'Doğum, Fil Olayı yılına denk gelir.'},
   {s:'Ebrehe neyi yıkmak istedi?',sec:['Kâbe','Mescid-i Nebevî','Tâif'],d:0,a:'Hedef Kâbe’ydi.'}]},
 {id:'sut',baslik:'Süt Annesi Halime',yil:'570–574'},
 {id:'amine',baslik:'Annesi ve Dedesinin Vefatı',yil:'576–578'},
 {id:'sam',baslik:'Şam Yolculuğu ve Rahip Bahira',yil:'583'},
 {id:'fudul',baslik:'Hılfü’l-Fudûl ve El-Emîn',yil:'~590'}]},
{id:'genclik',ad:'Gençlik',alt:'595 – 610',renk:'#2f8f83',dersler:[
 {id:'hatice',baslik:'Hz. Hatice ile Evlilik',yil:'595'},
 {id:'hacer',baslik:'Hacerülesved Hakemliği',yil:'605'},
 {id:'hira',baslik:'Hira’da Tefekkür',yil:'~605–610'}]},
{id:'mekke',ad:'Mekke Dönemi',alt:'610 – 622',renk:'#3d6fb6',dersler:[
 {id:'vahiy',baslik:'İlk Vahiy',yil:'610'},
 {id:'gizli',baslik:'Gizli Davet',yil:'610–613'},
 {id:'acik',baslik:'Açık Davet ve Eziyetler',yil:'613–'},
 {id:'habese',baslik:'Habeşistan’a Hicret',yil:'615'},
 {id:'hüzün',baslik:'Hüzün Yılı',yil:'619'},
 {id:'isra',baslik:'İsrâ ve Mi‘râc',yil:'620'},
 {id:'akabe',baslik:'Akabe Biatları',yil:'621–622'}]},
{id:'medine',ad:'Medine Dönemi',alt:'622 – 632',renk:'#8a54b5',dersler:[
 {id:'hicret',baslik:'Hicret',yil:'622'},
 {id:'bedir',baslik:'Bedir Savaşı',yil:'624'},
 {id:'uhud',baslik:'Uhud Savaşı',yil:'625'},
 {id:'hendek',baslik:'Hendek Savaşı',yil:'627'},
 {id:'hudeybiye',baslik:'Hudeybiye Antlaşması',yil:'628'},
 {id:'fetih',baslik:'Mekke’nin Fethi',yil:'630'},
 {id:'veda',baslik:'Veda Haccı',yil:'632'}]},
{id:'vefat',ad:'Vefat',alt:'632',renk:'#5a6472',dersler:[
 {id:'hastalik',baslik:'Son Hastalık ve Vefat',yil:'632'}]},
{id:'halifeler',ad:'Dört Halife Dönemi',alt:'632 – 661',renk:'#b5483f',dersler:[
 {id:'ebubekir',baslik:'Hz. Ebû Bekir',yil:'632–634'},
 {id:'omer',baslik:'Hz. Ömer',yil:'634–644'},
 {id:'osman',baslik:'Hz. Osman',yil:'644–656'},
 {id:'ali',baslik:'Hz. Ali',yil:'656–661'}]}
];
