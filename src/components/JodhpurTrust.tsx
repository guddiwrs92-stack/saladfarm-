import React from 'react';
import { MapPin, Bike, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export const JodhpurTrust: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-20 bg-[#F2F7EE] border-y border-[#315E35]/10 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Local Jodhpur Kitchen Identity */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#315E35] border border-[#315E35]/15 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>BORN &amp; OPERATED IN THE BLUE CITY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F2921] leading-tight mb-4 text-balance">
              Made Fresh in Jodhpur. <br />
              <span className="text-[#315E35]">Delivered to your doorstep.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#1F2921]/80 leading-relaxed mb-6">
              From our kitchen to your table — fresh, crunchy and full of flavour. We started Saladfarm right here in Jodhpur with a simple purpose: to give our city authentic, chef-crafted healthy food that actually tastes phenomenal.
            </p>

            {/* Local Trust Badges */}
            <div className="grid grid-cols-2 gap-3.5 mb-6">
              <div className="p-3.5 bg-white rounded-2xl border border-[#315E35]/10 shadow-2xs">
                <Bike className="w-5 h-5 text-[#5FAE45] mb-2" />
                <h4 className="font-bold text-xs text-[#1F2921]">Fast Local Dispatch</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">30-45 mins average across central Jodhpur.</p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-[#315E35]/10 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#315E35] mb-2" />
                <h4 className="font-bold text-xs text-[#1F2921]">Pristine Hygiene</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Triple-washed greens and eco-conscious bowls.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#315E35]">
              <HeartHandshake className="w-4 h-4 text-[#D93672]" />
              <span>Supporting local hydroponic growers and fresh Rajasthani dairy.</span>
            </div>
          </div>

          {/* Right Column: Service Localities in Jodhpur */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#315E35]/15 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <h3 className="font-display text-xl font-bold text-[#1F2921]">
                  Delivery Across Jodhpur
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Home &amp; Office Delivery Available Daily ({brandConfig.operatingHours})
                </p>
              </div>
              <span className="text-2xl" role="img" aria-label="city">
                🏰
              </span>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              We deliver to all major residential colonies, fitness clubs, clinics, and commercial offices across Jodhpur:
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {brandConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-xl bg-[#F2F7EE] text-[#315E35] text-xs font-bold border border-[#315E35]/10 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FAE45]" />
                  <span>{area}</span>
                </span>
              ))}
            </div>

            <div className="p-3.5 bg-[#FFFDF7] rounded-xl border border-dashed border-[#315E35]/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#1F2921]">Not seeing your sector?</p>
                <p className="text-[11px] text-gray-500">Contact us directly on WhatsApp for custom route delivery.</p>
              </div>
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hi%20Saladfarm!%20Can%20you%20deliver%20to%20my%20location%20in%20Jodhpur?`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#315E35] hover:text-[#254929] underline"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
