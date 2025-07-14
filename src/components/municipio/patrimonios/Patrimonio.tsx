"use client"

import { HiterageItem } from "@/lib/types/interfaqces";
import { motion, AnimatePresence } from 'framer-motion';
import { LocalPatrimonio } from "./LocalPatrimonio";
import Image from "next/image";

export const Patrimonio = ({ patrimonio }:{patrimonio:HiterageItem}) => {
    return (
        <motion.div
            className="lg:col-span-3 bg-gray-200 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
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
                        <Image 
                            src={patrimonio.image || '/images/img1.jpeg'} 
                            alt={patrimonio.title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 flex items-end p-4   ">
                            <div className="block text-white text-left">
                                <h3 className="text-4xl font-bold mb-4 text-white">{patrimonio.title}</h3>
                                <p className="text-gray-400 font-medium">{patrimonio.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full" style={{ scrollbarWidth: 'none' }}>
                        <div className="w-full overflow-x-auto scrollbar-hide p-4" style={{scrollbarWidth: 'none' }}>
                            {patrimonio.locations.length?<>
                            <div className="flex gap-2 mt-6 w-max">
                                {patrimonio.locations.map((item, key) => (<LocalPatrimonio key={key} heritage={item} />))}   
                            </div>
                            </>:
                            <div className="flex justify-center">
                                <span className="text-gray-500 w-max">Nenhuma localização disponível.</span>
                            </div>
                            }
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
    }
