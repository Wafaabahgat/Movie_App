import { FC } from "react";
import { useParams } from "react-router-dom";
import { setDetails } from "../slice/movie/movie";
import useFetchDetails from "../hooks/usefetchDetails";

interface DetailsPagesProps {}

const DetailsPages: FC<DetailsPagesProps> = () => {
  const params = useParams();
  console.log(params, "params");

  const { loading, data } = useFetchDetails({
    url: `${params.explore}/${params.id}`,
    action: setDetails,
    states: "details",
  });

  console.log(data, "dat");

  return <div className="py-16">ghj</div>;
};

export default DetailsPages;
