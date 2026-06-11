/**
 * Coming Soon / eSIM Section Component
 */
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const ComingSoonSection = () => {
  return (
    <section className="section-alt">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-soft-orange/5 dark:bg-dark-card p-12 md:p-16"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-5">
            <Sparkles className="absolute top-10 left-10 w-24 h-24 text-soft-orange" />
            <Sparkles className="absolute bottom-10 right-10 w-32 h-32 text-soft-orange" />
          </div>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="bg-soft-orange/20 text-soft-orange px-4 py-2 rounded-full font-semibold text-sm">
                Coming Soon
              </div>
            </motion.div>

            <h2 className="text-dark-brown dark:text-white mb-6">
              eSIM Support Coming Soon
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Flux Virtual is expanding to provide eSIM activation and global
              mobile connectivity for travelers, remote workers, and businesses
              around the world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="card bg-white dark:bg-dark-card">
                <div className="text-4xl font-bold text-soft-orange mb-2">
                  100+
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Countries Supported
                </p>
              </div>
              <div className="card bg-white dark:bg-dark-card">
                <div className="text-4xl font-bold text-soft-orange mb-2">
                  24/7
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Global Coverage
                </p>
              </div>
              <div className="card bg-white dark:bg-dark-card">
                <div className="text-4xl font-bold text-soft-orange mb-2">
                  5G
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Cutting Edge Tech
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-gray-600 dark:text-gray-400"
            >
              Sign up to be notified when eSIM services launch.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
