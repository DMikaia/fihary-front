import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/nav-slice";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
