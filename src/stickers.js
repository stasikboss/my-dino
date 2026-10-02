/* ---------- stickers: a collection for the album ----------
   Earned from the daily surprise gift, from finishing a game, and when the friend grows. Each is a small drawing
   with a name in the three languages. */
const STICKERS = [
  { id: 'foot', he: 'עקבת דינוזאור', ru: 'след динозавра', en: 'a dino footprint',
    svg: '<path d="M50 88 C30 88 24 70 30 58 C34 50 42 50 50 50 C58 50 66 50 70 58 C76 70 70 88 50 88 Z" fill="#7cc85a"/><path d="M30 48 C22 38 24 22 32 20 C40 18 42 34 38 46 Z M50 44 C44 32 46 12 50 10 C54 12 56 32 50 44 Z M70 48 C66 34 68 18 76 20 C84 22 78 38 70 48 Z" fill="#5fa846"/>' },
  { id: 'egg', he: 'ביצה מנוקדת', ru: 'пятнистое яйцо', en: 'a spotted egg',
    svg: '<path d="M50 10 C70 10 82 44 82 62 C82 80 68 92 50 92 C32 92 18 80 18 62 C18 44 30 10 50 10 Z" fill="#fff5e2"/><g fill="#9edc8a"><circle cx="38" cy="40" r="7"/><circle cx="62" cy="58" r="9"/><circle cx="38" cy="74" r="6"/><circle cx="60" cy="28" r="4"/></g><path d="M32 30 Q37 18 46 16" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>' },
  { id: 'bone', he: 'עצם מאובנת', ru: 'окаменелая кость', en: 'a fossil bone',
    svg: '<g transform="rotate(-30 50 50)"><rect x="26" y="42" width="48" height="16" rx="8" fill="#f3e2bf"/><circle cx="24" cy="40" r="11" fill="#f3e2bf"/><circle cx="24" cy="60" r="11" fill="#f3e2bf"/><circle cx="76" cy="40" r="11" fill="#f3e2bf"/><circle cx="76" cy="60" r="11" fill="#f3e2bf"/><path d="M30 48 H70" stroke="#e1c993" stroke-width="3" stroke-linecap="round"/></g>' },
  { id: 'volcano', he: 'הר געש', ru: 'вулкан', en: 'a volcano',
    svg: '<path d="M8 88 L36 34 H64 L92 88 Z" fill="#a0694a"/><path d="M36 34 Q42 46 50 38 Q58 46 64 34 Z" fill="#ff7a3c"/><path d="M40 30 Q38 18 46 14 Q50 4 58 10 Q68 8 66 20 Q74 26 62 30 Z" fill="#c9c3d6"/><path d="M44 52 L40 66 M58 50 L62 64" stroke="#ff7a3c" stroke-width="5" stroke-linecap="round"/>' },
  { id: 'fern', he: 'שרך ירוק', ru: 'зелёный папоротник', en: 'a green fern',
    svg: '<path d="M50 92 Q48 50 56 10" fill="none" stroke="#3f8f34" stroke-width="5" stroke-linecap="round"/><g fill="#6cc24a">' + [0, 1, 2, 3, 4, 5].map(i => `<ellipse cx="${40 - i}" cy="${80 - i * 12}" rx="${14 - i * 1.6}" ry="5" transform="rotate(-25 ${40 - i} ${80 - i * 12})"/><ellipse cx="${62 - i * 0.5}" cy="${76 - i * 12}" rx="${14 - i * 1.6}" ry="5" transform="rotate(25 ${62 - i * 0.5} ${76 - i * 12})"/>`).join('') + '</g>' },
  { id: 'sun', he: 'שמש מחייכת', ru: 'улыбчивое солнце', en: 'a smiling sun',
    svg: '<g stroke="#ffb020" stroke-width="7" stroke-linecap="round">' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return `<path d="M${50 + Math.cos(a) * 32} ${50 + Math.sin(a) * 32} L${50 + Math.cos(a) * 44} ${50 + Math.sin(a) * 44}"/>`; }).join('') + '</g><circle cx="50" cy="50" r="24" fill="#ffd23a"/><circle cx="42" cy="46" r="3" fill="#6b4026"/><circle cx="58" cy="46" r="3" fill="#6b4026"/><path d="M41 57 Q50 65 59 57" fill="none" stroke="#6b4026" stroke-width="3.5" stroke-linecap="round"/>' },
  { id: 'rainbow', he: 'קשת בענן', ru: 'радуга', en: 'a rainbow',
    svg: '<g fill="none" stroke-width="8">' + ['#ff5d5d', '#ffa53b', '#ffd23a', '#7cc85a', '#4fb8ff', '#9a8cf0'].map((c, i) => `<path d="M${14 + i * 7} 72 A${36 - i * 7} ${36 - i * 7} 0 0 1 ${86 - i * 7} 72" stroke="${c}"/>`).join('') + '</g><g fill="#fff"><circle cx="16" cy="74" r="9"/><circle cx="26" cy="76" r="8"/><circle cx="84" cy="74" r="9"/><circle cx="74" cy="76" r="8"/></g>' },
  { id: 'moon', he: 'ירח וכוכב', ru: 'луна и звезда', en: 'a moon and a star',
    svg: '<path d="M62 14 A36 36 0 1 0 84 70 A30 30 0 1 1 62 14 Z" fill="#ffe08a"/><path d="M72 22 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z" fill="#fff3c4"/><circle cx="40" cy="56" r="3" fill="#6b4026"/><path d="M36 66 Q42 70 48 66" fill="none" stroke="#6b4026" stroke-width="3" stroke-linecap="round"/>' },
  { id: 'star', he: 'כוכב זהב', ru: 'золотая звезда', en: 'a gold star',
    svg: '<path d="M50 8 L61 36 L91 38 L68 57 L76 87 L50 70 L24 87 L32 57 L9 38 L39 36 Z" fill="#ffd23a" stroke-linejoin="round"/><circle cx="43" cy="50" r="3" fill="#6b4026"/><circle cx="57" cy="50" r="3" fill="#6b4026"/><path d="M44 59 Q50 64 56 59" fill="none" stroke="#6b4026" stroke-width="3" stroke-linecap="round"/>' },
  { id: 'heart', he: 'לב', ru: 'сердечко', en: 'a heart',
    svg: '<path d="M50 86 C20 64 10 46 18 30 C26 16 44 18 50 32 C56 18 74 16 82 30 C90 46 80 64 50 86 Z" fill="#ff5d8f"/><path d="M28 34 Q32 26 40 26" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>' },
  { id: 'flower', he: 'פרח', ru: 'цветок', en: 'a flower',
    svg: '<path d="M50 60 V92" stroke="#5fa846" stroke-width="6" stroke-linecap="round"/><ellipse cx="62" cy="80" rx="10" ry="5" fill="#7cc85a" transform="rotate(-30 62 80)"/><g fill="#ff9ec4">' + [0, 1, 2, 3, 4, 5].map(i => { const a = i * Math.PI / 3; return `<circle cx="${50 + Math.cos(a) * 18}" cy="${40 + Math.sin(a) * 18}" r="13"/>`; }).join('') + '</g><circle cx="50" cy="40" r="11" fill="#ffd23a"/>' },
  { id: 'paw', he: 'כף רגל של אריה', ru: 'лапа льва', en: "a lion's paw",
    svg: '<ellipse cx="50" cy="64" rx="22" ry="19" fill="#f2b53e"/><g fill="#f2b53e"><ellipse cx="24" cy="40" rx="9" ry="11"/><ellipse cx="40" cy="26" rx="9" ry="11"/><ellipse cx="60" cy="26" rx="9" ry="11"/><ellipse cx="76" cy="40" rx="9" ry="11"/></g><ellipse cx="50" cy="66" rx="12" ry="9" fill="#ffd27a"/>' },
  { id: 'fish', he: 'דג כחול', ru: 'синяя рыбка', en: 'a blue fish',
    svg: '<path d="M14 50 C26 28 58 26 72 50 C58 74 26 72 14 50 Z" fill="#4fb8ff"/><path d="M70 50 L92 34 L88 50 L92 66 Z" fill="#3d97d6"/><circle cx="30" cy="46" r="4" fill="#1b2430"/><path d="M42 40 Q48 50 42 60" fill="none" stroke="#9fdcff" stroke-width="4" stroke-linecap="round"/>' },
  { id: 'crown', he: 'כתר', ru: 'корона', en: 'a crown',
    svg: '<path d="M14 74 L18 30 L36 50 L50 22 L64 50 L82 30 L86 74 Z" fill="#ffc83d" stroke-linejoin="round"/><rect x="14" y="70" width="72" height="12" rx="4" fill="#f0a91e"/><circle cx="50" cy="56" r="6" fill="#ff5d8f"/><circle cx="32" cy="62" r="4" fill="#4fb8ff"/><circle cx="68" cy="62" r="4" fill="#7cc85a"/>' },
  { id: 'balloon', he: 'בלון', ru: 'воздушный шарик', en: 'a balloon',
    svg: '<path d="M50 72 Q46 82 52 92" fill="none" stroke="#6b4026" stroke-width="2.5"/><ellipse cx="50" cy="40" rx="24" ry="30" fill="#ff5d5d"/><path d="M46 70 L54 70 L50 76 Z" fill="#e04444"/><path d="M38 24 Q42 16 50 16" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>' },
  { id: 'apple', he: 'תפוח אדום', ru: 'красное яблоко', en: 'a red apple',
    svg: '<path d="M50 30 C30 18 14 34 18 56 C22 78 38 90 50 84 C62 90 78 78 82 56 C86 34 70 18 50 30 Z" fill="#ff4b5c"/><path d="M50 30 Q50 18 56 10" fill="none" stroke="#6b4026" stroke-width="4" stroke-linecap="round"/><path d="M56 16 Q70 8 74 20 Q64 24 56 16 Z" fill="#7cc85a"/><path d="M30 44 Q32 36 40 34" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>' },
  { id: 'drop', he: 'טיפת מים', ru: 'капелька', en: 'a water drop',
    svg: '<path d="M50 10 C62 32 78 46 78 62 C78 78 66 90 50 90 C34 90 22 78 22 62 C22 46 38 32 50 10 Z" fill="#4fb8ff"/><path d="M36 60 Q36 74 46 78" fill="none" stroke="#dff4ff" stroke-width="5" stroke-linecap="round"/><circle cx="43" cy="56" r="3" fill="#1b2430"/><circle cx="57" cy="56" r="3" fill="#1b2430"/><path d="M45 66 Q50 70 55 66" fill="none" stroke="#1b2430" stroke-width="3" stroke-linecap="round"/>' },
  { id: 'tooth', he: 'שן נוצצת', ru: 'блестящий зуб', en: 'a sparkly tooth',
    svg: '<path d="M26 26 C26 14 40 12 50 18 C60 12 74 14 74 26 C74 42 70 52 66 72 C64 84 56 84 54 72 L50 58 L46 72 C44 84 36 84 34 72 C30 52 26 42 26 26 Z" fill="#ffffff" stroke="#c7d6e6" stroke-width="3"/><path d="M80 14 l3 7 7 1 -5 4 1 7 -6 -3 -6 3 1 -7 -5 -4 7 -1 Z" fill="#ffd23a"/><circle cx="18" cy="60" r="4" fill="#9fdcff"/>' }
];
const STICKER_IDS = STICKERS.map(s => s.id);
let stickers = (() => { const r = store.get('ymd-stickers', []); return Array.isArray(r) ? STICKER_IDS.filter(id => r.includes(id)) : []; })();
const saveStickers = () => store.set('ymd-stickers', stickers);
const stickerSvg = st => `<svg viewBox="0 0 100 100" aria-hidden="true">${st.svg}</svg>`;
