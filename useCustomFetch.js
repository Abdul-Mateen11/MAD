import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [url]);

  return [data, loading, error];
};

export default useCustomFetch;
