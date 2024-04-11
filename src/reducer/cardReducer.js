import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      console.log("State är: ", state);
      console.log("Action är: ", action);
      state.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
