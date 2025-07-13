import { ItemComposite, Municipality } from '@/lib/types/interfaqces';
import { motion } from 'framer-motion';

const CultureSectionMunicipality = ({cultures}:{cultures:ItemComposite[]}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16  bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <h3 className="text-2xl font-semibold text-yellow-400">{municipality.heritageAndCulture.description}</h3> */}
            {
              cultures.map((variant,item)=><p key={item}>{variant.description}</p>)
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