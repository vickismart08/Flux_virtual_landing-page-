/**
 * Screenshots Gallery Section Component
 */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { config } from "../config";

export const ScreenshotsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const screenshots = config.images.screenshots;

  const handleNext = () =>
    setSelectedIndex((i) => (i + 1) % screenshots.length);
  const handlePrev = () =>
    setSelectedIndex((i) => (i - 1 + screenshots.length) % screenshots.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section id="screenshots" className="section-alt">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dark-brown dark:text-white mb-4">
            See the App in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A clean, intuitive interface designed for speed and simplicity.
            Manage your virtual numbers effortlessly.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl border border-light-gray dark:border-dark-surface hover:border-soft-orange dark:hover:border-soft-orange transition-all duration-300 w-full"
              style={{ aspectRatio: "9 / 19.5" }}
            >
              <img
                src={src}
                alt={`App Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 dark:bg-dark-bg/90 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-soft-orange" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8"
        >
          Click any screenshot to view full size
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xs w-full"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-sm"
                aria-label="Close"
              >
                <X className="w-5 h-5" /> Close
              </button>

              {/* Image */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={screenshots[selectedIndex]}
                  alt={`App Screenshot ${selectedIndex + 1}`}
                  className="w-full"
                />
              </div>

              {/* Prev / Next */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 -left-14 bg-white/10 hover:bg-white/25 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 -right-14 bg-white/10 hover:bg-white/25 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === selectedIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
