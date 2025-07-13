"use client";

import { HiterageItem } from "@/lib/types/interfaqces";
import { useState } from "react";
import { AnimatePresence, motion} from 'framer-motion';
import { Patrimonio } from "./Patrimonio";

export const SessaoPatrimonio = ({ heritages }:{heritages:HiterageItem[]}) => {
    const [selectedHeritage, setSelectedHeritage] = useState(heritages[0]);
    
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-12"
                >
                <h2 className="text-3xl font-bold text-gray-800">
                    Patrimônio e Pontos Turísticos
                </h2>
                </motion.div>
        
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:max-h-screen">
                    {/* Lista de patrimônios */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-1"
                    >
                        {heritages.map((item, key) => (
                            <motion.div
                                key={key}
                                className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${selectedHeritage.id === item.id ? 'bg-gray-200' : ''}`}
                                onClick={() => setSelectedHeritage(item)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* Conteúdo do patrimônio selecionado */}
                    <motion.div
                        className="lg:col-span-2 bg-gray-200 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                    
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                        <img 
                                            src={selectedHeritage.image || '/images/img1.jpeg'} 
                                            alt={selectedHeritage.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 flex items-end p-4   ">
                                            <div className="block text-white text-left">
                                                <h3 className="text-4xl font-bold mb-4 text-white">{selectedHeritage.title}</h3>
                                                <p className="text-gray-400 font-medium">{selectedHeritage.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full overflow-auto p-4">
                                        <div className="flex gap-2 mt-6 w-max">
                                            {selectedHeritage.locations.map((item, key) => (<Patrimonio key={key} heritage={item} />))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
}