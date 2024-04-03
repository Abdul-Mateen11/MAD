
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View , Image , TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Myscreen from './FirstScreen';
import Loginscreen from './SecondScreen';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RTLText from 'react-native-rtl-text';




import { I18nManager } from 'react-native';
//export default function App() {

  // In your App.js or the root component


 

  const toggleRTL = () => {
    I18nManager.forceRTL = !I18nManager.forceRTL;
    I18nManager.allowRTL(I18nManager.forceRTL);
   };
   const [searchTerm, setSearchTerm] = useState('');

const filteredBooks = books.filter(book =>
 book.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const BookList = ({ books }) => (
  <FlatList
     data={books}
     keyExtractor={item => item.id.toString()}
     renderItem={({ item }) => (
       <View>
         <Text>{item.title}</Text>
       </View>
     )}
  />
 );
 
 const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <TextInput
     value={searchTerm}
     onChangeText={setSearchTerm}
     placeholder="Search books..."
  />
 );
 
 const App = () => {
  const { books, loading } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');



  // const Stack = createNativeStackNavigator();
  // //const [text, onChangeText] = React.useState('Username');
  // const [number, onChangeNumber] = React.useState('');
  // const youpressedme = () => {
  // Alert.alert('I Love you Too ')    
  // }
  // const onPress = () => {
  //   Alert.alert('Logged IN')    
  //   }
  
  return (
    <RTLText>
 

    <View>
    <BookList />
 
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Button title="Toggle RTL/LTR" onPress={toggleRTL} />
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <BookList books={books} />
    )}
  </View>
  </RTLText>

   
  );
};
 
 
 export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: '#fff',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   top: {
//     flex: 25,
//     //backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   center: {
//     flex: 50,
//     //backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottom: {
//     flex: 25,
//     backgroundColor: 'blue',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     //backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
// });
