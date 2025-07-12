"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'react-feather';
import { provinces } from "@/lib/placeholderData";
import Link from 'next/link';

export default function PageProvince(){
    return (<>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background com gradiente e imagem */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-[url('/images/iamge1.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-h-max flex flex-row flex-wrap justify-center gap-4 text-blax w-full py-5"
          >
            {provinces.map((item, index)=>(
                <Link key={index} href={`/provincias/${item.title.toLowerCase()}`} className='max-w'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
                    >
                        {item.title}
                        {/* <ArrowRight className="ml-2" size={20} /> */}
                    </motion.button>
                </Link>)
                
            )}
          </motion.div>
        </div>
      </div>
    </section>
    </>)
}