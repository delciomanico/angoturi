"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiterageItem } from '@/lib/types/interfaqces';



const HeritageSectionnMunicipality = ({hiterage}:{hiterage:HiterageItem }) => {
  const [selectedHeritage, setSelectedHeritage] = useState(hiterage.locations[0] || hiterage);

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
          {hiterage.title && <p className="text-lg text-gray-600 mt-2">{hiterage.title}</p>}
          {hiterage.description && <p className="text-md text-gray-500 mt-1">{hiterage.description}</p>}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de patrimônios */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
            style={{backgroundImage: `url(${hiterage.locations[0].image  || '/images/img2.jpeg'})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', borderRadius: '8px'}}
          >
            {hiterage.locations.map((item,key) => (
              <motion.div 
                key={key} 
                className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors h-24 text-white ${selectedHeritage.id === item.id ? 'bg-gray-200' : ''}`}
                onClick={() => setSelectedHeritage(item)}
                whileHover={{ scale: 1.05 }}
               
                style={{ backgroundImage: `url(${item.image || '/images/img1.jpeg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              >
                <h3 className="text-xl font-semibold text-left">{item.title}</h3>
              </motion.div>
            ))}
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
                  <motion.div 
                    className="lg:col-span-2 border-red-500"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 md:p-8 text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedHeritage.title}</h3>
                      <div className="">
                        {selectedHeritage.description.map((item)=>
                        <motion.p
                          key={selectedHeritage.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-200 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
                        >
                          {item}   
                        </motion.p>
                      )}
                      </div>
                    </div>
                  </motion.div>
              </motion.div>
            </AnimatePresence>}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default HeritageSectionnMunicipality;