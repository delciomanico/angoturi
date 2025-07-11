"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Link } from 'react-feather';

const Layout = ({ children }:any) => {
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
          {children}
        </div>
      </div>
    </section>
    </>)
};

export default Layout;
