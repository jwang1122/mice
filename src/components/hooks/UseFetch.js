import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchHandler = useCallback(async () => {
    console.log("fetching data...")
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();   
      setData(data);
    } catch (error) {
        setErrorMsg(error.message);
    }
  }, [url]);

  useEffect(() => {fetchHandler()}, [fetchHandler])
  return [data, errorMsg, fetchHandler];
};

export default useFetch;
