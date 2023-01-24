import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux//Homereducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
