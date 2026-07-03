import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import { config } from "../config";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About — Flux Virtual";
    return () => {
      document.title = config.seo.title;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-gray dark:border-dark-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-soft-orange hover:text-soft-orange/80 font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-dark-brown dark:text-white font-bold">
            Flux Virtual
          </span>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-soft-orange/5 border-b border-light-gray dark:border-dark-surface">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 py-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 bg-soft-orange/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-soft-orange" />
            </div>
            <span className="text-soft-orange font-semibold text-xs uppercase tracking-wider">
              Company
            </span>
          </div>
          <h1 className="text-3xl font-bold text-dark-brown dark:text-white mb-2">
            About Flux Virtual
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Developed and operated by{" "}
            <strong className="text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </strong>
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 py-12"
      >
        {/* Company Banner */}
        <div className="mb-10 p-6 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl">
          <p className="text-xs font-semibold text-soft-orange uppercase tracking-wider mb-1">
            Legal Operator
          </p>
          <p className="text-xl font-bold text-dark-brown dark:text-white">
            SWIFTDROP PREMIER SOLUTIONS LIMITED
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Flux Virtual is a product of SWIFTDROP PREMIER SOLUTIONS LIMITED, a registered business.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-dark-brown dark:text-white mb-3 pb-2 border-b border-light-gray dark:border-dark-surface">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Flux Virtual is developed and operated by{" "}
            <strong className="text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </strong>
            , a registered business. We build technology products that help
            individuals and businesses communicate across borders with ease,
            speed, and security.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-dark-brown dark:text-white mb-3 pb-2 border-b border-light-gray dark:border-dark-surface">
            What We Do
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Flux Virtual provides virtual phone numbers from multiple countries,
            allowing users to send and receive SMS, make and receive voice calls,
            and verify accounts on third-party platforms — all from a single
            mobile app.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pl-1">
            <li>Virtual phone numbers from the US, UK, Canada, Australia, and more</li>
            <li>Instant SMS reception and voice calls</li>
            <li>Secure Naira payments via Paystack</li>
            <li>Available on iOS and Android</li>
          </ul>
        </div>

        {/* Our Mission */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-dark-brown dark:text-white mb-3 pb-2 border-b border-light-gray dark:border-dark-surface">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Our mission at SWIFTDROP PREMIER SOLUTIONS LIMITED is to make
            global communication accessible and affordable for everyone,
            starting from Nigeria and expanding across Africa and the world.
          </p>
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-dark-brown dark:text-white mb-3 pb-2 border-b border-light-gray dark:border-dark-surface">
            Contact Us
          </h2>
          <div className="p-5 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl space-y-1">
            <p className="text-dark-brown dark:text-white font-semibold">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Trading as: <strong className="text-dark-brown dark:text-white">Flux Virtual</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {config.brand.founderTitle}: <strong className="text-dark-brown dark:text-white">{config.brand.founder}</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {config.brand.address}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm pt-1">
              Email:{" "}
              <a
                href={`mailto:${config.brand.email}`}
                className="text-soft-orange hover:underline font-medium"
              >
                {config.brand.email}
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-light-gray dark:border-dark-surface flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} SWIFTDROP PREMIER SOLUTIONS LIMITED. All rights reserved.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 text-soft-orange hover:text-soft-orange/80 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </motion.main>
    </div>
  );
};
