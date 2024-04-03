import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View , Image , TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Loginscreen({navigation , route}) {

  const {datalo} = route.params;
  const {value} = route.params;
  const Stack = createNativeStackNavigator();
  //const [text, onChangeText] = React.useState('Username');
  const [number, onChangeNumber] = React.useState('');
  const youpressedme = () => {
  Alert.alert('I Love you Too ')    
  }
  //const navigation = useNavigation();
  const onPress = () => {
    Alert.alert('Logged IN')    
    }
    const goBack = () => {
        navigation.navigate('First')
    }
  return (

    
    <View style={styles.container}>
       {/* <Text>Do You Love Me?</Text> */}
      {/*<TouchableOpacity
      onPress={youpressedme}
      style={{backgroundColor:'red'}}>

        <Text>YES</Text>
        <Text>NO</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <Image
        style={{width:100,height:100}}
        source={require('./download.jpeg')}
      />
      <Image
        style={{width:100,height:100}}
        source={{
          uri: 'https://staticg.sportskeeda.com/editor/2022/01/0d8a5-16422638539293-1920.jpg',
        }}
      />

<TextInput
        style={styles.input}
        //onChangeText={onChangeText}
        //value={text}
      />
      <TextInput
        style={styles.input}
        //onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      /> */}
      <View style={styles.top}>
      <Image
        style={{width:100,height:100}}
        source={{
          uri: 'https://staticg.sportskeeda.com/editor/2022/01/0d8a5-16422638539293-1920.jpg',
        }}
      />
      </View>
      <View style={styles.center}>
        <Text>Data from previous is = {value}</Text>
      <TextInput
        style={styles.input}
        //onChangeText={onChangeText}
        placeholder="Username"
        //value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      </View>  
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text>Back</Text>
      </TouchableOpacity>
      </View>
    </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  top: {
    flex: 25,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 50,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 25,
    backgroundColor: 'blue',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
