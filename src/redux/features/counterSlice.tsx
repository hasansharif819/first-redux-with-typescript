import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCounterType = {
  count: number;
};

const initialState: TCounterType = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      //   state.count = state.count + 1; //state.count += 1;
      state.count = state.count + action.payload; //state.count += 1;
    },

    decrement: (state, action: PayloadAction<number>) => {
      //   state.count = state.count - 1; //state.count -= 1;
      state.count = state.count - action.payload; //state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
