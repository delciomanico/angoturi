// app/[provincia]/[municipio]/page.tsx
'use client';
import { FuturisticHeader } from '@/components/2_municipio/FuturisticHeader';
import { NeonSection } from '@/components/2_municipio/NeonSection';
import { HolographicCard } from '@/components/2_municipio/HolographicCard';
import { InteractiveMap } from '@/components/2_municipio/InteractiveMap';

import { FuturisticCultureCard } from '@/components/2_municipio/FuturisticCultureCard';
import { provinces } from "@/lib/placeholderData";
import { Municipality, Province } from "@/lib/types/interfaqces";
import { UIPropsMunicipality } from '@/lib/types/interfaqces';
import { HolographicHeritage } from '@/components/2_municipio/HolographicHeritage';
import { useEffect, useState } from 'react';


export default function PageMunicipio({ params }: { params: any }) {

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


  if (loading) return <FuturisticLoader />;
  if (!municipality) return <FuturisticError />;

  return (
    <div className="bg-white text-gray-750 min-h-screen">
      <FuturisticHeader province={provincia as Province} municipality={municipality} />
      
      <NeonSection 
        title="Geografia Urbana" 
        subtitle="Explore a organização futurista do nosso município"
      >
        <InteractiveMap neighborhoods={municipality.subdivisionsAndNeighborhoods.neighborhoods} />
      </NeonSection>

      <NeonSection 
        title="Culturas Locais" 
        subtitle="Tradições reinventadas na era digital"
      >
        {municipality.heritageAndCulture.cultures.map((culture, index) => (
          <FuturisticCultureCard key={index} cultura={culture} />
        ))}
      </NeonSection>

      <NeonSection 
        title="Patrimônio Histórico" 
        subtitle="Nossa história em exibição holográfica"
      >
        <div className="col-span-full">
          {municipality.heritageAndCulture.heritages.map((heritage, index) => (
            <HolographicHeritage key={index} heritage={heritage} />
          ))}
        </div>
      </NeonSection>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <HolographicCard 
            title="Gastronomia Futurista"
            description="Sabores tradicionais com técnicas avançadas"
            image="/images/gastronomy.jpg"
          />
          <HolographicCard 
            title="Arte Digital"
            description="Exposições imersivas em realidade aumentada"
            image="/images/digital-art.jpg"
          />
          <HolographicCard 
            title="Transporte Inteligente"
            description="Mobilidade urbana de última geração"
            image="/images/transport.jpg"
          />
        </div>
      </div>
    </div>
  );
}

const FuturisticLoader = () => (
  <div className="flex items-center justify-center h-screen ">
    <div className="text-center">
      <div className="inline-block relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="mt-4 text-cyan-400">Carregando experiência futurista...</p>
    </div>
  </div>
);

const FuturisticError = () => (
  <div className="flex items-center justify-center h-screen bg-gray-950 text-center">
    <div>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-400 mb-8">Município não encontrado no sistema</p>
      <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity">
        Voltar ao mapa principal
      </button>
    </div>
  </div>
);