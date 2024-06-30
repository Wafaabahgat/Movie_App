// import { BiSolidMoviePlay } from "react-icons/bi";
// import { IoIosSearch } from "react-icons/io";
// import { MdHome } from "react-icons/md";
// import { PiTelevisionFill } from "react-icons/pi";

export const navigation = [
  {
    name: "TV Shows",
    href: "tv",
    // icon: <PiTelevisionFill />
  },
  {
    name: "Movies",
    href: "movie",
    // icon: <BiSolidMoviePlay />
  },
];

export const mobileNavigation = [
  {
    name: "Home",
    href: "/",
    // icon: <MdHome />
  },
  ...navigation,
  {
    name: "search",
    href: "/search",
    // icon: <IoIosSearch />
  },
];
