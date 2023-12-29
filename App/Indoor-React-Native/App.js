import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native'

//?Routes
import {SelectorScreen} from './routes/SelectorScreen.js'
import {PlantScreen} from './routes/PlantScreen.js'
import {DiagramScreen} from './routes/DiagramScreen.js'
import {SettingsScreen} from './routes/SettingsScreen.js'


const Tab = createMaterialTopTabNavigator();



export default function App() {
  return (    
    <NavigationContainer >
        <MyTabs/>
    </NavigationContainer>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Planta'
    backBehavior='history'
    tabBarPosition='bottom'
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12, color: '#fff'  },
      tabBarItemStyle: { width: 100},
      tabBarStyle: { backgroundColor: '#000' },
    }}
    >
      <Tab.Screen  name="Home" component={SelectorScreen} />
      <Tab.Screen name="Planta" component={PlantScreen} />
      <Tab.Screen name="Log" component={DiagramScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030'
  },
  routesContainer: {
    color: '#fff'
  }
});
