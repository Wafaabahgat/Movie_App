import { FC } from "react";
import { useLocation } from "react-router-dom";

interface SearchPagesProps {}

const SearchPages: FC<SearchPagesProps> = () => {
  const location = useLocation();
  console.log("location", location);

  return <div>SearchPages</div>;
};

export default SearchPages;
