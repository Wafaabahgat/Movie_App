import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavigation from "../layout/MobileNavigation";
import { useDispatch } from "react-redux";
import axios from ".././slice/axios";
import { useEffect } from "react";
import { setBannerData, setImageURL } from "../slice/movie/movie";

const Root = () => {
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
      // console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.base_url + "original"));

      // console.log("configuration", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      {isDash == "dashboard" ? null : <Navbar />}
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Root;
