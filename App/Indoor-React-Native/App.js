import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//?Routes
import {SelectorScreen} from './routes/SelectorScreen.js'
import {PlantScreen} from './routes/PlantScreen.js'
import {DiagramScreen} from './routes/DiagramScreen.js'
import {SettingsScreen} from './routes/SettingsScreen.js'


const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (    
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Planta'>
      <Tab.Screen name="Home" component={SelectorScreen} />
      <Tab.Screen name="Planta" component={PlantScreen} />
      <Tab.Screen name="Log" component={DiagramScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  );
}