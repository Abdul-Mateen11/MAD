// screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, ActivityIndicator, Text } from 'react-native';
import { fetchBooks } from './api';
import BookItem from './BookItem';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderBookItem = ({ item }) => <BookItem book={item} />;

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <TextInput
        placeholder="Search books..."
        onChangeText={text => setQuery(text)}
        value={query}
      />
      <FlatList
        data={filteredBooks}
        renderItem={renderBookItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default HomeScreen;
