// utils/api.js

import axios from 'axios';

const API_URL = 'https://dev.iqrakitab.net/api/books'; // Replace 'YOUR_API_URL_HERE' with the actual API URL

export const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
