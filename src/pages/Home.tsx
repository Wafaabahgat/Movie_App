import { FC } from "react";
import BannerHome from "../components/BannerHome";

interface HomeProps {}

const Home: FC<HomeProps> = () => {

  return (
    <div>
      <BannerHome />
    </div>
  );
};

export default Home;
