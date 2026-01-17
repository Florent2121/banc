import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "IDÉE DU PROJET",
        desc: "On avait cette idée depuis longtemps, marqué physiquement les plus belles vues de Ceillac. On a décider de commencer à l'été 2025 ayant un peu de temps pendant nos vacances.",
        specs: "Le 1er d'une longue série annuelle"
    },
    {
        id: "02",
        title: "FABRICATION",
        desc: "Sélection de bois local. fabrication artisanale dans le jardin au village, avec les moyens du bords.",
        specs: "MÉLÈZE / 35KG"
    },
    {
        id: "03",
        title: "INSTALLATION",
        desc: "Installation à coté de l'envol des parapentes, donnant une vue impériale sur la vallée de Ceillac.",
        specs: "ALT. 1820M / PERMANENT"
    }
];

const Journal = () => {
    return (
        <section className="w-full border-b border-ink bg-bg">
            <div className="border-b border-ink p-4 md:p-6">
                <h2 className="text-4xl md:text-6xl font-display uppercase">Journal de Bord</h2>
            </div>

            <div className="w-full">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-12 border-b border-ink last:border-b-0 transition-colors duration-300 group"
                    >
                        {/* ID Column */}
                        <div className="md:col-span-2 p-6 border-b md:border-b-0 md:border-r border-ink flex items-start">
                            <span className="font-display text-3xl font-bold opacity-50 group-hover:opacity-100">{step.id}</span>
                        </div>

                        {/* Title & Desc Column */}
                        <div className="md:col-span-7 p-6 border-b md:border-b-0 md:border-r border-ink flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{step.title}</h3>
                            <p className="font-mono text-sm md:text-base opacity-80 max-w-xl">
                                {step.desc}
                            </p>
                        </div>

                        {/* Specs Column */}
                        <div className="md:col-span-3 p-6 flex items-center justify-end md:justify-start">
                            <span className="font-mono text-xs border border-current px-2 py-1 uppercase">
                                {step.specs}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Journal;
