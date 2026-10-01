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
  penguin: { he: 'פינגווין', ru: 'пингвин', en: 'penguin', enA: 'a penguin', enThe: 'the penguin', short: 'פינגווין' }
};
const IS_DINO = { trex: true, trike: true, stego: true, brachio: true, elephant: false, lion: false, penguin: false };
const FROM_EGG = { trex: true, trike: true, stego: true, brachio: true, elephant: false, lion: false, penguin: true };
// Rough length in meters, for "who is bigger"; pairs that are too close (or bigger in one way, smaller in another) are skipped.
const REAL_SIZE = { brachio: 22, trex: 12, trike: 9, stego: 9, elephant: 6.5, lion: 2.5, penguin: 1.1 };
const SIZE_SKIP = [['trike', 'stego'], ['elephant', 'stego']];

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
  elephant: ['grass', 'leaves', 'fruit'], lion: ['meat'], penguin: ['fish']
};
const DIET_TEXT = {
  trex: { he: 'בשר', ru: 'мясо', en: 'meat' },
  trike: { he: 'צמחים נמוכים, כמו שרכים', ru: 'низкие растения, например папоротник', en: 'low plants, like ferns' },
  stego: { he: 'צמחים נמוכים, כמו שרכים', ru: 'низкие растения, например папоротник', en: 'low plants, like ferns' },
  brachio: { he: 'עלים מעצים גבוהים', ru: 'листья с высоких деревьев', en: 'leaves from tall trees' },
  elephant: { he: 'עשב, עלים ופירות', ru: 'траву, листья и фрукты', en: 'grass, leaves and fruit' },
  lion: { he: 'בשר', ru: 'мясо', en: 'meat' },
  penguin: { he: 'דגים', ru: 'рыбу', en: 'fish' }
};
const FEATURE = {
  trex: { he: 'ראש גדול וידיים קטנות', ru: 'большая голова и маленькие лапки', en: 'a big head and tiny arms' },
  trike: { he: 'שלוש קרניים', ru: 'три рога', en: 'three horns' },
  stego: { he: 'לוחות על הגב', ru: 'пластины на спине', en: 'plates on its back' },
  brachio: { he: 'צוואר ארוך ארוך', ru: 'очень длинная шея', en: 'a very long neck' },
  elephant: { he: 'חדק ואוזניים גדולות', ru: 'хобот и большие уши', en: 'a trunk and big ears' },
  lion: { he: 'רעמה גדולה', ru: 'большая грива', en: 'a big mane' },
  penguin: { he: 'כנפיים קטנות ובטן לבנה', ru: 'маленькие крылья и белый животик', en: 'little flippers and a white belly' }
};

/* Body parts the bath names while the sponge is on them. Points are in stage units. */
const PARTS = {
  trex: [[120, 50, 'head'], [78, 156, 'arms'], [120, 172, 'belly'], [120, 208, 'legs'], [200, 186, 'tail']],
  trike: [[120, 34, 'horns'], [64, 70, 'frill'], [176, 70, 'frill'], [160, 166, 'back'], [100, 208, 'legs'], [212, 196, 'tail']],
  stego: [[140, 104, 'plates'], [73, 140, 'head'], [222, 150, 'spikes'], [150, 166, 'back'], [93, 208, 'legs']],
  brachio: [[104, 112, 'neck'], [88, 52, 'head'], [160, 158, 'back'], [108, 204, 'legs'], [214, 200, 'tail']],
  elephant: [[104, 138, 'trunk'], [44, 100, 'ears'], [196, 100, 'ears'], [120, 66, 'head'], [120, 180, 'belly'], [120, 210, 'legs']],
  lion: [[120, 38, 'mane'], [60, 96, 'mane'], [180, 96, 'mane'], [120, 104, 'face'], [120, 190, 'belly'], [120, 218, 'paws'], [196, 168, 'tail']],
  penguin: [[60, 168, 'flippers'], [180, 168, 'flippers'], [120, 168, 'belly'], [120, 58, 'head'], [120, 222, 'feet'], [120, 110, 'beak']]
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
  beak: { he: 'המקור', ru: 'клюв', en: 'beak' }
};

/* The album: six cards per friend. Each card opens through something done in the game. */
const FACT_KINDS = ['eats', 'body', 'home', 'baby', 'size', 'fun'];
const FACT_ICON = { eats: '🍽️', body: '✨', home: '🏝️', baby: '🥚', size: '📏', fun: '💡' };
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
  }
};
// Parent questions for the goodnight screen, one per card (Hebrew; for the grown-up to ask out loud).
const ASK = {
  eats: (p) => [`מה אוכל ${PET_NAMES[p].he}?`, DIET_TEXT[p].he],
  body: (p) => [`מה מיוחד בגוף של ${PET_NAMES[p].he}?`, FEATURE[p].he],
  home: (p) => [`איפה גר ${PET_NAMES[p].he}?`, { trex: 'באמריקה, לפני המון זמן', trike: 'באמריקה, לפני המון זמן', stego: 'באמריקה, לפני המון המון זמן', brachio: 'באמריקה, לפני המון המון זמן', elephant: 'באפריקה, במשפחות גדולות', lion: 'באפריקה, בלהקה', penguin: 'בעיקר במקומות קרים, וגם בחמים' }[p]],
  baby: (p) => [`${PET_NAMES[p].he} בוקע מביצה או נולד?`, FROM_EGG[p] ? 'בוקע מביצה' : 'נולד'],
  size: (p) => [`כמה גדול ${PET_NAMES[p].he}?`, { trex: 'ארוך כמו אוטובוס', trike: 'כבד כמו ארבע מכוניות', stego: 'גדול כמו אוטובוס', brachio: 'ארוך כמעט כמו שני אוטובוסים', elephant: 'החיה הכי גדולה ביבשה היום', lion: 'החתול השני הכי גדול, אחרי הטיגריס', penguin: 'הקיסרי, בגובה של ילד בן חמש' }[p]],
  fun: (p) => [`ספר לי משהו מצחיק על ${PET_NAMES[p].he}`, FACTS[p].fun.he]
};
const OFFLINE_IDEAS = [
  'לצאת לחפש ציפור בחוץ, ולהזכיר: הציפורים הן הדינוזאורים של היום.',
  'לחפור ״מאובנים״ בארגז חול: מחביאים צעצוע ומנקים אותו לאט עם מברשת ישנה.',
  'לשאול ליד ארוחת הערב: מי היה אוכל את זה, טריצרטופס או טירנוזאורוס?',
  'ללכת כמו פיל, לשאוג כמו אריה ולהתנדנד כמו פינגווין, שלוש פעמים כל אחד.',
  'לצייר יחד את החבר מהמשחק, עם הכובע שהוא בחר.',
  'לסדר צעצועים מהקטן לגדול, כמו במשחק ״מי יותר גדול״.'
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
  pickFriend: { he: ['{pet}!'], ru: ['{pet}!'], en: ['{petCap}!'] }
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
