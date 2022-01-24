import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    tableData: [],
  },
  reducers: {
    increment: async (state, dispatch, getState, action) => {
      console.log("state", state.tableData);
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            console.log("daaata", response.data);
            state.tableData = response.data;
            // dispatch(state.tableData);
          });
        // console.log(state);
        // console.log("state", action.payload);
        // return state;
        // console.log(state);
      } catch (err) {
        // console.log("error");
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
