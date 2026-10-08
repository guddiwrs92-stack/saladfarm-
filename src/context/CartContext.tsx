import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ExtraOption, CustomerDetails } from '../types';
import { brandConfig } from '../config/brandConfig';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedDressing?: string, selectedExtras?: ExtraOption[]) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedProductForDetail: Product | null;
  setSelectedProductForDetail: (product: Product | null) => void;
  lastOrderDetails: {
    customer: CustomerDetails;
    cart: CartItem[];
    subtotal: number;
    deliveryFee: number;
    totalAmount: number;
    orderId: string;
    timestamp: string;
  } | null;
  setLastOrderDetails: (details: any) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'saladfarm_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Local storage unavailable or malformed
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [lastOrderDetails, setLastOrderDetails] = useState<any>(null);

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore quota errors
    }
  }, [cart]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedDressing?: string,
    selectedExtras?: ExtraOption[]
  ) => {
    setCart((prevCart) => {
      // Generate unique key based on options
      const extrasKey = (selectedExtras || [])
        .map((e) => e.name)
        .sort()
        .join(',');
      const dressingKey = selectedDressing || '';
      const cartItemId = `${product.id}_${dressingKey}_${extrasKey}`;

      const existingIndex = prevCart.findIndex((item) => item.id === cartItemId);

      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      const newItem: CartItem = {
        id: cartItemId,
        product,
        quantity,
        selectedDressing,
        selectedExtras
      };

      return [...prevCart, newItem];
    });
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const extrasTotal = (item.selectedExtras || []).reduce((eSum, e) => eSum + e.price, 0);
    const itemPrice = item.product.price + extrasTotal;
    return sum + itemPrice * item.quantity;
  }, 0);

  const deliveryFee =
    subtotal === 0 ? 0 : subtotal >= brandConfig.freeDeliveryThreshold ? 0 : brandConfig.deliveryFee;

  const totalAmount = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProductForDetail,
        setSelectedProductForDetail,
        lastOrderDetails,
        setLastOrderDetails
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
