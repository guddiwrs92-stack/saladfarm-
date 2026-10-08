import React, { useState } from 'react';
import { Plus, Check, Sparkles, Clock, ShieldCheck, Flame } from 'lucide-react';
import caesarSaladImg from '../assets/images/featured_caesar_salad_1791465094775.jpg';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const FeaturedCaesar: React.FC = () => {
  const { addToCart, setIsCartOpen, setSelectedProductForDetail } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const caesarProduct = products.find((p) => p.id === 'caesar-crunch') || products[0];

  const handleQuickAdd = () => {
    addToCart(caesarProduct, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1800);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F2F7EE] border-y border-[#315E35]/10 relative overflow-hidden">
      {/* Editorial Decorative Background Leaf Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Photo Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Offset frame backing */}
              <div className="absolute -inset-3 bg-[#315E35]/10 rounded-3xl transform -rotate-1 -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#315E35]/15">
                <img
                  src={caesarSaladImg}
                  alt="Classic Crunch Caesar Salad close up with crisp romaine, golden sourdough croutons and creamy parmesan dressing"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[4/3] object-cover object-center transform hover:scale-[1.03] transition-transform duration-700 cursor-pointer"
                  onClick={() => setSelectedProductForDetail(caesarProduct)}
                />

                {/* Macro/Fresh Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm border border-[#315E35]/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5FAE45]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#315E35]">
                    100% Vegetarian · Made Fresh
                  </span>
                </div>

                {/* Quick Nutritional Specs bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-white/80 grid grid-cols-3 divide-x divide-gray-200 text-center">
                  <div>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Calories</span>
                    <span className="text-sm font-bold text-[#1F2921] tabular-nums">340 kcal</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Protein</span>
                    <span className="text-sm font-bold text-[#315E35] tabular-nums">14g Clean</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">Prep Time</span>
                    <span className="text-sm font-bold text-[#F28C28]">Made to Order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Value Proposition */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            {/* Editorial Label */}
            <div className="inline-flex items-center gap-2 text-[#D93672] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIGNATURE SPOTLIGHT</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2921] leading-tight mb-5 text-balance">
              Meet your new <br />
              <span className="text-[#315E35]">favourite crunch.</span>
            </h2>

            {/* Editorial Copy */}
            <p className="text-base sm:text-lg text-[#1F2921]/80 leading-relaxed mb-6">
              Fresh, crunchy and seriously satisfying. Our Classic Crunch Caesar Salad brings together hand-torn crisp greens, artisanal garlic sourdough croutons, shaved aged cheese, and our signature slow-whipped Caesar dressing for an explosion of texture and flavour in every single bite.
            </p>

            {/* Four Concrete Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#315E35]/10">
                <span className="p-1.5 rounded-lg bg-[#5FAE45]/15 text-[#315E35] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#315E35]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1F2921]">Fresh Ingredients</h4>
                  <p className="text-xs text-[#1F2921]/70 mt-0.5">Hydroponic crisp greens washed and prepped each morning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#315E35]/10">
                <span className="p-1.5 rounded-lg bg-[#F28C28]/15 text-[#F28C28] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#F28C28]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1F2921]">Crunchy Texture</h4>
                  <p className="text-xs text-[#1F2921]/70 mt-0.5">Slow-baked olive oil garlic sourdough croutons.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#315E35]/10">
                <span className="p-1.5 rounded-lg bg-[#315E35]/15 text-[#315E35] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#315E35]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1F2921]">Made to Order</h4>
                  <p className="text-xs text-[#1F2921]/70 mt-0.5">Never pre-packaged or soggy. Assembled right when you order.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#315E35]/10">
                <span className="p-1.5 rounded-lg bg-[#D93672]/15 text-[#D93672] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#D93672]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1F2921]">Perfect Light Meal</h4>
                  <p className="text-xs text-[#1F2921]/70 mt-0.5">Substantial enough for lunch without the post-meal slump.</p>
                </div>
              </div>
            </div>

            {/* Price & Action Area */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#315E35] tabular-nums">
                  ₹{caesarProduct.price}
                </span>
                <span className="text-xs text-[#1F2921]/60 font-semibold">Standard Bowl</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                    justAdded
                      ? 'bg-[#5FAE45] text-white'
                      : 'bg-[#315E35] hover:bg-[#254929] text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bowl ✓</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Order Classic Caesar</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProductForDetail(caesarProduct)}
                  className="px-4 py-3.5 text-xs font-bold text-[#315E35] hover:text-[#1F2921] underline underline-offset-4 cursor-pointer"
                >
                  Customize & Ingredients
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
