/**
 * Download CTA Section Component
 */
import React from "react";
import { motion } from "framer-motion";
import { Download, Apple, Smartphone } from "lucide-react";
import { config } from "../config";

export const DownloadCTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-soft-orange"
        />
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-soft-orange"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-dark-brown dark:text-white mb-6"
          >
            Download Flux Virtual Now
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
          >
            Get access to virtual phone numbers instantly. Download our app and
            start receiving SMS and calls within minutes.
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href={config.downloads.android}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 btn-primary group"
            >
              <Smartphone className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download for Android
            </a>

            <a
              href={config.downloads.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 btn-secondary group"
            >
              <Apple className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download for iPhone
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-soft-orange/10 text-soft-orange flex items-center justify-center">
                <Download className="w-6 h-6" />
              </div>
              <p className="text-dark-brown dark:text-white font-semibold">
                Free Download
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Available on both stores
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-soft-orange/10 text-soft-orange flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <p className="text-dark-brown dark:text-white font-semibold">
                Easy Setup
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Just 5 minutes to get started
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-soft-orange/10 text-soft-orange flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.707 6.707a1 1 0 010 1.414L5.414 9l1.293 1.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0zm7.586 0a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 11-1.414-1.414L14.586 9l-1.293-1.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-dark-brown dark:text-white font-semibold">
                Instant Activation
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start using immediately
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
