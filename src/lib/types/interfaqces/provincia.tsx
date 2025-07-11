
export interface IItem{
    id: number
    uuid: string
    nome: string
}
export interface ICultura extends IItem{
    resumo: string
    paragrafos: string[]
}

export interface IMuinicipio extends IItem{
    cultura: ICultura[]
}

export interface IProvincia extends IItem{
    municipio: IMuinicipio[]
}