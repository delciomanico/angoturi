import { match } from "assert";
import { IProvincia } from "./types/interfaqces/provincia";

export const Provincias: IProvincia[] = [
    {
        id: Math.random(),
        uuid: "IGB1",
        nome: "Luanda",
        municipio: [
            {
                id: Math.random(),
                uuid: "IGB1",
                nome: "Ingobo",
                cultura: [

                ]
            }
        ]
    }
]