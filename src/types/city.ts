export interface City {
  id: string;
  name: string;
  nameGenitive: string; // в родительном падеже
  namePrepositional: string; // в предложном падеже
  slug: string;
  isMain: boolean;
  isDistant: boolean;
  minOrderAmount?: number; // минимальная сумма для дальних городов
  coordinates?: {
    lat: number;
    lng: number;
  };
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface CityData {
  currentCity: City;
  allCities: City[];
  nearbyCities: City[];
  distantCities: City[];
}
