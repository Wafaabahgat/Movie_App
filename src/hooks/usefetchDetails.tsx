import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { Action } from "@reduxjs/toolkit";

interface useFetchDetailsProps {
    states: string;
    url: string;
    action: (data: any) => Action;
  }

const useFetchDetails = ({ states, action, url }: useFetchDetailsProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const data = useSelector((state: RootState) => state.MovieSlice[`${states}`]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch(action(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, dispatch, action]);

  return { data, loading };
};

export default useFetchDetails;
