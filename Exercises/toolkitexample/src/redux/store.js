import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slice/counterSlice";
import getDataReducer from "../redux/slice/getDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    orders: getDataReducer,
  },
});
