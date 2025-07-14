// components/FloatingMap.tsx
'use client';
// Required for Leaflet in Next.js 13+

import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L from 'leaflet';
import { MapPin } from 'react-feather';
import { UIPropsMunicipality } from '@/lib/types/interfaqces';

// Fix for default marker icons in Next.js

const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const AboutSectioMunipality = ({province, municipality}:UIPropsMunicipality) => {
  return (
    <>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <MapPin className="text-yellow-400 mr-2" size={18} />
              <span className="text-sm font-medium text-white">{province.title}, Angola</span>
            </motion.div>

            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-organe-500 to-red-500">
                {municipality.title}
              </span>
            </motion.h1>
            <motion.div className='grid gap-2'>
              {municipality.description.map((item,key)=>(<motion.p key={key} className='font-bold'>{item}</motion.p>))}
            </motion.div>
          </div>
        </div>
    </>
  );
};

export default AboutSectioMunipality