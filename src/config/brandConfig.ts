/**
 * Saladfarm Brand & Business Configuration
 * Centralized settings for business owner customization.
 * Update phone numbers, external ordering URLs, and delivery settings here.
 */

export const brandConfig = {
  brandName: "Saladfarm",
  tagline: "BUILT FOR FITNESS. LOVED FOR TASTE",
  city: "Jodhpur",
  state: "Rajasthan",
  country: "India",
  locationDisplay: "Jodhpur, Rajasthan, India",
  kitchenAddress: "Saladfarm Central Kitchen, Residency Road / Sardarpura, Jodhpur, Rajasthan 342003",
  
  /**
   * Primary WhatsApp Number for Orders & Subscriptions.
   * Can be configured on Vercel via VITE_WHATSAPP_NUMBER environment variable.
   * Format: Country code without + followed by 10-digit number (e.g. "919876543210")
   */
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "919876543210",
  
  /**
   * Phone number for direct phone calls (if customer prefers calling)
   */
  contactPhone: (import.meta.env.VITE_CONTACT_PHONE as string) || "+91 98765 43210",
  
  /**
   * Direct Delivery Integration Links
   * Can be configured on Vercel via VITE_SWIGGY_URL, VITE_ZOMATO_URL, VITE_INSTAGRAM_URL
   */
  swiggyUrl: (import.meta.env.VITE_SWIGGY_URL as string) || "https://www.swiggy.com/restaurants/saladfarm-jodhpur",
  zomatoUrl: (import.meta.env.VITE_ZOMATO_URL as string) || "https://www.zomato.com/jodhpur/saladfarm",
  instagramUrl: (import.meta.env.VITE_INSTAGRAM_URL as string) || "https://www.instagram.com/saladfarm",

  /**
   * Delivery Pricing & Logistics Rules
   */
  deliveryFee: 40, // ₹40 delivery fee
  freeDeliveryThreshold: 499, // Free delivery for orders >= ₹499
  estimatedDeliveryTime: "30-45 mins",
  operatingHours: "10:00 AM - 10:30 PM (Mon - Sun)",

  /**
   * Prominent localities served across Jodhpur
   */
  serviceAreas: [
    "Sardarpura",
    "Shastri Nagar",
    "Ratanada",
    "Paota",
    "Pal Road",
    "Chopasni Housing Board",
    "Circuit House Road",
    "Air Force Area",
    "Basni",
    "Mandore Road"
  ],

  /**
   * Preferred Delivery Time Slots
   */
  deliveryTimeSlots: [
    "As soon as possible (30-45 mins)",
    "Lunch: 12:30 PM - 01:30 PM",
    "Lunch: 01:30 PM - 02:30 PM",
    "Evening Snack: 04:30 PM - 05:30 PM",
    "Dinner: 07:30 PM - 08:30 PM",
    "Dinner: 08:30 PM - 09:30 PM"
  ]
};
