'use client'
import { motion } from 'framer-motion';
import { ItemComposite } from '@/lib/types/interfaqces';
export default function Cultura ({cultura}:{cultura: ItemComposite}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="srelative overflow-hidden rounded-xl shadow-2xl"
        >
            <div className="relative flex items-end justify-center h-64 md:h-80">
                <img src={cultura.image || '/images/img2.jpeg'} alt={cultura.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 flex items-end p-4">         
                    <h2 className="text-3xl font-bold text-gray-200">{cultura.title}</h2>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600 text-justify">Explore as diversas culturas que compõem a riqueza cultural do nosso município.</p>
            </div>
        </motion.div>
    )
}