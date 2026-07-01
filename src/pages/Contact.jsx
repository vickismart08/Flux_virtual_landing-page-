import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Building2 } from "lucide-react";
import { config } from "../config";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact — Flux Virtual";
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
              <Mail className="w-5 h-5 text-soft-orange" />
            </div>
            <span className="text-soft-orange font-semibold text-xs uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl font-bold text-dark-brown dark:text-white mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Reach out to{" "}
            <strong className="text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </strong>{" "}
            — the company behind Flux Virtual.
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
        {/* Company Card */}
        <div className="mb-10 p-6 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 bg-soft-orange/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
            <Building2 className="w-5 h-5 text-soft-orange" />
          </div>
          <div>
            <p className="text-xs font-semibold text-soft-orange uppercase tracking-wider mb-1">
              Legal Entity
            </p>
            <p className="text-lg font-bold text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Flux Virtual is a product developed and operated by SWIFTDROP PREMIER SOLUTIONS LIMITED.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-4 mb-12">
          <a
            href={`mailto:${config.brand.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl border border-light-gray dark:border-dark-surface hover:border-soft-orange hover:bg-soft-orange/5 transition-all group"
          >
            <div className="w-10 h-10 bg-soft-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-soft-orange/20 transition-colors">
              <Mail className="w-5 h-5 text-soft-orange" />
            </div>
            <div>
              <p className="text-sm font-semibold text-dark-brown dark:text-white">
                Email Support
              </p>
              <p className="text-soft-orange text-sm font-medium">
                {config.brand.email}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                Available 24/7 — we typically respond within 24 hours
              </p>
            </div>
          </a>
        </div>

        {/* Note */}
        <div className="p-5 bg-gray-50 dark:bg-dark-surface rounded-2xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            For billing, account issues, or general enquiries about Flux Virtual,
            please email us with your registered account email and a brief
            description of your issue. Our team at{" "}
            <strong className="text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </strong>{" "}
            will get back to you as quickly as possible.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-light-gray dark:border-dark-surface flex flex-col sm:flex-row items-center justify-between gap-4">
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
