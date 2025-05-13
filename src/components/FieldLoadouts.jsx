// src/components/FieldLoadouts.jsx
import { motion } from 'framer-motion';

const loadouts = [
    {
        title: "Fishing Loadout",
        wear: "Simms G3 Waders, Wool Base Layers, Patagonia Rain Shell",
        carry: "Sage X Rod, Abel Reel, Nymph box, Net, Jetboil",
        weapon: "Barbless #16 Prince Nymphs",
        color: "bg-[#1c2e25]"
    },
    {
        title: "Bowhunting Loadout",
        wear: "Sitka Core Hoodie, Jetstream Vest, Lightweight Pants",
        carry: "Mathews V3, Rangefinder, Wind Checker, Elk Calls",
        weapon: "Iron Will Broadheads, Easton Axis Arrows",
        color: "bg-[#22372a]"
    },
    {
        title: "Rifle Hunting Loadout",
        wear: "Kuiu Attack Pants, Merino Base Layer, Puffy Jacket",
        carry: "Browning X-Bolt, Bino Harness, Tripod, Snacks",
        weapon: "Nosler .300 Win Mag — dialed to 500 yards",
        color: "bg-[#2a4132]"
    }
];

export default function FieldLoadouts() {
    return (
        <section className="px-4 py-20 bg-[#0d1a13] text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-serif mb-12">Field Loadouts</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {loadouts.map((kit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className={`
                                relative ${kit.color} p-6 rounded-xl shadow-lg
                                transition-all duration-300 ease-in-out
                                transform hover:scale-105 hover:-translate-y-1
                                hover:ring-2 hover:ring-white/10 hover:shadow-2xl
                            `}
                        >
                            <h3 className="text-xl font-semibold font-serif mb-4">{kit.title}</h3>

                            <div className="text-left space-y-4 text-sm text-gray-200">
                                <div>
                                    <p className="font-semibold text-white">Wearing:</p>
                                    <p>{kit.wear}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Carrying:</p>
                                    <p>{kit.carry}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Weapon of Choice:</p>
                                    <p>{kit.weapon}</p>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">Explore Loadout</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

}
