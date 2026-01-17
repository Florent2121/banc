import React from 'react';
import { motion } from 'framer-motion';

const images = [
    // New User Photos
    { src: '/images/gallery_team.jpg', alt: 'L\'équipe', id: 'IMG_01' },
    { src: '/images/gallery_transport.jpg', alt: 'Transport du banc', id: 'IMG_02' },
    { src: '/images/gallery_rest.jpg', alt: 'Repos après l\'effort', id: 'IMG_03' },
    { src: '/images/gallery_view.jpg', alt: 'Vue parapentes', id: 'IMG_04' },
    { src: '/images/gallery_bench_side.jpg', alt: 'Détail banc', id: 'IMG_05' },
    // Original Photos
    { src: '/images/00012408-011.jpg', alt: 'Construction détail', id: 'IMG_06' },
    { src: '/images/00012408-012.jpg', alt: 'Montage structure', id: 'IMG_07' },
    { src: '/images/00012408-015.jpg', alt: 'Vue ensemble', id: 'IMG_08' },
    { src: '/images/00012409-026.jpg', alt: 'Paysage montagne', id: 'IMG_09' },
];

const Gallery = () => {
    return (
        <section className="w-full border-b border-ink bg-bg">
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-ink">
                <h2 className="text-2xl font-display uppercase tracking-widest">Archives Visuelles</h2>
                <div className="text-xs font-mono">[ 1/{images.length} ]</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 w-full">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative aspect-square border-r border-b border-ink last:border-r-0 md:nth-child-3n:border-r-0 overflow-hidden group cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="font-mono text-bg text-lg tracking-widest border border-bg px-4 py-2 hover:bg-bg hover:text-ink transition-colors">
                                {img.id}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
