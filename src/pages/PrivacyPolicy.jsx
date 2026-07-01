/**
 * Privacy Policy Page
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";

const Section = ({ number, title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-dark-brown dark:text-white mb-3 pb-2 border-b border-light-gray dark:border-dark-surface">
      {number}. {title}
    </h2>
    <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — Flux Virtual";
    return () => {
      document.title =
        "Flux Virtual - Global Virtual Phone Numbers for SMS & Calls";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Minimal Header */}
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
              <Shield className="w-5 h-5 text-soft-orange" />
            </div>
            <span className="text-soft-orange font-semibold text-xs uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl font-bold text-dark-brown dark:text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date:{" "}
            <strong className="text-dark-brown dark:text-white">
              June 4, 2026
            </strong>
            &nbsp;·&nbsp; App Name:{" "}
            <strong className="text-dark-brown dark:text-white">
              Flux Virtual
            </strong>
            &nbsp;·&nbsp; Contact:{" "}
            <a
              href="mailto:support@flux-virtual.online"
              className="text-soft-orange hover:underline"
            >
              support@flux-virtual.online
            </a>
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
        <div className="mb-10 p-5 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl">
          <p className="text-dark-brown dark:text-white font-semibold">
            SWIFTDROP PREMIER SOLUTIONS LIMITED
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Flux Virtual is a product developed and operated by SWIFTDROP
            PREMIER SOLUTIONS LIMITED. This Privacy Policy explains how we
            collect, use, and protect your information when you use our mobile
            application and services.
          </p>
        </div>

        <Section number="1" title="Information We Collect">
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Login credentials (email/password or Google/Apple sign-in)</li>
            <li>Contacts (only if permission is granted)</li>
            <li>Device and usage data</li>
            <li>Payment information processed by third-party providers</li>
          </ul>
        </Section>

        <Section number="2" title="How We Use Information">
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>Provide virtual number services</li>
            <li>Manage user accounts</li>
            <li>Process payments and subscriptions</li>
            <li>Improve app performance</li>
            <li>Prevent fraud and abuse</li>
            <li>Provide customer support</li>
          </ul>
        </Section>

        <Section number="3" title="Payment Provider">
          <p>
            Payments are processed securely through{" "}
            <strong className="text-dark-brown dark:text-white">
              Paystack
            </strong>{" "}
            and other authorized payment providers. We do not store full payment
            card details on our servers.
          </p>
        </Section>

        <Section number="4" title="Third-Party Services">
          <p>
            We may use Firebase, Google Sign-In, Apple Sign-In, analytics
            services, and payment providers to deliver app functionality.
          </p>
        </Section>

        <Section number="5" title="Data Sharing">
          <p>
            We do not sell, rent, or trade personal information to third
            parties. Information may be shared only when required by law or to
            provide our services.
          </p>
        </Section>

        <Section number="6" title="Data Security">
          <p>
            We use industry-standard security measures designed to protect user
            data from unauthorized access, disclosure, or misuse.
          </p>
        </Section>

        <Section number="7" title="Data Retention">
          <p>
            We retain user information only as long as necessary to provide
            services, comply with legal obligations, resolve disputes, and
            enforce agreements.
          </p>
        </Section>

        <Section number="8" title="User Rights">
          <p>
            Users may request access, correction, or deletion of their personal
            data by contacting us using the email address below.
          </p>
        </Section>

        <Section number="9" title="Contact Us">
          <div className="mt-2 p-5 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl">
            <p className="text-dark-brown dark:text-white font-semibold mb-1">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              Trading as: <strong className="text-dark-brown dark:text-white">Flux Virtual</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Email:{" "}
              <a
                href="mailto:support@flux-virtual.online"
                className="text-soft-orange hover:underline font-medium"
              >
                support@flux-virtual.online
              </a>
            </p>
          </div>
        </Section>

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
