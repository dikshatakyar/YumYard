import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const idx = current(state).items.indexOf(action.payload);
      state.items.splice(idx, 1);
      // state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
