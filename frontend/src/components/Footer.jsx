import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                EstateHub
              </span>
            </div>
            <p className="text-sm">
              Your trusted partner in finding the perfect property. We specialize in residential and commercial real estate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-emerald-500 transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-emerald-500 transition-colors duration-300">
                  Our Agents
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                  Luxury Estates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors duration-300">
                  Office Spaces
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Real Estate Ave, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm">info@estatehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} EstateHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
