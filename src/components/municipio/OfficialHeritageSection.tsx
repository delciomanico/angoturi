// components/municipio/OfficialHeritageSection.tsx
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiterageItem, ItemComposite } from '@/lib/types/interfaqces';

export const OfficialHeritageSection = ({
  heritages = [],
  activeHeritage = 0,
  activeItem = 0,
  onSelectHeritage = () => {},
  onSelectItem = () => {}
}: {
  heritages: HiterageItem[],
  activeHeritage: number,
  activeItem: number,
  onSelectHeritage?: (index: number) => void,
  onSelectItem?: (index: number) => void
}) => {
  // Verificação e normalização dos dados
  const hasHeritages = heritages.length > 0;
  const safeHeritageIndex = hasHeritages 
    ? Math.min(Math.max(0, activeHeritage), heritages.length - 1)
    : 0;
  const currentHeritage = heritages[safeHeritageIndex];
  
  const hasLocations = currentHeritage?.locations?.length > 0;
  const safeItemIndex = hasLocations
    ? Math.min(Math.max(0, activeItem), currentHeritage.locations.length - 1)
    : 0;
  const currentItem = hasLocations ? currentHeritage.locations[safeItemIndex] : null;


  // Atualiza índices inválidos
  useEffect(() => {
    if (hasHeritages && activeHeritage !== safeHeritageIndex) {
      onSelectHeritage(safeHeritageIndex);
    }
    if (hasLocations && activeItem !== safeItemIndex) {
      onSelectItem(safeItemIndex);
    }
  }, [
    hasHeritages,
    hasLocations,
    safeHeritageIndex,
    safeItemIndex,
    activeHeritage,
    activeItem,
    onSelectHeritage,
    onSelectItem
  ]);

  // Fallback para quando não há patrimônios
  if (!hasHeritages) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-8 text-center">
        <div className="max-w-md mx-auto py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum patrimônio registrado</h3>
          <p className="text-gray-600 mb-6">Este município ainda não possui patrimônios culturais cadastrados.</p>
        </div>
      </div>
    );
  }

  // Fallback para quando não há locais na categoria selecionada
  if (!hasLocations) {
    return (
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Patrimônio Cultural</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-8 text-center">
          <div className="max-w-md mx-auto py-12">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentHeritage.title}</h3>
            <p className="text-gray-600 mb-6">Esta categoria não possui locais cadastrados ainda.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Patrimônio Cultural</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
      </div>

      {/* Navegação entre categorias */}
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <div className="flex space-x-2 px-2">
          {heritages.map((heritage, index) => (
            <motion.button
              key={heritage.uuid || index}
              onClick={() => onSelectHeritage(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full whitespace-nowrap min-w-max relative ${
                safeHeritageIndex === index
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
            >
              {heritage.title || `Categoria ${index + 1}`}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-4">
          {/* Lista de locais */}
          <div className="md:border-r border-gray-100">
            {currentHeritage.locations.map((location: ItemComposite, index: number) => (
              <motion.button
                key={location.uuid || index}
                onClick={() => onSelectItem(index)}
                whileHover={{ x: 2 }}
                className={`w-full text-left p-4 transition-colors relative ${
                  safeItemIndex === index
                    ? 'bg-orange-50 border-l-4 border-orange-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <h3 className="font-medium text-gray-900">
                  {location.title || `Local ${index + 1}`}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {location.description || 'Sem descrição disponível'}
                </p>
              </motion.button>
            ))}
          </div>
          
          {/* Detalhes do local */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${safeHeritageIndex}-${safeItemIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="relative h-64 md:h-96">
                  {currentItem?.image ? (
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title || 'Imagem do patrimônio'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">
                      {currentItem?.title || 'Patrimônio Cultural'}
                    </h3>
                    <p className="text-white/90">
                      {currentItem?.description || 'Descrição não disponível.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};