import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cards")) || [];

const cardSlice = createSlice({
  name: "card",
  initialState,

  reducers: {
    addCard(state, action) {
      state.push(action.payload);

      localStorage.setItem("cards", JSON.stringify(state));
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
