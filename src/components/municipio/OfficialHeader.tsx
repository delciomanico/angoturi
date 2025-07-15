// components/municipio/OfficialHeader.tsx
'use client';
import { motion } from 'framer-motion';
import { UIPropsMunicipality } from '@/lib/types/interfaqces';
import { MapPin } from 'react-feather';

export const OfficialHeader = ({ province, municipality }: UIPropsMunicipality) => (
    <header className="bg-white border-b border-orange-100">
        <div className="container mx-auto px-6 py-12 text-center">
            {/* Brasão e identidade visual */}
            <div className="flex justify-center items-center mb-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                >
                    <MapPin className="text-yellow-400 mr-2" size={18} />
                    <span className="text-sm font-medium text-white">
                        {province.title}, Angola • {new Date().getFullYear()}
                    </span>
                </motion.div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                    {municipality.title}
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
                {municipality.description[0]}
            </motion.p>

            {/* Destaques oficiais */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-5xl mx-auto"
            >
                {municipality.generalCharacteristics.slice(0, 4).map((item, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                        <p className="text-xs font-semibold text-orange-600">{item.title}</p>
                        <p className="text-gray-800 font-medium">
                            {Array.isArray(item.description) ? item.description[0] : item.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    </header>
);