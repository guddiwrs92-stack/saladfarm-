import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShieldCheck, Flame } from 'lucide-react';
import { Product, ExtraOption } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedDressing, setSelectedDressing] = useState<string>(
    product?.dressingOptions?.[0] || ''
  );
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const toggleExtra = (extra: ExtraOption) => {
    if (selectedExtras.some((e) => e.name === extra.name)) {
      setSelectedExtras(selectedExtras.filter((e) => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, item) => sum + item.price, 0);
  const totalItemPrice = (product.price + extrasTotal) * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedDressing, selectedExtras);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition-all hover:scale-105 cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="md:w-1/2 relative bg-[#F2F7EE] aspect-[4/3] md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Veg Symbol */}
            <div className="absolute top-4 left-4 bg-white/95 p-1.5 rounded-md shadow-sm">
              <div className="w-4 h-4 border-2 border-emerald-600 flex items-center justify-center rounded-xs p-0.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
              </div>
            </div>

            {/* Nutrition Overlay Tag */}
            {(product.calories || product.protein) && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white/60 flex items-center justify-around text-center text-xs">
                {product.calories && (
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-medium">Energy</span>
                    <span className="font-bold text-[#1F2921] tabular-nums">{product.calories} kcal</span>
                  </div>
                )}
                {product.protein && (
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-medium">Protein</span>
                    <span className="font-bold text-[#315E35] tabular-nums">{product.protein}</span>
                  </div>
                )}
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-medium">Kitchen</span>
                  <span className="font-bold text-[#F28C28]">Jodhpur</span>
                </div>
              </div>
            )}
          </div>

          {/* Details & Customizations */}
          <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between max-h-[75vh] overflow-y-auto">
            <div>
              {/* Category */}
              <div className="text-xs font-bold uppercase tracking-wider text-[#315E35] mb-1">
                {product.category}
              </div>

              {/* Title */}
              <h2 id="product-modal-title" className="font-display text-2xl font-bold text-[#1F2921] leading-tight">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-[#1F2921]/75 mt-2 leading-relaxed">
                {product.detailedDescription || product.description}
              </p>

              {/* Ingredients List */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#1F2921] uppercase tracking-wider mb-2">
                    Ingredients Included
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs text-[#1F2921]/80 bg-[#F2F7EE] px-2.5 py-1 rounded-md"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dressing Choice if applicable */}
              {product.dressingOptions && product.dressingOptions.length > 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#1F2921] uppercase tracking-wider mb-2">
                    Choose Dressing
                  </h4>
                  <div className="space-y-1.5">
                    {product.dressingOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                          selectedDressing === opt
                            ? 'border-[#315E35] bg-[#F2F7EE] text-[#315E35] font-semibold'
                            : 'border-gray-200 hover:bg-gray-50 text-[#1F2921]'
                        }`}
                      >
                        <span>{opt}</span>
                        <input
                          type="radio"
                          name="dressing"
                          value={opt}
                          checked={selectedDressing === opt}
                          onChange={() => setSelectedDressing(opt)}
                          className="text-[#315E35] focus:ring-[#315E35]"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Extras & Add-ons */}
              {product.extras && product.extras.length > 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#1F2921] uppercase tracking-wider mb-2">
                    Optional Add-ons
                  </h4>
                  <div className="space-y-1.5">
                    {product.extras.map((extra) => {
                      const isSelected = selectedExtras.some((e) => e.name === extra.name);
                      return (
                        <label
                          key={extra.name}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#315E35] bg-[#F2F7EE] text-[#315E35] font-semibold'
                              : 'border-gray-200 hover:bg-gray-50 text-[#1F2921]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleExtra(extra)}
                              className="rounded text-[#315E35] focus:ring-[#315E35]"
                            />
                            <span>{extra.name}</span>
                          </div>
                          <span className="font-semibold text-gray-700 tabular-nums">
                            +₹{extra.price}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Sticky Action Bar inside Modal */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 text-gray-600 hover:text-black rounded-lg hover:bg-white transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-bold text-[#1F2921] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 text-gray-600 hover:text-black rounded-lg hover:bg-white transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Price Display */}
                <div className="text-right">
                  <span className="text-[11px] text-gray-500 block">Total</span>
                  <span className="text-xl font-extrabold text-[#315E35] tabular-nums">
                    ₹{totalItemPrice}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer ${
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
                  <span>Add to Order · ₹{totalItemPrice}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
