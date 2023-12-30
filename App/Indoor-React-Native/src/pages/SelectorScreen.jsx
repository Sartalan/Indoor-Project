import {Text, View } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

export function SelectorScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Selector
        </Text>
    </View>
    
  )
}