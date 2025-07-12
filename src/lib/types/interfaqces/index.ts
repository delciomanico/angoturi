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

export interface ItemComposite extends Item {
  locations: Item[];
}

// Localização geográfica
export interface Geolocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

// Cultura
export interface Culture extends Item {
  cultures: Item[];
}

// Patrimônio
export interface Heritage extends Item {
  heritages: ItemComposite[];
}

// Cultura + Patrimônio
export interface HeritageCulture extends Item {
  culture: Culture[];
  heritage: Heritage[];
}

// Subdivisões
export interface SubdivisionsAndNeighborhoods extends Item {
  communes: Item[];
  neighborhoods: Item[];
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