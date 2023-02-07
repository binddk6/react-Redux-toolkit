import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import cartSlice from "../store/cartSlice";
import productSlice from "../store/productSlice";
import type {} from 'redux-thunk/extend-redux'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
