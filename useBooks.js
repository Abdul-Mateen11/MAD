import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = () => {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://dev.iqrakitab.net/api/books');
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBooks();
 }, []);

 return { books, loading };
};

export default useBooks;