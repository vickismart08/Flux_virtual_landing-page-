/**
 * Hero Section Component
 */
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "../config";

const PhoneMockup = () => (
  <svg
    viewBox="0 0 280 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-xs"
    aria-label="Flux Virtual App Mockup"
  >
    {/* Phone Shell */}
    <rect x="10" y="10" width="260" height="540" rx="40" fill="#3B2F2F" />
    <rect x="16" y="16" width="248" height="528" rx="36" fill="#F9F7F3" />
    {/* Dark mode inner */}
    <rect x="16" y="16" width="248" height="528" rx="36" fill="#1C1C1E" />
    {/* Status bar dots */}
    <rect x="110" y="25" width="60" height="10" rx="5" fill="#3A3A3C" />
    {/* Screen area */}
    <rect x="20" y="50" width="240" height="450" fill="#1C1C1E" />
    {/* App Header bar */}
    <rect x="20" y="50" width="240" height="64" fill="#2C2C2E" />
    {/* App logo mark */}
    <circle cx="54" cy="82" r="16" fill="#D97757" fillOpacity="0.2" />
    <text
      x="54"
      y="87"
      textAnchor="middle"
      fontSize="13"
      fontWeight="700"
      fill="#D97757"
      fontFamily="system-ui"
    >
      F
    </text>
    {/* App title */}
    <text
      x="82"
      y="77"
      fontSize="12"
      fontWeight="700"
      fill="white"
      fontFamily="system-ui"
    >
      Flux Virtual
    </text>
    <text x="82" y="93" fontSize="9" fill="#8E8E93" fontFamily="system-ui">
      Global Phone Numbers
    </text>
    {/* Profile icon */}
    <circle cx="233" cy="82" r="14" fill="#3A3A3C" />
    {/* Country picker card */}
    <rect x="28" y="130" width="224" height="80" rx="14" fill="#2C2C2E" />
    <text x="44" y="155" fontSize="8" fill="#8E8E93" fontFamily="system-ui">
      SELECT COUNTRY
    </text>
    <text
      x="44"
      y="173"
      fontSize="13"
      fontWeight="600"
      fill="white"
      fontFamily="system-ui"
    >
      🇺🇸 United States
    </text>
    <rect x="180" y="155" width="60" height="28" rx="8" fill="#D97757" />
    <text
      x="210"
      y="174"
      textAnchor="middle"
      fontSize="9"
      fontWeight="600"
      fill="white"
      fontFamily="system-ui"
    >
      Change
    </text>
    {/* Number card */}
    <rect x="28" y="224" width="224" height="100" rx="14" fill="#2C2C2E" />
    <text x="44" y="250" fontSize="8" fill="#8E8E93" fontFamily="system-ui">
      YOUR VIRTUAL NUMBER
    </text>
    <text
      x="44"
      y="270"
      fontSize="16"
      fontWeight="700"
      fill="#D97757"
      fontFamily="system-ui"
    >
      +1 (555) 947-2831
    </text>
    <text x="44" y="288" fontSize="9" fill="#8E8E93" fontFamily="system-ui">
      Active · Expires in 29 days
    </text>
    {/* Status pill */}
    <rect
      x="44"
      y="300"
      width="50"
      height="16"
      rx="8"
      fill="#D97757"
      fillOpacity="0.2"
    />
    <text
      x="69"
      y="312"
      textAnchor="middle"
      fontSize="8"
      fontWeight="600"
      fill="#D97757"
      fontFamily="system-ui"
    >
      ● LIVE
    </text>
    {/* Stats row */}
    <rect x="28" y="340" width="104" height="60" rx="14" fill="#2C2C2E" />
    <text
      x="80"
      y="362"
      textAnchor="middle"
      fontSize="9"
      fill="#8E8E93"
      fontFamily="system-ui"
    >
      SMS Received
    </text>
    <text
      x="80"
      y="382"
      textAnchor="middle"
      fontSize="18"
      fontWeight="700"
      fill="white"
      fontFamily="system-ui"
    >
      142
    </text>
    <rect x="148" y="340" width="104" height="60" rx="14" fill="#2C2C2E" />
    <text
      x="200"
      y="362"
      textAnchor="middle"
      fontSize="9"
      fill="#8E8E93"
      fontFamily="system-ui"
    >
      Calls
    </text>
    <text
      x="200"
      y="382"
      textAnchor="middle"
      fontSize="18"
      fontWeight="700"
      fill="white"
      fontFamily="system-ui"
    >
      38
    </text>
    {/* Bottom bar */}
    <rect x="20" y="416" width="240" height="84" fill="#2C2C2E" />
    {/* Nav icons */}
    <rect
      x="44"
      y="432"
      width="32"
      height="32"
      rx="10"
      fill="#D97757"
      fillOpacity="0.2"
    />
    <rect
      x="44"
      y="432"
      width="32"
      height="32"
      rx="10"
      fill="#D97757"
      fillOpacity="0.1"
    />
    <text
      x="60"
      y="453"
      textAnchor="middle"
      fontSize="14"
      fontFamily="system-ui"
    >
      📞
    </text>
    <text
      x="60"
      y="476"
      textAnchor="middle"
      fontSize="8"
      fill="#D97757"
      fontWeight="600"
      fontFamily="system-ui"
    >
      Numbers
    </text>
    <text
      x="140"
      y="453"
      textAnchor="middle"
      fontSize="14"
      fontFamily="system-ui"
    >
      💬
    </text>
    <text
      x="140"
      y="476"
      textAnchor="middle"
      fontSize="8"
      fill="#8E8E93"
      fontFamily="system-ui"
    >
      Messages
    </text>
    <text
      x="220"
      y="453"
      textAnchor="middle"
      fontSize="14"
      fontFamily="system-ui"
    >
      ⚙️
    </text>
    <text
      x="220"
      y="476"
      textAnchor="middle"
      fontSize="8"
      fill="#8E8E93"
      fontFamily="system-ui"
    >
      Settings
    </text>
    {/* Home indicator */}
    <rect x="104" y="514" width="72" height="5" rx="3" fill="#3A3A3C" />
    {/* Button */}
    <rect x="265" y="200" width="6" height="50" rx="3" fill="#3B2F2F" />
    <rect x="265" y="270" width="6" height="30" rx="3" fill="#3B2F2F" />
    <rect x="9" y="190" width="6" height="40" rx="3" fill="#3B2F2F" />
    <rect x="9" y="250" width="6" height="40" rx="3" fill="#3B2F2F" />
  </svg>
);

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="section relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-orange/10 text-soft-orange text-sm font-semibold">
              <Globe className="w-4 h-4" />
              100+ Countries Available
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-dark-brown dark:text-white leading-tight">
              {config.brand.tagline}
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {config.brand.description}
          </motion.p>

          {/* Trust badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-soft-orange" />
              Secure & Encrypted
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Smartphone className="w-4 h-4 text-soft-orange" />
              iOS & Android
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={config.downloads.android}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Download for Android
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={config.downloads.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 group"
            >
              Download for iPhone
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              to={config.legal.privacy}
              className="inline-flex text-soft-orange hover:underline font-medium text-sm"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative">
            {/* Floating decorative circles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-20 h-20 bg-soft-orange rounded-full opacity-10"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-28 h-28 bg-soft-orange rounded-full opacity-10"
            />

            {/* Phone SVG Mockup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {config.images.heroMockup &&
              config.images.heroMockup !== "/images/phone-mockup.png" ? (
                <img
                  src={config.images.heroMockup}
                  alt="Flux Virtual App Mockup"
                  className="w-full max-w-xs object-contain mx-auto"
                />
              ) : (
                <PhoneMockup />
              )}
            </motion.div>

            {/* Floating notification badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-12 -right-12 bg-white dark:bg-dark-card rounded-2xl px-3 py-2 border border-light-gray dark:border-dark-surface"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <p className="text-xs font-semibold text-dark-brown dark:text-white">
                SMS Received ✓
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +1 555-947-2831
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute bottom-16 -left-12 bg-white dark:bg-dark-card rounded-2xl px-3 py-2 border border-light-gray dark:border-dark-surface"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <p className="text-xs font-semibold text-soft-orange">
                Instant Activation
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ready in &lt;2 min
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
