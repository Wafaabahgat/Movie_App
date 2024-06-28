import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  playingdata: [],
  top_rateddata: [],
  imageURL: "",
};

export const movieoSlice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },

    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },

    setPlayingData: (state, action) => {
      state.playingdata = action.payload;
    },

    setTopRated: (state, action) => {
      state.top_rateddata = action.payload;
    },
  },
});

export const { setBannerData, setImageURL, setPlayingData, setTopRated } =
  movieoSlice.actions;

export default movieoSlice.reducer;
