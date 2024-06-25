import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavigation from "../layout/MobileNavigation";

const Root = () => {
  const location = useLocation().pathname;
  const isDash = location.split("/").find((e) => e === "dashboard");

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
