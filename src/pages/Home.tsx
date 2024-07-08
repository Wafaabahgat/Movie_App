import { FC } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { useSelector } from "react-redux";

import {
  setPlayingData,
  setTopRated,
  setTvPopular,
  setTvOnAir,
} from "../slice/movie/movie";
import useFetchData from "../hooks/usefetchData";
import { RootState } from "../store/store";
import Loader from "../components/Loader";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const trendingData = useSelector((state:RootState) => state.MovieSlice.bannerData);

  const TopRatedData = useFetchData({
    url: "/movie/top_rated",
    action: setTopRated,
    states: "top_rateddata",
  });

  const PlayingData = useFetchData({
    url: "/movie/now_playing",
    action: setPlayingData,
    states: "playingdata",
  });

  const TvPopularData = useFetchData({
    url: "/tv/popular",
    action: setTvPopular,
    states: "tvpopularddata",
  });

  const TvOnAir = useFetchData({
    url: "/tv/top_rated",
    action: setTvOnAir,
    states: "tvonair",
  });

  if (!trendingData || !TopRatedData || !PlayingData || !TvPopularData || !TvOnAir) {
    return <Loader />;
  }


  return (
    <div>
      <BannerHome />

      <HorizontalScollCard
        ttl="Trending Data"
        movieData={trendingData}
        tranding={true}
        media_type={"movie"}
      />

      <HorizontalScollCard
        ttl="Now Playing"
        movieData={PlayingData}
        media_type={"movie"}
      />
      <HorizontalScollCard
        ttl="Top Rated Movie"
        movieData={TopRatedData}
        media_type={"movie"}
      />
      <HorizontalScollCard
        ttl="Popular Tv Show"
        movieData={TvPopularData}
        media_type={"tv"}
      />
      <HorizontalScollCard
        ttl="Top Rated TV"
        movieData={TvOnAir}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
