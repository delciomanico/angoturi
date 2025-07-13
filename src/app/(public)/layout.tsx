"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const Layout = ({ children }:{children:ReactNode}) => {
  return (
    <div className="relative flex flex-col bg-white">
          <Header/>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow w-full py-2"
          >
            {children}
          </motion.main>
          <Footer />
    </div>
  );
};

export default Layout;