"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const neighborhoods = [
  {
    id: 1,
    name: "Ingombota",
    description: "O coração financeiro e cultural da cidade, com arranha-céus inteligentes e centros culturais.",
    image: "/images/ingombota.jpg"
  },
  {
    id: 2,
    name: "Maianga",
    description: "Área residencial com parques verdes e tecnologia sustentável integrada à arquitetura tradicional.",
    image: "/images/maianga.jpg"
  },
  {
    id: 3,
    name: "Kilamba",
    description: "Cidade planejada com infraestrutura moderna e soluções urbanas inteligentes.",
    image: "/images/kilamba.jpg"
  },
  {
    id: 4,
    name: "Rocha Pinto",
    description: "Mistura de tradição e inovação, com mercados vibrantes e hubs tecnológicos.",
    image: "/images/rocha-pinto.jpg"
  }
];

const GeographySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === neighborhoods.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? neighborhoods.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            Geografia Urbana
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore os bairros que compõem nosso município futurista
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={neighborhoods[currentSlide].image} 
                alt={neighborhoods[currentSlide].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {neighborhoods[currentSlide].name}
                </motion.h3>
                <motion.p 
                  className="text-lg md:text-xl max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {neighborhoods[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles do carrossel */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
            aria-label="Próximo slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {neighborhoods.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;