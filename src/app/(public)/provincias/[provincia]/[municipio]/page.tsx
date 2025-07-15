// app/[provincia]/[municipio]/page.tsx
'use client';
import { OfficialHeader } from '@/components/municipio/OfficialHeader';
import { CulturalCard } from '@/components/municipio/CulturalCard';
import { OfficialHeritageSection } from '@/components/municipio/OfficialHeritageSection';
import { NeighborhoodMap } from '@/components/municipio/NeighborhoodMap';
import { useEffect, useState } from 'react';
import { provinces } from '@/lib/placeholderData';
import { Municipality, Province } from '@/lib/types/interfaqces';
import { useParams } from 'next/navigation';
import { CulturalCarousel } from '@/components/municipio/CulturalCarousel';

export default function PageMunicipio() {

    const params = useParams();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState(0);
    const [activeNeighborhood, setActiveNeighborhood] = useState(0);
    const [activeHeritage, setActiveHeritage] = useState(0);
    const [activeHeritageItem, setActiveHeritageItem] = useState(0);
    const [selectedHeritage, setSelectedHeritage] = useState(0);
    const [provincia, setProvincia] = useState<Province | null>(null)
    const [municipality, setMunipio] = useState<Municipality | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const tmpProvince = decodeURIComponent(params.provincia as string);
        setProvincia(provinces.find(p => (tmpProvince == p.title.toLowerCase() || tmpProvince == p.title)) || null)
    }, [params])

    useEffect(() => {
        const tmpMunicipio = decodeURIComponent(params.municipio as string);
        if (provincia)
            setMunipio(provincia.municipalities.find(m => tmpMunicipio == m.title.toLowerCase() || tmpMunicipio == m.title) || null)
        setLoading(false)
    }, [provincia, params])
    if (loading) return <OfficialLoader />;
    if (!municipality) return <OfficialError />;

    return (
        <div className="bg-gray-50 min-h-screen">
            <OfficialHeader province={provincia as Province} municipality={municipality} />

            <section className="container mx-auto px-6 py-16">
                <NeighborhoodMap
                    neighborhoods={municipality.subdivisionsAndNeighborhoods.neighborhoods}
                    activeIndex={activeNeighborhood}
                    onSelect={setActiveNeighborhood}
                />
            </section>


           <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-6">
          <OfficialHeritageSection 
            heritages={municipality.heritageAndCulture.heritages}
            activeHeritage={activeHeritage}
            activeItem={activeHeritageItem}
            onSelectHeritage={setActiveHeritage}
            onSelectItem={setActiveHeritageItem}
          />
        </div>
      </section>
            <section className="container mx-auto px-6 py-16">
                <CulturalCarousel cultures={municipality.heritageAndCulture.cultures} />
            </section>
        </div>
    );
}

const OfficialLoader = () => (
    <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-800">Carregando informações oficiais...</h3>
            <p className="text-gray-600">Ministério da Cultura e Turismo</p>
        </div>
    </div>
);

const OfficialError = () => (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-center">
        <div>
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Município não encontrado</h1>
            <p className="text-gray-600 mb-6">O conteúdo solicitado não está disponível no momento.</p>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Voltar ao portal principal
            </button>
        </div>
    </div>
);