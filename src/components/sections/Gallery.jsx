import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [selectedImage, setSelectedImage] = React.useState(null);

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
                        onClick={() => setSelectedImage(img)}
                        layoutId={`image-${img.id}`}
                    >
                        <motion.img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[9999] bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        >
                            <motion.div
                                className="relative max-w-full max-h-full"
                                layoutId={`image-${selectedImage.id}`}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[85vh] object-contain shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border border-ink"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Gallery;
