// components/FloatingMap.tsx
'use client';
// Required for Leaflet in Next.js 13+

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L, { LatLng } from 'leaflet';

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

const FloatingMap = () => {
  // Coordinates for Angola (example - use your municipality's coordinates)
  const position: number[] = [-8.8390, 13.2894] as const;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
    >
      <MapContainer
        center={new LatLng(position[0], position[1])}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={new LatLng(-8.8390, 3.2894)}>
          <Popup>
            Luanda, Angola <br /> Example location
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default FloatingMap