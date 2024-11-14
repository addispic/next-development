import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initial state interface
// note
interface SingleNote {
  note: string;
  _id: string;
  date: string;
}
// initial state interface
interface InitialStateInterface {
  notes: SingleNote[];
}
// initial state
const initialState: InitialStateInterface = {
  notes: [],
};

// slice
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote: (state,action: PayloadAction<SingleNote>) =>{
        state.notes.unshift(action.payload);
    },
    deleteNote: (state,action: PayloadAction<string>) => {
        state.notes = state.notes.filter(
          (noteItem) => noteItem._id !== action.payload
        );
    }
  },
});

// exports
// actions
export const {addNewNote, deleteNote} = notesSlice.actions

// reducer
export default notesSlice.reducer

