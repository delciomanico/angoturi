"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Layout = ({ children }:any) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
          <Header/>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow w-full"
          >
            {children}
          </motion.main>
          <Footer />
    </div>
  );
};

export default Layout;