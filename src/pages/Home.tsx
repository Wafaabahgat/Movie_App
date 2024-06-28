import { FC } from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScollCard from "../components/HorizontalScollCard";
import { useSelector } from "react-redux";

interface HomeProps {
  // key: any;
  // data: [];
  // index: any;
  // tranding: boolean;
}

const Home: FC<HomeProps> = () => {
  const trendingData = useSelector((state) => state.MovieSlice.bannerData);

  return (
    <div>
      <BannerHome />
      <HorizontalScollCard ttl="Trending Data" movieData={trendingData} />
    </div>
  );
};

export default Home;
