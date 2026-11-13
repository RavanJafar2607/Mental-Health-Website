import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./basketSlice";
import ThemeReducer from "../redux/themeSlice";
import WishListReducer from "./wishList";
export const store = configureStore({
  reducer: {
    basket: BasketSlice,
    theme: ThemeReducer,
    wishList: WishListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
