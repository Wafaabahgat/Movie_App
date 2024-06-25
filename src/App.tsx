import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ExplorePages from "./pages/ExplorePages";
import DetailsPages from "./pages/DetailsPages";
import SearchPages from "./pages/SearchPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePages />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPages />,
      },
      {
        path: "search",
        element: <SearchPages />,
      },
    ],
  },
]);
export default router;
