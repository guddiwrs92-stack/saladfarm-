import React from 'react';
import { CheckCircle2, MessageCircle, MapPin, Clock, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { brandConfig } from '../config/brandConfig';

export const OrderConfirmationModal: React.FC = () => {
  const { lastOrderDetails, setLastOrderDetails } = useCart();

  if (!lastOrderDetails) return null;

  const handleClose = () => {
    setLastOrderDetails(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order Confirmation Dialog"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-lg transition-colors cursor-pointer"
          aria-label="Close confirmation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#F2F7EE] text-[#5FAE45] rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#315E35]">
            Order Sent to Kitchen
          </span>
          <h2 className="font-display text-2xl font-bold text-[#1F2921] mt-1">
            Thank you, {lastOrderDetails.customer.fullName.split(' ')[0]}! 🥗
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Order Ref: <span className="font-bold text-[#1F2921]">{lastOrderDetails.orderId}</span>
          </p>
        </div>

        {/* WhatsApp Notification Tip */}
        <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-3.5 rounded-2xl flex items-center gap-3 mb-6">
          <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
          <p className="text-xs text-[#1F2921]">
            Your WhatsApp chat has opened. Hit <strong>Send</strong> in WhatsApp so our team can accept your order immediately!
          </p>
        </div>

        {/* Order Details Breakdown */}
        <div className="bg-[#F2F7EE] p-4 rounded-2xl border border-[#315E35]/10 space-y-3 mb-6 text-xs">
          <div className="font-bold text-[#1F2921] text-xs uppercase tracking-wider border-b border-[#315E35]/10 pb-1.5 flex justify-between items-center">
            <span>Summary of Items</span>
            <span>Total: ₹{lastOrderDetails.totalAmount}</span>
          </div>

          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {lastOrderDetails.cart.map((item: any) => (
              <div key={item.id} className="flex justify-between text-gray-700">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span className="font-semibold tabular-nums">
                  ₹{item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#315E35]/10 space-y-1 text-gray-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>
                {lastOrderDetails.customer.deliveryAddress}, {lastOrderDetails.customer.areaLocality}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#315E35]" />
              <span>Delivery Time: {lastOrderDetails.customer.preferredDeliveryTime}</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={handleClose}
          className="w-full bg-[#315E35] hover:bg-[#254929] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Back to Saladfarm</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
