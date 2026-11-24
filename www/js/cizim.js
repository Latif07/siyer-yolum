/* Siyer Yolum: kendi çizimlerimiz (SVG). Anlatımı pekiştirmek için sade ve sembolik; insan figürü yok
   (Peygamberimiz ve sahâbîler çizilmez). Her çizim 320x200 ve açık/koyu temada aynı görünür.
   CIZIM[dersId] = {ad:[tr,en], svg:() => '...'} */
(function () {
  const palm = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0q3-18 1-36" stroke="#7a5230" stroke-width="3.2" fill="none" stroke-linecap="round"/><g stroke="#2f7d4f" stroke-width="3" fill="none" stroke-linecap="round"><path d="M1-36q-14-2-22 10"/><path d="M1-36q14-2 22 10"/><path d="M1-36q-10-12-18-10"/><path d="M1-36q10-12 18-10"/><path d="M1-36q0-10 0-16"/></g></g>`;
  // yüzü sağa dönük deve (yükü isteğe bağlı)
  const deve = (x, y, s = 1, yuk = '') => `<g transform="translate(${x} ${y}) scale(${s})" fill="#b98550"><path d="M-12-20L-14 0M-5-20L-6 0M6-20L7 0M13-20L15 0" stroke="#9a6a3c" stroke-width="3.2" stroke-linecap="round"/><ellipse cx="0" cy="-26" rx="19" ry="9"/><ellipse cx="-3" cy="-37" rx="6" ry="6.5"/><path d="M14-30l9-15" stroke="#b98550" stroke-width="6" stroke-linecap="round"/><ellipse cx="28" cy="-48" rx="6.5" ry="3.6" transform="rotate(-15 28 -48)"/><circle cx="29.5" cy="-49.5" r=".9" fill="#2b2b2b"/><path d="M-19-28q-6 2-6 10" stroke="#9a6a3c" stroke-width="2" fill="none"/>${yuk}</g>`;
  const kabe = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><polygon points="0,0 12,-6 52,-6 40,0" fill="#3a3a3a"/><polygon points="40,0 52,-6 52,30 40,36" fill="#262626"/><rect width="40" height="36" fill="#171717"/><rect y="7" width="40" height="4" fill="#d9aa3e"/><polygon points="40,7 52,1 52,5 40,11" fill="#b8892f"/><rect x="24" y="16" width="8" height="20" rx="1.5" fill="#d9aa3e"/></g>`;
  const kus = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0q4-6 8 0q4-6 8 0" stroke="#3b3b3b" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="8" cy="7" r="1.8" fill="#6f6f6f"/></g>`;
  const bayrak = (x, y, c) => `<g><path d="M${x} ${y}v-26" stroke="#5b4630" stroke-width="2"/><path d="M${x} ${y - 26}h16l-4 6 4 6h-16z" fill="${c}"/></g>`;
  const yildizlar = (n, seed) => { let r = '', a = seed; for (let i = 0; i < n; i++) { a = (a * 9301 + 49297) % 233280; const x = (a / 233280) * 320; a = (a * 9301 + 49297) % 233280; const y = (a / 233280) * 90; r += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(0.7 + (i % 3) * 0.4).toFixed(1)}" fill="#fff" opacity=".85"/>`; } return r; };
  const cadir = (x, y, c) => `<g><polygon points="${x},${y} ${x + 14},${y - 24} ${x + 28},${y}" fill="${c}"/><polygon points="${x + 11},${y} ${x + 14},${y - 9} ${x + 17},${y}" fill="#3a2a1c"/></g>`;
  const yay = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})" fill="none" stroke-linecap="round"><path d="M0-13Q13 0 0 13" stroke="#3b2b1c" stroke-width="2.6"/><path d="M0-13V13" stroke="#3b2b1c" stroke-width=".9"/><path d="M-14 0H10" stroke="#5b4630" stroke-width="1.8"/><path d="M10 0l-5-3.5M10 0l-5 3.5" stroke="#5b4630" stroke-width="1.8"/></g>`;
  const cerceve = (id, ic) => `<svg viewBox="0 0 320 200" role="img" xmlns="http://www.w3.org/2000/svg">${ic}</svg>`;

  const fil = () => cerceve('fil', `
    <defs><linearGradient id="fl-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4b97c"/><stop offset="1" stop-color="#fde9c4"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#fl-s)"/><circle cx="262" cy="46" r="17" fill="#fff4d6" opacity=".95"/>
    <path d="M0 150Q80 136 160 148T320 140V200H0z" fill="#e5c685"/><path d="M0 172Q100 158 200 170T320 164V200H0z" fill="#d4ad68"/>
    ${kabe(232, 118, 1.35)}
    <g transform="translate(112 176) scale(-1.15 1.15)">
      <rect x="-26" y="-22" width="10" height="22" rx="3" fill="#737780"/><rect x="-8" y="-22" width="10" height="22" rx="3" fill="#737780"/><rect x="10" y="-22" width="10" height="22" rx="3" fill="#737780"/><rect x="26" y="-22" width="10" height="22" rx="3" fill="#737780"/>
      <ellipse cx="2" cy="-34" rx="36" ry="23" fill="#8c8f98"/>
      <rect x="-14" y="-66" width="32" height="14" rx="3" fill="#a3322a"/><rect x="-14" y="-52" width="32" height="3" fill="#d9aa3e"/><path d="M2-66v-12" stroke="#5b4630" stroke-width="2"/><path d="M2-78h12l-3 5 3 5H2z" fill="#d9aa3e"/>
      <circle cx="-36" cy="-42" r="16" fill="#8c8f98"/><ellipse cx="-24" cy="-42" rx="8" ry="12" fill="#767a83"/>
      <path d="M-47-34q-12 12-7 28q2 7 8 4" stroke="#8c8f98" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M-46-30q-10 4-14 12" stroke="#f6f1e6" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="-41" cy="-46" r="1.6" fill="#222"/>
    </g>
    ${kus(150, 34)}${kus(176, 22, 1.1)}${kus(198, 40)}${kus(128, 52, .9)}${kus(214, 58, .9)}
    <g fill="#6f6f6f"><circle cx="155" cy="64" r="1.6"/><circle cx="180" cy="52" r="1.6"/><circle cx="200" cy="72" r="1.6"/><circle cx="135" cy="84" r="1.4"/></g>`);

  const hira = () => cerceve('hira', `
    <defs><linearGradient id="hr-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1738"/><stop offset="1" stop-color="#27427a"/></linearGradient>
    <linearGradient id="hr-i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".0"/><stop offset="1" stop-color="#ffe9a8" stop-opacity=".75"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#hr-s)"/>${yildizlar(46, 7)}
    <path d="M52 34a14 14 0 1 0 9 22a11 11 0 0 1-9-22z" fill="#f7efd0"/>
    <polygon points="170,0 212,0 196,108 184,108" fill="url(#hr-i)"/>
    <path d="M-10 200L62 110L118 132L196 56L262 128L330 96V200z" fill="#3e3128"/><path d="M196 56L262 128L230 200H170z" fill="#4e3f33"/><path d="M62 110L118 132L96 200H20z" fill="#352a22"/>
    <path d="M178 140Q178 112 190 112Q202 112 202 140z" fill="#07070a"/><ellipse cx="190" cy="128" rx="9" ry="12" fill="#ffd76a" opacity=".45"/>
    <path d="M0 200Q80 186 160 192T320 188V200z" fill="#241c16"/>`);

  const hicret = () => cerceve('hicret', `
    <defs><linearGradient id="hc-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7b268"/><stop offset="1" stop-color="#fff0d2"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#hc-s)"/><circle cx="86" cy="118" r="24" fill="#ff9d3d"/>
    <path d="M0 126Q60 108 120 124T240 118T320 124V200H0z" fill="#d9b176"/><path d="M0 150Q90 134 180 150T320 142V200H0z" fill="#e8c88b"/>
    <path d="M0 200Q120 150 214 166T320 150" stroke="#f6e3b6" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="2 14" opacity=".9"/>
    <path d="M-4 170L8 112Q38 92 72 118L84 170z" fill="#8d8478"/><path d="M26 170Q26 136 40 136Q54 136 54 170z" fill="#1c1814"/>
    <g fill="#c9b99a"><rect x="236" y="116" width="22" height="16" rx="2"/><rect x="262" y="120" width="26" height="14" rx="2"/><rect x="292" y="118" width="22" height="16" rx="2"/></g>
    ${palm(232, 134, 1)}${palm(290, 136, .9)}${palm(312, 134, 1.1)}
    ${deve(138, 178, .85)}${deve(196, 172, .8)}`);

  const hendek = () => cerceve('hendek', `
    <defs><linearGradient id="hd-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd0ee"/><stop offset="1" stop-color="#e9f5fb"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#hd-s)"/>
    <rect y="130" width="320" height="70" fill="#d9bc83"/>
    <polygon points="112,130 122,176 172,176 182,130" fill="#6a4a2e"/><polygon points="120,130 128,168 166,168 174,130" fill="#4a3220"/>
    <rect x="102" y="124" width="12" height="8" fill="#b99562"/><rect x="180" y="124" width="12" height="8" fill="#b99562"/>
    ${cadir(14, 140, '#c25b4a')}${cadir(46, 148, '#c2a14a')}${cadir(74, 138, '#5b7ea8')}${bayrak(30, 118, '#a3322a')}
    <g fill="#c9b99a"><rect x="206" y="110" width="26" height="22" rx="2"/><rect x="236" y="114" width="30" height="18" rx="2"/><rect x="270" y="108" width="28" height="24" rx="2"/></g>
    <g fill="#6a5338"><rect x="214" y="120" width="8" height="12"/><rect x="246" y="122" width="8" height="10"/><rect x="280" y="118" width="8" height="14"/></g>
    ${palm(204, 132, .9)}${palm(300, 134, 1)}${palm(312, 134, .8)}
    <g stroke="#5b4630" stroke-width="2" stroke-linecap="round" fill="none"><path d="M64 120Q110 80 150 100" stroke-dasharray="3 5"/><path d="M60 110Q112 70 160 92" stroke-dasharray="3 5"/></g>
    <g transform="translate(140 150) rotate(20)"><path d="M0 0v-20" stroke="#6b4a2a" stroke-width="3"/><path d="M-5-20h10l-2-8h-6z" fill="#8a8f98"/></g>`);

  const uhud = () => cerceve('uhud', `
    <defs><linearGradient id="uh-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8b27a"/><stop offset="1" stop-color="#fbe7c8"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#uh-s)"/>
    <path d="M40 170L112 62L170 88L244 52L310 170z" fill="#8a3b2a"/><path d="M244 52L310 170H236z" fill="#6e2d20"/><path d="M112 62L170 88L146 170H70z" fill="#a04a36"/>
    <path d="M244 52v-22" stroke="#5b4630" stroke-width="2"/><path d="M244 30h18l-5 6 5 6h-18z" fill="#2f7d4f"/>
    <path d="M0 176Q80 160 160 172T320 168V200H0z" fill="#d4ad68"/>
    <path d="M210 176Q246 120 300 176z" fill="#9a7a50"/>
    ${yay(246, 150)}${yay(274, 156)}${yay(260, 138, .8)}
    ${palm(30, 178, 1)}${palm(58, 182, .85)}`);

  const bedir = () => cerceve('bedir', `
    <defs><linearGradient id="bd-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ec7ea"/><stop offset="1" stop-color="#f7e9c8"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#bd-s)"/>
    <path d="M0 132Q80 116 160 128T320 122V200H0z" fill="#dcc08a"/><path d="M0 160Q100 146 200 158T320 152V200H0z" fill="#d1aa68"/>
    <ellipse cx="160" cy="158" rx="30" ry="10" fill="#a89a85"/><ellipse cx="160" cy="157" rx="23" ry="6.5" fill="#27486a"/><ellipse cx="160" cy="156" rx="14" ry="3.5" fill="#4f86b8" opacity=".7"/>
    <path d="M140 150v-26M180 150v-26M140 124h40" stroke="#5b4630" stroke-width="3" fill="none"/><path d="M160 124v14" stroke="#7a5a38" stroke-width="1.5"/><rect x="156" y="138" width="8" height="7" rx="1.5" fill="#8d6b3c"/>
    ${palm(40, 150, 1.1)}${palm(70, 156, .9)}${palm(282, 152, 1)}${palm(300, 156, .8)}
    <g><path d="M104 168v-44" stroke="#5b4630" stroke-width="2"/><path d="M104 124h26l-6 9 6 9h-26z" fill="#2f7d4f"/></g>
    <g><path d="M216 168v-44" stroke="#5b4630" stroke-width="2"/><path d="M216 124h-26l6 9-6 9h26z" fill="#4a4a52"/></g>
    <path d="M110 178Q160 168 210 178" stroke="#fff" stroke-width="2" stroke-dasharray="2 6" fill="none" opacity=".8"/>`);

  const vahiy = () => cerceve('vahiy', `
    <defs><radialGradient id="vh-g" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
    <linearGradient id="vh-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2c3d"/><stop offset="1" stop-color="#1f5a63"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#vh-s)"/>${yildizlar(40, 11)}
    <circle cx="160" cy="112" r="92" fill="url(#vh-g)"/>
    <g stroke="#f6d77a" stroke-width="2" stroke-linecap="round" opacity=".75"><path d="M160 108v-92"/><path d="M160 108L110 24"/><path d="M160 108L210 24"/><path d="M160 108L66 56"/><path d="M160 108L254 56"/><path d="M160 108L40 96"/><path d="M160 108L280 96"/></g>
    <path d="M160 128Q106 112 58 124V172Q106 160 160 176z" fill="#f7efd8"/><path d="M160 128Q214 112 262 124V172Q214 160 160 176z" fill="#efe3c3"/>
    <path d="M160 128V176" stroke="#c8b27a" stroke-width="2"/>
    <g stroke="#a9915a" stroke-width="1.6" stroke-linecap="round" fill="none"><path d="M72 136Q110 128 148 140"/><path d="M72 146Q110 138 148 150"/><path d="M72 156Q110 148 148 160"/><path d="M172 140Q210 128 248 136"/><path d="M172 150Q210 138 248 146"/><path d="M172 160Q210 148 248 156"/></g>
    <path d="M52 176Q106 168 160 184Q214 168 268 176V190H52z" fill="#8d6b3c"/>`);

  const isra = () => cerceve('isra', `
    <defs><linearGradient id="is-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1233"/><stop offset="1" stop-color="#2d3f7a"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#is-s)"/>${yildizlar(60, 3)}
    <path d="M160 24a16 16 0 1 0 10 25a13 13 0 0 1-10-25z" fill="#f7efd0"/>
    <path d="M52 142Q160 -26 268 142" stroke="#f6d77a" stroke-width="3" fill="none" stroke-dasharray="1 9" stroke-linecap="round"/><path d="M52 142Q160 -26 268 142" stroke="#ffe9a8" stroke-width="9" fill="none" opacity=".18"/>
    <path d="M0 200V168Q40 150 80 164T160 170T240 160T320 166V200z" fill="#161b34"/>
    <g fill="#d9d4c4"><rect x="30" y="146" width="40" height="22"/><path d="M34 146a16 16 0 0 1 32 0z" fill="#c8c2ae"/><rect x="74" y="122" width="6" height="46"/><path d="M71 122l6-12 6 12z" fill="#c8c2ae"/></g>
    <g><rect x="236" y="148" width="54" height="20" fill="#cfc9b4"/><path d="M246 148a17 17 0 0 1 34 0z" fill="#8d8e96"/><path d="M262 120v10" stroke="#cfc9b4" stroke-width="2"/></g>
    <g fill="#ffd76a" opacity=".6"><rect x="40" y="154" width="5" height="7"/><rect x="52" y="154" width="5" height="7"/><rect x="246" y="156" width="5" height="7"/><rect x="262" y="156" width="5" height="7"/></g>`);

  const medineIlk = () => cerceve('medine-ilk', `
    <defs><linearGradient id="mi-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd0ee"/><stop offset="1" stop-color="#f0f6f8"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#mi-s)"/>
    ${palm(196, 118, 1.15)}${palm(246, 120, 1)}${palm(296, 118, 1.2)}${palm(30, 120, 1)}
    <rect x="0" y="108" width="320" height="52" fill="#d4b074"/><rect x="0" y="104" width="320" height="6" fill="#b9935c"/>
    <path d="M28 96L172 96L182 108L18 108z" fill="#7a8b4a"/><g stroke="#3f5a2a" stroke-width="2" stroke-linecap="round"><path d="M34 100h132M30 104h144"/></g>
    <g stroke="#7a5230" stroke-width="5" stroke-linecap="round"><path d="M44 108V160M82 108V160M120 108V160M158 108V160"/></g>
    <rect y="160" width="320" height="40" fill="#e6cd96"/>
    <g fill="#cfa85e"><rect x="200" y="132" width="86" height="18" rx="3"/></g>
    <path d="M24 176h272" stroke="#c9ad74" stroke-width="2" stroke-dasharray="3 7"/>`);

  const sam = () => cerceve('sam', `
    <defs><linearGradient id="sm-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd18a"/><stop offset="1" stop-color="#fff2d6"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#sm-s)"/><circle cx="244" cy="62" r="30" fill="#ffb24a" opacity=".9"/>
    <path d="M0 140Q80 118 160 136T320 126V200H0z" fill="#e3c283"/><path d="M0 170Q110 150 220 168T320 160V200H0z" fill="#d4ad68"/>
    ${deve(70, 184, .9, '<rect x="-12" y="-52" width="24" height="12" rx="3" fill="#a3322a"/>')}
    ${deve(140, 178, .85, '<rect x="-12" y="-50" width="24" height="11" rx="3" fill="#2f6a8a"/>')}
    ${deve(206, 172, .8, '<rect x="-11" y="-48" width="22" height="10" rx="3" fill="#c2a14a"/>')}
    <path d="M30 188Q160 160 300 176" stroke="#f6e3b6" stroke-width="3" stroke-dasharray="2 10" fill="none" stroke-linecap="round"/>`);

  const habese = () => cerceve('habese', `
    <defs><linearGradient id="hb-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#aee0f6"/><stop offset="1" stop-color="#e9f7fb"/></linearGradient>
    <linearGradient id="hb-w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a8fbf"/><stop offset="1" stop-color="#1c5b86"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#hb-s)"/><circle cx="262" cy="40" r="16" fill="#fff4d6"/>
    <rect y="118" width="320" height="82" fill="url(#hb-w)"/>
    <path d="M0 120Q36 110 66 122L66 200H0z" fill="#e3c283"/><path d="M0 138Q30 132 56 142V200H0z" fill="#d4ad68"/>${palm(26, 128, .9)}
    <path d="M254 124Q284 108 320 118V200H266z" fill="#5e9a58"/><rect x="292" y="62" width="9" height="54" fill="#8c8f98"/><polygon points="292,62 296.5,52 301,62" fill="#8c8f98"/><rect x="290" y="112" width="13" height="6" fill="#737780"/>
    <path d="M106 134Q158 154 222 130L206 146Q160 160 120 146z" fill="#7a5230"/><path d="M164 132V58" stroke="#5b4630" stroke-width="3"/>
    <path d="M168 130V62L212 126z" fill="#f7efd8"/><path d="M160 130V80L128 128z" fill="#e9dcc0"/>
    <g stroke="#cfe9f5" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"><path d="M80 158q8-5 16 0t16 0t16 0"/><path d="M200 166q8-5 16 0t16 0t16 0"/><path d="M130 178q8-5 16 0t16 0t16 0"/></g>
    ${kus(40, 52)}${kus(70, 36, .9)}`);

  const hacer = () => cerceve('hacer', `
    <defs><linearGradient id="hj-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd0ee"/><stop offset="1" stop-color="#f3efe0"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#hj-s)"/><rect y="150" width="320" height="50" fill="#e6cd96"/>
    ${kabe(122, 40, 1.35)}
    <polygon points="160,110 228,138 160,166 92,138" fill="#f7efd8" stroke="#c8b27a" stroke-width="2"/><ellipse cx="160" cy="138" rx="13" ry="6.5" fill="#171717"/>
    <g stroke="#7a5a38" stroke-width="2" fill="none" stroke-linecap="round"><path d="M92 138L62 148"/><path d="M228 138L258 148"/><path d="M160 166L160 184"/><path d="M160 110L208 96"/></g>
    ${bayrak(58, 152, '#a3322a')}${bayrak(262, 152, '#2f6a8a')}${bayrak(160, 190, '#2f7d4f')}${bayrak(212, 100, '#c2a14a')}`);

  window.CIZIM = {
    fil: { ad: ['Fil Olayı: Kâbe’ye yürüyen ordu ve gökten gelen kuşlar', 'The Elephant: the army marching on the Ka‘ba and the birds from the sky'], svg: fil },
    hira: { ad: ['Nûr Dağı ve Hira Mağarası', 'Mount of Light and the Cave of Hira'], svg: hira },
    hicret: { ad: ['Hicret yolu: Mekke’den Medine’ye', 'The Hijra road: from Mecca to Medina'], svg: hicret },
    hendek: { ad: ['Hendek: şehrin önünde kazılan hendek', 'The Trench dug before the city'], svg: hendek },
    uhud: { ad: ['Uhud Dağı ve okçuların tepesi', 'Mount Uhud and the archers’ hill'], svg: uhud },
    bedir: { ad: ['Bedir: kuyular ve iki taraf', 'Badr: the wells and the two sides'], svg: bedir },
    vahiy: { ad: ['İlk vahiy: “Oku!”', 'The first revelation: “Read!”'], svg: vahiy },
    isra: { ad: ['İsrâ: Mescid-i Harâm’dan Mescid-i Aksâ’ya', 'The Isra: from the Sacred Mosque to Masjid al-Aqsa'], svg: isra },
    'medine-ilk': { ad: ['Mescid-i Nebevî’nin ilk hâli: hurma kütüğü direkler', 'The Prophet’s Mosque at first: palm-trunk pillars'], svg: medineIlk },
    sam: { ad: ['Mekke kervanları ticaret yolunda', 'A Meccan caravan on the trade road'], svg: sam },
    habese: { ad: ['Kızıldeniz’i aşan gemi: Habeşistan’a hicret', 'A ship crossing the Red Sea: migration to Abyssinia'], svg: habese },
    hacer: { ad: ['Hacerülesved bir örtünün üzerinde, dört kabile', 'The Black Stone on a cloth, four tribes'], svg: hacer }
  };
})();
