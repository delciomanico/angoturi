import { ReactNode } from "react";

// Tipos reutilizáveis
export interface DescriptionBlock {
  title: string;
  description: string | ReactNode | (string | ReactNode)[];
}

// Item base
export interface ItemSimple {
  title: string;
  description: (string | ReactNode)[];
}

export interface Item extends ItemSimple {
  id: number;
  uuid: string;
  image: string;
}

export interface ItemComposite {
  id: number;
  uuid: string;
  title: string;
  image: string;
  description: string | ReactNode;
}

// Localização geográfica
export interface Geolocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface  HiterageItem extends ItemComposite {
  locations: ItemComposite[]
}

// Cultura + Patrimônio
export interface HeritageCulture extends Item {
  cultures: ItemComposite[];
  heritages: HiterageItem[];
}

// Subdivisões
export interface SubdivisionsAndNeighborhoods extends Item {
  communes: ItemComposite[];
  neighborhoods: ItemComposite[];
}

// Origem do nome
export interface NameOrigin extends Item {
  interpretations: {
    title: string;
    description: string;
  }[];
}

// Município
export interface Municipality extends Item {
  nameOrigins: NameOrigin[];
  location: Geolocation;
  touristAttractions: Item[];
  economyAndLeisure: Item[];
  generalCharacteristics: ItemSimple[];
  heritageAndCulture: HeritageCulture;
  subdivisionsAndNeighborhoods: SubdivisionsAndNeighborhoods;
}

// Província
export interface Province extends Item {
  municipalities: Municipality[];
}

export interface UIPropsMunicipality{
    province: Province,
    municipality:Municipality
}