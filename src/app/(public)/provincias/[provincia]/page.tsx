"use client"

import { motion } from 'framer-motion';
import { provinces } from "@/lib/placeholderData";
import { Province } from "@/lib/types/interfaqces/";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function PageProvince(){
    const params = useParams()
    const [provincia, setProvincia]  =  useState<Province| null>(null)
    const [loading, setLoading] = useState(true)
    const tmpProvince =decodeURIComponent(params.provincia as string);

    useEffect(()=>{
        setProvincia(provinces.find(p=>tmpProvince == p.title.toLocaleLowerCase()) || null)
        setLoading(false)
    },[params, tmpProvince])

    return (<>
        {loading?<>
            <div className="container mx-auto transition-all duration-300 delay-30">
                <h1 className="text-3xl text-white">Carregando...</h1>
            </div>
        </>:<>
            {provincia?<div className="mt-5">
                <motion.div>
                    <motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="
                                text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 px-8 py-4 text-black font-semibold rounded-full transition-all flex items-center
                                "
                                
                        >
                            {provincia.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-bold leading-tight mb-6"
                        >
                            {provincia.description}
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-2 justify-center"
                    >
                        {provincia.municipalities.map((item, key)=>(
                            <Link key={key} href={`/provincias/${provincia.title.toLowerCase()}/${item.title.toLowerCase()}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
                                >
                                    {item.title}
                                </motion.button>
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            </div>:<>
                <div className="text-2xl font-medium flex-col gap-3 flex items-center justify-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    {}
                    <p>Este recuso não foi encontrado!...</p>
                </div>
            </>}
        </>}
    </>)
}