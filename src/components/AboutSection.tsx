import React from 'react';
import { Heart, Sparkles, Utensils, CheckCircle } from 'lucide-react';
import gardenFreshImg from '../assets/images/garden_fresh_salad_1791465141807.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFDF7] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#315E35]/15 bg-[#F2F7EE]">
              <img
                src={gardenFreshImg}
                alt="Saladfarm fresh ingredients being prepared in Jodhpur kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/80">
                <p className="text-xs font-bold text-[#315E35] uppercase tracking-wider">
                  The Saladfarm Kitchen Philosophy
                </p>
                <p className="text-xs text-[#1F2921] font-semibold mt-0.5">
                  Real dressing. Zero artificial fillers. Crunchy every single time.
                </p>
              </div>
            </div>
          </div>

          {/* Story Side */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D93672] mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>ABOUT SALADFARM</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2921] leading-tight mb-6 text-balance">
              Healthy doesn't have <br />
              <span className="text-[#315E35]">to be boring.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1F2921]/80 leading-relaxed mb-6">
              At Saladfarm, we believe healthy food should be something you actually look forward to eating. We combine fresh ingredients, satisfying textures and bold flavours to make everyday healthy eating easier.
            </p>

            <p className="text-sm text-[#1F2921]/70 leading-relaxed mb-8">
              Too many salads feel like a chore — limp lettuce, dry vegetables, and watery sauces. We created Saladfarm in Jodhpur to change that completely. Every bowl is engineered for texture: crisp greens that snap, warm grilled proteins that fill you up, house-made dressings with bright acid, and artisanal sourdough croutons baked fresh daily.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F7EE] border border-[#315E35]/10">
                <CheckCircle className="w-4 h-4 text-[#5FAE45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F2921]">Built for Fitness</h4>
                  <p className="text-[11px] text-[#1F2921]/70 mt-0.5">Clear protein and calorie counts to support your health goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F2F7EE] border border-[#315E35]/10">
                <Utensils className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F2921]">Loved for Taste</h4>
                  <p className="text-[11px] text-[#1F2921]/70 mt-0.5">Bold herbs, roasted aromatics, and rich dressings that taste heavenly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
