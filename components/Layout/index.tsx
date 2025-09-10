import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, Facebook, Twitter, Linkedin, Instagram, ChevronDown } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  InsuNepal
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Insurance Solutions</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 flex items-center space-x-1">
                <span>Insurance</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown menu would go here if needed */}
            </div>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#privacy" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="#quote"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#insurance"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insurance
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-white rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </a>
            <a
              href="#quote"
              className="block px-3 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-md text-center mt-4 hover:from-teal-700 hover:to-blue-700 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  InsuNepal
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Insurance Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Protecting families and securing futures with comprehensive life insurance solutions. 
              We make insurance simple, affordable, and accessible for everyone.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-sm">+977 9800000000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-sm">info@insunepal.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#quote" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal & Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#claims" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Claims Support
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#licensing" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Licensing Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 py-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get insurance tips and updates delivered to your inbox.</p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <div className="flex max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-r-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 InsuNepal. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#twitter"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#linkedin"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#instagram"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;