export interface CeilingProduct {
  id: string;
  name: string;
  description: string;
  price: {
    min: number;
    max: number;
    unit: string;
  };
  image: string;
  textures: TextureType[];
  types: CeilingType[];
  rooms: RoomType[];
  manufacturers: Manufacturer[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

export type TextureType = 
  | 'matovye'
  | 'glyantsevye'
  | 'satinovye'
  | 'tkanevye'
  | 'fakturnye'
  | 'cold-stretch'
  | 'eksklyuzivnye';

export type CeilingType = 
  | 's-podsvetkoy'
  | 'dvukhurovnevye'
  | 'paryashchie'
  | 'tenevye'
  | 's-fotopechatyu'
  | 'zvezdnoe-nebo'
  | 'svetovye-linii'
  | 'besshchelevye'
  | 'perforirovannye'
  | 'krivolinejnye'
  | 'double-vision'
  | '3d'
  | 'osveshchenie'
  | 'bagety'
  | 'karnizy'
  | 'dopolnitelnye-uslugi';

export type RoomType = 
  | 'kukhnya'
  | 'vannaya'
  | 'gostinaya'
  | 'spalnya'
  | 'detskaya'
  | 'prikhozhaya'
  | 'tualet'
  | 'mansarda'
  | 'balkon'
  | 'kvartira'
  | 'chastnyy-dom'
  | 'dacha';

export type Manufacturer = 
  | 'msd'
  | 'bauf'
  | 'descor'
  | 'clipso'
  | 'teqtum'
  | 'lumfer'
  | 'cerutti'
  | 'halead';

export type ServiceType = 
  | 'sliv-vody'
  | 'demontazh'
  | 'zamena'
  | 'remont'
  | 'ustanovka-svetilnikov';

export interface CatalogFilter {
  textures: TextureType[];
  types: CeilingType[];
  rooms: RoomType[];
  manufacturers: Manufacturer[];
  services: ServiceType[];
  priceRange: [number, number];
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface CatalogData {
  products: CeilingProduct[];
  filters: {
    textures: FilterOption[];
    types: FilterOption[];
    rooms: FilterOption[];
    manufacturers: FilterOption[];
    services: FilterOption[];
  };
  totalCount: number;
}

export const TEXTURE_LABELS: Record<TextureType, string> = {
  'matovye': 'Матовые',
  'glyantsevye': 'Глянцевые',
  'satinovye': 'Сатиновые',
  'tkanevye': 'Тканевые',
  'fakturnye': 'Фактурные',
  'cold-stretch': 'Cold Stretch',
  'eksklyuzivnye': 'Эксклюзивные'
};

export const TYPE_LABELS: Record<CeilingType, string> = {
  's-podsvetkoy': 'С подсветкой',
  'dvukhurovnevye': 'Двухуровневые',
  'paryashchie': 'Парящие потолки',
  'tenevye': 'Теневые потолки',
  's-fotopechatyu': 'С фотопечатью',
  'zvezdnoe-nebo': 'Звездное небо',
  'svetovye-linii': 'Световые линии',
  'besshchelevye': 'Бесщелевые потолки',
  'perforirovannye': 'Перфорированные',
  'krivolinejnye': 'Криволинейные',
  'double-vision': 'Double Vision',
  '3d': '3D потолки',
  'osveshchenie': 'Освещение',
  'bagety': 'Багеты',
  'karnizy': 'Карнизы',
  'dopolnitelnye-uslugi': 'Дополнительные услуги'
};

export const ROOM_LABELS: Record<RoomType, string> = {
  'kukhnya': 'На кухне',
  'vannaya': 'В ванной',
  'gostinaya': 'В гостиную',
  'spalnya': 'В спальню',
  'detskaya': 'В детскую',
  'prikhozhaya': 'В прихожую',
  'tualet': 'В туалет',
  'mansarda': 'На мансарде',
  'balkon': 'На балконе',
  'kvartira': 'В квартиру',
  'chastnyy-dom': 'В частный дом',
  'dacha': 'На даче'
};

export const MANUFACTURER_LABELS: Record<Manufacturer, string> = {
  'msd': 'MSD',
  'bauf': 'Bauf (Германия)',
  'descor': 'Descor',
  'clipso': 'Clipso',
  'teqtum': 'Teqtum',
  'lumfer': 'Lumfer',
  'cerutti': 'Cerutti',
  'halead': 'Halead'
};

export const SERVICE_LABELS: Record<ServiceType, string> = {
  'sliv-vody': 'Слив воды с потолка',
  'demontazh': 'Демонтаж полотен',
  'zamena': 'Замена полотна',
  'remont': 'Ремонт натяжного потолка',
  'ustanovka-svetilnikov': 'Установка потолочных светильников'
};
