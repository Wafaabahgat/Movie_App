import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../slice/movie/movie";

export default configureStore({
  reducer: {
    MovieSlice: MovieSlice,
  },
});
