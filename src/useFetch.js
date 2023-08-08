
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      const getData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          };
          const data = await response.json();
          setData(data);
          setIsPending(false);
          setError(null);
        }
        catch (err) {
          setError(err.message);
          setIsPending(false);
        };
      };

      getData();
    }, 1000);

    return () => abortCont.abort();
  }, [url])
  return { data, isPending, error };
}

export default useFetch;