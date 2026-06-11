/**
 * Features Section Component
 */
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { config } from "../config";

export const FeaturesSection = () => {
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

  const getIcon = (iconName) => {
    const icons = {
      Globe: <LucideIcons.Globe className="w-8 h-8" />,
      MessageSquare: <LucideIcons.MessageSquare className="w-8 h-8" />,
      Phone: <LucideIcons.Phone className="w-8 h-8" />,
      MapPin: <LucideIcons.MapPin className="w-8 h-8" />,
      Lock: <LucideIcons.Lock className="w-8 h-8" />,
      Zap: <LucideIcons.Zap className="w-8 h-8" />,
    };
    return icons[iconName] || <LucideIcons.Star className="w-8 h-8" />;
  };

  return (
    <section id="features" className="section-alt">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dark-brown dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage virtual phone numbers with ease and
            confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {config.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-soft-orange/10 text-soft-orange group-hover:bg-soft-orange/20 transition-colors">
                    {getIcon(feature.icon)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-dark-brown dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
