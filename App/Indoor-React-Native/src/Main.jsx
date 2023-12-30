import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native'
//?Routes
import {SelectorScreen} from './pages/SelectorScreen'
import {PlantScreen} from './pages/PlantScreen'
import {DiagramScreen} from './pages/DiagramScreen'
import {SettingsScreen} from './pages/SettingsScreen'


const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Planta'
    backBehavior='history'
    tabBarPosition='top'
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
