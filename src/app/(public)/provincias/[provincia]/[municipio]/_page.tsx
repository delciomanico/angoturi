"use client"

import AboutSectioMunipality from "@/components/_municipio/AboutSectionMunicipio";
import SeccaoCultura from "@/components/_municipio/culturas";
// import CultureSectionMunicipality from "@/components/municipio/CultureSection";
import GeographySectionMunicipality from "@/components/_municipio/GeographySectionnMunicipality";
import HeritageSectionnMunicipality from "@/components/_municipio/HeritageSectionnMunicipality";
import { SessaoPatrimonio } from "@/components/_municipio/patrimonios";
import { provinces } from "@/lib/placeholderData";
import { Municipality, Province } from "@/lib/types/interfaqces";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function PageProvince(){
    const params = useParams()
    const [provincia, setProvincia]  =  useState<Province| null>(null)
    const [municipality, setMunipio] = useState<Municipality| null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const tmpProvince = decodeURIComponent(params.provincia as string);
        setProvincia(provinces.find(p=>(tmpProvince == p.title.toLowerCase() || tmpProvince == p.title )) || null)
    },[params])

    useEffect(()=>{
        const tmpMunicipio = decodeURIComponent(params.municipio as string);
        if(provincia)
            setMunipio(provincia.municipalities.find(m=> tmpMunicipio == m.title.toLowerCase() || tmpMunicipio == m.title) || null)
        setLoading(false)
    },[provincia, params])

    return (<>
        {loading?<>
            <div className="container mx-auto transition-all duration-300 delay-30">
                <h1 className="text-3xl text-white">Carregando...</h1>
            </div>
        </>:<>
            {provincia?<div className="mt-5">
                {municipality?<div className="mt-5">
                    <AboutSectioMunipality province={provincia} municipality={municipality} />
                    <SessaoPatrimonio hiterages={municipality.heritageAndCulture.heritages} />
                    <div className="">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500">
                            Patrimônio e Pontos Turísticos
                        </h2>
                        
                        <div className="grid gap-5">
                            {municipality.heritageAndCulture.heritages.map((item, key)=><HeritageSectionnMunicipality key={key} hiterage={item} />) }
                        </div>
                    </div>
                    <SeccaoCultura cultures={municipality.heritageAndCulture.cultures} />
                    {/* <CultureSectionMunicipality cultures={municipality.heritageAndCulture.cultures}/> */}
                    <GeographySectionMunicipality municipality={municipality}/>
                </div>:<>
                    <div className="text-2xl font-medium flex-col gap-3 flex items-center justify-center">
                        <h1 className="text-6xl font-bold">404</h1>
                        <p>Este recuso não foi encontrado!</p>
                    </div>
            </>}
            </div>:<>
                <div className="text-2xl font-medium flex-col gap-3 flex items-center justify-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    <p>Este recuso não foi encontrado!</p>
                </div>
            </>}
        </>}
    </>)
}
