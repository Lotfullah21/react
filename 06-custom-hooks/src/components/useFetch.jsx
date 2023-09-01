import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //   const fetchMe = async()=>{}
    async function fetchUsers() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchUsers();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
