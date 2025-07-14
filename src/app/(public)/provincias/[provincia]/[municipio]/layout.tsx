"use client"

import { ReactNode } from "react";
import { motion } from 'framer-motion';

const Layout = ({ children }:{children: ReactNode}) => {
  return (
    <>
        <div className="mt-24 min-h-screen flex flex-col">
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
          {children}
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
        </div>
    </>
  );
};

export default Layout;