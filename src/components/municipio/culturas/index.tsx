'use client'

import { ItemComposite } from "@/lib/types/interfaqces";
import { motion} from 'framer-motion';
import Cultura from "./Cultura";

export default function SeccaoCultura({cultures}:{cultures:ItemComposite[]}) {
  return (
    <section className="py-16 md:px-8 lg:px-16 bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid gap-5">
        <div className="">
            <h2 className="text-3xl font-bold">Culturas Locais</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center">
            {cultures.length? cultures.map((culture, key) => <Cultura key={key} cultura={culture}/>): <>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center col-span-2 md:col-span-3"
                >
                    <h3 className="text-xl font-semibold text-gray-600">Nenhuma cultura encontrada</h3>
                </motion.div>
            </>}
        </div>
      </div>
    </section>
  );
}