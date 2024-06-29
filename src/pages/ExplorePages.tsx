import axios from "../slice/axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setDiscoverTv } from "../slice/movie/movie";

interface ExplorePagesProps {}

const ExplorePages: FC<ExplorePagesProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const DiscoverTv = useSelector((state) => state.MovieSlice.discoverTv);

  console.log("params", params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNum,
        },
      });

      setData((preve) => {
        return [...preve, ...response.data.results];
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
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/discover/tv");
  //     // const response = await axios.get(`/discover/${params.explore}`, {
  //     //   params: {
  //     //     page: pageNum,
  //     //   },
  //     // });

  //     // if (response.data.results) {
  //     //   setData((prev) => [...prev, ...response.data.results]);
  //     // } else {
  //     //   console.log("ghjkl;");
  //     // }

  //     console.log("responserr", response);

  //     setTotalPageNo(response.data.total_pages);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNum((preve) => preve + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="my-3 text-lg font-semibold capitalize lg:text-xl">
          Popular {params.explore} show
        </h3>

        <div className="grid justify-center gap-6 grid-cols-plog lg:justify-start">
          {DiscoverTv.map((exploreData, index) => {
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
