import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import heroSaladImg from '../assets/images/hero_salad_bowl_1791465082553.jpg';
import { brandConfig } from '../config/brandConfig';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${brandConfig.brandName}! 🥗\nI'd like to check out today's fresh menu and place an order in Jodhpur.`
    );
    window.open(`https://wa.me/${brandConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Background soft natural ambient accent */}
      <div
        className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#5FAE45]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 -z-10 w-[400px] h-[400px] bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Brand Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F7EE] text-[#315E35] border border-[#315E35]/15 text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#5FAE45] animate-pulse" />
              <span>JODHPUR'S FRESH FOOD FAVOURITE</span>
              <span className="text-[#315E35]/40">·</span>
              <span className="text-[#D93672] font-extrabold">BUILT FOR FITNESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1F2921] font-bold tracking-tight leading-[1.12] mb-6 max-w-2xl text-balance">
              Fresh food. <br />
              <span className="text-[#315E35]">Big flavour.</span> <br />
              Every day.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#1F2921]/80 max-w-xl leading-relaxed mb-8">
              Fresh salads, wholesome meals and satisfying flavours — crafted with crisp seasonal ingredients and made fresh to order in Jodhpur.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 bg-[#315E35] hover:bg-[#254929] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFFDF7] hover:bg-[#F2F7EE] text-[#1F2921] border-2 border-[#315E35]/20 hover:border-[#315E35] px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="pt-6 border-t border-[#315E35]/15 w-full max-w-lg flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#1F2921]/75">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5FAE45]" />
                <span>Freshly prepared</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                <span>Made in Jodhpur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D93672]" />
                <span>Home Delivery Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Food Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetrical decorative background shape */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#5FAE45]/20 to-[#F5B942]/20 rounded-3xl transform rotate-1 -z-10" />

              {/* Main Food Photograph Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-[#F2F7EE]">
                <img
                  src={heroSaladImg}
                  alt="Saladfarm fresh gourmet harvest salad bowl with heirloom tomatoes, toasted croutons and herb dressing"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                {/* Subtle scrim for editorial text badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Info Pill at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#315E35]">
                      <span className="w-2 h-2 rounded-full bg-[#5FAE45]" />
                      <span>HEALTHY FAVOURITE 💚</span>
                    </div>
                    <p className="text-xs font-bold text-[#1F2921] mt-0.5">
                      Chef-Crafted Daily in Jodhpur
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onExploreMenu}
                    className="bg-[#315E35] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#254929] transition-colors cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>

              {/* Little Floating Accent Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-[#315E35]/10 items-center gap-3">
                <span className="text-2xl" role="img" aria-label="salad">
                  🥗
                </span>
                <div className="text-left">
                  <p className="text-[11px] text-[#1F2921]/60 font-semibold uppercase tracking-wider">
                    Nutrition First
                  </p>
                  <p className="text-xs font-bold text-[#315E35]">
                    100% Clean Ingredients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
