"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heritageItems = [
  {
    id: 1,
    title: "Fortaleza de São Miguel",
    description: "Um marco histórico da era colonial, agora transformado em museu interativo com projeções holográficas que contam a história de Angola.",
    image: "/images/fortaleza.jpg"
  },
  {
    id: 2,
    title: "Museu da Moeda",
    description: "Exibe a evolução da moeda angolana desde os tempos pré-coloniais até a moderna economia digital, com exposições de realidade aumentada.",
    image: "/images/museu-moeda.jpg"
  },
  {
    id: 3,
    title: "Marginal da Luanda",
    description: "A orla marítima revitalizada com arquitetura futurista, parques inteligentes e mirantes com vistas panorâmicas da baía.",
    image: "/images/marginal.jpg"
  },
  {
    id: 4,
    title: "Palácio de Ferro",
    description: "Estrutura icônica projetada por Gustave Eiffel, agora centro cultural com exposições de arte e tecnologia.",
    image: "/images/palacio-ferro.jpg"
  }
];

const HeritageSection = () => {
  const [selectedHeritage, setSelectedHeritage] = useState(heritageItems[0]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Patrimônio e Pontos Turísticos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de patrimônios */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heritageItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedHeritage.id === item.id ? 'bg-blue-900 bg-opacity-50 border-l-4 border-blue-400' : 'bg-gray-800 bg-opacity-50 hover:bg-gray-700'}`}
                onClick={() => setSelectedHeritage(item)}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Conteúdo do patrimônio selecionado */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHeritage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image 
                    src={selectedHeritage.image} 
                    alt={selectedHeritage.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedHeritage.title}</h3>
                  <p className="text-lg leading-relaxed">{selectedHeritage.description}</p>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Explorar em 3D
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;