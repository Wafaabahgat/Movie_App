import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const useFetchData = (url, action, states) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MovieSlice[states]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(action(response.data.results));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, dispatch, action]);

  return data;
};

export default useFetchData;
