/**
 * Footer Component
 */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { config } from "../config";

export const Footer = () => {
  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: config.legal.privacy },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Facebook", href: "#", icon: "facebook" },
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-light-gray dark:border-dark-surface transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-soft-orange mb-3">
              {config.brand.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Global virtual phone numbers for SMS, calls, and verification.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed mt-3">
              {config.brand.companyTagline}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed mt-1">
              {config.brand.companyOperator}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed mt-1">
              {config.brand.address}
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-dark-brown dark:text-white font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  Screenshots
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Download Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-dark-brown dark:text-white font-semibold mb-4">
              Download
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={config.downloads.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  Android App
                </a>
              </li>
              <li>
                <a
                  href={config.downloads.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
                >
                  iPhone App
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-dark-brown dark:text-white font-semibold mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${config.brand.email}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm break-all">{config.brand.email}</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Available 24/7 for support
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-light-gray dark:border-dark-surface my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            <p>{config.brand.copyright}</p>
            <p className="mt-1">
              {config.brand.companyOperator}
            </p>
            <p className="mt-1 flex items-center gap-1">
              Built with <Heart className="inline w-3 h-3 text-soft-orange" /> by{" "}
              <span className="font-semibold text-dark-brown dark:text-white">
                {config.brand.company}
              </span>
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-soft-orange transition-colors text-sm"
                >
                  {link.label}
                </a>
              ),
            )}
          </motion.div>

          {/* Social Links (Placeholder) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-8 h-8 rounded-full bg-light-gray dark:bg-dark-card hover:bg-soft-orange hover:text-white dark:hover:text-white transition-all flex items-center justify-center"
                aria-label={link.label}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {link.icon === "twitter" && (
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  )}
                  {link.icon === "linkedin" && (
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  )}
                  {link.icon === "facebook" && (
                    <path d="M18 2h-3a6 6 0 00-6 6v9h-2v4h2v1h4v-1h3v-4h-3V8a2 2 0 012-2h3V2z" />
                  )}
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
