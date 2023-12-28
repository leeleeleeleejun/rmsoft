import { NoteBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: NoteBook[] = [];

const NoteBooksSlice = createSlice({
  name: "NoteBooksSlice",
  initialState,
  reducers: {
    setNoteBooks: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setNoteBooks } = NoteBooksSlice.actions;

export default NoteBooksSlice.reducer;
