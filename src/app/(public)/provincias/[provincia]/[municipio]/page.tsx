"use client"

import AboutSectioMunipality from "@/components/municipio/AboutSectionMunicipio";
import CultureSectionMunicipality from "@/components/municipio/CultureSection";
import GeographySectionMunicipality from "@/components/municipio/GeographySectionnMunicipality";
import HeritageSectionnMunicipality from "@/components/municipio/HeritageSectionnMunicipality";
import { Provincias } from "@/lib/placeholderData";
import { IMunicipality, IProvincia } from "@/lib/types/interfaqces/provincia";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function PageProvince(){
    const params = useParams()
    const [provincia, setProvincia]  =  useState<IProvincia| null>(null)
    const [municipality, setMunipio] = useState<IMunicipality| null>(null)
    const [loading, setLoading] = useState(true)
    const tmpProvince = params.provincia;
    const tmpMunicipio = params.municipio;

    useEffect(()=>{
        setProvincia(Provincias.find(p=>(tmpProvince == p.title.toLowerCase() || tmpProvince == p.title )) || null)
    },[params])

    useEffect(()=>{
        if(provincia)
            setMunipio(provincia.municipality.find(m=> tmpMunicipio == m.title.toLowerCase() || tmpMunicipio == m.title) || null)
        setLoading(false)
    },[provincia])

    return (<>
        {loading?<>
            <div className="container mx-auto transition-all duration-300 delay-30">
                <h1 className="text-3xl text-white">Carregando...</h1>
            </div>
        </>:<>
            {municipality && provincia?<div className="mt-5">
                <AboutSectioMunipality province={provincia} municipality={municipality} />
                <HeritageSectionnMunicipality municipality={municipality} />
                <CultureSectionMunicipality province={provincia} municipality={municipality}/>
                <GeographySectionMunicipality municipality={municipality}/>
            </div>:<>
                <div className="text-2xl font-medium flex-col gap-3 flex items-center justify-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    <p>Este recuso não foi encontrado!</p>
                </div>
            </>}
        </>}
    </>)
}
