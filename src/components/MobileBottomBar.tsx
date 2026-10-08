import React from 'react';
import { ShoppingBag, Utensils, MessageCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { brandConfig } from '../config/brandConfig';

interface MobileBottomBarProps {
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onNavigate }) => {
  const { totalItems, totalAmount, setIsCartOpen, setIsCheckoutOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-t border-[#315E35]/15 px-3 py-2 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Menu Navigation Tab */}
        <button
          type="button"
          onClick={() => onNavigate('menu')}
          className="flex flex-col items-center justify-center py-1 px-3 text-[#1F2921] hover:text-[#315E35] active:scale-95 transition-transform"
        >
          <Utensils className="w-5 h-5 text-[#315E35]" />
          <span className="text-[10px] font-bold mt-0.5">Menu</span>
        </button>

        {/* Cart Tab with Count */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-3 text-[#1F2921] hover:text-[#315E35] active:scale-95 transition-transform"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#1F2921]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#D93672] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold mt-0.5">Cart</span>
        </button>

        {/* Primary Action Button */}
        {totalItems > 0 ? (
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(true)}
            className="flex-1 bg-[#315E35] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-1.5">
              <span>Checkout</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] font-semibold tabular-nums">
                ₹{totalAmount}
              </span>
            </div>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="flex-1 bg-[#315E35] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform"
          >
            <span>Order Fresh Bowls</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
