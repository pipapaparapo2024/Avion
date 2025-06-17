import { create } from "zustand";
import { Furniture } from "../../../widgets/listProducts/ListProductsStore";
import { useFurnitureStore } from "../../../widgets/listProducts/ListProductsStore";

export interface CartItem {
  id: number;
  url: string;
  name: string;
  price: number;
  shortDescription: string;
  quantity: number;
  total: number;
}

export type CartState = {
    CartContainer: CartItem[];
    cartTotal: number;
    pushCart: (product:Furniture, quantity?: number) => void;
    clearCart: () => void;
    removeItem: (id: number) => void;
    updateCartTotal: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
    CartContainer: [],
    cartTotal: 0,

pushCart: (product, quantity = 1) => {
  const { id, price, quantity: stockQuantity } = product;

  const maxAvailable = stockQuantity || 0;
  const finalQuantity = Math.min(quantity, maxAvailable);
  if (finalQuantity <= 0) {
    console.warn("Невозможно добавить товар: нет в наличии");
    return;
  }

  const itemTotal = price * finalQuantity;

  const newItem: CartItem = {
    ...product,
    quantity: finalQuantity,
    total: itemTotal,
  };

  set((state) => {
    const existingItemIndex = state.CartContainer.findIndex(
      (item) => item.id === id
    );

    let updatedCart = [...state.CartContainer];

    if (existingItemIndex >= 0) {
      const existingItem = updatedCart[existingItemIndex];
      const newQty = existingItem.quantity + finalQuantity;
      const safeQty = Math.min(newQty, maxAvailable);

      updatedCart[existingItemIndex] = {
        ...existingItem,
        quantity: safeQty,
        total: existingItem.price * safeQty,
      };
    } else {
      updatedCart.push(newItem);
    }

    return { CartContainer: updatedCart };
  });
// Обновляем остаток на складе
  const newStock = maxAvailable - finalQuantity;
  useFurnitureStore.getState().updateFurnitureStock(id, newStock);
  get().updateCartTotal();
},
  updateCartTotal: () => {
    const state = get();
    const newTotal = state.CartContainer.reduce((sum, item) => sum + item.total, 0);
    set({ cartTotal: newTotal });
  },

  clearCart: () => {
    set({ CartContainer: [], cartTotal: 0 });
  },

  removeItem: (id: number) => {
    set((state) => {
      const updatedCart = state.CartContainer.filter(item => item.id !== id);
      return { CartContainer: updatedCart };
    });
    get().updateCartTotal(); 
  },
}));


