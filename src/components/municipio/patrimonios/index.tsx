"use client";

import { HiterageItem } from "@/lib/types/interfaqces";
import { useState } from "react";
import { motion} from 'framer-motion';
import { Patrimonio } from "./Patrimonio";
import clsx from "clsx";

export const SessaoPatrimonio = ({ hiterages }:{hiterages:HiterageItem[]}) => {
    const [patrimonioSelecionado, setPatrimonioSelecionado] = useState(hiterages[0]);
    
    return (
        <section className="py-16">
            {hiterages.length ? <>
                <div className="container mx-auto">
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
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:max-h-screen">
                        {/* Lista de patrimônios */}
                        <div className="overflow-x-auto md:overflow-hidden scrollbar-hide">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex md:flex-col gap-1 scrollbar-hide"
                            >
                                {hiterages.map((item, key) => (
                                    <motion.div
                                        key={key}
                                        className={clsx('py-3 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors w-full flex items-center justify-center h-20 text-gray-500 ',
                                            patrimonioSelecionado.id === item.id ? 'bg-gray-200' : ''
                                        )}
                                        onClick={() => setPatrimonioSelecionado(item)}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h3 className="text-md md:text-lg md:font-semibold">
                                            {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                                        </h3>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        {/* Conteúdo do patrimônio selecionado */}
                        <Patrimonio patrimonio={patrimonioSelecionado} />
                    </div>
                </div>
            </>:<>
                <div className="container mx-auto text-center py-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Nenhum patrimônio encontrado</h2>
                    <p className="text-gray-600">Parece que não há patrimônios disponíveis no momento.</p>
                </div>
            </>}
        </section>
    );
}