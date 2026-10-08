import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

import heroSaladImg from '../assets/images/hero_salad_bowl_1791465082553.jpg';
import caesarSaladImg from '../assets/images/featured_caesar_salad_1791465094775.jpg';
import proteinBowlImg from '../assets/images/protein_power_bowl_1791465109343.jpg';
import mediterraneanSaladImg from '../assets/images/mediterranean_salad_1791465129092.jpg';
import gardenFreshSaladImg from '../assets/images/garden_fresh_salad_1791465141807.jpg';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      image: caesarSaladImg,
      caption: 'Crunch into something good.',
      tag: '#SaladfarmClassic'
    },
    {
      image: proteinBowlImg,
      caption: 'Built for fitness. 26g clean protein.',
      tag: '#ProteinPower'
    },
    {
      image: mediterraneanSaladImg,
      caption: 'Freshly made with Greek feta & Kalamata olives.',
      tag: '#MediterraneanVibes'
    },
    {
      image: gardenFreshSaladImg,
      caption: 'Jodhpur, we’re serving fresh every day.',
      tag: '#MadeInJodhpur'
    },
    {
      image: heroSaladImg,
      caption: 'Your everyday healthy food favourite.',
      tag: '#EatFreshEveryday'
    }
  ];

  return (
    <section className="py-16 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D93672] mb-1.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>COMMUNITY &amp; KITCHEN</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1F2921]">
              Fresh moments from our kitchen.
            </h2>
          </div>

          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#315E35] hover:text-[#254929] hover:underline cursor-pointer"
          >
            <span>Follow @saladfarm on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5-tile grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden aspect-square bg-[#F2F7EE] shadow-2xs hover:shadow-md transition-all ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5 text-white">
                <p className="text-xs font-bold leading-tight">{post.caption}</p>
                <span className="text-[10px] text-white/80 mt-1">{post.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
