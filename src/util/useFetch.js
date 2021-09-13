import { useState, useEffect } from "react";
const API_ENDPOINT = "https://www.dnd5eapi.co/api";

export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setData(data.results);
        setLoading(false);
      } else {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${query}`);
    fetchData(`${API_ENDPOINT}${query}`);
  }, [query]);

  return { loading, data, error };
};
