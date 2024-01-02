import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  editNumber: number | null;
  editTargetKey: string;
} = {
  editNumber: null,
  editTargetKey: "",
};

const CreateNoteBookModalSlice = createSlice({
  name: "CreateNoteBookModalSlice",
  initialState,
  reducers: {
    setEditNumber: (state, action) => {
      state.editNumber = action.payload;
    },
    setEditTargetKey: (state, action) => {
      state.editTargetKey = action.payload;
    },
  },
});

export const { setEditNumber, setEditTargetKey } =
  CreateNoteBookModalSlice.actions;

export default CreateNoteBookModalSlice.reducer;
