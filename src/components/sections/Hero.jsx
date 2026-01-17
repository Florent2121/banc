import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col pt-20 border-b border-ink">

            {/* TOP BAR / HEADER INFO */}
            {/* TOP BAR / HEADER INFO */}
            <div className="absolute top-0 left-0 w-full flex flex-col md:flex-row md:items-end justify-between p-4 md:p-6 z-50 pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 pointer-events-auto">
                    <h1 className="text-6xl md:text-9xl font-display font-bold leading-none tracking-tighter">
                        BANC_01
                    </h1>
                    <div className="font-mono text-sm md:text-xl leading-tight opacity-80">
                        <span className="block md:inline mr-2">44.666105° N</span>
                        <span className="block md:inline">6.785568° E</span>
                    </div>
                </div>
            </div>

            {/* MAIN IMAGE AREA */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-12 h-[70vh] md:h-auto mt-32 md:mt-48 w-full border-t border-ink">

                {/* Left: Technical Details / Date */}
                <div className="hidden md:flex md:col-span-3 lg:col-span-2 border-r border-ink flex-col justify-between p-6 bg-bg">
                    <div className="space-y-4">
                        <div className="border-b border-ink pb-2">
                            <span className="text-xs text-ink/50 block mb-1">PROJET</span>
                            <span className="font-bold">BANC[DE]À PART</span>
                        </div>
                        <div className="border-b border-ink pb-2">
                            <span className="text-xs text-ink/50 block mb-1">DATE</span>
                            <span className="font-bold">26.07.2025</span>
                        </div>
                    </div>
                    <div className="text-xs uppercase tracking-widest writing-vertical-lr rotate-180 opacity-50">
                        Fabrication Artisanale
                    </div>
                </div>

                {/* Center: Hero Image */}
                <div className="md:col-span-9 lg:col-span-10 relative overflow-hidden group">
                    <img
                        src="/images/Accueill.jpg"
                        alt="Vue du Banc"
                        className="w-full h-full object-cover font-mono transition-all duration-700 ease-in-out"
                    />
                    {/* Overlay Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-bg border border-ink p-4 md:p-6 max-w-sm z-10"
                    >
                        <p className="font-mono text-xs md:text-sm uppercase leading-relaxed">
                            "Les conquérents de l'inutile."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Marquee / Bottom Bar */}
            <div className="w-full border-t border-ink overflow-hidden py-3 bg-ink text-bg">
                <div className="animate-marquee-right whitespace-nowrap font-mono text-sm uppercase tracking-widest flex">
                    <span className="mr-4">Fabrication • Amis • Ceillac • Installation • Contemplation • Silence • Montagne • Effort • Repos •</span>
                    <span className="mr-4">Fabrication • Amis • Ceillac • Installation • Contemplation • Silence • Montagne • Effort • Repos •</span>
                    <span className="mr-4">Fabrication • Amis • Ceillac • Installation • Contemplation • Silence • Montagne • Effort • Repos •</span>
                    <span className="mr-4">Fabrication • Amis • Ceillac • Installation • Contemplation • Silence • Montagne • Effort • Repos •</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
