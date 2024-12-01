import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/constants/type";

interface SliceType {
  total: number;
  items: CartItem[];
}

const initialState: SliceType = {
  total: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const filtered_items = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = filtered_items;
    },
    increase: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (!cartItem) {
        return;
      }

      cartItem.quantity++;
    },
    decrease: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (!cartItem) {
        return;
      }

      cartItem.quantity--;

      if (cartItem.quantity === 0) {
        const filtered_items = state.items.filter(
          (item) => item.id !== action.payload
        );

        state.items = filtered_items;
      }
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      );
    },
  },
});

export const { add, remove, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
