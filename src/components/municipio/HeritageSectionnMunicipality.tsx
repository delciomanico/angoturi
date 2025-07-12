"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heritage, ItemComposite} from '@/lib/types/interfaqces';
import clsx from 'clsx';


const HeritageSectionnMunicipality = ({hiterage}:{hiterage:ItemComposite}) => {
  const [selectedHeritage, setSelectedHeritage] = useState(hiterage.locations);

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
          {selectedHeritage[0].title}
          {selectedHeritage[0].description[0]}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de patrimônios */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {/* {hiterages?.map((item) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                  onClick={() => setSelectedHeritage(item)}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px]">
                  {item.heritages.map((h, key)=><motion.div
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={clsx("p-4 rounded-lg cursor-pointer transition-colors shadow-sm shadow-yellow-500/40 font-semibold",
                      selectedHeritage?.id === item.id ? 'bg-opacity-50 border-l-4 border-l-red-700/50 border border-gray-200'
                      :'bg-gray-800 bg-opacity-50 hover:bg-gray-700'
                    )}
                  >
                    {h.title}
                  </motion.div>)}
                  </div>
                </div>
              ))} */}
              {JSON.stringify(hiterage)}
          </motion.div>

          {/* Conteúdo do patrimônio selecionado */}
          <motion.div 
            className="lg:col-span-2 border-red-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {selectedHeritage!==undefined&&<AnimatePresence mode="wait">
              <motion.div
                key={selectedHeritage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-200 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <img 
                    src={selectedHeritage.image || '/images/img1.jpeg'} 
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
            </AnimatePresence>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSectionnMunicipality;