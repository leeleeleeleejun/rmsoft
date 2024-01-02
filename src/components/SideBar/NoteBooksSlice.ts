import { NoteBookType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: NoteBookType[] = [];

const NoteBooksSlice = createSlice({
  name: "NoteBooksSlice",
  initialState,
  reducers: {
    setNoteBooks: (state, action) => {
      return action.payload;
    },
  },
});

export const { setNoteBooks } = NoteBooksSlice.actions;

export default NoteBooksSlice.reducer;
