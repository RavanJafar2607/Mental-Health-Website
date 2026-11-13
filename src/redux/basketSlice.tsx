import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { BasketInitialState, BasketTypes } from "../type/basketType";
const basketData = localStorage.getItem("basket");
export const initialState: BasketTypes = {
  basket: basketData ? JSON.parse(basketData) : [],
  basketState: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<BasketInitialState>) => {
      const element = state.basket.find((item) => item.id == action.payload.id);
      if (element) {
        element.quantity += 1;
      } else {
        state.basket.unshift({ ...action.payload, quantity: 1 });
      }
    },
    quantityIncrement: (state, action: PayloadAction<number>) => {
      const element = state.basket.find((item) => item.id === action.payload);
      if (element) {
        element.quantity += 1;
      }
    },
    quantityDecrement: (state, action: PayloadAction<number>) => {
      const element = state.basket.find((item) => item.id === action.payload);
      if (element) {
        if (element.quantity > 1) {
          element.quantity -= 1;
        }
      } else {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload,
        );
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    toggleBasket: (state) => {
      state.basketState = !state.basketState;
    },
  },
});

export const {
  addBasket,
  quantityIncrement,
  quantityDecrement,
  removeProduct,
  toggleBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
