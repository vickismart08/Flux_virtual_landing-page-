/**
 * Screenshots Gallery Section Component
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { config } from "../config";

// SVG placeholders for each screenshot slot
const screenshotPlaceholders = [
  {
    label: "Dashboard",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "📊",
    desc: "Main Dashboard",
  },
  {
    label: "Numbers",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "📞",
    desc: "Virtual Numbers",
  },
  {
    label: "SMS Inbox",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "💬",
    desc: "SMS Inbox",
  },
  {
    label: "Countries",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "🌍",
    desc: "Country Picker",
  },
  {
    label: "Settings",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "⚙️",
    desc: "Settings",
  },
  {
    label: "Purchase",
    bg: "#1C1C1E",
    accent: "#D97757",
    emoji: "💳",
    desc: "Purchase Flow",
  },
];

const ScreenshotPlaceholder = ({ index, label, bg, accent, emoji, desc }) => (
  <svg
    viewBox="0 0 200 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-label={`${label} screenshot`}
  >
    <rect width="200" height="360" rx="24" fill={bg} />
    {/* Status bar */}
    <rect x="72" y="10" width="56" height="8" rx="4" fill="#3A3A3C" />
    {/* Header */}
    <rect x="0" y="30" width="200" height="50" fill="#2C2C2E" />
    <text
      x="100"
      y="62"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill="white"
      fontFamily="system-ui"
    >
      {label}
    </text>
    {/* Content area */}
    <rect x="12" y="96" width="176" height="60" rx="12" fill="#2C2C2E" />
    <text
      x="100"
      y="134"
      textAnchor="middle"
      fontSize="26"
      fontFamily="system-ui"
    >
      {emoji}
    </text>
    <rect x="12" y="168" width="84" height="52" rx="12" fill="#2C2C2E" />
    <rect x="104" y="168" width="84" height="52" rx="12" fill="#2C2C2E" />
    <text
      x="54"
      y="200"
      textAnchor="middle"
      fontSize="16"
      fontFamily="system-ui"
    >
      📱
    </text>
    <text
      x="146"
      y="200"
      textAnchor="middle"
      fontSize="16"
      fontFamily="system-ui"
    >
      ✅
    </text>
    <rect x="12" y="232" width="176" height="40" rx="12" fill="#2C2C2E" />
    <rect
      x="12"
      y="284"
      width="176"
      height="40"
      rx="12"
      fill={accent}
      fillOpacity="0.15"
    />
    <text
      x="100"
      y="310"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill={accent}
      fontFamily="system-ui"
    >
      {desc}
    </text>
    {/* Bottom nav */}
    <rect x="0" y="336" width="200" height="24" fill="#2C2C2E" />
    <rect x="84" y="343" width="32" height="4" rx="2" fill="#3A3A3C" />
    {/* Screen number */}
    <circle cx="176" cy="72" r="10" fill={accent} fillOpacity="0.2" />
    <text
      x="176"
      y="76"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill={accent}
      fontFamily="system-ui"
    >
      {index + 1}
    </text>
  </svg>
);

export const ScreenshotsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const screenshots = config.images.screenshots;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + screenshots.length) % screenshots.length,
      );
    }
  };

  // Handle keyboard for lightbox
  React.useEffect(() => {
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {screenshotPlaceholders.map((placeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl border border-light-gray dark:border-dark-surface hover:border-soft-orange dark:hover:border-soft-orange transition-all duration-300"
              style={{ aspectRatio: "200/360" }}
            >
              {/* Try to load real screenshot, fallback to SVG */}
              <img
                src={screenshots[index]}
                alt={`${placeholder.label} - App Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div className="absolute inset-0 hidden">
                <ScreenshotPlaceholder index={index} {...placeholder} />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white dark:bg-dark-bg rounded-full flex items-center justify-center">
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xs w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-14 right-0 text-white/80 hover:text-white transition-colors flex items-center gap-2"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
                <span className="text-sm">Close</span>
              </button>

              {/* Image or Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={screenshots[selectedIndex]}
                  alt="Full size screenshot"
                  className="w-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div className="hidden">
                  <ScreenshotPlaceholder
                    index={selectedIndex}
                    {...screenshotPlaceholders[selectedIndex]}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute inset-y-0 flex items-center justify-between w-full px-[-2rem] pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto -ml-14 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto -mr-14 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Counter */}
              <div className="flex justify-center gap-1.5 mt-4">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === selectedIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
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
