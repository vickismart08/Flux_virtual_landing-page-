import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { config } from "../config";

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

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service — Flux Virtual";
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
              <FileText className="w-5 h-5 text-soft-orange" />
            </div>
            <span className="text-soft-orange font-semibold text-xs uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl font-bold text-dark-brown dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date:{" "}
            <strong className="text-dark-brown dark:text-white">June 4, 2026</strong>
            &nbsp;·&nbsp; Operated by:{" "}
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
        <div className="mb-10 p-5 bg-soft-orange/5 border border-soft-orange/20 rounded-2xl">
          <p className="text-dark-brown dark:text-white font-semibold">
            SWIFTDROP PREMIER SOLUTIONS LIMITED
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            These Terms of Service govern your use of Flux Virtual, a product
            developed and operated by SWIFTDROP PREMIER SOLUTIONS LIMITED.
          </p>
        </div>

        <Section number="1" title="Acceptance of Terms">
          <p>
            By downloading, installing, or using the Flux Virtual mobile
            application, you agree to be bound by these Terms of Service. Flux
            Virtual is operated by{" "}
            <strong className="text-dark-brown dark:text-white">
              SWIFTDROP PREMIER SOLUTIONS LIMITED
            </strong>
            . If you do not agree to these terms, do not use the service.
          </p>
        </Section>

        <Section number="2" title="Service Description">
          <p>
            Flux Virtual, operated by SWIFTDROP PREMIER SOLUTIONS LIMITED,
            provides virtual phone numbers that allow users to send and receive
            SMS messages and voice calls from supported countries.
          </p>
        </Section>

        <Section number="3" title="User Accounts">
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>You must provide accurate information when creating your account.</li>
            <li>You are responsible for keeping your account credentials secure.</li>
            <li>You must be at least 18 years old to use this service.</li>
            <li>One account per user is permitted.</li>
          </ul>
        </Section>

        <Section number="4" title="Payments and Credits">
          <ul className="list-disc list-inside space-y-1.5 pl-1">
            <li>Payments are processed in Nigerian Naira (NGN) via Paystack.</li>
            <li>Credits added to your account are non-refundable once used.</li>
            <li>Virtual number subscriptions renew monthly from your credit balance.</li>
            <li>SWIFTDROP PREMIER SOLUTIONS LIMITED reserves the right to change pricing with notice.</li>
          </ul>
        </Section>

        <Section number="5" title="Acceptable Use">
          <p>You agree not to use Flux Virtual to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-1 mt-2">
            <li>Send spam, unsolicited messages, or engage in harassment.</li>
            <li>Conduct fraudulent, deceptive, or illegal activities.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Attempt to reverse-engineer or misuse the platform.</li>
          </ul>
        </Section>

        <Section number="6" title="Service Availability">
          <p>
            SWIFTDROP PREMIER SOLUTIONS LIMITED strives to maintain high
            availability but does not guarantee uninterrupted access to Flux
            Virtual. We reserve the right to suspend or terminate the service
            for maintenance, security, or other operational reasons.
          </p>
        </Section>

        <Section number="7" title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, SWIFTDROP PREMIER SOLUTIONS
            LIMITED shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of Flux Virtual.
          </p>
        </Section>

        <Section number="8" title="Termination">
          <p>
            SWIFTDROP PREMIER SOLUTIONS LIMITED reserves the right to suspend or
            terminate accounts that violate these Terms of Service without prior
            notice.
          </p>
        </Section>

        <Section number="9" title="Changes to Terms">
          <p>
            SWIFTDROP PREMIER SOLUTIONS LIMITED may update these Terms of
            Service at any time. Continued use of Flux Virtual after changes
            are posted constitutes your acceptance of the updated terms.
          </p>
        </Section>

        <Section number="10" title="Contact">
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
                href={`mailto:${config.brand.email}`}
                className="text-soft-orange hover:underline font-medium"
              >
                {config.brand.email}
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
