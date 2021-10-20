import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SampleState {
  value: number;
}

const initialState: SampleState = {
  value: 0,
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: () => initialState,
  },
});

export const {increment, decrement, add, reset} = sampleSlice.actions;
export default sampleSlice.reducer;
