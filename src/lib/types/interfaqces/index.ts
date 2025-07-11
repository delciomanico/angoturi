import { ReactNode } from "react"

export interface Iitem_Simples{
    titulo:      string
    descriao:    (string | ReactNode)[]
}

export interface Iitem extends Iitem_Simples{
    id:         number,
    uuid:       string
    image:      string
}

export interface ILocalizacao_Geografica{
    latitude:   number
    longitude:  number
    precisao:   number
}

export interface ICultura extends Iitem {
    culturas:   Iitem[]
}

export interface IPAtrimonio extends Iitem {
    patrimonios:    Iitem[]
}

export interface IPAtrimonio_Cultura extends Iitem {
    cultura:    ICultura[]
    patrimonio: IPAtrimonio[]
}

export interface ISubdivisoes_e_Bairros extends Iitem{
    comunas: Iitem[]
    bairros: Iitem[]
}

export interface IOrigem_nome extends Iitem{
    interpretacoes: {
        titulo:      string
        descriao:    string
    }[]
}

export interface IMunicipio extends Iitem{
    origem_Nome:            IOrigem_nome[]
    localizacao:             ILocalizacao_Geografica
    pontos_Turisticos:      Iitem[]
    economia_E_Lazer:       Iitem[]
    caracteristicas_gerais: Iitem_Simples[]
    patrimonio_E_Cultura:   IPAtrimonio_Cultura
    subdivisoes_E_Bairros:  ISubdivisoes_e_Bairros
}

export interface IProvince extends Iitem{
    municipios: IMunicipio[]
}