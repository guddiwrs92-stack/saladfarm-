import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { brandConfig } from '../config/brandConfig';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    totalAmount,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryRemaining = Math.max(0, brandConfig.freeDeliveryThreshold - subtotal);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-md bg-[#FFFDF7] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#315E35]/15 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#F2F7EE] text-[#315E35] rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#1F2921] text-base sm:text-lg">Your Saladfarm Bowl</h2>
              <p className="text-xs text-gray-500">Freshly prepared in Jodhpur</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-500 hover:text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar Progress */}
        {subtotal > 0 && (
          <div className="bg-[#F2F7EE] px-4 py-2.5 border-b border-[#315E35]/10 text-xs">
            {freeDeliveryRemaining > 0 ? (
              <div className="flex items-center justify-between text-[#1F2921]">
                <span>
                  Add <strong className="text-[#315E35]">₹{freeDeliveryRemaining}</strong> more for{' '}
                  <strong className="text-[#5FAE45]">FREE Home Delivery</strong>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#315E35] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#5FAE45]" />
                <span>You unlocked FREE Delivery across Jodhpur! 🎉</span>
              </div>
            )}
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#5FAE45] h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / brandConfig.freeDeliveryThreshold) * 100)}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <span className="text-5xl mb-4" role="img" aria-label="salad bowl">
                🥗
              </span>
              <h3 className="font-display text-xl font-bold text-[#1F2921]">
                Your bowl is waiting
              </h3>
              <p className="text-sm text-gray-500 mt-1.5 max-w-xs">
                Add something fresh, crunchy and delicious to get started.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-3 bg-[#315E35] hover:bg-[#254929] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const extrasTotal = (item.selectedExtras || []).reduce((sum, e) => sum + e.price, 0);
              const singleItemPrice = item.product.price + extrasTotal;
              const lineTotal = singleItemPrice * item.quantity;

              return (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs flex gap-3.5 items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F2F7EE]"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-[#1F2921] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Customization Details */}
                    {item.selectedDressing && (
                      <p className="text-[11px] text-gray-500 truncate mt-0.5">
                        Dressing: {item.selectedDressing}
                      </p>
                    )}
                    {item.selectedExtras && item.selectedExtras.length > 0 && (
                      <p className="text-[11px] text-[#315E35] truncate">
                        +{item.selectedExtras.map((e) => e.name).join(', ')}
                      </p>
                    )}

                    {/* Stepper & Line Price */}
                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-50">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-gray-600 hover:text-black rounded hover:bg-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#1F2921] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-gray-600 hover:text-black rounded hover:bg-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-[#1F2921] tabular-nums">
                        ₹{lineTotal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Summary & Checkout Action */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#315E35]/15 space-y-3">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900 tabular-nums">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery (Jodhpur)</span>
                <span className="font-semibold tabular-nums text-[#315E35]">
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#1F2921] pt-2 border-t border-gray-100">
                <span>Total Amount</span>
                <span className="tabular-nums text-[#315E35]">₹{totalAmount}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full bg-[#315E35] hover:bg-[#254929] text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Continue to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-gray-400">
              Final order is sent directly to Saladfarm on WhatsApp
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
