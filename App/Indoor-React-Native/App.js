import React from 'react';
import {StatusBar} from 'react-native'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import {MyTabs} from './src/Main'

export default function App() {
  return (    
    <NavigationContainer   >
        <MyTabs style={navStyles.nav} />
        <StatusBar  />

    </NavigationContainer>
  );
}

const navStyles = StyleSheet.create({
  nav: {
      marginTop: Constants.statusBarHeight
  }
})


