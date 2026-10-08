import React from 'react';
import { Logo } from './Logo';
import { brandConfig } from '../config/brandConfig';
import { MessageCircle, Phone, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1F2921] text-white pt-16 pb-24 md:pb-16 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-xs">
              <Logo variant="horizontal" size="md" />
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Jodhpur’s salad-focused healthy food brand. Delivering fresh, crunchy salads, wholesome protein bowls, and daily meal subscriptions across Jodhpur.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5FAE45]">
              <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{brandConfig.locationDisplay}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5FAE45]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('subscriptions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Subscriptions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Saladfarm
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('location')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Jodhpur Delivery Areas
                </button>
              </li>
            </ul>
          </div>

          {/* Order Directly */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5FAE45]">
              Order Online
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hi%20Saladfarm!%20I'd%20like%20to%20order.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Order on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={brandConfig.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Swiggy Delivery</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href={brandConfig.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Zomato Delivery</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href={brandConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D93672]" />
                  <span>Instagram @saladfarm</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kitchen Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5FAE45]">
              Contact Kitchen
            </h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p className="text-xs text-gray-400">
                Operating Hours: <br />
                <span className="text-white font-medium">{brandConfig.operatingHours}</span>
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${brandConfig.whatsappNumber}`}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5FAE45]" />
                  <span>{brandConfig.contactPhone}</span>
                </a>
              </div>
              <p className="text-[11px] text-gray-400 pt-1">
                Central Kitchen, Sardarpura / Residency Rd, Jodhpur
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Saladfarm. All rights reserved. Built for Fitness. Loved for Taste.</p>
          <p className="text-gray-400">
            Handcrafted with fresh produce in Jodhpur, Rajasthan 🥗
          </p>
        </div>
      </div>
    </footer>
  );
};
