import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeliveryTrust } from './components/DeliveryTrust';
import { FeaturedCaesar } from './components/FeaturedCaesar';
import { MenuSection } from './components/MenuSection';
import { SubscriptionsSection } from './components/SubscriptionsSection';
import { AboutSection } from './components/AboutSection';
import { JodhpurTrust } from './components/JodhpurTrust';
import { ThirdPartyDelivery } from './components/ThirdPartyDelivery';
import { InstagramGrid } from './components/InstagramGrid';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { MobileBottomBar } from './components/MobileBottomBar';

function AppContent() {
  const { selectedProductForDetail, setSelectedProductForDetail } = useCart();

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#1F2921] flex flex-col font-sans-brand selection:bg-[#5FAE45]/20 selection:text-[#315E35]">
      {/* Sticky Top Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onExploreMenu={() => handleNavigate('menu')} />

        {/* 2. Core Pillars Trust Bar */}
        <DeliveryTrust />

        {/* 3. Editorial Spotlight: Classic Crunch Caesar Salad */}
        <FeaturedCaesar />

        {/* 4. Complete Interactive Menu */}
        <MenuSection />

        {/* 5. Daily & Monthly Subscription Plans */}
        <SubscriptionsSection />

        {/* 6. Brand Story & Authentic Kitchen Philosophy */}
        <AboutSection />

        {/* 7. Local Jodhpur Identity & Coverage Areas */}
        <JodhpurTrust />

        {/* 8. Swiggy & Zomato Ordering Bar */}
        <ThirdPartyDelivery />

        {/* 9. Visual Editorial Gallery (Instagram style) */}
        <InstagramGrid />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Complete WhatsApp Checkout Form Modal */}
      <CheckoutModal />

      {/* Post-Order Confirmation Receipt */}
      <OrderConfirmationModal />

      {/* Mobile Sticky Thumb Navigation Bar */}
      <MobileBottomBar onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
