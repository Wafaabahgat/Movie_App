import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../slice/axios";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../slice/movie/movie";
import { RootState } from "../store/store";

interface SearchPagesProps {}

const SearchPages: FC<SearchPagesProps> = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);

  const query = location.search.slice(3);


  const dataSearch = useSelector((state:RootState) => state.MovieSlice.searchData);

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNum,
        },
      });

      dispatch(setSearchData(response.data.results));

      console.log("response", response.data);

      setData((preve) => {
        return [...preve, ...dataSearch];
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPageNum(1);
      setSearchData([]);
      fetchData();
    }
  }, [location?.search]);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [pageNum]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNum((preve) => preve + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // console.log(data)

  return (
    <div className="py-16">
     

      <div className="container mx-auto">
        <h3 className="my-3 text-lg font-semibold capitalize lg:text-xl">
          search results
        </h3>

        <div className="grid justify-center gap-6 grid-cols-plog lg:justify-start">
          {data.map((search) => {
            return (
              <Card
                data={search}
                key={search.id + "search"}
                media_type={search.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPages;
