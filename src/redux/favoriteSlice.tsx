import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FavoriteInitialState, FavoriteType } from "../type/favoriteType";

export const initialState: FavoriteType = {
  favorite: [],
  favoriteState: false,
};

export const favoriteSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteInitialState>) => {
      const element = state.favorite.some(
        (item) => item.id === action.payload.id,
      );
      if (!element) {
        state.favorite.unshift(action.payload);
      }
    },
    toggleWishList: (state) => {
      state.favoriteState = !state.favoriteState;
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addFavorite, toggleWishList, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
