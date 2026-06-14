import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.pop();
    },
    clearCart: (state) => {
      state.cartItems.length = 0; //state.cartItems = [] - wont work
    },
  },
});
//export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//export default reducer
export default cartSlice.reducer;
