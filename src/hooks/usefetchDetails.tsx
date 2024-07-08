import { useDispatch, useSelector } from "react-redux";
import axios from "../slice/axios";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { Action } from "@reduxjs/toolkit";

interface useFetchDetailsProps {
  states: keyof RootState["MovieSlice"];
  url: string;
  action: (data: any) => Action;
}

const useFetchDetails = ({ states, action, url }: useFetchDetailsProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const data = useSelector((state: RootState) => state.MovieSlice[states]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        dispatch(action(response.data));
      } catch (error) {
        setError("Error fetching data");
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch, action]);

  return { data, loading, error };
};

export default useFetchDetails;
