import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  value2: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment5: (state) => {
      state.value2 += 5;
    },
    decrement5: (state) => {
      state.value2 -= 5;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  increment5,
  decrement5,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
