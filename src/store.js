import { configureStore } from "@reduxjs/toolkit";
import CounterSplice, { counterSlice } from "./CounterSplice";

export default configureStore({
  reducer: {
    counter: CounterSplice,
  },
});
