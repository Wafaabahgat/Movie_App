import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import { useEffect, useState } from "react";
import { Action } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UseFetchDataProps {
  states: keyof RootState['MovieSlice'];
  url: string;
  action: (data: any) => Action;
}

const useFetchData = ({ states, action, url }: UseFetchDataProps) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.MovieSlice[states]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(action(response.data.results));
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch, action]);

  return { data, loading };
};

export default useFetchData;
