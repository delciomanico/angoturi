"use client"

import AboutSectioMunipality from "@/components/municipio/AboutSectionMunicipio";
import CultureSectionMunicipality from "@/components/municipio/CultureSection";
import GeographySectionMunicipality from "@/components/municipio/GeographySectionnMunicipality";
import HeritageSectionnMunicipality from "@/components/municipio/HeritageSectionnMunicipality";
import { provinces } from "@/lib/placeholderData";
import { Municipality, Province } from "@/lib/types/interfaqces";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function PageProvince(){
    const params = useParams()
    const [provincia, setProvincia]  =  useState<Province| null>(null)
    const [municipality, setMunipio] = useState<Municipality| null>(null)
    const [loading, setLoading] = useState(true)
    const tmpProvince = params.provincia;
    const tmpMunicipio = params.municipio;

    useEffect(()=>{
        setProvincia(provinces.find(p=>(tmpProvince == p.title.toLowerCase() || tmpProvince == p.title )) || null)
    },[params])

    useEffect(()=>{
        if(provincia)
            setMunipio(provincia.municipalities.find(m=> tmpMunicipio == m.title.toLowerCase() || tmpMunicipio == m.title) || null)
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
                <HeritageSectionnMunicipality hiterages={municipality.heritageAndCulture.heritage[0]} />
                <CultureSectionMunicipality municipality={municipality}/>
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
