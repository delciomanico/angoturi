"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Layout = ({ children }:any) => {
  return (
    <>
        <div className=" min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
            {children}
        </div>
    </>
  );
};

export default Layout;