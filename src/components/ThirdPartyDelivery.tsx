import React from 'react';
import { ExternalLink } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export const ThirdPartyDelivery: React.FC = () => {
  return (
    <section className="py-12 bg-[#F2F7EE] border-t border-[#315E35]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="font-display text-2xl font-bold text-[#1F2921]">
          Prefer ordering through your favourite app?
        </h3>
        <p className="text-sm text-[#1F2921]/75 mt-2 max-w-lg mx-auto">
          You can also find Saladfarm on Swiggy &amp; Zomato for quick on-demand food delivery across Jodhpur.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {/* Swiggy Button */}
          <a
            href={brandConfig.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#FC8019] hover:bg-[#e6710f] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>Order on Swiggy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Zomato Button */}
          <a
            href={brandConfig.zomatoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#E23744] hover:bg-[#cb2a37] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>Order on Zomato</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
