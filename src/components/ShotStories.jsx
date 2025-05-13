// src/components/ShotStories.jsx
import { motion } from 'framer-motion';

const stories = [
  {
    title: "The High Country Chase",
    text: "Some story about the high country chase. Where I killed a doe and it was epic. Idk you will have to email me what stories that you want to put on these cards if you want to use this component."
  },
  {
    title: "Frozen Hands, First Catch",
    text: "Some story about the high country chase. Where I killed a doe and it was epic. Idk you will have to email me what stories that you want to put on these cards if you want to use this component."
  },
  {
    title: "Steel and Solitude",
    text: "Some story about the high country chase. Where I killed a doe and it was epic. Idk you will have to email me what stories that you want to put on these cards if you want to use this component."
  },
  {
    title: "The Midnight Boil",
    text: "Some story about the high country chase. Where I killed a doe and it was epic. Idk you will have to email me what stories that you want to put on these cards if you want to use this component."
  }
];

export default function ShotStories() {
  return (
    <section className="px-4 py-20 bg-[#0d1a13] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">
          Stories Behind the Shot
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#16261c] rounded-lg p-6 shadow-lg border border-white/5"
            >
              <h3 className="text-xl font-semibold font-serif mb-3">{story.title}</h3>
              <p className="text-gray-300 leading-relaxed">{story.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
