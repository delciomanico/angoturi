

export interface IItem{
    id: number
    uuid: string
    title: string
    image: string
    description: string[]
}

export interface ICulture extends IItem{
    paragraph: string[]
}

export interface IHeritage extends IItem{
    resumo: string
    paragraph: string[]
}

export interface IGeography extends IItem{
}

export interface IMunicipality extends IItem{
    culture:    IItem & { variants:ICulture[]}
    heritage:   IHeritage[]
    geography:  IItem & { cities:IGeography[]}
}

export interface IProvincia extends IItem{
    municipality: IMunicipality[]
}

export interface UIPropsMunicipality{
    province: IProvincia,
    municipality:IMunicipality
}