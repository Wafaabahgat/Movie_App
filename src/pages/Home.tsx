import { FC, useEffect } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import {
  setPlayingData,
  setTopRated,
  setTvPopular,
  setTvOnAir,
} from "../slice/movie/movie";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();
  // const [playingData, setPlayingData] = useState();
  const trendingData = useSelector((state) => state.MovieSlice.bannerData);
  const playingData = useSelector((state) => state.MovieSlice.playingdata);
  const TvPopularData = useSelector((state) => state.MovieSlice.tvpopularddata);
  const TvOnAir = useSelector((state) => state.MovieSlice.tvonair);
  const TopRatedData = useSelector((state) => state.MovieSlice.top_rateddata);

  const fetchTopRatedData = async () => {
    try {
      const response = await axios.get("/movie/top_rated");
      dispatch(setTopRated(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  // const TopRatedData = useFetchData(
  //   "/movie/top_rated",
  //   setTopRated,
  //   "top_rateddata"
  // );

  const fetchNowPlayingData = async () => {
    try {
      const response = await axios.get("/movie/now_playing");
      dispatch(setPlayingData(response.data.results));
      //  setPlayingData(response.data.results);
      //console.log("response", response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTvPopularShow = async () => {
    try {
      const response = await axios.get("/tv/popular");
      dispatch(setTvPopular(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTvOnAir = async () => {
    try {
      const response = await axios.get("/tv/top_rated");
      dispatch(setTvOnAir(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchNowPlayingData();
    fetchTopRatedData();
    fetchTvPopularShow();
    fetchTvOnAir();
  }, []);

  return (
    <div>
      <BannerHome />

      <HorizontalScollCard
        ttl="Trending Data"
        movieData={trendingData}
        tranding={true}
      />

      <HorizontalScollCard ttl="Now Playing" movieData={playingData} />
      <HorizontalScollCard ttl="Top Rated Movie" movieData={TopRatedData} />
      <HorizontalScollCard ttl="Popular Tv Show" movieData={TvPopularData} />
      <HorizontalScollCard ttl="Top Rated TV" movieData={TvOnAir} />
    </div>
  );
};

export default Home;
