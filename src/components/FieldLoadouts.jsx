import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: "Elk Tagged", value: 34 },
  { label: "Foot Shot", value: 1 },
  { label: "Miles Tracked", value: 186 },
  { label: "Camps Made", value: 21 },
];

export default function FieldStats() {
  return (
    <section className="relative py-24 bg-[#0e1b13] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1b13] via-transparent to-[#0e1b13]" />
  
      <div className="absolute inset-0 opacity-10 bg-[url('/images/texture-topo-dark.webp')] bg-repeat bg-center pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Field Stats</h2>
        <p className="text-gray-400 text-sm mb-16 max-w-xl mx-auto">
          Here’s what the crew has tracked, tagged, and spotted this season. It’s been a wild one.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl font-mono font-bold text-green-400">
                <CountUp end={stat.value} duration={2} />
              </div>
              <div className="uppercase text-gray-300 text-xs tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
