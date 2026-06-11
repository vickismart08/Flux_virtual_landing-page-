/**
 * Header / Navigation Component
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { config } from '../config';
import { useDarkMode } from '../hooks/useDarkMode';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-bg border-b border-light-gray dark:border-dark-surface transition-colors duration-300">
      <div className="container-custom flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <a href="#hero" className="text-2xl font-bold text-soft-orange hover:opacity-80 transition-opacity">
            {config.brand.name}
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-dark-brown dark:text-white hover:text-soft-orange dark:hover:text-soft-orange transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle & Download Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-light-gray dark:hover:bg-dark-surface transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-soft-orange" />
            ) : (
              <Moon className="w-5 h-5 text-dark-brown" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-light-gray dark:hover:bg-dark-surface transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dark-brown dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-dark-brown dark:text-white" />
            )}
          </button>

          {/* CTA Button */}
          <a href={config.downloads.android} className="hidden sm:inline-block btn-primary">
            Download
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-light-gray dark:border-dark-surface bg-white dark:bg-dark-bg"
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-dark-brown dark:text-white hover:text-soft-orange dark:hover:text-soft-orange transition-colors font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a href={config.downloads.android} className="btn-primary text-center">
              Download App
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
};
