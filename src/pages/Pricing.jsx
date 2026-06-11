/**
 * Pricing Page
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Zap,
  Globe,
  Shield,
  Headphones,
  Phone,
  MessageSquare,
} from "lucide-react";

const features = [
  { icon: Phone, text: "Virtual phone number from 100+ countries" },
  { icon: MessageSquare, text: "Unlimited SMS reception" },
  { icon: Zap, text: "Instant number activation" },
  { icon: Globe, text: "Use anywhere in the world" },
  { icon: Shield, text: "Secure & encrypted communications" },
  { icon: Headphones, text: "Priority customer support" },
];

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing — Flux Virtual";
    return () => {
      document.title =
        "Flux Virtual - Global Virtual Phone Numbers for SMS & Calls";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-gray dark:border-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-soft-orange hover:text-soft-orange/80 font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <img
              src="/images/flux-logo.png"
              alt="Flux Virtual"
              className="w-7 h-7 rounded-lg object-contain"
            />
            <span className="text-dark-brown dark:text-white font-bold">
              Flux Virtual
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-soft-orange/5 to-transparent border-b border-light-gray dark:border-dark-surface">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-soft-orange/10 text-soft-orange text-sm font-semibold rounded-full mb-5">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-dark-brown dark:text-white mb-4 leading-tight">
            One Plan. Everything You Need.
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            No hidden fees. No complex tiers. Just full access to virtual phone
            numbers across 100+ countries — at one unbeatable price.
          </p>
        </motion.div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="relative bg-white dark:bg-dark-card border-2 border-soft-orange rounded-3xl p-8 shadow-2xl shadow-soft-orange/10">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-soft-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="mb-6 pt-2">
                <h2 className="text-xl font-bold text-dark-brown dark:text-white mb-1">
                  Virtual Number Plan
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Everything you need to stay connected globally
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black text-dark-brown dark:text-white">
                  ₦
                </span>
                <span className="text-6xl font-black text-soft-orange leading-none">
                  4,999
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                per number · billed once
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-soft-orange/15 flex items-center justify-center flex-shrink-0">
                      <Check
                        className="w-3 h-3 text-soft-orange"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 px-6 bg-soft-orange hover:bg-soft-orange/90 text-white font-bold rounded-2xl transition-all duration-200 active:scale-95 text-base shadow-lg shadow-soft-orange/30"
              >
                Get Started Now
              </a>

              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
                Available on iOS & Android · Instant activation
              </p>
            </div>
          </motion.div>

          {/* Image + description */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* price.png */}
            <div className="flex justify-center">
              <img
                src="/images/price.png"
                alt="Flux Virtual Pricing"
                className="w-full max-w-xs rounded-2xl object-contain"
              />
            </div>

            {/* Copy */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark-brown dark:text-white">
                Your global number, for less than you think.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                For just <strong className="text-soft-orange">₦4,999</strong>,
                unlock a real virtual phone number from any of our 100+
                supported countries. Receive SMS verifications, take calls, and
                manage everything from a single app — no SIM card required.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether you're protecting your personal number, verifying
                accounts, or building a remote identity, Flux Virtual gives you
                the flexibility and privacy you need — all at a price that makes
                sense.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-xl bg-soft-orange/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-soft-orange" />
                </div>
                <p className="text-sm font-semibold text-dark-brown dark:text-white">
                  Ready in under 60 seconds. No contracts. Cancel anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              q: "Is the number permanent?",
              a: "Your number stays active as long as your subscription is valid.",
            },
            {
              q: "Can I get numbers from any country?",
              a: "Yes — 100+ countries including the US, UK, Canada, Australia, and more.",
            },
            {
              q: "What payment methods are accepted?",
              a: "We accept cards, bank transfers, and mobile wallets via Paystack.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="p-6 bg-soft-orange/5 dark:bg-dark-card rounded-2xl border border-soft-orange/10"
            >
              <p className="font-semibold text-dark-brown dark:text-white mb-2 text-sm">
                {q}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {a}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom back link */}
        <div className="mt-14 pt-8 border-t border-light-gray dark:border-dark-surface flex items-center justify-between">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Flux Virtual. All rights reserved.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 text-soft-orange hover:text-soft-orange/80 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};
