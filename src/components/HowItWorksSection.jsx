/**
 * How It Works Section Component
 */
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

export const HowItWorksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dark-brown dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in just 5 simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {config.steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Card */}
              <div className="card h-full flex flex-col">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-soft-orange text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-dark-brown dark:text-white mb-2 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < config.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-soft-orange to-soft-orange dark:from-soft-orange dark:to-soft-orange opacity-30 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 card bg-light-beige dark:bg-dark-surface border-2 border-soft-orange border-opacity-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-dark-brown dark:text-white mb-3 font-semibold text-lg">
                Why Choose Our Process?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>Simple and intuitive interface</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>Instant activation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>Secure transactions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-dark-brown dark:text-white mb-3 font-semibold text-lg">
                What You Get
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>Active virtual number instantly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>SMS and call forwarding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-soft-orange font-bold">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
