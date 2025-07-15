// components/municipio/CulturalCarousel.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const CulturalCarousel = ({ cultures = [] }: { cultures?: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Garante que o componente está no client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Normaliza o índice atual
  useEffect(() => {
    if (cultures.length > 0 && currentIndex >= cultures.length) {
      setCurrentIndex(0);
    }
  }, [cultures, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === cultures.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? cultures.length - 1 : prev - 1));
  };

  // Fallback para quando não há culturas
  if (!isClient || cultures.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-8 text-center">
        <div className="max-w-md mx-auto py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma expressão cultural registrada</h3>
          <p className="text-gray-600">Este município ainda não possui expressões culturais cadastradas.</p>
        </div>
      </div>
    );
  }

  const currentCulture = cultures[currentIndex] || {};

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100">
      <div className="mb-12 text-center px-6 pt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Expressões Culturais</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
      </div>

      <div className="relative h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Área da Imagem */}
            <div className="md:w-1/2 h-64 md:h-full relative">
              {currentCulture.image ? (
                <Image
                  src={currentCulture.image}
                  alt={currentCulture.title || "Expressão cultural"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={currentIndex === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Área de Texto */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {currentCulture.title || "Expressão Cultural"}
              </h3>
              <p className="text-gray-600 mb-6">
                {currentCulture.description || "Descrição não disponível."}
              </p>
              
              {Array.isArray(currentCulture.tags) && currentCulture.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {currentCulture.tags.map((tag: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles de Navegação (apenas se houver mais de 1 item) */}
        {cultures.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-orange-100 z-10 transition-all"
              aria-label="Slide anterior"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-orange-100 z-10 transition-all"
              aria-label="Próximo slide"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicadores (apenas se houver mais de 1 item) */}
      {cultures.length > 1 && (
        <div className="flex justify-center gap-2 pb-8 pt-4">
          {cultures.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-orange-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};