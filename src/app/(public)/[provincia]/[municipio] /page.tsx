"use client"

import { useParams } from "next/navigation"

export default function PageMunicipio(){
    const params = useParams()
    const municipio = params.municipio;
    return (<>
        E aqui
        {municipio}
    </>)
}