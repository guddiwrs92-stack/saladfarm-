import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { brandConfig } from '../config/brandConfig';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-sm border-b border-[#315E35]/10 py-3'
            : 'bg-[#FFFDF7] py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark / Official Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="group transition-opacity hover:opacity-90 shrink-0"
              aria-label="Saladfarm Home"
            >
              <Logo variant="horizontal" size="md" />
            </a>

            {/* Zone 2: Navigation Links (Clean text with subtle underline hover) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1F2921]/80">
              <button
                type="button"
                onClick={() => handleNavClick('menu')}
                className="hover:text-[#315E35] transition-colors py-1 cursor-pointer"
              >
                Menu
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('subscriptions')}
                className="hover:text-[#315E35] transition-colors py-1 cursor-pointer"
              >
                Subscriptions
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="hover:text-[#315E35] transition-colors py-1 cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('location')}
                className="hover:text-[#315E35] transition-colors py-1 cursor-pointer"
              >
                Jodhpur & Contact
              </button>
            </nav>

            {/* Zone 3: Primary Actions (Cart + Order Now) */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-[#1F2921] hover:text-[#315E35] bg-[#F2F7EE] hover:bg-[#E2EED9] rounded-xl transition-all duration-150 flex items-center justify-center cursor-pointer"
                aria-label={`Shopping Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D93672] text-white text-[11px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1 shadow-sm animate-in zoom-in-75 duration-150">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                type="button"
                onClick={() => handleNavClick('menu')}
                className="hidden sm:inline-flex items-center gap-2 bg-[#315E35] hover:bg-[#254929] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[#1F2921] hover:text-[#315E35] rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF7] border-b border-[#315E35]/10 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-3 text-base font-semibold text-[#1F2921]">
              <button
                type="button"
                onClick={() => handleNavClick('menu')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#F2F7EE] text-[#1F2921] transition-colors"
              >
                🥗 Browse Menu
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('subscriptions')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#F2F7EE] text-[#1F2921] transition-colors"
              >
                🗓️ Daily & Monthly Subscriptions
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#F2F7EE] text-[#1F2921] transition-colors"
              >
                🌱 About Saladfarm
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('location')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#F2F7EE] text-[#1F2921] transition-colors"
              >
                📍 Jodhpur Kitchen & Contact
              </button>

              <div className="pt-3 border-t border-[#315E35]/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick('menu');
                  }}
                  className="w-full bg-[#315E35] text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Order Fresh Salads Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hi%20Saladfarm!%20I'd%20like%20to%20inquire%20about%20ordering.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F28C28] text-white py-2.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
