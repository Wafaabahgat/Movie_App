import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../slice/movie/movie";

export const store = configureStore({
  reducer: {
    MovieSlice: MovieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
