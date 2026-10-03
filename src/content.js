/* ---------- what the characters know and say, in Hebrew, Russian and English ----------
   Facts are kid-sized and checked against museum and zoo sources (see README). The child is addressed as a boy or a girl
   ({ m: [...], f: [...] }) where Hebrew or Russian grammar needs it; the pet speaks about itself in the masculine. */
const LANGS = ['he', 'ru', 'en'];
const LANG_TAGS = { he: 'he-IL', ru: 'ru-RU', en: 'en-US' };
const LANG_NAME = { he: 'עברית', ru: 'Русский', en: 'English' };
const LANG_IN_HE = { he: 'בעברית', ru: 'ברוסית', en: 'באנגלית' };

const PET_NAMES = {
  trex: { he: 'טירנוזאורוס רקס', ru: 'тираннозавр', en: 'T.\u00a0rex', enA: 'a T.\u00a0rex', enThe: 'the T.\u00a0rex', short: 'טי־רקס' },
  trike: { he: 'טריצרטופס', ru: 'трицератопс', en: 'Triceratops', enA: 'a Triceratops', enThe: 'the Triceratops', short: 'טריצרטופס' },
  stego: { he: 'סטגוזאורוס', ru: 'стегозавр', en: 'Stegosaurus', enA: 'a Stegosaurus', enThe: 'the Stegosaurus', short: 'סטגוזאורוס' },
  brachio: { he: 'ברכיוזאורוס', ru: 'брахиозавр', en: 'Brachiosaurus', enA: 'a Brachiosaurus', enThe: 'the Brachiosaurus', short: 'ברכיוזאורוס' },
  elephant: { he: 'פיל', ru: 'слон', en: 'elephant', enA: 'an elephant', enThe: 'the elephant', short: 'פיל' },
  lion: { he: 'אריה', ru: 'лев', en: 'lion', enA: 'a lion', enThe: 'the lion', short: 'אריה' },
  penguin: { he: 'פינגווין', ru: 'пингвин', en: 'penguin', enA: 'a penguin', enThe: 'the penguin', short: 'פינגווין' },
  anky: { he: 'אנקילוזאורוס', ru: 'анкилозавр', en: 'Ankylosaurus', enA: 'an Ankylosaurus', enThe: 'the Ankylosaurus', short: 'אנקילוזאורוס' },
  kangaroo: { he: 'קנגורו', ru: 'кенгуру', en: 'kangaroo', enA: 'a kangaroo', enThe: 'the kangaroo', short: 'קנגורו' }
};
const IS_DINO = { trex: true, trike: true, stego: true, brachio: true, anky: true, elephant: false, lion: false, penguin: false, kangaroo: false };
const FROM_EGG = { trex: true, trike: true, stego: true, brachio: true, anky: true, elephant: false, lion: false, penguin: true, kangaroo: false };
// Rough length in meters, for "who is bigger"; pairs that are too close (or bigger in one way, smaller in another) are skipped.
const REAL_SIZE = { brachio: 22, trex: 12, trike: 9, stego: 9, anky: 7, elephant: 6.5, lion: 2.5, kangaroo: 2, penguin: 1.1 };
const SIZE_SKIP = [['trike', 'stego'], ['elephant', 'stego'], ['anky', 'trike'], ['anky', 'stego'], ['anky', 'elephant'], ['kangaroo', 'lion']];

const FOODS = {
  meat: { he: 'בשר', ru: 'мясо', ruAcc: 'мясо', en: 'meat' },
  fish: { he: 'דגים', ru: 'рыба', ruAcc: 'рыбу', en: 'fish' },
  fern: { he: 'שרכים', ru: 'папоротник', ruAcc: 'папоротник', en: 'ferns' },
  leaves: { he: 'עלים מהעץ', ru: 'листья', ruAcc: 'листья', en: 'tree leaves' },
  fruit: { he: 'פירות', ru: 'фрукты', ruAcc: 'фрукты', en: 'fruit' },
  grass: { he: 'עשב', ru: 'трава', ruAcc: 'траву', en: 'grass' }
};
const DIET = {
  trex: ['meat'], trike: ['fern'], stego: ['fern'], brachio: ['leaves'],
  elephant: ['grass', 'leaves', 'fruit'], lion: ['meat'], penguin: ['fish'], anky: ['fern'], kangaroo: ['grass', 'leaves']
};
const DIET_TEXT = {
  trex: { he: 'בשר', ru: 'мясо', en: 'meat' },
  trike: { he: 'צמחים נמוכים, כמו שרכים', ru: 'низкие растения, например папоротник', en: 'low plants, like ferns' },
  stego: { he: 'צמחים נמוכים, כמו שרכים', ru: 'низкие растения, например папоротник', en: 'low plants, like ferns' },
  brachio: { he: 'עלים מעצים גבוהים', ru: 'листья с высоких деревьев', en: 'leaves from tall trees' },
  elephant: { he: 'עשב, עלים ופירות', ru: 'траву, листья и фрукты', en: 'grass, leaves and fruit' },
  lion: { he: 'בשר', ru: 'мясо', en: 'meat' },
  penguin: { he: 'דגים', ru: 'рыбу', en: 'fish' },
  anky: { he: 'צמחים נמוכים, כמו שרכים', ru: 'низкие растения, например папоротник', en: 'low plants, like ferns' },
  kangaroo: { he: 'עשב ועלים', ru: 'траву и листья', en: 'grass and leaves' }
};
const FEATURE = {
  trex: { he: 'ראש גדול וידיים קטנות', ru: 'большая голова и маленькие лапки', en: 'a big head and tiny arms' },
  trike: { he: 'שלוש קרניים', ru: 'три рога', en: 'three horns' },
  stego: { he: 'לוחות על הגב', ru: 'пластины на спине', en: 'plates on its back' },
  brachio: { he: 'צוואר ארוך ארוך', ru: 'очень длинная шея', en: 'a very long neck' },
  elephant: { he: 'חדק ואוזניים גדולות', ru: 'хобот и большие уши', en: 'a trunk and big ears' },
  lion: { he: 'רעמה גדולה', ru: 'большая грива', en: 'a big mane' },
  penguin: { he: 'כנפיים קטנות ובטן לבנה', ru: 'маленькие крылья и белый животик', en: 'little flippers and a white belly' },
  anky: { he: 'שריון על הגב, ופטיש של עצם בזנב', ru: 'броня на спине и костяная булава на хвосте', en: 'armor on its back and a bony club on its tail' },
  kangaroo: { he: 'רגליים חזקות לקפיצה וזנב ארוך', ru: 'сильные ноги для прыжков и длинный хвост', en: 'strong legs for hopping and a long tail' }
};

/* Body parts the bath names while the sponge is on them. Points are in stage units. */
const PARTS = {
  trex: [[120, 50, 'head'], [78, 156, 'arms'], [120, 172, 'belly'], [120, 208, 'legs'], [200, 186, 'tail']],
  trike: [[120, 34, 'horns'], [64, 70, 'frill'], [176, 70, 'frill'], [160, 166, 'back'], [100, 208, 'legs'], [212, 196, 'tail']],
  stego: [[140, 104, 'plates'], [73, 140, 'head'], [222, 150, 'spikes'], [150, 166, 'back'], [93, 208, 'legs']],
  brachio: [[104, 112, 'neck'], [88, 52, 'head'], [160, 158, 'back'], [108, 204, 'legs'], [214, 200, 'tail']],
  elephant: [[104, 138, 'trunk'], [44, 100, 'ears'], [196, 100, 'ears'], [120, 66, 'head'], [120, 180, 'belly'], [120, 210, 'legs']],
  lion: [[120, 38, 'mane'], [60, 96, 'mane'], [180, 96, 'mane'], [120, 104, 'face'], [120, 190, 'belly'], [120, 218, 'paws'], [196, 168, 'tail']],
  penguin: [[60, 168, 'flippers'], [180, 168, 'flippers'], [120, 168, 'belly'], [120, 58, 'head'], [120, 222, 'feet'], [120, 110, 'beak']],
  anky: [[142, 152, 'armor'], [66, 168, 'head'], [228, 180, 'club'], [140, 202, 'belly'], [101, 210, 'legs']],
  kangaroo: [[94, 24, 'ears'], [146, 24, 'ears'], [120, 72, 'head'], [120, 170, 'belly'], [102, 148, 'arms'], [152, 190, 'legs'], [90, 216, 'feet'], [200, 214, 'tail']]
};
const PART_NAMES = {
  head: { he: 'הראש', ru: 'голову', en: 'head' },
  arms: { he: 'הידיים הקטנות', ru: 'маленькие лапки', en: 'little arms' },
  belly: { he: 'הבטן', ru: 'животик', en: 'belly' },
  legs: { he: 'הרגליים', ru: 'ноги', en: 'legs' },
  tail: { he: 'הזנב', ru: 'хвост', en: 'tail' },
  horns: { he: 'הקרניים', ru: 'рога', en: 'horns' },
  frill: { he: 'הצווארון', ru: 'воротник', en: 'frill' },
  back: { he: 'הגב', ru: 'спину', en: 'back' },
  plates: { he: 'הלוחות על הגב', ru: 'пластины на спине', en: 'plates' },
  spikes: { he: 'הדוקרנים בזנב', ru: 'шипы на хвосте', en: 'tail spikes' },
  neck: { he: 'הצוואר הארוך', ru: 'длинную шею', en: 'long neck' },
  trunk: { he: 'החדק', ru: 'хобот', en: 'trunk' },
  ears: { he: 'האוזניים', ru: 'уши', en: 'ears' },
  mane: { he: 'הרעמה', ru: 'гриву', en: 'mane' },
  face: { he: 'הפנים', ru: 'мордочку', en: 'face' },
  paws: { he: 'הכפות', ru: 'лапы', en: 'paws' },
  flippers: { he: 'הכנפיים', ru: 'крылышки', en: 'flippers' },
  feet: { he: 'הרגליים', ru: 'лапки', en: 'feet' },
  beak: { he: 'המקור', ru: 'клюв', en: 'beak' },
  armor: { he: 'השריון', ru: 'броню', en: 'armor' },
  club: { he: 'הפטיש בזנב', ru: 'булаву на хвосте', en: 'tail club' }
};

/* The album: six cards per friend. Each card opens through something done in the game. */
const FACT_KINDS = ['eats', 'body', 'home', 'baby', 'size', 'fun'];
const FACT_ICON = {
  eats: `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="17" ry="11" fill="#fff" stroke="#1b2430" stroke-width="2.6"/><ellipse cx="24" cy="29" rx="11" ry="6.5" fill="#f3ece0"/><path d="M8 8 V18 M11 8 V18 M14 8 V18 M8 18 Q11 22 14 18 M11 20 V40" fill="none" stroke="#1b2430" stroke-width="2.4" stroke-linecap="round"/><path d="M38 8 Q32 14 34 24 L37 24 V40" fill="#d8dee8" stroke="#1b2430" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="27" r="3.5" fill="#ff6b5b"/><path d="M24 26 q4 -3 6 1" fill="none" stroke="#5cbf55" stroke-width="3" stroke-linecap="round"/></svg>`,
  body: `<svg viewBox="0 0 48 48"><path d="M24 4 C26 16 30 20 44 24 C30 28 26 32 24 44 C22 32 18 28 4 24 C18 20 22 16 24 4 Z" fill="#ffd35c" stroke="#1b2430" stroke-width="2.6" stroke-linejoin="round"/><path d="M38 6 C39 10 40 11 44 12 C40 13 39 14 38 18 C37 14 36 13 32 12 C36 11 37 10 38 6 Z" fill="#ff9ec4" stroke="#1b2430" stroke-width="2" stroke-linejoin="round"/><path d="M20 14 Q22 20 16 23" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/></svg>`,
  home: `<svg viewBox="0 0 48 48"><ellipse cx="24" cy="40" rx="21" ry="6" fill="#7fd0f0" stroke="#1b2430" stroke-width="2.4"/><path d="M8 40 Q24 30 40 40 Z" fill="#f2d48c" stroke="#1b2430" stroke-width="2.4" stroke-linejoin="round"/><path d="M24 36 Q22 24 27 14" fill="none" stroke="#9a6233" stroke-width="3.4" stroke-linecap="round"/><g fill="#5cbf55" stroke="#1b2430" stroke-width="2" stroke-linejoin="round"><path d="M27 14 Q16 8 9 15 Q18 13 27 17 Z"/><path d="M27 14 Q38 6 44 13 Q35 12 27 17 Z"/><path d="M27 14 Q24 4 30 2 Q30 9 28 15 Z"/></g></svg>`,
  baby: `<svg viewBox="0 0 48 48"><path d="M24 4 C35 4 41 22 41 30 C41 40 33 45 24 45 C15 45 7 40 7 30 C7 22 13 4 24 4 Z" fill="#fff7e8" stroke="#1b2430" stroke-width="2.6"/><path d="M8 27 L14 23 L19 29 L24 24 L29 30 L34 24 L40 27" fill="none" stroke="#1b2430" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/><g fill="#8fd67a"><circle cx="18" cy="15" r="3.5"/><circle cx="30" cy="38" r="4"/><circle cx="17" cy="38" r="2.6"/></g><path d="M15 9 Q12 13 12 18" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`,
  size: `<svg viewBox="0 0 48 48"><g transform="rotate(-35 24 24)"><rect x="4" y="16" width="40" height="16" rx="3" fill="#ffd35c" stroke="#1b2430" stroke-width="2.6"/><path d="M10 16 V24 M16 16 V21 M22 16 V24 M28 16 V21 M34 16 V24 M40 16 V21" stroke="#1b2430" stroke-width="2.2" stroke-linecap="round"/><path d="M7 29 H41" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/></g></svg>`,
  fun: `<svg viewBox="0 0 48 48"><circle cx="24" cy="19" r="17" fill="#fff3b0" opacity=".7"/><path d="M24 5 C33 5 38 12 38 19 C38 25 33 28 31 33 H17 C15 28 10 25 10 19 C10 12 15 5 24 5 Z" fill="#ffd35c" stroke="#1b2430" stroke-width="2.6" stroke-linejoin="round"/><rect x="17" y="33" width="14" height="6" rx="2" fill="#c9d3e0" stroke="#1b2430" stroke-width="2.4"/><path d="M19 43 H29" stroke="#1b2430" stroke-width="3" stroke-linecap="round"/><path d="M17 15 Q18 10 23 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`
};
const FACT_HOW = {
  eats: 'מאכילים במטבח, או משחקים ב״מי אוכל מה״',
  body: 'עושים אמבטיה, או משחקים ב״של מי הצל״',
  home: 'משכיבים לישון בחדר השינה',
  baby: 'רואים איך החבר בא לעולם, או משחקים ב״ביצה או נולד״',
  size: 'משחקים ב״מי יותר גדול״',
  fun: 'מצחצחים שיניים, או חופרים מאובן'
};
const FACTS = {
  trex: {
    eats: { he: 'טירנוזאורוס רקס אכל בשר. הוא היה טורף.', ru: 'Тираннозавр ел мясо. Он был хищником.', en: 'T.\u00a0rex ate meat. It was a meat-eater.' },
    body: { he: 'היו לו שיניים גדולות וחדות, בערך שישים! והידיים שלו היו קצרות מאוד.', ru: 'У него были большие острые зубы, около шестидесяти! А лапки были совсем короткие.', en: 'It had big sharp teeth, about sixty! And its arms were very short.' },
    home: { he: 'טירנוזאורוס חי באמריקה, לפני הרבה הרבה זמן, עוד לפני שהיו אנשים.', ru: 'Тираннозавр жил в Америке, очень-очень давно, когда людей ещё не было.', en: 'T.\u00a0rex lived in America, long, long ago, before there were any people.' },
    baby: { he: 'כל הדינוזאורים בוקעים מביצה, גם טירנוזאורוס.', ru: 'Все динозавры вылупляются из яиц, и тираннозавр тоже.', en: 'All dinosaurs hatch from eggs, and so does T.\u00a0rex.' },
    size: { he: 'טירנוזאורוס היה ארוך כמו אוטובוס!', ru: 'Тираннозавр был длинный, как автобус!', en: 'A T.\u00a0rex was as long as a bus!' },
    fun: { he: 'הציפורים של היום הן קרובות משפחה של טירנוזאורוס. ציפורים הן דינוזאורים!', ru: 'Сегодняшние птицы — родственники тираннозавра. Птицы — это динозавры!', en: 'Birds today are relatives of T.\u00a0rex. Birds are dinosaurs!' }
  },
  trike: {
    eats: { he: 'טריצרטופס אכל צמחים: עלים מצמחים נמוכים, שהוא קטף עם המקור שלו.', ru: 'Трицератопс ел растения: листья низких растений, которые он срывал клювом.', en: 'Triceratops ate plants: leaves from low plants, snipped off with its beak.' },
    body: { he: 'יש לו שלוש קרניים: שתיים גדולות מעל העיניים, ואחת קטנה על האף. ומאחורי הראש יש צווארון גדול.', ru: 'У него три рога: два больших над глазами и один маленький на носу. А за головой большой воротник.', en: 'It has three horns: two big ones over its eyes and a small one on its nose. And a big frill behind its head.' },
    home: { he: 'טריצרטופס חי באמריקה, באותה תקופה כמו טירנוזאורוס.', ru: 'Трицератопс жил в Америке, в одно время с тираннозавром.', en: 'Triceratops lived in America, at the same time as T.\u00a0rex.' },
    baby: { he: 'טריצרטופס בקע מביצה, כמו כל הדינוזאורים.', ru: 'Трицератопс вылупился из яйца, как все динозавры.', en: 'Triceratops hatched from an egg, like all dinosaurs.' },
    size: { he: 'טריצרטופס היה כבד כמו ארבע מכוניות!', ru: 'Трицератопс весил как четыре машины!', en: 'A Triceratops was as heavy as four cars!' },
    fun: { he: 'השם טריצרטופס אומר: פנים עם שלוש קרניים.', ru: 'Имя «трицератопс» значит: лицо с тремя рогами.', en: 'The name Triceratops means: three-horned face.' }
  },
  stego: {
    eats: { he: 'סטגוזאורוס אכל צמחים נמוכים, כמו שרכים ושיחים.', ru: 'Стегозавр ел низкие растения, например папоротники и кусты.', en: 'Stegosaurus ate low plants, like ferns and bushes.' },
    body: { he: 'יש לו לוחות על הגב, בשתי שורות, ודוקרנים בסוף הזנב, כדי לשמור על עצמו.', ru: 'У него пластины на спине в два ряда и шипы на конце хвоста, чтобы защищаться.', en: 'It has plates on its back in two rows, and spikes at the end of its tail to protect itself.' },
    home: { he: 'סטגוזאורוס חי באמריקה, כל כך מזמן שהוא אף פעם לא פגש טירנוזאורוס!', ru: 'Стегозавр жил в Америке так давно, что никогда не встречал тираннозавра!', en: 'Stegosaurus lived in America so long ago that it never met a T.\u00a0rex!' },
    baby: { he: 'סטגוזאורוס בקע מביצה, כמו כל הדינוזאורים.', ru: 'Стегозавр вылупился из яйца, как все динозавры.', en: 'Stegosaurus hatched from an egg, like all dinosaurs.' },
    size: { he: 'סטגוזאורוס היה גדול כמו אוטובוס.', ru: 'Стегозавр был размером с автобус.', en: 'Stegosaurus was as big as a bus.' },
    fun: { he: 'המוח של סטגוזאורוס היה קטן, בגודל של נקניקייה כפופה!', ru: 'Мозг у стегозавра был маленький, размером с согнутую сосиску!', en: "Stegosaurus had a tiny brain, the size of a bent hot dog!" }
  },
  brachio: {
    eats: { he: 'ברכיוזאורוס אכל עלים מעצים גבוהים, ובלע אותם בלי ללעוס.', ru: 'Брахиозавр ел листья с высоких деревьев и глотал их не жуя.', en: 'Brachiosaurus ate leaves from tall trees, and swallowed them without chewing.' },
    body: { he: 'יש לו צוואר ארוך ארוך, והרגליים הקדמיות ארוכות יותר מהרגליים האחוריות.', ru: 'У него очень длинная шея, а передние ноги длиннее задних.', en: 'It has a very long neck, and its front legs are longer than its back legs.' },
    home: { he: 'ברכיוזאורוס חי באמריקה, לפני המון המון זמן, באותה תקופה כמו סטגוזאורוס.', ru: 'Брахиозавр жил в Америке очень-очень давно, в одно время со стегозавром.', en: 'Brachiosaurus lived in America, long, long ago, at the same time as Stegosaurus.' },
    baby: { he: 'ברכיוזאורוס בקע מביצה, כמו כל הדינוזאורים.', ru: 'Брахиозавр вылупился из яйца, как все динозавры.', en: 'Brachiosaurus hatched from an egg, like all dinosaurs.' },
    size: { he: 'ברכיוזאורוס היה ארוך כמעט כמו שני אוטובוסים!', ru: 'Брахиозавр был длинный, почти как два автобуса!', en: 'A Brachiosaurus was almost as long as two buses!' },
    fun: { he: 'ברכיוזאורוס היה כבד יותר משישה פילים גדולים ביחד!', ru: 'Брахиозавр был тяжелее, чем шесть больших слонов вместе!', en: 'A Brachiosaurus was heavier than six big elephants together!' }
  },
  elephant: {
    eats: { he: 'פילים אוכלים רק צמחים: עשב, עלים, ענפים ופירות. והרבה, כמעט כל היום!', ru: 'Слоны едят только растения: траву, листья, ветки и фрукты. И много, почти весь день!', en: 'Elephants eat only plants: grass, leaves, branches and fruit. Lots of it, almost all day!' },
    body: { he: 'יש לי חדק ארוך! בעזרתו אני שותה, מריח, מתקלח ומרים אוכל.', ru: 'У меня длинный хобот! Им я пью, нюхаю, обливаюсь водой и беру еду.', en: 'I have a long trunk! I use it to drink, smell, shower and pick up food.' },
    home: { he: 'פילים חיים באפריקה, במשפחות גדולות של אימהות וילדים.', ru: 'Слоны живут в Африке, большими семьями из мам и малышей.', en: 'Elephants live in Africa, in big families of moms and babies.' },
    baby: { he: 'פילים לא בוקעים מביצה. תינוק פיל נולד, וקוראים לו פילון.', ru: 'Слоны не вылупляются из яиц. Слонёнок рождается у мамы.', en: "Elephants don't hatch from eggs. A baby elephant is born, and it's called a calf." },
    size: { he: 'הפיל הוא החיה הכי גדולה שהולכת על היבשה היום.', ru: 'Слон — самое большое животное на суше сегодня.', en: 'The elephant is the biggest animal walking on land today.' },
    fun: { he: 'החטים הלבנים של הפיל הם בעצם שיניים!', ru: 'Белые бивни слона — это на самом деле зубы!', en: "An elephant's white tusks are really teeth!" }
  },
  lion: {
    eats: { he: 'אריות אוכלים בשר. הם טורפים, כמו טירנוזאורוס.', ru: 'Львы едят мясо. Они хищники, как тираннозавр.', en: 'Lions eat meat. They are meat-eaters, like T.\u00a0rex.' },
    body: { he: 'לאריה יש רעמה גדולה סביב הראש. ואת השאגה שלו אפשר לשמוע מרחוק מאוד!', ru: 'У льва большая грива вокруг головы. А его рык слышно очень далеко!', en: 'A lion has a big mane around its head. And you can hear its roar from very far away!' },
    home: { he: 'אריות חיים באפריקה, בסוואנה, בקבוצה שנקראת להקה.', ru: 'Львы живут в Африке, в саванне, в семье, которая называется прайд.', en: 'Lions live in Africa, on the savanna, in a group called a pride.' },
    baby: { he: 'אריות לא בוקעים מביצה. תינוקות האריה נולדים, וקוראים להם גורים.', ru: 'Львы не вылупляются из яиц. Львята рождаются у мамы.', en: "Lions don't hatch from eggs. Baby lions are born, and they're called cubs." },
    size: { he: 'האריה הוא החתול השני הכי גדול בעולם. רק הטיגריס גדול ממנו!', ru: 'Лев — вторая по величине кошка в мире. Больше только тигр!', en: 'The lion is the second biggest cat in the world. Only the tiger is bigger!' },
    fun: { he: 'אריות ישנים ונחים המון, עד עשרים שעות ביום!', ru: 'Львы очень много спят и отдыхают, до двадцати часов в день!', en: 'Lions sleep and rest a lot, up to twenty hours a day!' }
  },
  penguin: {
    eats: { he: 'פינגווינים אוכלים דגים, ועוד חיות קטנות מהים.', ru: 'Пингвины едят рыбу и других маленьких морских животных.', en: 'Penguins eat fish, and other little sea animals.' },
    body: { he: 'אני לא יכול לעוף באוויר, אבל אני שוחה מהר מאוד עם הכנפיים שלי!', ru: 'Я не умею летать по воздуху, но очень быстро плаваю своими крыльями!', en: "I can't fly in the air, but I swim very fast with my flippers!" },
    home: { he: 'רוב הפינגווינים חיים במקומות קרים, אבל יש פינגווינים שחיים במקומות חמים!', ru: 'Большинство пингвинов живут там, где холодно, но есть пингвины, которые живут в тёплых местах!', en: 'Most penguins live in cold places, but some penguins live in warm places!' },
    baby: { he: 'פינגווינים בוקעים מביצה. אבא פינגווין קיסרי מחמם את הביצה על הרגליים!', ru: 'Пингвины вылупляются из яиц. Папа императорский пингвин греет яйцо на лапах!', en: 'Penguins hatch from eggs. An emperor penguin dad keeps the egg warm on his feet!' },
    size: { he: 'הפינגווין הקיסרי, הכי גדול, בגובה של ילד בן חמש בערך.', ru: 'Императорский пингвин, самый большой, ростом примерно с пятилетнего ребёнка.', en: 'The emperor penguin, the biggest one, is about as tall as a five-year-old.' },
    fun: { he: 'פינגווינים הם ציפורים, וציפורים הן הדינוזאורים של היום!', ru: 'Пингвины — это птицы, а птицы — это динозавры наших дней!', en: 'Penguins are birds, and birds are the dinosaurs of today!' }
  },
  anky: {
    eats: { he: 'אנקילוזאורוס אכל צמחים נמוכים, כמו שרכים.', ru: 'Анкилозавр ел низкие растения, например папоротники.', en: 'Ankylosaurus ate low plants, like ferns.' },
    body: { he: 'הגב שלו היה מכוסה בשריון של עצם, ואפילו לעפעפיים היה שריון!', ru: 'Его спина была покрыта костяной бронёй, и даже веки были в броне!', en: 'Its back was covered in bony armor, and even its eyelids had armor!' },
    home: { he: 'אנקילוזאורוס חי באמריקה, באותה תקופה כמו טירנוזאורוס וטריצרטופס.', ru: 'Анкилозавр жил в Америке, в одно время с тираннозавром и трицератопсом.', en: 'Ankylosaurus lived in America, at the same time as T.\u00a0rex and Triceratops.' },
    baby: { he: 'אנקילוזאורוס בקע מביצה, כמו כל הדינוזאורים.', ru: 'Анкилозавр вылупился из яйца, как все динозавры.', en: 'Ankylosaurus hatched from an egg, like all dinosaurs.' },
    size: { he: 'אנקילוזאורוס היה כבד כמו פיל!', ru: 'Анкилозавр весил как слон!', en: 'An Ankylosaurus was as heavy as an elephant!' },
    fun: { he: 'בסוף הזנב היה לו גוש עצם כבד, כמו פטיש. מדענים חושבים שהוא הניף אותו כדי לשמור על עצמו.', ru: 'На конце хвоста у него была тяжёлая костяная булава, как молоток. Учёные думают, что он размахивал ею, чтобы защищаться.', en: 'At the end of its tail was a heavy bony club, like a hammer. Scientists think it swung it to protect itself.' }
  },
  kangaroo: {
    eats: { he: 'קנגורו אוכלים צמחים: בעיקר עשב, וגם עלים.', ru: 'Кенгуру едят растения: в основном траву, а ещё листья.', en: 'Kangaroos eat plants: mostly grass, and leaves too.' },
    body: { he: 'יש לי רגליים אחוריות חזקות לקפיצה, וזנב ארוך וחזק. כשאני הולך לאט, אני נשען על הזנב כמו על רגל חמישית!', ru: 'У меня сильные задние ноги для прыжков и длинный сильный хвост. Когда я иду медленно, я опираюсь на хвост, как на пятую ногу!', en: 'I have strong back legs for hopping, and a long, strong tail. When I walk slowly, I lean on my tail like a fifth leg!' },
    home: { he: 'קנגורו חיים באוסטרליה, בקבוצות.', ru: 'Кенгуру живут в Австралии, группами.', en: 'Kangaroos live in Australia, in groups called mobs.' },
    baby: { he: 'קנגורו לא בוקעים מביצה. התינוק נולד קטן קטן, בגודל של ענב, וגדל בכיס של אמא.', ru: 'Кенгуру не вылупляются из яиц. Малыш рождается крошечным, размером с виноградинку, и растёт в сумке у мамы.', en: "Kangaroos don't hatch from eggs. The baby is born tiny, the size of a grape, and grows in mom's pouch. It's called a joey." },
    size: { he: 'הקנגורו האדום, הכי גדול, יכול להיות גבוה כמו אדם מבוגר!', ru: 'Рыжий кенгуру, самый большой, бывает ростом со взрослого человека!', en: 'The red kangaroo, the biggest one, can be as tall as a grown-up!' },
    fun: { he: 'בקפיצה אחת גדולה, קנגורו יכול לקפוץ רחוק כמו שתי מכוניות!', ru: 'Одним большим прыжком кенгуру может прыгнуть на длину двух машин!', en: 'In one big hop, a kangaroo can jump as far as two cars are long!' }
  }
};
// Parent questions for the goodnight screen, one per card (Hebrew; for the grown-up to ask out loud).
const ASK = {
  eats: (p) => [`מה אוכל ${PET_NAMES[p].he}?`, DIET_TEXT[p].he],
  body: (p) => [`מה מיוחד בגוף של ${PET_NAMES[p].he}?`, FEATURE[p].he],
  home: (p) => [`איפה גר ${PET_NAMES[p].he}?`, { trex: 'באמריקה, לפני המון זמן', trike: 'באמריקה, לפני המון זמן', stego: 'באמריקה, לפני המון המון זמן', brachio: 'באמריקה, לפני המון המון זמן', elephant: 'באפריקה, במשפחות גדולות', lion: 'באפריקה, בלהקה', penguin: 'בעיקר במקומות קרים, וגם בחמים', anky: 'באמריקה, לפני המון זמן', kangaroo: 'באוסטרליה' }[p]],
  baby: (p) => [`${PET_NAMES[p].he} בוקע מביצה או נולד?`, FROM_EGG[p] ? 'בוקע מביצה' : 'נולד'],
  size: (p) => [`כמה גדול ${PET_NAMES[p].he}?`, { trex: 'ארוך כמו אוטובוס', trike: 'כבד כמו ארבע מכוניות', stego: 'גדול כמו אוטובוס', brachio: 'ארוך כמעט כמו שני אוטובוסים', elephant: 'החיה הכי גדולה ביבשה היום', lion: 'החתול השני הכי גדול, אחרי הטיגריס', penguin: 'הקיסרי, בגובה של ילד בן חמש', anky: 'כבד כמו פיל', kangaroo: 'הקנגורו האדום, גבוה כמו אדם מבוגר' }[p]],
  fun: (p) => [`ספר לי משהו מצחיק על ${PET_NAMES[p].he}`, FACTS[p].fun.he]
};
const OFFLINE_IDEAS = [
  'לצאת לחפש ציפור בחוץ, ולהזכיר: הציפורים הן הדינוזאורים של היום.',
  'לחפור ״מאובנים״ בארגז חול: מחביאים צעצוע ומנקים אותו לאט עם מברשת ישנה.',
  'לשאול ליד ארוחת הערב: מי היה אוכל את זה, טריצרטופס או טירנוזאורוס?',
  'ללכת כמו פיל, לשאוג כמו אריה ולהתנדנד כמו פינגווין, שלוש פעמים כל אחד.',
  'לצייר יחד את החבר מהמשחק, עם הכובע שהוא בחר.',
  'לסדר צעצועים מהקטן לגדול, כמו במשחק ״מי יותר גדול״.',
  'לקפוץ כמו קנגורו, עם שתי הרגליים ביחד, ולספור כמה קפיצות עד הדלת.',
  'לבנות מכריות שריון של אנקילוזאורוס, ולזחול מתחתיו לאט לאט.'
];

/* Lines. {name}: the child. {pet}: the pet's species name. Other {keys} come from the call. */
const LINES = {
  choose: {
    he: { m: ['{name}, את מי אתה רוצה לגדל?'], f: ['{name}, את מי את רוצה לגדל?'] },
    ru: ['{name}, кого ты хочешь растить?'],
    en: ['{name}, who do you want to take care of?']
  },
  hatchTap: {
    he: { m: ['{name}, תדפוק על הביצה! טוק, טוק, טוק!'], f: ['{name}, תדפקי על הביצה! טוק, טוק, טוק!'] },
    ru: ['{name}, постучи по яйцу! Тук-тук-тук!'],
    en: ['{name}, tap the egg! Knock, knock, knock!']
  },
  bornTap: {
    he: { m: ['{name}, מי מתחבא בסל? תציץ!'], f: ['{name}, מי מתחבא בסל? תציצי!'] },
    ru: ['{name}, кто спрятался в корзинке? Загляни!'],
    en: ["{name}, who's hiding in the basket? Peek in!"]
  },
  hello: {
    he: ['היי {name}! אני {pet}. כיף שבאת!'],
    ru: { m: ['Привет, {name}! Я {pet}. Как здорово, что ты пришёл!'], f: ['Привет, {name}! Я {pet}. Как здорово, что ты пришла!'] },
    en: ["Hi {name}! I'm {petA}. I'm so happy you're here!"]
  },
  welcomeBack: {
    he: ['{name}! חיכיתי לך! מה נעשה היום?', 'היי {name}! בוא נשחק!'],
    ru: ['{name}! Привет! Что будем делать сегодня?'],
    en: ['{name}! Hi! What shall we do today?']
  },
  grew: {
    he: { m: ['{name}, תראה כמה גדלתי!'], f: ['{name}, תראי כמה גדלתי!'] },
    ru: ['{name}, посмотри, как я вырос!'],
    en: ["{name}, look how much I've grown!"]
  },
  pat: {
    he: { m: ['חי חי! זה מדגדג!', 'אני אוהב כשאתה מלטף אותי!', 'עוד! עוד!'], f: ['חי חי! זה מדגדג!', 'אני אוהב כשאת מלטפת אותי!', 'עוד! עוד!'] },
    ru: ['Хи-хи! Щекотно!', 'Мне нравится, когда ты меня гладишь!', 'Ещё! Ещё!'],
    en: ['Hee hee! That tickles!', 'I love it when you pet me!', 'More! More!']
  },
  kitchen: {
    he: { m: ['מה אני אוכל? בוא נבחר מהמקרר!'], f: ['מה אני אוכל? בואי נבחר מהמקרר!'] },
    ru: ['Что я ем? Давай выберем!'],
    en: ["What do I eat? Let's pick something!"]
  },
  yum: { he: ['ממממ, {food}! טעים!', 'יאמי! {food}!'], ru: ['Ммм, {food}! Вкусно!', 'Ням-ням! {food}!'], en: ['Mmm, {food}! Yummy!', 'Yum! {food}!'] },
  wrongFood: {
    he: ['תודה! אבל אני לא אוכל {food}. אני אוכל {diet}.'],
    ru: ['Спасибо! Но я не ем {foodAcc}. Я ем {diet}.'],
    en: ["Thank you! But I don't eat {food}. I eat {diet}."]
  },
  full: { he: ['אני שבע! הבטן מלאה. תודה, {name}!'], ru: ['Я наелся! Животик полный. Спасибо, {name}!'], en: ["I'm full! My tummy is full. Thank you, {name}!"] },
  countAsk: {
    he: { m: ['{name}, תאכיל אותי {times}! נספור ביחד?'], f: ['{name}, תאכילי אותי {times}! נספור ביחד?'] },
    ru: ['{name}, покорми меня {times}! Посчитаем вместе?'],
    en: ['{name}, can you feed me {times}? We can count together!']
  },
  countDone: {
    he: ['{n}! ספרת יפה, {name}!'],
    ru: { m: ['{n}! Ты отлично посчитал, {name}!'], f: ['{n}! Ты отлично посчитала, {name}!'] },
    en: ['{n}! Great counting, {name}!']
  },
  bath: {
    he: { m: ['בוא נתרחץ! קח את הספוג.'], f: ['בואי נתרחץ! קחי את הספוג.'] },
    ru: ['Давай купаться! Бери губку.'],
    en: ['Bath time! Grab the sponge.']
  },
  scrub: { he: ['מקרצפים את {part}!'], ru: ['Моем {part}!'], en: ['Scrubbing my {part}!'] },
  sneeze: { he: ['אפצ\'י! סליחה! זה דגדג לי באף.', 'אפצ\'י! האף שלי מדגדג!'], ru: ['Апчхи! Ой, щекотно в носу!', 'Апчхи! Извини!'], en: ['Achoo! That tickled my nose!', 'Achoo! Excuse me!'] },
  tickle: { he: ['חחח! הבטן שלי מדגדגת!', 'חי חי חי! עוד פעם!'], ru: ['Ха-ха! Животик щекотно!', 'Хи-хи-хи! Ещё раз!'], en: ['Ha ha! My belly tickles!', 'Hee hee hee! Again!'] },
  tail: { he: ['היי, זה הזנב שלי!', 'מי נגע לי בזנב?'], ru: ['Эй, это мой хвост!', 'Кто трогает мой хвост?'], en: ["Hey, that's my tail!", 'Who touched my tail?'] },
  foot: { he: ['הופ! קפיצה!', 'הרגליים שלי חזקות!'], ru: ['Оп! Прыжок!', 'У меня сильные ноги!'], en: ['Hop! A jump!', 'I have strong legs!'] },
  dizzy: { he: ['וואו, הכול מסתובב!', 'אוי, הראש שלי מסתובב!'], ru: ['Ух ты, всё кружится!', 'Ой, голова кружится!'], en: ['Whoa, everything is spinning!', "Oh, I'm so dizzy!"] },
  dance: { he: { m: ['בוא נרקוד!', 'אני אוהב לרקוד!'], f: ['בואי נרקוד!', 'אני אוהב לרקוד!'] }, ru: ['Давай танцевать!', 'Я люблю танцевать!'], en: ["Let's dance!", 'I love to dance!'] },
  catchHello: {
    he: { m: ['{name}, תפוס את מה שאני אוכל! אני אוכל {diet}.'], f: ['{name}, תפסי את מה שאני אוכל! אני אוכל {diet}.'] },
    ru: ['{name}, лови то, что я ем! Я ем {diet}.'], en: ['{name}, catch what I eat! I eat {diet}.']
  },
  catchYuck: { he: ['אוי, את זה אני לא אוכל!', 'לא את זה! אני אוכל {diet}.'], ru: ['Ой, это я не ем!', 'Не это! Я ем {diet}.'], en: ["Oops, I don't eat that!", 'Not that one! I eat {diet}.'] },
  jumpHello: {
    he: { m: ['{name}, לחץ על המסך ואני אקפוץ! בוא נאסוף כוכבים.'], f: ['{name}, לחצי על המסך ואני אקפוץ! בואי נאסוף כוכבים.'] },
    ru: ['{name}, нажми на экран, и я прыгну! Давай соберём звёзды.'], en: ["{name}, tap the screen and I'll jump! Let's collect stars."]
  },
  bubblesHello: { he: { m: ['בועות! בוא נספור אותן.'], f: ['בועות! בואי נספור אותן.'] }, ru: ['Пузыри! Давай их считать.'], en: ["Bubbles! Let's count them."] },
  bubblesAsk: { he: { m: ['פוצץ {nb}!'], f: ['פוצצי {nb}!'] }, ru: ['Лопни {nb}!'], en: ['Pop {nb}!'] },
  giftHere: { he: { m: ['יש פה מתנה! בוא נפתח אותה!'], f: ['יש פה מתנה! בואי נפתח אותה!'] }, ru: ['Тут подарок! Давай откроем!'], en: ["There's a present! Let's open it!"] },
  newSticker: { he: ['מדבקה חדשה: {st}! הדבקנו אותה באלבום.'], ru: ['Новая наклейка: {st}! Мы наклеили её в альбом.'], en: ["A new sticker: {st}! It's in the album now."] },
  allStickers: { he: ['אספנו את כל המדבקות! איזה יופי!'], ru: ['Мы собрали все наклейки! Ура!'], en: ['We collected all the stickers! Hooray!'] },
  stickerLocked: { he: ['את המדבקה הזאת עוד לא מצאנו. אולי במתנה של מחר!'], ru: ['Эту наклейку мы ещё не нашли. Может, в завтрашнем подарке!'], en: ["We haven't found this sticker yet. Maybe in tomorrow's present!"] },
  themeLocked: { he: ['הצבע הזה ייפתח כשנאסוף {nst}!'], ru: ['Этот цвет откроется, когда мы соберём {nst}!'], en: ["This color opens when we collect {nst}!"] },
  themeNew: { he: ['איזה צבע יפה! החדר כמו חדש.'], ru: ['Какой красивый цвет! Комната как новая.'], en: ['What a pretty color! The room looks brand new.'] },
  butterfly: { he: ['פרפר! הוא נחת לי על האף!'], ru: ['Бабочка! Она села мне на нос!'], en: ['A butterfly! It landed on my nose!'] },
  rinse: { he: ['שוטפים את הקצף! שששש...'], ru: ['Смываем пену! Шшш...'], en: ['Rinse off the bubbles! Shhh...'] },
  rinseFirst: {
    he: { m: ['קודם ספוג וקצף, ואחר כך מקלחת!'], f: ['קודם ספוג וקצף, ואחר כך מקלחת!'] },
    ru: ['Сначала губка и пена, потом душ!'], en: ['Sponge and bubbles first, then the shower!']
  },
  dry: { he: ['מתנגבים... ועכשיו אני נקי ונוצץ!'], ru: ['Вытираемся... теперь я чистый и блестящий!'], en: ["Dry off... now I'm clean and sparkly!"] },
  brush: { he: ['בוא נצחצח שיניים! למעלה ולמטה.'], ru: ['Давай почистим зубы! Вверх и вниз.'], en: ["Let's brush my teeth! Up and down."] },
  brushDone: { he: ['השיניים נוצצות! תודה, {name}!'], ru: ['Зубы блестят! Спасибо, {name}!'], en: ['Sparkly teeth! Thank you, {name}!'] },
  beakDone: { he: ['לפינגווינים אין שיניים בכלל! אז ניקינו את המקור. תודה!'], ru: ['У пингвинов совсем нет зубов! Так что мы почистили клюв. Спасибо!'], en: ['Penguins have no teeth at all! So we cleaned my beak. Thank you!'] },
  potty: { he: ['אוי, אני צריך לשירותים!'], ru: ['Ой, мне надо в туалет!'], en: ['Oops, I need the potty!'] },
  pottyDone: { he: ['סיימתי! ועכשיו שוטפים ידיים עם סבון.'], ru: ['Готово! А теперь моем лапки с мылом.'], en: ['All done! Now we wash our hands with soap.'] },
  wash: { he: ['משפשפים עם סבון, וסופרים עד עשר!'], ru: ['Трём с мылом и считаем до десяти!'], en: ['Scrub with soap and count to ten!'] },
  washDone: { he: ['ידיים נקיות! כל הכבוד.'], ru: ['Чистые лапки! Молодец.'], en: ['Clean hands! Well done.'] },
  bed: { he: ['הנה המיטה שלי. לוחצים על המנורה, ואני הולך לישון.'], ru: ['Вот моя кроватка. Нажми на лампу, и я лягу спать.'], en: ["Here's my bed. Tap the lamp and I'll go to sleep."] },
  lightsOff: { he: ['לילה טוב, {name}... אני חולם על המקום שבו אני גר.'], ru: ['Спокойной ночи, {name}... Мне снится место, где я живу.'], en: ['Good night, {name}... I dream about the place where I live.'] },
  wake: { he: ['בוקר טוב! ישנתי טוב!'], ru: ['Доброе утро! Я хорошо поспал!'], en: ['Good morning! I slept well!'] },
  hungry: { he: ['נראה לי שאני קצת רעב. נלך למטבח?'], ru: ['Кажется, я немножко проголодался. Пойдём на кухню?'], en: ["I think I'm a little hungry. Shall we go to the kitchen?"] },
  dirty: { he: ['אני קצת מלוכלך. אולי אמבטיה?'], ru: ['Я немножко испачкался. Может, искупаемся?'], en: ["I'm a little muddy. Bath time?"] },
  tired: { he: ['אני קצת עייף. אולי ננוח במיטה?'], ru: ['Я немножко устал. Может, полежим в кроватке?'], en: ["I'm a little tired. Shall we rest in bed?"] },
  bored: { he: { m: ['בוא נשחק משחק!'], f: ['בואי נשחק משחק!'] }, ru: ['Давай поиграем!'], en: ["Let's play a game!"] },
  listen: { he: { m: ['אני מקשיב! תגיד משהו.'], f: ['אני מקשיב! תגידי משהו.'] }, ru: ['Я слушаю! Скажи что-нибудь.'], en: ["I'm listening! Say something."] },
  noHear: { he: ['לא שמעתי. ננסה שוב?'], ru: ['Я не расслышал. Ещё раз?'], en: ["I didn't hear you. Try again?"] },
  look: { he: ['איך אני נראה?', 'יפה לי?'], ru: ['Как я выгляжу?', 'Мне идёт?'], en: ['How do I look?', 'Do you like it?'] },
  lockedHat: { he: ['את הכובע הזה מקבלים כשמשחקים במשחקי הלמידה!'], ru: ['Эту шапку можно получить в обучающих играх!'], en: ['You get this hat by playing the learning games!'] },
  newHat: { he: { m: ['יש! קיבלנו כובע חדש! בוא נמדוד.'], f: ['יש! קיבלנו כובע חדש! בואי נמדוד.'] }, ru: ['Ура! Новая шапка! Давай примерим.'], en: ["Yay! A new hat! Let's try it on."] },
  newCard: { he: ['כרטיס חדש באלבום!'], ru: ['Новая карточка в альбоме!'], en: ['A new card in the album!'] },
  cardLocked: { he: { m: ['את זה עוד לא גילינו. בוא נשחק ונגלה!'], f: ['את זה עוד לא גילינו. בואי נשחק ונגלה!'] }, ru: ['Это мы ещё не узнали. Давай поиграем и узнаем!'], en: ["We haven't found this one yet. Let's play and find out!"] },
  yes: { he: ['נכון!', 'יפה מאוד!', 'בדיוק!'], ru: ['Верно!', 'Отлично!', 'Точно!'], en: ['Right!', 'Very good!', 'Exactly!'] },
  tryAgain: {
    he: { m: ['ניסית! בוא ננסה שוב.', 'כמעט! עוד פעם.'], f: ['ניסית! בואי ננסה שוב.', 'כמעט! עוד פעם.'] },
    ru: ['Хорошая попытка! Ещё разок.', 'Почти! Ещё раз.'],
    en: ['Good try! One more time.', 'Almost! Try again.']
  },
  gameDone: {
    he: ['כל הכבוד, {name}! חשבת והתאמצת!', 'איזה יופי, {name}! ניסית עד שהצלחת!'],
    ru: { m: ['Молодец, {name}! Ты думал и старался!'], f: ['Молодец, {name}! Ты думала и старалась!'] },
    en: ['Well done, {name}! You thought hard and kept trying!']
  },
  digHello: { he: { m: ['בוא נחפור! מנקים את החול עם האצבע, כמו מברשת.'], f: ['בואי נחפור! מנקים את החול עם האצבע, כמו מברשת.'] }, ru: ['Давай копать! Сметаем песок пальчиком, как кисточкой.'], en: ["Let's dig! Brush the sand away with your finger."] },
  digFound: {
    he: ['מצאת מאובן! זה {pet}!'],
    ru: { m: ['Ты нашёл окаменелость! Это {pet}!'], f: ['Ты нашла окаменелость! Это {pet}!'] },
    en: ['You found a fossil! It is {petA}!']
  },
  fossilWhat: {
    he: ['מאובן זה מה שנשאר מחיה שחיה לפני המון זמן, והפך לאבן.'],
    ru: ['Окаменелость — это то, что осталось от животного, которое жило очень давно, и превратилось в камень.'],
    en: ["A fossil is what's left of an animal from long, long ago, turned into stone."]
  },
  eatsAsk: { he: ['מי אוכל {food}?'], ru: ['Кто ест {foodAcc}?'], en: ['Who eats {food}?'] },
  eatsYes: { he: ['נכון! {pet} אוכל {food}.'], ru: ['Правильно! {pet} ест {foodAcc}.'], en: ['Right! {petThe} eats {food}.'] },
  eatsNo: { he: ['לא אני! אני אוכל {diet}.'], ru: ['Не я! Я ем {diet}.'], en: ['Not me! I eat {diet}.'] },
  shadowAsk: { he: ['של מי הצל הזה?'], ru: ['Чья это тень?'], en: ['Whose shadow is this?'] },
  shadowYes: { he: ['כן! זה {pet}!'], ru: ['Да! Это {pet}!'], en: ["Yes! It's {petA}!"] },
  shadowHint: {
    he: { m: ['תסתכל טוב על הצל: יש לו {feature}.'], f: ['תסתכלי טוב על הצל: יש לו {feature}.'] },
    ru: ['Посмотри внимательно на тень: у него {feature}.'],
    en: ['Look closely at the shadow: it has {feature}.']
  },
  eggAsk: { he: ['איך {pet} בא לעולם? בוקע מביצה, או נולד?'], ru: ['Как появляется {pet}? Вылупляется из яйца или рождается?'], en: ['How does {petThe} come into the world? From an egg, or is it born?'] },
  sizeAsk: { he: ['מי יותר גדול באמת?'], ru: ['Кто на самом деле больше?'], en: ['Who is really bigger?'] },
  sizeYes: { he: ['נכון! {big} יותר גדול מ{small}.'], ru: ['Правильно! {big} больше, чем {small}.'], en: ['Right! {big} is bigger than {small}.'] },
  sizeNo: { he: ['הממ! באמת, {big} הרבה יותר גדול.'], ru: ['Хм! На самом деле {big} намного больше.'], en: ['Hmm! Really, {big} is much bigger.'] },
  sleepy: {
    he: { m: ['אהההה... אני מתחיל להתעייף. {name}, בוא נתכונן לשינה.'], f: ['אהההה... אני מתחיל להתעייף. {name}, בואי נתכונן לשינה.'] },
    ru: ['Ааах... Я начинаю уставать. {name}, давай готовиться ко сну.'],
    en: ["Yaaawn... I'm getting sleepy. {name}, let's get ready for bed."]
  },
  bedBrush: { he: ['קודם מצחצחים שיניים, ואז מכבים את האור.'], ru: ['Сначала чистим зубы, потом выключаем свет.'], en: ['First we brush our teeth, then we turn off the light.'] },
  bedLamp: { he: { m: ['עכשיו תכבה את האור.'], f: ['עכשיו תכבי את האור.'] }, ru: ['Теперь выключи свет.'], en: ['Now turn off the light.'] },
  goodnight: { he: ['לילה טוב, {name}. נתראה מחר!'], ru: ['Спокойной ночи, {name}. Увидимся завтра!'], en: ['Good night, {name}. See you tomorrow!'] },
  pickFriend: { he: ['{pet}!'], ru: ['{pet}!'], en: ['{petCap}!'] },

  /* praise for trying (process praise): after a miss and then a find */
  triedAgain: {
    he: ['ניסית שוב ומצאת!', 'לא ויתרת, ומצאת!'],
    ru: { m: ['Ты попробовал ещё раз и нашёл!', 'Ты не сдался и нашёл!'], f: ['Ты попробовала ещё раз и нашла!', 'Ты не сдалась и нашла!'] },
    en: ['You tried again and found it!', "You didn't give up, and you found it!"]
  },

  /* moving and freezing */
  moveHello: { he: { m: ['בוא נזוז ביחד! תעשה כמוני.'], f: ['בואי נזוז ביחד! תעשי כמוני.'] }, ru: ['Давай подвигаемся вместе! Делай как я.'], en: ["Let's move together! Do what I do."] },
  move_jump: { he: { m: ['קפוץ כמו קנגורו, {times}!'], f: ['קפצי כמו קנגורו, {times}!'] }, ru: ['Прыгай как кенгуру, {times}!'], en: ['Jump like a kangaroo, {times}!'] },
  move_stomp: { he: { m: ['רקע ברגליים כמו טירנוזאורוס, {times}!'], f: ['רקעי ברגליים כמו טירנוזאורוס, {times}!'] }, ru: ['Топай как тираннозавр, {times}!'], en: ['Stomp like a T. rex, {times}!'] },
  move_stretch: { he: { m: ['תתמתח גבוה גבוה, כמו ברכיוזאורוס!'], f: ['תתמתחי גבוה גבוה, כמו ברכיוזאורוס!'] }, ru: ['Потянись высоко-высоко, как брахиозавр!'], en: ['Stretch up tall, like a Brachiosaurus!'] },
  move_waddle: { he: { m: ['לך כמו פינגווין, בצעדים קטנים!'], f: ['לכי כמו פינגווין, בצעדים קטנים!'] }, ru: ['Иди как пингвин, маленькими шажками!'], en: ['Walk like a penguin, with tiny steps!'] },
  move_swing: { he: { m: ['נפנף ביד כמו חדק של פיל!'], f: ['נפנפי ביד כמו חדק של פיל!'] }, ru: ['Помаши рукой, как слон хоботом!'], en: ["Swing your arm like an elephant's trunk!"] },
  move_spin: { he: { m: ['הסתובב סיבוב אחד!'], f: ['הסתובבי סיבוב אחד!'] }, ru: ['Повернись вокруг себя!'], en: ['Turn all the way around!'] },
  moveGood: {
    he: ['זזת מעולה!', 'עשית בדיוק כמוני!', 'איזה יופי של תנועה!'],
    ru: { m: ['Ты отлично двигался!', 'Ты сделал точно как я!'], f: ['Ты отлично двигалась!', 'Ты сделала точно как я!'] },
    en: ['Great moving!', 'You did it just like me!', 'What great moves!']
  },
  freezeHello: {
    he: { m: ['עכשיו רוקדים! כשהמוזיקה נעצרת, קופאים כמו פסל. מוכן?'], f: ['עכשיו רוקדים! כשהמוזיקה נעצרת, קופאים כמו פסל. מוכנה?'] },
    ru: { m: ['А теперь танцуем! Когда музыка остановится, замри как статуя. Готов?'], f: ['А теперь танцуем! Когда музыка остановится, замри как статуя. Готова?'] },
    en: ["Now we dance! When the music stops, freeze like a statue. Ready?"]
  },
  freeze: { he: ['קופאים!'], ru: ['Замри!'], en: ['Freeze!'] },
  freezeGo: { he: ['ממשיכים לרקוד!'], ru: ['Танцуем дальше!'], en: ['Keep dancing!'] },
  freezeGood: {
    he: ['קפאת כמו פסל אמיתי!', 'איזה פסל! הגוף שלך הקשיב למוזיקה.'],
    ru: { m: ['Ты замер как настоящая статуя!'], f: ['Ты замерла как настоящая статуя!'] },
    en: ['You froze like a real statue!', 'What a statue! Your body listened to the music.']
  },
  moveDone: { he: ['זזנו וקפאנו יחד. הגוף שלנו חזק!'], ru: ['Мы двигались и замирали вместе. Наше тело сильное!'], en: ['We moved and froze together. Our bodies are strong!'] },

  /* feelings */
  feelHello: {
    he: { m: ['בוא נדבר על רגשות! אספר לך מה קרה לי, ואתה תנחש איך אני מרגיש.'], f: ['בואי נדבר על רגשות! אספר לך מה קרה לי, ואת תנחשי איך אני מרגיש.'] },
    ru: ['Давай поговорим о чувствах! Я расскажу, что со мной случилось, а ты угадай, что я чувствую.'],
    en: ["Let's talk about feelings! I'll tell you what happened to me, and you guess how I feel."]
  },
  feelAsk: { he: ['{story} איך אני מרגיש?'], ru: ['{story} Что я чувствую?'], en: ['{story} How do I feel?'] },
  feelNo: {
    he: { m: ['הממ... ואם זה היה קורה לך, איך היית מרגיש?'], f: ['הממ... ואם זה היה קורה לך, איך היית מרגישה?'] },
    ru: { m: ['Хм... А если бы это случилось с тобой, что бы ты почувствовал?'], f: ['Хм... А если бы это случилось с тобой, что бы ты почувствовала?'] },
    en: ['Hmm... If it happened to you, how would you feel?']
  },
  feelDone: { he: ['כל הרגשות בסדר. טוב לדעת איך קוראים להם!'], ru: ['Все чувства — это нормально. Хорошо знать, как они называются!'], en: ["All feelings are okay. It's good to know their names!"] },

  /* breathing */
  breatheHello: { he: { m: ['בוא ננשום ביחד, לאט לאט.'], f: ['בואי ננשום ביחד, לאט לאט.'] }, ru: ['Давай подышим вместе, медленно-медленно.'], en: ["Let's breathe together, slowly."] },
  breatheIn: { he: ['מריחים את הפרח...'], ru: ['Нюхаем цветок...'], en: ['Smell the flower...'] },
  breatheOut: { he: ['נושפים על הנר...'], ru: ['Задуваем свечку...'], en: ['Blow out the candle...'] },
  breatheDone: { he: ['איזה רוגע. הגוף שלי מרגיש טוב.'], ru: ['Как спокойно. Моему телу хорошо.'], en: ['So calm. My body feels good.'] },

  /* patterns */
  patternHello: {
    he: { m: ['יש פה דפוס, משהו שחוזר שוב ושוב. מה בא אחרי? תסתכל טוב.'], f: ['יש פה דפוס, משהו שחוזר שוב ושוב. מה בא אחרי? תסתכלי טוב.'] },
    ru: ['Тут узор: что-то повторяется снова и снова. Что будет дальше? Посмотри внимательно.'],
    en: ["Here's a pattern, something that repeats again and again. What comes next? Look closely."]
  },
  patternAsk: { he: ['מה בא אחרי?'], ru: ['Что дальше?'], en: ['What comes next?'] },
  patternYes: { he: ['נכון! מצאת את הדפוס!', 'בדיוק! ראית מה חוזר!'], ru: { m: ['Верно! Ты нашёл узор!'], f: ['Верно! Ты нашла узор!'] }, en: ['Right! You found the pattern!', 'Exactly! You saw what repeats!'] },
  patternNo: { he: ['כמעט! מה חוזר שוב ושוב?'], ru: ['Почти! Что повторяется снова и снова?'], en: ['Almost! What repeats again and again?'] },

  /* first sounds */
  soundHello: {
    he: { m: ['בוא נשחק בצלילים! תקשיב טוב לתחילת המילה.'], f: ['בואי נשחק בצלילים! תקשיבי טוב לתחילת המילה.'] },
    ru: ['Давай поиграем со звуками! Слушай начало слова.'],
    en: ["Let's play with sounds! Listen to how each word starts."]
  },
  soundAsk: { he: ['מה מתחיל כמו {word}? {o1}, {o2} או {o3}?'], ru: ['Что начинается так же, как {word}: {o1}, {o2} или {o3}?'], en: ['What starts like {word}: {o1}, {o2}, or {o3}?'] },
  soundYes: { he: ['כן! {word} ו{match} מתחילים באותו צליל, באות {letter}!'], ru: ['Да! {word} и {match} начинаются одинаково, с буквы {letter}!'], en: ['Yes! {word} and {match} start the same way, with the letter {letter}!'] },
  soundNo: { he: ['{pickedw}... זה מתחיל אחרת. נקשיב שוב: {word}.'], ru: ['{pickedw}... Это начинается по-другому. Послушай ещё раз: {word}.'], en: ['{pickedw}... That starts differently. Listen again: {word}.'] },

  /* what we do next, said at goodnight */
  next_dinner: { he: { m: ['אני הולך לישון, ואתה הולך לאכול. בתיאבון!'], f: ['אני הולך לישון, ואת הולכת לאכול. בתיאבון!'] }, ru: ['Я иду спать, а ты — кушать. Приятного аппетита!'], en: ["I'm going to sleep, and you're going to eat. Enjoy your meal!"] },
  next_bath: { he: { m: ['אני הולך לישון, ואתה הולך להתקלח. שיהיה כיף במים!'], f: ['אני הולך לישון, ואת הולכת להתקלח. שיהיה כיף במים!'] }, ru: ['Я иду спать, а ты — купаться. Весело тебе в воде!'], en: ["I'm going to sleep, and you're going to have a bath. Have fun in the water!"] },
  next_outside: { he: { m: ['אני הולך לישון, ואתה יוצא לשחק בחוץ. תקפוץ שם כמו קנגורו!'], f: ['אני הולך לישון, ואת יוצאת לשחק בחוץ. תקפצי שם כמו קנגורו!'] }, ru: ['Я иду спать, а ты — гулять на улицу. Попрыгай там как кенгуру!'], en: ["I'm going to sleep, and you're going out to play. Hop like a kangaroo out there!"] },
  next_story: { he: { m: ['אני הולך לישון, ואתה הולך לקרוא סיפור ביחד. איזה כיף!'], f: ['אני הולך לישון, ואת הולכת לקרוא סיפור ביחד. איזה כיף!'] }, ru: ['Я иду спать, а ты — читать книжку вместе. Как здорово!'], en: ["I'm going to sleep, and you're going to read a story together. How fun!"] },
  next_toys: { he: { m: ['אני הולך לישון, ואתה הולך לשחק עם הצעצועים שלך. תבנה משהו יפה!'], f: ['אני הולך לישון, ואת הולכת לשחק עם הצעצועים שלך. תבני משהו יפה!'] }, ru: ['Я иду спать, а ты — играть со своими игрушками. Построй что-нибудь красивое!'], en: ["I'm going to sleep, and you're going to play with your toys. Build something lovely!"] },
  next_sleep: { he: { m: ['גם אני הולך לישון, וגם אתה. חלומות מתוקים!'], f: ['גם אני הולך לישון, וגם את. חלומות מתוקים!'] }, ru: ['Я иду спать, и ты тоже. Сладких снов!'], en: ["I'm going to sleep, and so are you. Sweet dreams!"] }
};
const TIMES = {
  he: ['פעם אחת', 'פעמיים', 'שלוש פעמים', 'ארבע פעמים', 'חמש פעמים'],
  ru: ['один раз', 'два раза', 'три раза', 'четыре раза', 'пять раз'],
  en: ['once', 'two times', 'three times', 'four times', 'five times']
};
const COUNT = {
  he: ['אחת!', 'שתיים!', 'שלוש!', 'ארבע!', 'חמש!', 'שש!', 'שבע!', 'שמונה!', 'תשע!', 'עשר!'],
  ru: ['Один!', 'Два!', 'Три!', 'Четыре!', 'Пять!', 'Шесть!', 'Семь!', 'Восемь!', 'Девять!', 'Десять!'],
  en: ['One!', 'Two!', 'Three!', 'Four!', 'Five!', 'Six!', 'Seven!', 'Eight!', 'Nine!', 'Ten!']
};
const NUM_WORD = { he: ['אחת', 'שתיים', 'שלוש', 'ארבע', 'חמש'], ru: ['Один', 'Два', 'Три', 'Четыре', 'Пять'], en: ['One', 'Two', 'Three', 'Four', 'Five'] };

/* ---------- feelings: what happened to the friend, how it feels, and what helps ----------
   Naming feelings from a situation is the emotion knowledge preschool programs build (Preschool PATHS); each answer
   ends with something that helps (a hug, a slow breath, a hand to hold), the way the Kindness Curriculum does. */
const FEELINGS = {
  happy: { he: 'שמח', ru: 'весело', en: 'happy',
    yes: { he: 'כן! אני שמח!', ru: 'Да! Мне весело!', en: "Yes! I'm happy!" },
    help: { he: 'כשאני שמח, אני רוצה לשתף. אני מספר לכולם!', ru: 'Когда мне весело, я хочу поделиться. Я всем рассказываю!', en: "When I'm happy, I want to share it. I tell everyone!" } },
  sad: { he: 'עצוב', ru: 'грустно', en: 'sad',
    yes: { he: 'כן... אני עצוב.', ru: 'Да... Мне грустно.', en: "Yes... I'm sad." },
    help: { he: 'כשאני עצוב, חיבוק עוזר לי. אפשר גם לספר למישהו שאוהבים.', ru: 'Когда мне грустно, мне помогают объятия. Можно рассказать тому, кого любишь.', en: "When I'm sad, a hug helps me. I can tell someone I love." } },
  angry: { he: 'כועס', ru: 'сердито', en: 'angry',
    yes: { he: 'כן! אני כועס!', ru: 'Да! Я сержусь!', en: "Yes! I'm angry!" },
    help: { he: 'כשאני כועס, אני נושם לאט, עד שהגוף נרגע. ננשום ביחד?', ru: 'Когда я сержусь, я медленно дышу, пока тело не успокоится. Подышим вместе?', en: "When I'm angry, I breathe slowly until my body calms down. Shall we breathe together?" } },
  scared: { he: 'מפחד', ru: 'страшно', en: 'scared',
    yes: { he: 'כן, אני מפחד.', ru: 'Да, мне страшно.', en: "Yes, I'm scared." },
    help: { he: 'כשאני מפחד, אני מחזיק יד של מישהו שאני אוהב, ומספר לו.', ru: 'Когда мне страшно, я держу за руку того, кого люблю, и рассказываю ему.', en: "When I'm scared, I hold the hand of someone I love, and tell them." } },
  surprised: { he: 'מופתע', ru: 'удивительно', en: 'surprised',
    yes: { he: 'כן! אני מופתע!', ru: 'Да! Я удивлён!', en: "Yes! I'm surprised!" },
    help: { he: 'הפתעות פותחות לי עיניים גדולות! וואו!', ru: 'От сюрпризов у меня большие глаза! Ух ты!', en: 'Surprises make my eyes go big! Wow!' } }
};
const FEELING_ORDER = ['happy', 'sad', 'angry', 'scared', 'surprised'];
const SITUATIONS = [
  { id: 'gift', feel: 'happy', he: 'קיבלתי מתנה!', ru: 'Мне подарили подарок!', en: 'I got a present!' },
  { id: 'friend', feel: 'happy', he: 'חבר שלי בא לשחק איתי!', ru: 'Мой друг пришёл со мной поиграть!', en: 'My friend came to play with me!' },
  { id: 'ball', feel: 'sad', he: 'הכדור שלי התגלגל רחוק, ואני לא מוצא אותו.', ru: 'Мой мяч укатился далеко, и я не могу его найти.', en: "My ball rolled far away, and I can't find it." },
  { id: 'icecream', feel: 'sad', he: 'הגלידה שלי נפלה על הרצפה.', ru: 'Моё мороженое упало на пол.', en: 'My ice cream fell on the floor.' },
  { id: 'tower', feel: 'angry', he: 'מישהו הפיל את המגדל שבניתי!', ru: 'Кто-то сломал башню, которую я построил!', en: 'Someone knocked down the tower I built!' },
  { id: 'grab', feel: 'angry', he: 'מישהו לקח לי את הצעצוע בלי לשאול!', ru: 'Кто-то взял мою игрушку без спроса!', en: 'Someone took my toy without asking!' },
  { id: 'thunder', feel: 'scared', he: 'בחוץ יש רעם חזק: בום!', ru: 'На улице сильный гром: бум!', en: "There's loud thunder outside: boom!" },
  { id: 'butterfly', feel: 'surprised', he: 'פרפר נחת לי על האף!', ru: 'Бабочка села мне на нос!', en: 'A butterfly landed on my nose!' },
  { id: 'box', feel: 'surprised', he: 'פתחתי קופסה, ויצא ממנה קפיץ: בוינג!', ru: 'Я открыл коробку, а оттуда выскочила пружинка: бойнг!', en: 'I opened a box, and a spring jumped out: boing!' }
];

/* ---------- moving like the animals (each move is shown by the friend; the child does it with the whole body) ---------- */
const MOVES = [
  { id: 'jump', sp: 'kangaroo', n: 3 },
  { id: 'stomp', sp: 'trex', n: 4 },
  { id: 'stretch', sp: 'brachio', n: 3 },
  { id: 'waddle', sp: 'penguin', n: 4 },
  { id: 'swing', sp: 'elephant', n: 3 },
  { id: 'spin', sp: null, n: 1 }
];

/* ---------- first sounds: which word starts like this one? Each round has one match and two that start differently
   (and in Hebrew never two letters with the same sound, like ט and ת, or כ and ק). ---------- */
const WORDS = {
  he: { penguin: 'פינגווין', elephant: 'פיל', trex: 'טירנוזאורוס', trike: 'טריצרטופס', kangaroo: 'קנגורו', soap: 'סבון', fish: 'דג', towel: 'מגבת', egg: 'ביצה', meat: 'בשר',
    sponge: 'ספוג', lamp: 'מנורה', book: 'ספר', hanger: 'קולב', brush: 'מברשת שיניים', shower: 'מקלחת' },
  ru: { penguin: 'пингвин', gift: 'подарок', elephant: 'слон', stego: 'стегозавр', lamp: 'лампа', ball: 'мяч', soap: 'мыло', lion: 'лев', book: 'книга', kangaroo: 'кенгуру',
    sponge: 'губка', potty: 'горшок', shower: 'душ', trex: 'тираннозавр', grass: 'трава', fish: 'рыба' },
  en: { penguin: 'penguin', potty: 'potty', lion: 'lion', fish: 'fish', ball: 'ball', book: 'book', soap: 'soap', meat: 'meat', lamp: 'lamp', towel: 'towel', sponge: 'sponge',
    kangaroo: 'kangaroo', fern: 'fern', grass: 'grass', gift: 'gift', egg: 'egg', brush: 'toothbrush' }
};
// letter: shown on the card; say: how the letter's name is read aloud
const SOUND_ROUNDS = {
  he: [
    { word: 'elephant', match: 'penguin', other: ['soap', 'fish'], letter: 'פ', say: 'פֵּא' },
    { word: 'trex', match: 'trike', other: ['towel', 'egg'], letter: 'ט', say: 'טֵית' },
    { word: 'meat', match: 'egg', other: ['sponge', 'lamp'], letter: 'ב', say: 'בֵּית' },
    { word: 'soap', match: 'book', other: ['elephant', 'fish'], letter: 'ס', say: 'סָמֶךְ' },
    { word: 'towel', match: 'lamp', other: ['penguin', 'egg'], letter: 'מ', say: 'מֵם' },
    { word: 'kangaroo', match: 'hanger', other: ['meat', 'elephant'], letter: 'ק', say: 'קוּף' },
    { word: 'brush', match: 'shower', other: ['soap', 'egg'], letter: 'מ', say: 'מֵם' }
  ],
  ru: [
    { word: 'penguin', match: 'gift', other: ['elephant', 'soap'], letter: 'П', say: 'пэ' },
    { word: 'elephant', match: 'stego', other: ['lamp', 'ball'], letter: 'С', say: 'эс' },
    { word: 'ball', match: 'soap', other: ['lion', 'book'], letter: 'М', say: 'эм' },
    { word: 'lion', match: 'lamp', other: ['fish', 'sponge'], letter: 'Л', say: 'эль' },
    { word: 'kangaroo', match: 'book', other: ['elephant', 'soap'], letter: 'К', say: 'ка' },
    { word: 'sponge', match: 'potty', other: ['lion', 'shower'], letter: 'Г', say: 'гэ' },
    { word: 'trex', match: 'grass', other: ['soap', 'penguin'], letter: 'Т', say: 'тэ' }
  ],
  en: [
    { word: 'penguin', match: 'potty', other: ['lion', 'fish'], letter: 'P', say: 'P' },
    { word: 'ball', match: 'book', other: ['soap', 'meat'], letter: 'B', say: 'B' },
    { word: 'lion', match: 'lamp', other: ['fish', 'towel'], letter: 'L', say: 'L' },
    { word: 'soap', match: 'sponge', other: ['book', 'kangaroo'], letter: 'S', say: 'S' },
    { word: 'fish', match: 'fern', other: ['ball', 'towel'], letter: 'F', say: 'F' },
    { word: 'towel', match: 'brush', other: ['lamp', 'egg'], letter: 'T', say: 'T' },
    { word: 'grass', match: 'gift', other: ['lion', 'soap'], letter: 'G', say: 'G' }
  ]
};

/* ---------- what comes after the game: the device says it, not the parent (Hiniker et al., CHI 2016) ---------- */
const NEXT_ACT = {
  dinner: { he: 'ארוחה' }, bath: { he: 'מקלחת' }, outside: { he: 'משחק בחוץ' }, story: { he: 'סיפור' }, toys: { he: 'צעצועים' }, sleep: { he: 'שינה' }
};
const NEXT_ORDER = ['dinner', 'bath', 'outside', 'story', 'toys', 'sleep'];

/* ---------- what we practiced, for the parents' corner, with a way to carry each into the day ---------- */
const SKILLS = {
  count: { he: 'ספירה', idea: 'לספור יחד מדרגות, כפיות או מכוניות אדומות בדרך.' },
  patterns: { he: 'דפוסים', idea: 'לסדר כפיות בדפוס, גדולה, קטנה, גדולה, קטנה, ולשאול: מה בא אחרי?' },
  sounds: { he: 'צלילים ואותיות', idea: 'לשחק בדרך לגן ב״אני רואה משהו שמתחיל ב...״.' },
  feelings: { he: 'רגשות', idea: 'לשאול בארוחת הערב: מה שימח אותך היום? ומה היה קשה?' },
  calm: { he: 'נשימה והרגעה', idea: 'לנשום יחד לפני השינה: מריחים פרח, נושפים על נר.' },
  move: { he: 'תנועה ועצירה', idea: 'לשחק ״ריקוד הפסלים״ בסלון: כשהמוזיקה נעצרת, קופאים.' },
  facts: { he: 'עולם החי', idea: 'לבחור חיה מהאלבום ולחפש עליה ספר בספרייה.' },
  habits: { he: 'הרגלים בריאים', idea: 'לתת לילד ״ללמד״ בובה לצחצח שיניים ולשטוף ידיים.' }
};
const SKILL_ORDER = ['count', 'patterns', 'sounds', 'feelings', 'calm', 'move', 'facts', 'habits'];
