import {configureStore} from "@reduxjs/toolkit";
import sampleReducer from "./features/sample-slice";

export const store = configureStore({
  reducer: {
    count: sampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export * from "./hooks";
export * from "./features";
