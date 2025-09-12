import { 
  CeilingProduct, 
  CatalogFilter, 
  CatalogData, 
  TEXTURE_LABELS,
  TYPE_LABELS,
  ROOM_LABELS,
  MANUFACTURER_LABELS,
  SERVICE_LABELS
} from '../types/catalog';

// Реалистичный каталог потолков с правильными названиями и ценами
export const catalogProducts: CeilingProduct[] = [
  // Базовые типы потолков
  {
    id: 'matovye-belye',
    name: 'Матовые потолки световые линии',
    description: 'Матовые потолки с световыми линиями. От производителя BAUF 205. Универсальное решение для любого интерьера. Создают мягкое рассеянное освещение и идеально подходят для современных и классических стилей.',
    price: { min: 405, max: 405, unit: '₽/м²' },
    image: '/img/work-1.webp',
    textures: ['matovye'],
    types: [],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['BAUF 205', 'Гарантия 15 лет', 'Быстрый монтаж'],
    seoTitle: 'Матовые белые натяжные потолки BAUF 205 - 405₽/м²',
    seoDescription: 'Матовые белые натяжные потолки BAUF 205 по цене 405₽/м². Бесплатный замер, качественный монтаж, гарантия 15 лет.'
  },
  {
    id: 'paryashchie-uglovoy',
    name: 'Парящий профиль',
    description: 'Парящий профиль с акцентом на углы и переходы. Чёткая световая линия по периметру и углам помещения.',
    price: { min: 950, max: 950, unit: '₽/м' },
    image: '/img/work-14.jpg',
    textures: [],
    types: ['paryashchie'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж','Акцент на углах'],
    seoTitle: 'Парящий профиль — угловое решение — 950₽/м',
    seoDescription: 'Парящий профиль с чёткой подсветкой углов и переходов. Ровная световая полоса по периметру.'
  },
  {
    id: 'glyantsevye-belye',
    name: 'Глянцевые перфорированные потолки',
    description: 'Блестящие глянцевые потолки с перфорацией. От производителя BAUF 205. Визуально увеличивают пространство и создают эффект глубины. Идеальны для современных интерьеров.',
    price: { min: 1450, max: 1450, unit: '₽/м²' },
    image: '/img/work-2.webp',
    textures: ['glyantsevye'],
    types: ['perforirovannye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF 205', 'Зеркальный эффект', 'Визуально больше'],
    seoTitle: 'Глянцевые белые натяжные потолки BAUF 205 - 415₽/м²',
    seoDescription: 'Глянцевые белые натяжные потолки BAUF 205 по цене 415₽/м². Зеркальный эффект, увеличение пространства.'
  },
  {
    id: 'tsvetnye-matovye',
    name: 'Криволинейные глянцевые потолки',
    description: 'Криволинейные глянцевые потолки в любом цвете по вашему выбору. От производителя BAUF 205. Индивидуальный подход к каждому проекту. Создают настроение и подчеркивают стиль интерьера.',
    price: { min: 1000, max: 1000, unit: '₽/м²' },
    image: '/img/work-3.webp',
    textures: ['glyantsevye'],
    types: ['krivolinejnye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['200+ цветов', 'BAUF 205', 'Индивидуальный дизайн'],
    seoTitle: 'Цветные матовые натяжные потолки BAUF 205 - 450₽/м²',
    seoDescription: 'Цветные матовые натяжные потолки BAUF 205 по цене 450₽/м². 200+ цветов на выбор.'
  },
  {
    id: 'tsvetnye-glyantsevye',
    name: 'Фотопечать на матовых потолках',
    description: 'Матовые потолки любой сложности фотопечатью. От производителя BAUF 205. Создают выразительный дизайн и подчеркивают индивидуальность интерьера.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-4.webp',
    textures: ['glyantsevye'],
    types: ['zvezdnoe-nebo'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['200+ цветов', 'BAUF 205', 'Зеркальный эффект'],
    seoTitle: 'Цветные глянцевые натяжные потолки BAUF 205 - 460₽/м²',
    seoDescription: 'Цветные глянцевые натяжные потолки BAUF 205 по цене 460₽/м². 200+ цветов с зеркальным эффектом.'
  },
  {
    id: 'premium-glyantsevye',
    name: 'Матовые потолки звездное небо',
    description: 'Высококачественные матовые потолки от производителя BAUF 270. Максимальная прочность с зеркальным эффектом.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-6.webp',
    textures: ['matovye'],
    types: ['zvezdnoe-nebo'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF 270', 'Премиум качество', 'Зеркальный эффект'],
    seoTitle: 'Премиум глянцевые натяжные потолки BAUF 270 - 555₽/м²',
    seoDescription: 'Премиум глянцевые натяжные потолки BAUF 270 по цене 555₽/м². Максимальная прочность с зеркальным эффектом.'
  },
  {
    id: 'ognezashchitnye-glyantsevye',
    name: 'Сатиновые потолки с магнитным треком',
    description: 'Глянцевые потолки с повышенной огнестойкостью BAUF FIRE PROOF. Безопасность с зеркальным эффектом.',
    price: { min: 445, max: 445, unit: '₽/м²' },
    image: '/img/work-8.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF FIRE PROOF', 'Безопасность', 'Зеркальный эффект'],
    seoTitle: 'Огнестойкие глянцевые натяжные потолки BAUF FIRE PROOF - 445₽/м²',
    seoDescription: 'Огнестойкие глянцевые натяжные потолки BAUF FIRE PROOF по цене 445₽/м². Безопасность с зеркальным эффектом.'
  },
  {
    id: 'fakturnye-potolki',
    name: 'Сатиновые потолки световые линии',
    description: 'Сатиновые потолки с освещением люстра, световые линии и магнитные треки. Создают уникальный дизайн и добавляют характер помещению.',
    price: { min: 880, max: 880, unit: '₽/м²' },
    image: '/img/work-9.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['lumfer'],
    features: ['LumFer', '3D текстуры', 'Эксклюзивный дизайн'],
    seoTitle: 'Фактурные натяжные потолки LumFer - 880₽/м²',
    seoDescription: 'Фактурные натяжные потолки LumFer по цене 880₽/м². 3D текстуры и эксклюзивный дизайн.'
  },
  {
    id: 'dvukhurovnevye-s-podsvetkoy',
    name: 'Матовые потолки с накладным треком',
    description: 'Современные матовые потолки с накладным треком. Создают объем и глубину в помещении.',
    price: { min: 350, max: 1800, unit: '₽/м²' },
    image: '/img/work-10.jpg',
    textures: ['matovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'teqtum'],
    features: ['LED-подсветка', 'Двухуровневая конструкция', 'Зонирование пространства'],
    seoTitle: 'Двухуровневые потолки с подсветкой - от 350₽/м²',
    seoDescription: 'Двухуровневые натяжные потолки с LED-подсветкой. Современное решение для создания объема и зонирования.'
  },
  {
    id: 'zvezdnoe-nebo',
    name: 'Сатиновые потолки с световыми линиями',
    description: 'Сатиновые потолки с световыми линиями. Создают особую атмосферу и становятся главным акцентом интерьера.',
    price: { min: 1500, max: 2500, unit: '₽/м²' },
    image: '/img/work-11.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['spalnya', 'detskaya', 'gostinaya'],
    manufacturers: ['lumfer', 'cerutti'],
    features: ['Эффект звездного неба', 'Индивидуальный дизайн', 'Особая атмосфера'],
    seoTitle: 'Потолки "Звездное небо" - от 1500₽/м²',
    seoDescription: 'Потолки "Звездное небо" с уникальными эффектами. Создайте особую атмосферу в вашем интерьере.'
  },
  {
    id: 's-fotopechatyu',
    name: 'Матовые потолки с накладными треками',
    description: 'Матовые потолки с накладными треками и световыми линиями. Создают уникальный дизайн и подчеркивают стиль интерьера.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-12.jpg',
    textures: ['matovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Любая сложность', 'Высокое качество печати', 'Индивидуальный дизайн'],
    seoTitle: 'Фото печать любой сложности - от 3900₽/м²',
    seoDescription: 'Натяжные потолки с фотопечатью любой сложности. Создайте уникальный дизайн в вашем интерьере.'
  },
  {
    id: 'paryashchie-potolki',
    name: 'Двух уровнявые потолки с подсветкой',
    description: 'Встроенные точечные светильники с темными кольцами. Создают эффект "парящего" потолка.',
    price: { min: 4100, max: 4100, unit: '₽/м' },
    image: '/img/work-13.jpg',
    textures: ['satinovye'],
    types: ["dvukhurovnevye"],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['teqtum', 'lumfer'],
    features: ['Встроенная подсветка', 'Эффект "парящего" потолка', 'Без светодиодной ленты и блока питания'],
    seoTitle: 'Парящий профиль - 950₽/м',
    seoDescription: 'Парящий профиль для натяжных потолков. Создайте эффект "парящего" потолка.'
  },
  {
    id: 'tkanevye-potolki',
    name: 'Сатиновые потолки с подсветкой',
    description: 'Сатиновые потолки с подсветкой. Создают эффект "парящего" потолка.',
    price: { min: 1700, max: 1700, unit: '₽/м²' },
    image: '/img/work-14.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['detskaya', 'spalnya', 'gostinaya'],
    manufacturers: ['descor'],
    features: ['Descor', 'Гипоаллергенность', 'Натуральные материалы'],
    seoTitle: 'Тканевые потолки Descor - от 600₽/м²',
    seoDescription: 'Тканевые натяжные потолки Descor из натуральных материалов. Безопасность для здоровья.'
  },
  {
    id: '3d-potolki',
    name: 'Матовые потолки с подсветкой',
    description: 'Объемные матовые потолки с рельефными элементами и фактурой. Создают уникальный визуальный эффект.',
    price: { min: 350, max: 2000, unit: '₽/м²' },
    image: '/img/work-15.jpg',
    textures: ['matovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Рельефные элементы', 'Объемная фактура', 'Выразительный дизайн'],
    seoTitle: '3D потолки с объемными элементами - от 350₽/м²',
    seoDescription: '3D натяжные потолки с рельефными элементами. Создайте выразительный дизайн в интерьере.'
  },
  {
    id: 'svetovye-linii',
    name: 'Сатиновые потолки парящий профиль',
    description: 'Современные потолки с парящим профилем. Создают уникальную атмосферу и подчеркивают современный стиль.',
    price: { min: 3800, max: 3800, unit: '₽/м' },
    image: '/img/work-16.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['teqtum', 'lumfer'],
    features: ['Световые линии', 'Современный дизайн', 'Каждый угол +800₽'],
    seoTitle: 'Световые линии - 3800₽/м',
    seoDescription: 'Световые линии для натяжных потолков. Создайте уникальную атмосферу.'
  },
  {
    id: 'krivolinejnye-potolki',
    name: 'Глянцевые потолки с фотопечатью',
    description: 'Глянцевые потолки с фотопечатью. Создают выразительный интерьер.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-17.jpg',
    textures: ['glyantsevye'],
    types: ['s-fotopechatyu'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf', 'teqtum'],
    features: ['Уникальные формы', 'Криволинейные элементы', 'Выразительность'],
    seoTitle: 'Криволинейные потолки - от 1600₽/м²',
    seoDescription: 'Криволинейные натяжные потолки с уникальными формами. Создайте выразительный интерьер.'
  },
  {
    id: 'perforirovannye-potolki',
    name: 'Сатиновые потолки',
    description: 'Сатиновые потолки для помещений с особыми требованиями к акустике.',
    price: { min: 800, max: 1200, unit: '₽/м²' },
    image: '/img/work-18.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Перфорация', 'Улучшенная акустика', 'Специальные требования'],
    seoTitle: 'Перфорированные потолки - от 800₽/м²',
    seoDescription: 'Перфорированные натяжные потолки для помещений с особыми требованиями к акустике.'
  },
  {
    id: 'double-vision-potolki',
    name: 'Сатиновые потолки с парящим профилем',
    description: 'Сатиновые потолки с парящими профилями.',
    price: { min: 2000, max: 3500, unit: '₽/м²' },
    image: '/img/work-19.jpg',
    textures: ['satinovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Double Vision', 'Уникальные технологии', 'Эксклюзивность'],
    seoTitle: 'Потолки Double Vision - от 2000₽/м²',
    seoDescription: 'Инновационные натяжные потолки Double Vision с уникальными технологиями.'
  },
  {
    id: 'cold-stretch-potolki',
    name: 'Глянцево - матовые потолки с криволинейными элементами',
    description: 'Слева на потолках глянец, с справа матовый. Потолок выполнен в криволинейных элементах.',
    price: { min: 700, max: 1000, unit: '₽/м²' },
    image: '/img/work-20.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['krivolinejnye'],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['descor'],
    features: ['Холодная натяжка', 'Быстрый монтаж', 'Чистая установка'],
    seoTitle: 'Холодная натяжка Descor - от 700₽/м²',
    seoDescription: 'Натяжные потолки с холодной натяжкой Descor. Быстрый и чистый монтаж.'
  },
  {
    id: 'satinovye-potolki',
    name: 'Матовые потолки с накладным треком',
    description: 'Матовые потолки с множеством освещения магнитными треками.',
    price: { min: 500, max: 500, unit: '₽/м²' },
    image: '/img/work-21.jpg',
    textures: ['matovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Мягкий блеск', 'Элегантность', 'Универсальность'],
    seoTitle: 'Сатиновые натяжные потолки - 500₽/м²',
    seoDescription: 'Сатиновые натяжные потолки с мягким блеском. Элегантное решение для любого интерьера.'
  },
  {
    id: 'multiurovnevye-potolki',
    name: 'Матовые потолки',
    description: 'Матовые потолки с элегантным оранжевым цветом. Максимальная выразительность.',
    price: { min: 2000, max: 4000, unit: '₽/м²' },
    image: '/img/work-22.jpg',
    textures: ['matovye'],
    types: [],
    rooms: ['gostinaya', 'spalnya'],
    manufacturers: ['teqtum', 'lumfer', 'cerutti'],
    features: ['Многоуровневые конструкции', 'Комбинированные решения', 'Эксклюзивность'],
    seoTitle: 'Многоуровневые потолки - от 2000₽/м²',
    seoDescription: 'Многоуровневые натяжные потолки с комбинированными решениями. Создайте эксклюзивный дизайн.'
  },
  {
    id: 'akusticheskie-potolki',
    name: 'Глянцево - матовые потолки с перфорацией',
    description: 'Глянцево - матовые потолки с перфорацией.',
    price: { min: 1000, max: 1500, unit: '₽/м²' },
    image: '/img/work-23.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['perforirovannye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Акустические свойства', 'Звукоизоляция', 'Профессиональные решения'],
    seoTitle: 'Акустические потолки - от 1000₽/м²',
    seoDescription: 'Акустические натяжные потолки для помещений с повышенными требованиями к звукоизоляции.'
  },
  {
    id: 'vlagostoikie-potolki',
    name: 'Матовые потолки с фотопечатью',
    description: 'Матовые потолки с фотопечатью. Создают уникальный дизайн и подчеркивают стиль интерьера.',
    price: { min: 500, max: 500, unit: '₽/м²' },
    image: '/img/work-24.jpg',
    textures: ['matovye'],
    types: ['s-fotopechatyu'],
    rooms: ['kukhnya', 'vannaya', 'tualet'],
    manufacturers: ['msd', 'bauf'],
    features: ['Влагостойкость', 'Защита от плесени', 'Антибактериальное покрытие'],
    seoTitle: 'Влагостойкие потолки - 500₽/м²',
    seoDescription: 'Влагостойкие натяжные потолки для влажных помещений. Защита от влаги и плесени.'
  },
  {
    id: 'eksklyuzivnye-potolki',
    name: 'Глянцевые потолки с фотопечатью',
    description: 'Глянцевые потолки с фотопечатью. Создают уникальный дизайн и подчеркивают стиль интерьера.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-25.jpg',
    textures: ['glyantsevye'],
    types: ['s-fotopechatyu'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Эксклюзивные материалы', 'Уникальный дизайн', 'Премиум-класс'],
    seoTitle: 'Эксклюзивные потолки - от 2500₽/м²',
    seoDescription: 'Эксклюзивные натяжные потолки с уникальными материалами. Создайте роскошный интерьер.'
  },
  // Освещение
  {
    id: 'trek-nakladnoy',
    name: 'Матовые двухуровневые потолки',
    description: 'Матовые двухуровневые потолки. Создают эффект "парящего" потолка.',
    price: { min: 2100, max: 2100, unit: '₽/м' },
    image: '/img/work-26.jpg',
    textures: ['matovye'],
    types: ['dvukhurovnevye'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Накладной монтаж', 'Современный дизайн', 'Без светильников'],
    seoTitle: 'Трек накладной - 2100₽/м',
    seoDescription: 'Накладные трековые системы освещения для натяжных потолков. Современное решение.'
  },
  {
    id: 'trek-magnitnye',
    name: 'Глянцевые потолки с перфорацией',
    description: 'Глянцевые потолки с перфорацией. Создают уникальный дизайн и подчеркивают стиль интерьера.',
    price: { min: 12500, max: 12500, unit: '₽/м' },
    image: '/img/work-28.jpg',
    textures: ['glyantsevye'],
    types: ['perforirovannye'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Магнитная система', 'Инновационный дизайн', 'Без светильников'],
    seoTitle: 'Магнитные треки - 12500₽/м',
    seoDescription: 'Магнитные трековые системы освещения для натяжных потолков. Инновационное решение.'
  },
  {
    id: 'karniz-am1',
    name: 'Карниз Ам 1',
    description: 'Карниз Ам 1 для штор и жалюзи. Элегантное решение для оформления окон.',
    price: { min: 3000, max: 3000, unit: '₽/м' },
    image: '/img/work-29.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Элегантный дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Ам 1 - 3000₽/м',
    seoDescription: 'Карниз Ам 1 для штор и жалюзи. Элегантное решение для оформления окон.'
  },
  {
    id: 'karniz-pk15',
    name: 'Карниз Пк15',
    description: 'Карниз Пк15 для штор и жалюзи. Современное решение для оформления окон.',
    price: { min: 2500, max: 2500, unit: '₽/м' },
    image: '/img/work-30.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Современный дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк15 - 2500₽/м',
    seoDescription: 'Карниз Пк15 для штор и жалюзи. Современное решение для оформления окон.'
  },
  {
    id: 'karniz-pk14',
    name: 'Карниз Пк 14',
    description: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.',
    price: { min: 3500, max: 3500, unit: '₽/м' },
    image: '/img/work-31.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  {
    id: 'svetovye-linii-pro-1',
    name: 'Световые линии в натяжном потолке',
    description: 'Освещение в натяжном потолке с помощью световых линий. Стоимость зависит от количества углов. Создают уникальную атмосферу. Уникальное решение для современных интерьеров.',
    price: { min: 3800, max: 3800, unit: '₽/м' },
    image: '/img/work-1.webp',
    textures: [],
    types: ['svetovye-linii'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  {
    id: 'svetovye-linii-pro-2',
    name: 'Световые линии в натяжном потолке',
    description: 'Освещение в натяжном потолке с помощью световых линий. Стоимость зависит от количества углов. Создают уникальную атмосферу. Уникальное решение для современных интерьеров.',
    price: { min: 3800, max: 3800, unit: '₽/м' },
    image: '/img/work-11.jpg',
    textures: [],
    types: ['svetovye-linii'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  
  
  
  
  
  
  
  {
    id: 'trek-vstroennyy-pro-1',
    name: 'Парящий профиль',
    description: 'Освещение в натяжном потолке с помощью парящего профиля. Создают эффект "парящего" потолка.',
    price: { min: 950, max: 950, unit: '₽/м' },
    image: '/img/work-19.jpg',
    textures: [],
    types: ['paryashchie'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  {
    id: 'trek-magnitnye-pro-1',
    name: 'Трек встроенный',
    description: 'Освещение в натяжном потолке с помощью встроенного трека. Элегантное решение для создания скрытого освещения.',
    price: { min: 4900, max: 4900, unit: '₽/м' },
    image: '/img/work-32.jpg',
    textures: [],
    types: ['trek-vstroennyy'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  {
    id: 'trek-magnitnye-pro-2',
    name: 'Магнитные треки',
    description: 'Освещение в натяжном потолке с помощью магнитных треков. Инновационное решение для создания скрытого освещения.',
    price: { min: 12500, max: 12500, unit: '₽/м' },
    image: '/img/work-8.jpg',
    textures: [],
    types: ['trek-magnitnye'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  {
    id: 'trek-nakladnoy-pro-1',
    name: 'Накладной трек',
    description: 'Освещение в натяжном потолке с помощью накладного трека. Создают объем и глубину в помещении.',
    price: { min: 2500, max: 2500, unit: '₽/м' },
    image: '/img/work-33.jpg',
    textures: [],
    types: ['trek-nakladnoy'],
    rooms: ['gostinaya','spalnya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж'],
    seoTitle: 'Трек встроенный PRO - 4900₽/м',
    seoDescription: 'Встроенные треки для натяжных потолков.'
  },
  {
    id: 'karniz-pk14-profile-1',
    name: 'Теневой профиль',
    description: 'Теневой профиль для создания теней в помещении. Индивидуальный дизайн.',
    price: { min: 450, max: 450, unit: '₽/м' },
    image: '/img/work-34.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  {
    id: 'karniz-pk14-profile-2',
    name: 'Парящий профиль',
    description: 'Парящий профиль для создания эффекта "парящего" потолка. Индивидуальный дизайн.',
    price: { min: 950, max: 950, unit: '₽/м' },
    image: '/img/work-37.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  {
    id: 'karniz-pk14-profile-3',
    name: 'Теневой профиль EuroKRAAB',
    description: 'Теневой профиль EuroKRAAB для создания теней в помещении. Индивидуальный дизайн.',
    price: { min: 1000, max: 1000, unit: '₽/м' },
    image: '/img/work-31.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  {
    id: 'karniz-pk14-profile-4',
    name: 'Багет ПВХ',
    description: 'Багет ПВХ — универсальное приспособление для крепления натяжных потолков',
    price: { min: 130, max: 130, unit: '₽/м' },
    image: '/img/work-38.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  {
    id: 'karniz-pk14-profile-5',
    name: 'Багет алюминиевый перфорированный',
    description: 'Багет алюминиевый перфорированный — универсальное приспособление для крепления натяжных потолков',
    price: { min: 250, max: 250, unit: '₽/м' },
    image: '/img/work-35.jpg',
    textures: [],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
];

// Функция фильтрации продуктов
export function filterProducts(products: CeilingProduct[], filter: CatalogFilter): CeilingProduct[] {
  return products.filter(product => {
    // Фильтр по текстурам
    if (filter.textures.length > 0 && !filter.textures.some(t => product.textures.includes(t))) {
      return false;
    }
    
    // Фильтр по типам
    if (filter.types.length > 0 && !filter.types.some(t => product.types.includes(t))) {
      return false;
    }
    
    // Фильтр по помещениям
    if (filter.rooms.length > 0 && !filter.rooms.some(r => product.rooms.includes(r))) {
      return false;
    }
    
    // Фильтр по производителям
    if (filter.manufacturers.length > 0 && !filter.manufacturers.some(m => product.manufacturers.includes(m))) {
      return false;
    }
    
    // Фильтр по цене
    if (product.price.min > filter.priceRange[1] || product.price.max < filter.priceRange[0]) {
      return false;
    }
    
    return true;
  });
}

// Функция получения опций фильтров
export function getFilterOptions(products: CeilingProduct[]): CatalogData['filters'] {
  const textureCounts: Record<string, number> = {};
  const typeCounts: Record<string, number> = {};
  const roomCounts: Record<string, number> = {};
  const manufacturerCounts: Record<string, number> = {};
  
  products.forEach(product => {
    product.textures.forEach(texture => {
      textureCounts[texture] = (textureCounts[texture] || 0) + 1;
    });
    
    product.types.forEach(type => {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    
    product.rooms.forEach(room => {
      roomCounts[room] = (roomCounts[room] || 0) + 1;
    });
    
    product.manufacturers.forEach(manufacturer => {
      manufacturerCounts[manufacturer] = (manufacturerCounts[manufacturer] || 0) + 1;
    });
  });
  
  return {
    textures: Object.entries(textureCounts).map(([value, count]) => ({
      value,
      label: TEXTURE_LABELS[value as keyof typeof TEXTURE_LABELS],
      count
    })),
    types: Object.entries(typeCounts).map(([value, count]) => ({
      value,
      label: TYPE_LABELS[value as keyof typeof TYPE_LABELS],
      count
    })),
    rooms: Object.entries(roomCounts).map(([value, count]) => ({
      value,
      label: ROOM_LABELS[value as keyof typeof ROOM_LABELS],
      count
    })),
    manufacturers: Object.entries(manufacturerCounts).map(([value, count]) => ({
      value,
      label: MANUFACTURER_LABELS[value as keyof typeof MANUFACTURER_LABELS],
      count
    })),
    services: Object.entries(SERVICE_LABELS).map(([value, label]) => ({
      value,
      label,
      count: 1 // Все услуги доступны
    }))
  };
}

// Функция получения данных каталога
export function getCatalogData(filter: CatalogFilter = {
  textures: [],
  types: [],
  rooms: [],
  manufacturers: [],
  services: [],
  priceRange: [0, 20000]
}): CatalogData {
  const filteredProducts = filterProducts(catalogProducts, filter);
  const filters = getFilterOptions(catalogProducts);
  
  return {
    products: filteredProducts,
    filters,
    totalCount: filteredProducts.length
  };
}

// Функция получения продукта по ID
export function getProductById(id: string): CeilingProduct | undefined {
  return catalogProducts.find(product => product.id === id);
}
