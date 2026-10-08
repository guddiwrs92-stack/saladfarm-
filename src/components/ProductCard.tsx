import React, { useState } from 'react';
import { Plus, Check, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProductForDetail } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <div
      onClick={() => setSelectedProductForDetail(product)}
      className="group flex flex-col bg-white rounded-2xl border border-[#315E35]/12 hover:border-[#315E35]/30 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full bg-[#F2F7EE] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Veg Symbol (Indian Food Standard: Green circle inside green square) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-xs flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-emerald-600 flex items-center justify-center rounded-xs p-0.5">
            <div className="w-2 h-2 rounded-full bg-emerald-600" />
          </div>
        </div>

        {/* Best seller or featured indicator */}
        {product.isBestSeller && (
          <div className="absolute top-3 right-3 bg-[#D93672] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
            Bestseller
          </div>
        )}

        {/* Quick View Overlay icon on desktop hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-[#1F2921] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata: Category & Nutrition line (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-[#1F2921]/60 mb-1.5">
            <span className="font-semibold text-[#315E35]">{product.category}</span>
            {product.protein && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.protein} protein</span>
              </>
            )}
            {product.calories && (
              <>
                <span aria-hidden="true">·</span>
                <span>{product.calories} kcal</span>
              </>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-[#1F2921] text-base sm:text-lg group-hover:text-[#315E35] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#1F2921]/70 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#315E35]/10 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#1F2921]/50 font-medium">Price</span>
            <span className="text-lg font-extrabold text-[#1F2921] tabular-nums">
              ₹{product.price}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to order`}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-[0.96] shadow-xs cursor-pointer ${
              justAdded
                ? 'bg-[#5FAE45] text-white'
                : 'bg-[#F2F7EE] hover:bg-[#315E35] text-[#315E35] hover:text-white border border-[#315E35]/20'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added ✓</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
