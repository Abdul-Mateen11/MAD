import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import useFetchBooks from './useFetchBooks';

const BookList = () => {
 const { books, loading, error } = useFetchBooks();
 const [searchQuery, setSearchQuery] = useState('');

 const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
 );

 if (loading) return <Text>Loading...</Text>;
 if (error) return <Text>Error: {error.message}</Text>;

 return (
    <View>
      <TextInput
        style={styles.searchBar}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Search books..."
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author.name}</Text>
          </View>
        )}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
 },
 item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
 },
 title: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 author: {
    fontSize: 16,
 },
});

export default BookList;
