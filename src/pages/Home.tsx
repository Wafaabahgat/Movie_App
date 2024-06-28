import { FC, useEffect } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import {
  setPlayingData,
  setTopRated,
  setTvPopular,
} from "../slice/movie/movie";

interface HomeProps {
  // key: any;
  // data: [];
  // index: any;
  // tranding: boolean;
}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();
  // const [playingData, setPlayingData] = useState();
  const trendingData = useSelector((state) => state.MovieSlice.bannerData);
  const playingData = useSelector((state) => state.MovieSlice.playingdata);
  const TopRatedData = useSelector((state) => state.MovieSlice.top_rateddata);
  const TvPopularData = useSelector((state) => state.MovieSlice.tvpopularddata);

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

  const fetchTopRatedData = async () => {
    try {
      const response = await axios.get("/movie/top_rated");
      dispatch(setTopRated(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTvPopularData = async () => {
    try {
      const response = await axios.get("/tv/popular");
      dispatch(setTvPopular(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchNowPlayingData();
    fetchTopRatedData();
    fetchTvPopularData();
  }, []);

  return (
    <div>
      <BannerHome />

      <HorizontalScollCard
        ttl="Trending Data"
        movieData={trendingData}
        tranding={true}
      />

      <HorizontalScollCard ttl="Now Playing Data" movieData={playingData} />
      <HorizontalScollCard ttl="Top Rated Data" movieData={TopRatedData} />
      <HorizontalScollCard ttl="Tv Popular Data" movieData={TvPopularData} />
    </div>
  );
};

export default Home;
