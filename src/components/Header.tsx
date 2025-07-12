"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'react-feather';
import Link from 'next/link';
import { GiAngola } from 'react-icons/gi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fechar menu quando a tela for grande
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`w-full z-50 left-0 transition-all duration-300 ${
        isScrolled ? 'fixed bg-gray-900 bg-opacity-90 backdrop-blur-md py-2 shadow-xl' : 'bg-white py-4'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" scroll={false}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setActiveLink('home')}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
                {/* <Globe/> */}
                <GiAngola className="text-white" size={25}  />
              </div>
              <motion.span 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                AngoTuri
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} scroll={false}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                  onClick={() => setActiveLink(link.href.substring(1))}
                >
                  <span className={`text-sm font-medium transition-colors ${
                    activeLink === link.href.substring(1) 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-300'
                  }`}>
                    {link.name}
                  </span>
                  {activeLink === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-black"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-black text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Contacte-nos
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} scroll={false}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                    onClick={() => {
                      setActiveLink(link.href.substring(1));
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-full shadow-lg"
              >
                Contacte-nos
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;