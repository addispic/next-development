import { configureStore } from "@reduxjs/toolkit";

// reducers
// notes
import notesReducer from './features/notes/notesSlice'

// store
export const makeStore = () => {
  return configureStore({
    reducer: {
      notes: notesReducer,
    },
  });
};

// inferences
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
