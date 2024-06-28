import { FC, useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { useSelector } from "react-redux";
import axios from "../slice/axios";

interface HomeProps {
  // key: any;
  // data: [];
  // index: any;
  // tranding: boolean;
}

const Home: FC<HomeProps> = () => {
  const [playingData, setPlayingData] = useState();
  const trendingData = useSelector((state) => state.MovieSlice.bannerData);

  const fetchNowPlayingData = async () => {
    try {
      const response = await axios.get("/movie/now_playing");
      setPlayingData(response.data.results);
      //console.log("response", response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchNowPlayingData();
  }, []);


  return (
    <div>
      <BannerHome />

      <HorizontalScollCard ttl="Trending Data" movieData={trendingData} />
      <HorizontalScollCard ttl="Now Playing Data" movieData={playingData} />
    </div>
  );
};

export default Home;
