// src/stores/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product, quantity) =>
    set((state) => {
      // Nếu số lượng <= 0 thì xóa sản phẩm khỏi giỏ hàng
      if (quantity <= 0) {
        return {
          cartItems: state.cartItems.filter(item => item.product.id !== product.id),
        };
      }

      const existingItem = state.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map(item =>
            item.product.id === product.id
              ? { ...item, quantity }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { product, quantity }],
        };
      }
    }),
}));

export default useCartStore;
