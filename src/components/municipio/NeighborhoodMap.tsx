// components/municipio/NeighborhoodMap.tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const NeighborhoodMap = ({
  neighborhoods = [],
  activeIndex = 0,
  onSelect
}: {
  neighborhoods?: any[],
  activeIndex?: number,
  onSelect?: (index: number) => void
}) => {
  // Verificação completa dos dados
  const hasNeighborhoods = neighborhoods?.length > 0;
  const safeActiveIndex = Math.min(
    Math.max(0, activeIndex),
    hasNeighborhoods ? neighborhoods.length - 1 : 0
  );
  const currentNeighborhood = hasNeighborhoods ? neighborhoods[safeActiveIndex] : null;

  // Fallback para dados ausentes
  if (!hasNeighborhoods) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
        <div className="text-center py-8">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Informação não disponível</h3>
          <p className="text-gray-600">Nenhum bairro foi cadastrado para este município ainda.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="grid md:grid-cols-3">
        {/* Lista de Bairros */}
        <div className="md:border-r border-gray-100 p-4">
          <h3 className="font-bold text-gray-900 mb-4">Bairros e Comunas</h3>
          <div className="space-y-2">
            {neighborhoods.map((neighborhood, index) => (
              <motion.button
                key={neighborhood.uuid || index}
                onClick={() => onSelect?.(index)}
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left p-3 transition-colors relative rounded-lg cursor-pointer hover:bg-gray-100 overflow-hidden ${
                  safeActiveIndex === index
                    ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                {neighborhood.title || `Bairro ${index + 1}`}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Detalhes do Bairro */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeActiveIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="relative h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
                {currentNeighborhood?.image ? (
                  <Image
                    src={currentNeighborhood.image}
                    alt={currentNeighborhood.title || 'Imagem do bairro'}
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    {currentNeighborhood?.title || 'Bairro sem nome'}
                  </h3>
                  <p className="text-white/90">
                    {currentNeighborhood?.description || 'Descrição não disponível.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};