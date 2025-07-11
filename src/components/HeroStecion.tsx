"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'react-feather';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background com gradiente e imagem */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-[url('/images/iamge1.jpg')] bg-cover bg-center opacity-30"></div>
        
        {/* Elementos decorativos futuristas */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-xl"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <MapPin className="text-yellow-400 mr-2" size={18} />
            <span className="text-sm font-medium text-white">Luanda, Angola</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Descubra o Futuro
            </span><br />
            <span className="text-gray-900">de Angola</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-stone-700 max-w-3xl mx-auto mb-10"
          >
            Explore a fusão única entre tradição ancestral e inovação tecnológica em uma experiência turística revolucionária.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href={"provincias"} className='grid'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
              >
                Começar Exploração
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Partículas futuristas */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-blue-400' : 'bg-pink-400'
          }`}
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;