import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

const CATEGORIES: ProductCategory[] = [
  'All',
  'Salads',
  'Protein Bowls',
  'Healthy Meals',
  'Add-ons',
  'Drinks'
];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FFFDF7] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#315E35] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#5FAE45]" />
              <span>FRESH FAVOURITES MENU</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2921] tracking-tight">
              Crafted Fresh for You
            </h2>
            <p className="text-sm sm:text-base text-[#1F2921]/70 mt-2 max-w-xl">
              Good food doesn't have to compromise on taste. Handcrafted daily with crisp seasonal produce in Jodhpur.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search salads, quinoa, paneer..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#315E35]/15 focus:border-[#315E35] focus:outline-none focus:ring-2 focus:ring-[#315E35]/10 text-sm text-[#1F2921] placeholder:text-gray-400 shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Zero-pill discipline: Clean segmented interactive control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#315E35] text-white shadow-sm'
                    : 'bg-[#F2F7EE] text-[#1F2921]/80 hover:bg-[#E2EED9] hover:text-[#315E35]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#F2F7EE] rounded-3xl border border-[#315E35]/10 max-w-md mx-auto">
            <span className="text-4xl mb-3 block">🥗</span>
            <h3 className="text-lg font-bold text-[#1F2921]">No menu items found</h3>
            <p className="text-sm text-[#1F2921]/70 mt-1 mb-4">
              We couldn't find anything matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2 bg-[#315E35] text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
