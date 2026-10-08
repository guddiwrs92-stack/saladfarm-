import React, { useState } from 'react';
import { X, MessageCircle, AlertCircle, Clock, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CustomerDetails } from '../types';
import { brandConfig } from '../config/brandConfig';
import { generateWhatsAppOrderMessage, getWhatsAppUrl } from '../utils/whatsapp';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    deliveryFee,
    totalAmount,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    setLastOrderDetails
  } = useCart();

  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: '',
    phoneNumber: '',
    deliveryAddress: '',
    areaLocality: brandConfig.serviceAreas[0] || 'Sardarpura',
    landmark: '',
    preferredDeliveryTime: brandConfig.deliveryTimeSlots[0] || 'As soon as possible',
    specialInstructions: '',
    isOrderForSomeoneElse: false,
    recipientName: '',
    recipientPhone: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isCheckoutOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phoneNumber.replace(/[\s\-\+]/g, '').replace(/^91/, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit Indian phone number.';
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Please add your complete delivery address.';
    }

    if (!formData.areaLocality.trim()) {
      newErrors.areaLocality = 'Please select or enter your area/locality in Jodhpur.';
    }

    if (formData.isOrderForSomeoneElse) {
      if (!formData.recipientName?.trim()) {
        newErrors.recipientName = "Please provide the recipient's name.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      setErrors({ form: 'Your cart is empty. Please add items first.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Clean phone number
    const cleanedPhone = formData.phoneNumber.replace(/[\s\-\+]/g, '').replace(/^91/, '');
    const finalCustomerData: CustomerDetails = {
      ...formData,
      phoneNumber: `+91 ${cleanedPhone}`
    };

    // Generate message
    const whatsappMessage = generateWhatsAppOrderMessage(
      cart,
      finalCustomerData,
      subtotal,
      deliveryFee,
      totalAmount
    );

    const whatsappUrl = getWhatsAppUrl(whatsappMessage);

    // Save order history state for the confirmation view
    const orderId = `SF-JDH-${Math.floor(1000 + Math.random() * 9000)}`;
    setLastOrderDetails({
      customer: finalCustomerData,
      cart: [...cart],
      subtotal,
      deliveryFee,
      totalAmount,
      orderId,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Clear cart and close modal
    clearCart();
    setIsCheckoutOpen(false);

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="WhatsApp Checkout Dialog"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-4 sm:my-8 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#315E35]/15 bg-[#F2F7EE] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#25D366] text-white rounded-xl shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-[#1F2921] text-base sm:text-lg">
                Complete Order via WhatsApp
              </h2>
              <p className="text-xs text-[#315E35] font-semibold">
                Instant confirmation · Saladfarm Jodhpur
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 text-gray-500 hover:text-black rounded-lg hover:bg-white/60 transition-colors cursor-pointer"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSendWhatsAppOrder} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {errors.form && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          {/* Customer Details Group */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#315E35]" />
              <span>Customer Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#1F2921] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                      : 'border-gray-200 focus:border-[#315E35] focus:ring-[#315E35]/15'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="9876543210"
                    className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl border text-sm text-[#1F2921] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                      errors.phoneNumber
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                        : 'border-gray-200 focus:border-[#315E35] focus:ring-[#315E35]/15'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Location Group */}
          <div className="space-y-3.5 pt-3 border-t border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#315E35]" />
              <span>Delivery Address (Jodhpur)</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                House / Flat / Street Address <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={2}
                value={formData.deliveryAddress}
                onChange={(e) => {
                  setFormData({ ...formData, deliveryAddress: e.target.value });
                  if (errors.deliveryAddress) setErrors({ ...errors, deliveryAddress: '' });
                }}
                placeholder="House No., Building Name, Street / Road name"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#1F2921] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                  errors.deliveryAddress
                    ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                    : 'border-gray-200 focus:border-[#315E35] focus:ring-[#315E35]/15'
                }`}
              />
              {errors.deliveryAddress && (
                <p className="text-xs text-red-600 mt-1">{errors.deliveryAddress}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                  Area / Locality in Jodhpur <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.areaLocality}
                  onChange={(e) => setFormData({ ...formData, areaLocality: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1F2921] bg-white focus:outline-none focus:border-[#315E35] focus:ring-2 focus:ring-[#315E35]/15"
                >
                  {brandConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                  <option value="Other Area in Jodhpur">Other Area in Jodhpur</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={formData.landmark}
                  onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  placeholder="Near Jaljog circle, opposite..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1F2921] placeholder:text-gray-400 focus:outline-none focus:border-[#315E35] focus:ring-2 focus:ring-[#315E35]/15"
                />
              </div>
            </div>
          </div>

          {/* Delivery Preferences Group */}
          <div className="space-y-3.5 pt-3 border-t border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#315E35]" />
              <span>Timing & Instructions</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1F2921] bg-white focus:outline-none focus:border-[#315E35] focus:ring-2 focus:ring-[#315E35]/15"
              >
                {brandConfig.deliveryTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1F2921] mb-1">
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                value={formData.specialInstructions}
                onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                placeholder="Less spicy, extra fork, leave at security, etc."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1F2921] placeholder:text-gray-400 focus:outline-none focus:border-[#315E35] focus:ring-2 focus:ring-[#315E35]/15"
              />
            </div>
          </div>

          {/* Option: Order for Someone Else */}
          <div className="pt-3 border-t border-gray-100">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isOrderForSomeoneElse}
                onChange={(e) =>
                  setFormData({ ...formData, isOrderForSomeoneElse: e.target.checked })
                }
                className="rounded text-[#315E35] focus:ring-[#315E35]"
              />
              <span className="text-xs font-bold text-[#1F2921]">
                Sending this fresh bowl as a gift or for someone else?
              </span>
            </label>

            {formData.isOrderForSomeoneElse && (
              <div className="mt-3 p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-200">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Recipient's Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.recipientName}
                    onChange={(e) =>
                      setFormData({ ...formData, recipientName: e.target.value })
                    }
                    placeholder="Friend or family member's name"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                  />
                  {errors.recipientName && (
                    <p className="text-xs text-red-600 mt-0.5">{errors.recipientName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Recipient's Contact Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.recipientPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, recipientPhone: e.target.value })
                    }
                    placeholder="Recipient phone number"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Recap */}
          <div className="p-4 rounded-2xl bg-[#F2F7EE] border border-[#315E35]/15 space-y-2">
            <div className="flex justify-between items-center text-xs text-gray-700">
              <span>{cart.length} item(s) in bowl</span>
              <span className="font-semibold tabular-nums">Subtotal: ₹{subtotal}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-700">
              <span>Delivery charge</span>
              <span className="font-semibold tabular-nums text-[#315E35]">
                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
              </span>
            </div>
            <div className="pt-2 border-t border-[#315E35]/15 flex justify-between items-center">
              <span className="text-sm font-bold text-[#1F2921]">Total to Pay</span>
              <span className="text-lg font-extrabold text-[#315E35] tabular-nums">
                ₹{totalAmount}
              </span>
            </div>
          </div>

          {/* WhatsApp Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-md active:scale-[0.98] flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send Order on WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-gray-400 mt-2">
              Opens WhatsApp with your pre-formatted order details ready to send.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
