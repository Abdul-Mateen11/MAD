import { useState, useEffect } from 'react';

const useFetchBooks = () => {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://dev.iqrakitab.net/api/books');
        const data = await response.json();
        setBooks(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
 }, []);

 return { books, loading, error };
};

export default useFetchBooks;
