import React from 'react';
import { motion } from 'framer-motion';

const Video = () => {
    return (
        <section className="bg-ink text-bg py-24 md:py-32 flex flex-col items-center justify-center border-b border-ink">
            <div className="w-full max-w-6xl px-4 md:px-6">
                <div className="flex justify-between items-end mb-6 border-b border-white/20 pb-4">
                    <h2 className="text-4xl md:text-6xl font-display uppercase leading-none">
                        Documentation
                    </h2>
                    <span className="font-mono text-xs uppercase hidden md:block">
                        BACKSTAGE FABRICATION_26.07.2025.MP4
                    </span>
                </div>

                <div className="relative w-full aspect-video bg-zinc-900 border border-white/10">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/zHIxLHtSOHQ"
                        title="Video de l'ascension"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    {/* Corner markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
                </div>
            </div>
        </section>
    );
};

export default Video;
