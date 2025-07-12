import { Municipality } from '@/lib/types/interfaqces';
import { motion } from 'framer-motion';

const CultureSectionMunicipality = ({municipality}:{municipality:Municipality}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16  bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Visão Geral Cultural
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            {municipality.heritageAndCulture.title}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <img 
              src={municipality.heritageAndCulture.image || '/images/image1.jpeg'}   
              alt="Cultura Ingombota"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-yellow-400">{municipality.heritageAndCulture.description}</h3>
            {
              municipality.heritageAndCulture.culture.map((variant,item)=><p key={item}>{variant.description}</p>)
            }
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-purple-600 bg-opacity-50 rounded-full text-sm font-medium">Festivais Anuais</span>
              <span className="px-4 py-2 bg-blue-600 bg-opacity-50 rounded-full text-sm font-medium">Arte Digital</span>
              <span className="px-4 py-2 bg-green-600 bg-opacity-50 rounded-full text-sm font-medium">Danças Tradicionais</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultureSectionMunicipality;