// components/BookItem.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookItem = ({ book }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: book.coverPhotoUri }}
      style={styles.coverImage}
    />
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Author: {book.author.name}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <Text style={styles.published}>
        {book.isPublished ? 'Published' : 'Not Published'}
      </Text>
      <Text style={styles.language}>
        Language: {book.isArabic ? 'Arabic' : 'Not Arabic'}
      </Text>
      <Text style={styles.fileType}>File Type: {book.bookType}</Text>
      <Text style={styles.category}>Category: {book.category.name}</Text>
      <Text style={styles.tags}>Tags: {book.tags.join(', ')}</Text>
      {book.averageRating && (
        <Text style={styles.rating}>
          Average Rating: {book.averageRating.toFixed(2)}
        </Text>
      )}
      {book.chapters.length > 0 && (
        <Text style={styles.chapters}>
          Chapters: {book.chapters.length}
        </Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  coverImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  published: {
    marginTop: 5,
  },
  language: {
    marginTop: 5,
  },
  fileType: {
    marginTop: 5,
  },
  category: {
    marginTop: 5,
  },
  tags: {
    marginTop: 5,
  },
  rating: {
    marginTop: 5,
  },
  chapters: {
    marginTop: 5,
  },
});

export default BookItem;
