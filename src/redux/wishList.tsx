import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WishListInitialState, WishListTypes } from "../type/wishList";

export const initialState: WishListTypes = {
  wishList: [],
  wishListState: false,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishList: (state) => {
      state.wishListState = !state.wishListState;
    },
    addWishList: (state, action: PayloadAction<WishListInitialState>) => {
      const element = state.wishList.some(
        (item) => item.id === action.payload.id,
      );
      if (!element) {
        state.wishList.push(action.payload);
      } else {
        state.wishList = state.wishList.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { toggleWishList, addWishList, removeItem } =
  wishListSlice.actions;

export default wishListSlice.reducer;
