import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  playingdata: [],
  top_rateddata: [],
  tvpopularddata: [],
  discoverTv: [],
  tvonair: [],
  searchData: [],
  details: [],
  credits: [],
  similar: [],
  recommData: [],
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

    setTvPopular: (state, action) => {
      state.tvpopularddata = action.payload;
    },

    setTvOnAir: (state, action) => {
      state.tvonair = action.payload;
    },

    setDiscoverTv: (state, action) => {
      state.discoverTv = action.payload;
    },

    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },

    setDetails: (state, action) => {
      state.details = action.payload;
    },

    setCredits: (state, action) => {
      state.credits = action.payload;
    },

    setSimilarData: (state, action) => {
      state.similar = action.payload;
    },

    setRecommData: (state, action) => {
      state.recommData = action.payload;
    },
  },
});

export const {
  setBannerData,
  setImageURL,
  setPlayingData,
  setTopRated,
  setTvPopular,
  setTvOnAir,
  setDiscoverTv,
  setSearchData,
  setDetails,
  setCredits,
  setSimilarData,
  setRecommData,
} = movieoSlice.actions;

export default movieoSlice.reducer;
