import { CartItem, CustomerDetails } from '../types';
import { brandConfig } from '../config/brandConfig';

/**
 * Generates the clean formatted WhatsApp order message as required by Saladfarm.
 */
export function generateWhatsAppOrderMessage(
  cart: CartItem[],
  customer: CustomerDetails,
  subtotal: number,
  deliveryFee: number,
  totalAmount: number
): string {
  const itemLines = cart.map((item) => {
    const extrasTotal = (item.selectedExtras || []).reduce((sum, e) => sum + e.price, 0);
    const itemPrice = (item.product.price + extrasTotal) * item.quantity;
    
    let line = `${item.product.name} × ${item.quantity}\n₹${itemPrice}`;

    if (item.selectedDressing) {
      line += `\n(Dressing: ${item.selectedDressing})`;
    }
    if (item.selectedExtras && item.selectedExtras.length > 0) {
      const extraNames = item.selectedExtras.map((e) => e.name).join(', ');
      line += `\n(Extras: ${extraNames})`;
    }
    return line;
  });

  let message = `Hello ${brandConfig.brandName}! 🥗\n\nI'd like to place an order.\n\nORDER DETAILS:\n----------------\n`;
  message += itemLines.join('\n\n');
  message += `\n\n----------------\n`;
  message += `Subtotal: ₹${subtotal}\n`;
  message += `Delivery: ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}\n`;
  message += `TOTAL: ₹${totalAmount}\n\n`;

  message += `CUSTOMER DETAILS:\n`;
  message += `Name: ${customer.fullName.trim()}\n`;
  message += `Phone: ${customer.phoneNumber.trim()}\n\n`;

  message += `DELIVERY ADDRESS:\n${customer.deliveryAddress.trim()}\n\n`;
  message += `AREA:\n${customer.areaLocality.trim()}\n\n`;
  message += `LANDMARK:\n${customer.landmark.trim() || 'N/A'}\n\n`;
  message += `PREFERRED DELIVERY TIME:\n${customer.preferredDeliveryTime || 'As soon as possible'}\n\n`;
  message += `SPECIAL INSTRUCTIONS:\n${customer.specialInstructions.trim() || 'None'}\n`;

  if (customer.isOrderForSomeoneElse && customer.recipientName) {
    message += `\nORDER FOR SOMEONE ELSE:\n`;
    message += `Recipient Name: ${customer.recipientName.trim()}\n`;
    if (customer.recipientPhone) {
      message += `Recipient Phone: ${customer.recipientPhone.trim()}\n`;
    }
  }

  message += `\nThank you! 💚`;

  return message;
}

/**
 * Builds the full WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(messageText: string): string {
  // Strip non-digit characters from the configuration number
  const sanitizedNumber = brandConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${sanitizedNumber}?text=${encodedText}`;
}

/**
 * Builds the URL for subscription queries
 */
export function getSubscriptionWhatsAppUrl(planName: string, customMessage?: string): string {
  const text =
    customMessage ||
    `Hi ${brandConfig.brandName}! I'm interested in your ${planName} subscription. Please share the details.`;
  return getWhatsAppUrl(text);
}
