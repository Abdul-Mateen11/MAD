import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import RTLToggle from './RTLToggle';
import i18n from './i18n';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View , Image , TextInput } from 'react-native';

const App = () => {
  const [isRTL, setIsRTL] = useState(false);
  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App;