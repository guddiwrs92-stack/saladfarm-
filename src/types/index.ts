export type ProductCategory =
  | "All"
  | "Salads"
  | "Protein Bowls"
  | "Healthy Meals"
  | "Add-ons"
  | "Drinks";

export interface ExtraOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  detailedDescription?: string;
  price: number;
  category: "Salads" | "Protein Bowls" | "Healthy Meals" | "Add-ons" | "Drinks";
  image: string;
  vegetarian: boolean;
  calories?: number;
  protein?: string;
  ingredients: string[];
  dressingOptions?: string[];
  extras?: ExtraOption[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  id: string; // unique item composite key (productId + selected options)
  product: Product;
  quantity: number;
  selectedDressing?: string;
  selectedExtras?: ExtraOption[];
  notes?: string;
}

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  deliveryAddress: string;
  areaLocality: string;
  landmark: string;
  preferredDeliveryTime: string;
  specialInstructions: string;
  isOrderForSomeoneElse: boolean;
  recipientName?: string;
  recipientPhone?: string;
}

export interface SubscriptionPlan {
  id: string;
  badge: "DAILY" | "WEEKLY" | "MONTHLY";
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  mealsPerCycle: string;
  flexibility: string;
  whatsappMessage: string;
}
