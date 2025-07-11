"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Layout = ({ children }:any) => {
  return (
    <>
        <div className="mt-24 min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
          Municipio
            {children}
        </div>
    </>
  );
};

export default Layout;