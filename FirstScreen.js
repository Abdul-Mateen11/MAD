import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View , Image , TextInput , Button , FlatList, SectionList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
export default function Myscreen() {

  const Stack = createNativeStackNavigator();
  //const [text, onChangeText] = React.useState('Username');
  const [number, onChangeNumber] = React.useState('');
  const youpressedme = () => {
  Alert.alert('I Love you Too ')    
  }

  const [myflag , setmyflag] = useState(110);

  const navigation = useNavigation();
  const onPress = () => {
    Alert.alert('Logged IN')    
    }
    const goAhead = () => {
        //navigation.navigate('Second' ,  {datalo:123});
        navigation.navigate('Second' ,  {value:myflag});
    }
    const flagbutton = () => {
        
        // myflag = myflag + 2;
        setmyflag(myflag+2);
        console.log(myflag);
    }
    // const mydummyarray = [
    // {key:0,title:'Lahore',time:'8:00'},
    // {key:1,title:'Comstats',time:'8:00'}
    // ]
    //var myflag = 100;
    const mydummyarray = [
        {key:0 , title:'Pakistan',
        data:[{key:0,title:'Lahore',key:1,title:'Karachi'}]
        },
        ]
  return (

    
    <View style={styles.container}>
       <Text>Do You Love Me?</Text>
       <Text style={{fontSize:50}} >my flag  is = {myflag}</Text>
      
      <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Button
        title="Button"
        onPress={flagbutton}
        color="#841584"
        
        />
        {/* <FlatList
        data = {mydummyarray}
        keyExtractor={item=>item.key}
        renderItem={({item}) => (
            <View style={{backgroundColor:'grey', height:40,margin:10,flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'green', flex:'50%'}}>
            <Text>{item.title}</Text>
            </View>
            <View style={{backgroundColor:'red', flex:'50%'}}>
            <Text>{item.time}</Text>
            </View>
            </View>
        )}
        /> */}
        <SectionList
        sections = {mydummyarray}
        keyExtractor={item=>item.key}
        renderSectionHeader={({ section : {title}}) => (
            <Text>{title}</Text>
        )}
        renderItem={({item}) => (
            <View style={{backgroundColor:'grey', height:40,margin:10,flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'green', flex:'50%'}}>
            <Text>{item.title}</Text>
            </View>
            <View style={{backgroundColor:'red', flex:'50%'}}>
            <Text>{item.time}</Text>
            </View>
            </View>
        )}/>
    

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
      {/* <View style={styles.top}>
      <Image
        style={{width:100,height:100}}
        source={{
          uri: 'https://staticg.sportskeeda.com/editor/2022/01/0d8a5-16422638539293-1920.jpg',
        }}
      />
      </View>
      <View style={styles.center}>
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
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>*/}
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
