import {Text, View } from 'react-native'
import {routesStyles} from '../styles/styles' 

export function SettingsScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Settings
        </Text>
    </View>
    
  )
}