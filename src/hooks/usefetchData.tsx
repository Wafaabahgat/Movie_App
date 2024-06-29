import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import { useEffect } from "react";
import { Action } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface useFetchDataProps {
  states: string;
  url: string;
  action: (data: any) => Action;
}

const useFetchData = ({ states, action, url }: useFetchDataProps) => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.MovieSlice[`${states}`]);

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
