// components/municipio/CulturalCard.tsx
'use client';
import { ItemComposite } from '@/lib/types/interfaqces';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const CulturalCard = ({ item }: { item: ItemComposite }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
  >
    <div className="relative h-48">
      <Image
        src={item.image || '/images/cultural-placeholder.jpg'}
        fill
        className="object-cover"
        alt={item.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
    
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">
        {item.description || 'Informação cultural disponível em breve...'}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs px-3 py-1 bg-orange-100 text-orange-600 rounded-full">
          Patrimônio
        </span>
        <button className="text-sm flex items-center text-orange-500 hover:text-orange-700">
          Ver detalhes
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </motion.div>
);