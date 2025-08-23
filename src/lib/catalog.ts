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
    name: 'Матовые белые потолки BAUF 205',
    description: 'Классические матовые потолки белого цвета. Универсальное решение для любого интерьера. Создают мягкое рассеянное освещение и идеально подходят для современных и классических стилей.',
    price: { min: 405, max: 405, unit: '₽/м²' },
    image: '/img/work-1.webp',
    textures: ['matovye'],
    types: ['besshchelevye'],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['BAUF 205', 'Гарантия 15 лет', 'Быстрый монтаж'],
    seoTitle: 'Матовые белые натяжные потолки BAUF 205 - 405₽/м²',
    seoDescription: 'Матовые белые натяжные потолки BAUF 205 по цене 405₽/м². Бесплатный замер, качественный монтаж, гарантия 15 лет.'
  },
  {
    id: 'glyantsevye-belye',
    name: 'Глянцевые белые потолки BAUF 205',
    description: 'Блестящие глянцевые потолки с зеркальным эффектом. Визуально увеличивают пространство и создают эффект глубины. Идеальны для современных интерьеров.',
    price: { min: 415, max: 415, unit: '₽/м²' },
    image: '/img/work-2.webp',
    textures: ['glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF 205', 'Зеркальный эффект', 'Визуально больше'],
    seoTitle: 'Глянцевые белые натяжные потолки BAUF 205 - 415₽/м²',
    seoDescription: 'Глянцевые белые натяжные потолки BAUF 205 по цене 415₽/м². Зеркальный эффект, увеличение пространства.'
  },
  {
    id: 'tsvetnye-matovye',
    name: 'Цветные матовые потолки BAUF 205',
    description: 'Матовые потолки в любом цвете по вашему выбору. Индивидуальный подход к каждому проекту. Создают настроение и подчеркивают стиль интерьера.',
    price: { min: 450, max: 450, unit: '₽/м²' },
    image: '/img/work-3.webp',
    textures: ['matovye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['200+ цветов', 'BAUF 205', 'Индивидуальный дизайн'],
    seoTitle: 'Цветные матовые натяжные потолки BAUF 205 - 450₽/м²',
    seoDescription: 'Цветные матовые натяжные потолки BAUF 205 по цене 450₽/м². 200+ цветов на выбор.'
  },
  {
    id: 'tsvetnye-glyantsevye',
    name: 'Цветные глянцевые потолки BAUF 205',
    description: 'Глянцевые потолки в любом цвете с зеркальным эффектом. Создают выразительный дизайн и подчеркивают индивидуальность интерьера.',
    price: { min: 460, max: 460, unit: '₽/м²' },
    image: '/img/work-4.webp',
    textures: ['glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['200+ цветов', 'BAUF 205', 'Зеркальный эффект'],
    seoTitle: 'Цветные глянцевые натяжные потолки BAUF 205 - 460₽/м²',
    seoDescription: 'Цветные глянцевые натяжные потолки BAUF 205 по цене 460₽/м². 200+ цветов с зеркальным эффектом.'
  },
  {
    id: 'premium-matovye',
    name: 'Премиум матовые потолки BAUF 270',
    description: 'Высококачественные матовые потолки премиум-класса BAUF 270. Максимальная прочность и долговечность. Идеальны для требовательных клиентов.',
    price: { min: 545, max: 545, unit: '₽/м²' },
    image: '/img/work-5.webp',
    textures: ['matovye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF 270', 'Премиум качество', 'Максимальная прочность'],
    seoTitle: 'Премиум матовые натяжные потолки BAUF 270 - 545₽/м²',
    seoDescription: 'Премиум матовые натяжные потолки BAUF 270 по цене 545₽/м². Максимальная прочность и долговечность.'
  },
  {
    id: 'premium-glyantsevye',
    name: 'Премиум глянцевые потолки BAUF 270',
    description: 'Высококачественные глянцевые потолки премиум-класса BAUF 270. Максимальная прочность с зеркальным эффектом.',
    price: { min: 555, max: 555, unit: '₽/м²' },
    image: '/img/work-6.webp',
    textures: ['glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF 270', 'Премиум качество', 'Зеркальный эффект'],
    seoTitle: 'Премиум глянцевые натяжные потолки BAUF 270 - 555₽/м²',
    seoDescription: 'Премиум глянцевые натяжные потолки BAUF 270 по цене 555₽/м². Максимальная прочность с зеркальным эффектом.'
  },
  {
    id: 'ognezashchitnye-matovye',
    name: 'Огнестойкие матовые потолки BAUF FIRE PROOF',
    description: 'Потолки с повышенной огнестойкостью BAUF FIRE PROOF. Безопасность и сертификация для коммерческих помещений.',
    price: { min: 435, max: 435, unit: '₽/м²' },
    image: '/img/work-7.jpg',
    textures: ['matovye'],
    types: ['besshchelevye'],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['BAUF FIRE PROOF', 'Безопасность', 'Сертификация'],
    seoTitle: 'Огнестойкие матовые натяжные потолки BAUF FIRE PROOF - 435₽/м²',
    seoDescription: 'Огнестойкие матовые натяжные потолки BAUF FIRE PROOF по цене 435₽/м². Безопасность и сертификация.'
  },
  {
    id: 'ognezashchitnye-glyantsevye',
    name: 'Огнестойкие глянцевые потолки BAUF FIRE PROOF',
    description: 'Глянцевые потолки с повышенной огнестойкостью BAUF FIRE PROOF. Безопасность с зеркальным эффектом.',
    price: { min: 445, max: 445, unit: '₽/м²' },
    image: '/img/work-8.jpg',
    textures: ['glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['BAUF FIRE PROOF', 'Безопасность', 'Зеркальный эффект'],
    seoTitle: 'Огнестойкие глянцевые натяжные потолки BAUF FIRE PROOF - 445₽/м²',
    seoDescription: 'Огнестойкие глянцевые натяжные потолки BAUF FIRE PROOF по цене 445₽/м². Безопасность с зеркальным эффектом.'
  },
  {
    id: 'fakturnye-potolki',
    name: 'Фактурные потолки LumFer',
    description: 'Объёмные текстуры и рельефные поверхности LumFer. Создают уникальный дизайн и добавляют характер помещению.',
    price: { min: 880, max: 880, unit: '₽/м²' },
    image: '/img/work-9.jpg',
    textures: ['fakturnye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['lumfer'],
    features: ['LumFer', '3D текстуры', 'Эксклюзивный дизайн'],
    seoTitle: 'Фактурные натяжные потолки LumFer - 880₽/м²',
    seoDescription: 'Фактурные натяжные потолки LumFer по цене 880₽/м². 3D текстуры и эксклюзивный дизайн.'
  },
  {
    id: 'dvukhurovnevye-s-podsvetkoy',
    name: 'Двухуровневые потолки с подсветкой',
    description: 'Современные двухуровневые потолки с LED-подсветкой. Создают объем и глубину в помещении. Идеальны для создания зонирования.',
    price: { min: 1200, max: 1800, unit: '₽/м²' },
    image: '/img/work-10.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['dvukhurovnevye', 's-podsvetkoy'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'teqtum'],
    features: ['LED-подсветка', 'Двухуровневая конструкция', 'Зонирование пространства'],
    seoTitle: 'Двухуровневые потолки с подсветкой - от 1200₽/м²',
    seoDescription: 'Двухуровневые натяжные потолки с LED-подсветкой. Современное решение для создания объема и зонирования.'
  },
  {
    id: 'zvezdnoe-nebo',
    name: 'Потолки "Звездное небо"',
    description: 'Уникальные потолки с эффектом звездного неба. Создают особую атмосферу и становятся главным акцентом интерьера.',
    price: { min: 1500, max: 2500, unit: '₽/м²' },
    image: '/img/work-11.jpg',
    textures: ['matovye'],
    types: ['zvezdnoe-nebo'],
    rooms: ['spalnya', 'detskaya', 'gostinaya'],
    manufacturers: ['lumfer', 'cerutti'],
    features: ['Эффект звездного неба', 'Индивидуальный дизайн', 'Особая атмосфера'],
    seoTitle: 'Потолки "Звездное небо" - от 1500₽/м²',
    seoDescription: 'Потолки "Звездное небо" с уникальными эффектами. Создайте особую атмосферу в вашем интерьере.'
  },
  {
    id: 's-fotopechatyu',
    name: 'Фото печать любой сложности',
    description: 'Потолки с фотопечатью любой сложности. Создают уникальный дизайн и подчеркивают стиль интерьера.',
    price: { min: 3900, max: 3900, unit: '₽/м²' },
    image: '/img/work-12.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['s-fotopechatyu'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Любая сложность', 'Высокое качество печати', 'Индивидуальный дизайн'],
    seoTitle: 'Фото печать любой сложности - от 3900₽/м²',
    seoDescription: 'Натяжные потолки с фотопечатью любой сложности. Создайте уникальный дизайн в вашем интерьере.'
  },
  {
    id: 'paryashchie-potolki',
    name: 'Парящий профиль',
    description: 'Современные потолки с встроенной подсветкой по периметру. Создают эффект "парящего" потолка.',
    price: { min: 950, max: 950, unit: '₽/м' },
    image: '/img/work-13.jpg',
    textures: ['matovye', 'satinovye'],
    types: ['paryashchie', 's-podsvetkoy'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['teqtum', 'lumfer'],
    features: ['Встроенная подсветка', 'Эффект "парящего" потолка', 'Без светодиодной ленты и блока питания'],
    seoTitle: 'Парящий профиль - 950₽/м',
    seoDescription: 'Парящий профиль для натяжных потолков. Создайте эффект "парящего" потолка.'
  },
  {
    id: 'tkanevye-potolki',
    name: 'Тканевые потолки Descor',
    description: 'Тканевые потолки Descor из натуральных материалов. Идеальны для аллергиков и детских комнат.',
    price: { min: 600, max: 800, unit: '₽/м²' },
    image: '/img/work-14.jpg',
    textures: ['tkanevye'],
    types: ['besshchelevye'],
    rooms: ['detskaya', 'spalnya', 'gostinaya'],
    manufacturers: ['descor'],
    features: ['Descor', 'Гипоаллергенность', 'Натуральные материалы'],
    seoTitle: 'Тканевые потолки Descor - от 600₽/м²',
    seoDescription: 'Тканевые натяжные потолки Descor из натуральных материалов. Безопасность для здоровья.'
  },
  {
    id: '3d-potolki',
    name: '3D потолки с объемными элементами',
    description: 'Объемные потолки с рельефными элементами и фактурой. Создают уникальный визуальный эффект.',
    price: { min: 1200, max: 2000, unit: '₽/м²' },
    image: '/img/work-15.jpg',
    textures: ['fakturnye'],
    types: ['3d'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Рельефные элементы', 'Объемная фактура', 'Выразительный дизайн'],
    seoTitle: '3D потолки с объемными элементами - от 1200₽/м²',
    seoDescription: '3D натяжные потолки с рельефными элементами. Создайте выразительный дизайн в интерьере.'
  },
  {
    id: 'svetovye-linii',
    name: 'Световые линии',
    description: 'Современные потолки со встроенными световыми линиями. Создают уникальную атмосферу и подчеркивают современный стиль.',
    price: { min: 3800, max: 3800, unit: '₽/м' },
    image: '/img/work-16.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['svetovye-linii', 's-podsvetkoy'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['teqtum', 'lumfer'],
    features: ['Световые линии', 'Современный дизайн', 'Каждый угол +800₽'],
    seoTitle: 'Световые линии - 3800₽/м',
    seoDescription: 'Световые линии для натяжных потолков. Создайте уникальную атмосферу.'
  },
  {
    id: 'krivolinejnye-potolki',
    name: 'Криволинейные потолки',
    description: 'Потолки с уникальными формами и криволинейными элементами. Создают выразительный интерьер.',
    price: { min: 1600, max: 2500, unit: '₽/м²' },
    image: '/img/work-17.jpg',
    textures: ['matovye', 'satinovye'],
    types: ['krivolinejnye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf', 'teqtum'],
    features: ['Уникальные формы', 'Криволинейные элементы', 'Выразительность'],
    seoTitle: 'Криволинейные потолки - от 1600₽/м²',
    seoDescription: 'Криволинейные натяжные потолки с уникальными формами. Создайте выразительный интерьер.'
  },
  {
    id: 'perforirovannye-potolki',
    name: 'Перфорированные потолки',
    description: 'Перфорированные потолки для помещений с особыми требованиями к акустике.',
    price: { min: 800, max: 1200, unit: '₽/м²' },
    image: '/img/work-18.jpg',
    textures: ['matovye'],
    types: ['perforirovannye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Перфорация', 'Улучшенная акустика', 'Специальные требования'],
    seoTitle: 'Перфорированные потолки - от 800₽/м²',
    seoDescription: 'Перфорированные натяжные потолки для помещений с особыми требованиями к акустике.'
  },
  {
    id: 'double-vision-potolki',
    name: 'Потолки Double Vision',
    description: 'Инновационные потолки Double Vision с уникальными технологиями и эффектами.',
    price: { min: 2000, max: 3500, unit: '₽/м²' },
    image: '/img/work-19.jpg',
    textures: ['eksklyuzivnye'],
    types: ['double-vision'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Double Vision', 'Уникальные технологии', 'Эксклюзивность'],
    seoTitle: 'Потолки Double Vision - от 2000₽/м²',
    seoDescription: 'Инновационные натяжные потолки Double Vision с уникальными технологиями.'
  },
  {
    id: 'cold-stretch-potolki',
    name: 'Холодная натяжка Descor',
    description: 'Потолки с холодной натяжкой Descor. Быстрый и чистый монтаж без нагрева.',
    price: { min: 700, max: 1000, unit: '₽/м²' },
    image: '/img/work-20.jpg',
    textures: ['cold-stretch'],
    types: ['besshchelevye'],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['descor'],
    features: ['Холодная натяжка', 'Быстрый монтаж', 'Чистая установка'],
    seoTitle: 'Холодная натяжка Descor - от 700₽/м²',
    seoDescription: 'Натяжные потолки с холодной натяжкой Descor. Быстрый и чистый монтаж.'
  },
  {
    id: 'satinovye-potolki',
    name: 'Сатиновые потолки',
    description: 'Сатиновые потолки с мягким блеском. Идеальное сочетание матовости и глянца.',
    price: { min: 500, max: 500, unit: '₽/м²' },
    image: '/img/work-21.jpg',
    textures: ['satinovye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Мягкий блеск', 'Элегантность', 'Универсальность'],
    seoTitle: 'Сатиновые натяжные потолки - 500₽/м²',
    seoDescription: 'Сатиновые натяжные потолки с мягким блеском. Элегантное решение для любого интерьера.'
  },
  {
    id: 'multiurovnevye-potolki',
    name: 'Многоуровневые потолки',
    description: 'Сложные многоуровневые потолки с комбинированными решениями. Максимальная выразительность.',
    price: { min: 2000, max: 4000, unit: '₽/м²' },
    image: '/img/work-22.jpg',
    textures: ['matovye', 'glyantsevye', 'satinovye'],
    types: ['dvukhurovnevye', 's-podsvetkoy', 'krivolinejnye'],
    rooms: ['gostinaya', 'spalnya'],
    manufacturers: ['teqtum', 'lumfer', 'cerutti'],
    features: ['Многоуровневые конструкции', 'Комбинированные решения', 'Эксклюзивность'],
    seoTitle: 'Многоуровневые потолки - от 2000₽/м²',
    seoDescription: 'Многоуровневые натяжные потолки с комбинированными решениями. Создайте эксклюзивный дизайн.'
  },
  {
    id: 'akusticheskie-potolki',
    name: 'Акустические потолки',
    description: 'Акустические потолки для помещений с повышенными требованиями к звукоизоляции.',
    price: { min: 1000, max: 1500, unit: '₽/м²' },
    image: '/img/work-23.jpg',
    textures: ['fakturnye'],
    types: ['perforirovannye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['bauf', 'msd'],
    features: ['Акустические свойства', 'Звукоизоляция', 'Профессиональные решения'],
    seoTitle: 'Акустические потолки - от 1000₽/м²',
    seoDescription: 'Акустические натяжные потолки для помещений с повышенными требованиями к звукоизоляции.'
  },
  {
    id: 'vlagostoikie-potolki',
    name: 'Влагостойкие потолки',
    description: 'Влагостойкие потолки для влажных помещений. Защита от влаги, плесени и бактерий.',
    price: { min: 500, max: 500, unit: '₽/м²' },
    image: '/img/work-24.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['kukhnya', 'vannaya', 'tualet'],
    manufacturers: ['msd', 'bauf'],
    features: ['Влагостойкость', 'Защита от плесени', 'Антибактериальное покрытие'],
    seoTitle: 'Влагостойкие потолки - 500₽/м²',
    seoDescription: 'Влагостойкие натяжные потолки для влажных помещений. Защита от влаги и плесени.'
  },
  {
    id: 'eksklyuzivnye-potolki',
    name: 'Эксклюзивные потолки',
    description: 'Эксклюзивные потолки с уникальными материалами и дизайном. Создают неповторимую атмосферу.',
    price: { min: 2500, max: 5000, unit: '₽/м²' },
    image: '/img/work-25.jpg',
    textures: ['eksklyuzivnye'],
    types: ['double-vision', '3d', 'zvezdnoe-nebo'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['Эксклюзивные материалы', 'Уникальный дизайн', 'Премиум-класс'],
    seoTitle: 'Эксклюзивные потолки - от 2500₽/м²',
    seoDescription: 'Эксклюзивные натяжные потолки с уникальными материалами. Создайте роскошный интерьер.'
  },
  // Освещение
  {
    id: 'trek-nakladnoy',
    name: 'Трек накладной',
    description: 'Накладные трековые системы освещения для натяжных потолков. Современное решение для создания качественного освещения.',
    price: { min: 2100, max: 2100, unit: '₽/м' },
    image: '/img/work-1.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['osveshchenie'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Накладной монтаж', 'Современный дизайн', 'Без светильников'],
    seoTitle: 'Трек накладной - 2100₽/м',
    seoDescription: 'Накладные трековые системы освещения для натяжных потолков. Современное решение.'
  },
  {
    id: 'trek-vstroennyy',
    name: 'Трек встроенный',
    description: 'Встроенные трековые системы освещения для натяжных потолков. Элегантное решение для создания скрытого освещения.',
    price: { min: 4900, max: 4900, unit: '₽/м' },
    image: '/img/work-2.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['osveshchenie'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Встроенный монтаж', 'Элегантный дизайн', 'Без светильников'],
    seoTitle: 'Трек встроенный - 4900₽/м',
    seoDescription: 'Встроенные трековые системы освещения для натяжных потолков. Элегантное решение.'
  },
  {
    id: 'trek-magnitnye',
    name: 'Магнитные треки',
    description: 'Магнитные трековые системы освещения для натяжных потолков. Инновационное решение для современного освещения.',
    price: { min: 12500, max: 12500, unit: '₽/м' },
    image: '/img/work-3.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['osveshchenie'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'prikhozhaya'],
    manufacturers: ['bauf'],
    features: ['Магнитная система', 'Инновационный дизайн', 'Без светильников'],
    seoTitle: 'Магнитные треки - 12500₽/м',
    seoDescription: 'Магнитные трековые системы освещения для натяжных потолков. Инновационное решение.'
  },
  // Багеты
  {
    id: 'baget-pvh',
    name: 'Багет ПВХ',
    description: 'ПВХ багет для натяжного потолка. Качественный профиль для надежного монтажа потолков.',
    price: { min: 120, max: 120, unit: '₽/м' },
    image: '/img/work-4.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['bagety'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'vannaya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['ПВХ материал', 'Надежный монтаж', 'Универсальность'],
    seoTitle: 'Багет ПВХ - 120₽/м',
    seoDescription: 'ПВХ багет для натяжного потолка. Качественный профиль для надежного монтажа.'
  },
  {
    id: 'baget-alyuminievyy-perforirovannyy',
    name: 'Багет алюминиевый перфорированный',
    description: 'Алюминиевый перфорированный багет для натяжного потолка. Профессиональное решение для сложных монтажей.',
    price: { min: 250, max: 250, unit: '₽/м' },
    image: '/img/work-5.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['bagety'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'vannaya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['Алюминиевый профиль', 'Перфорация', 'Профессиональный монтаж'],
    seoTitle: 'Багет алюминиевый перфорированный - 250₽/м',
    seoDescription: 'Алюминиевый перфорированный багет для натяжного потолка. Профессиональное решение.'
  },
  // Карнизы
  {
    id: 'karniz-am1',
    name: 'Карниз Ам 1',
    description: 'Карниз Ам 1 для штор и жалюзи. Элегантное решение для оформления окон.',
    price: { min: 3000, max: 3000, unit: '₽/м' },
    image: '/img/work-6.webp',
    textures: ['matovye'],
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
    image: '/img/work-7.jpg',
    textures: ['matovye'],
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
    image: '/img/work-8.jpg',
    textures: ['matovye'],
    types: ['karnizy'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'detskaya'],
    manufacturers: ['bauf'],
    features: ['Премиум дизайн', 'Надежное крепление', 'Универсальность'],
    seoTitle: 'Карниз Пк 14 - 3500₽/м',
    seoDescription: 'Карниз Пк 14 для штор и жалюзи. Премиум решение для оформления окон.'
  },
  // Дополнительные услуги
  {
    id: 'ugly',
    name: 'Углы',
    description: 'Дополнительная услуга по монтажу углов. Каждый угол +1000₽.',
    price: { min: 1000, max: 1000, unit: '₽/шт' },
    image: '/img/work-9.jpg',
    textures: ['matovye', 'glyantsevye'],
    types: ['dopolnitelnye-uslugi'],
    rooms: ['gostinaya', 'spalnya', 'kukhnya', 'vannaya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['bauf'],
    features: ['Каждый угол +1000₽', 'Профессиональный монтаж', 'Качественное исполнение'],
    seoTitle: 'Углы - 1000₽/шт',
    seoDescription: 'Дополнительная услуга по монтажу углов. Каждый угол +1000₽.'
  }
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
  priceRange: [0, 10000]
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
