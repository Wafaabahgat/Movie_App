import axios from "../slice/axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setDiscoverTv } from "../slice/movie/movie";
import { RootState } from "../store/store";

interface ExplorePagesProps {}

const ExplorePages: FC<ExplorePagesProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const DiscoverTv = useSelector((state:RootState) => state.MovieSlice.discoverTv);

  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNum,
        },
      });

      setTotalPageNo(response.data.total_pages);

      dispatch(setDiscoverTv(response.data.results));

      console.log("configuration", response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setPageNum(1);
    setDiscoverTv([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNum((preve) => preve + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-1.5 py-16">
      <div className="container mx-auto">
        <h3 className="my-3 text-lg font-semibold capitalize lg:text-xl">
          Popular {params.explore} show
        </h3>

        <div className="grid justify-center gap-6 grid-cols-plog lg:justify-start">
          {DiscoverTv.map((exploreData) => {
            return (
              <Card
                data={exploreData}
                key={exploreData.id + "exploreSEction"}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePages;
