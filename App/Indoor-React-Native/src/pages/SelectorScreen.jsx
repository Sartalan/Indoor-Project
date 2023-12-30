import {Text, View, Image } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

export function SelectorScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Selector
        </Text>
        <Image
          source={require('./../../assets/shuffle.png')}
          style={{width:100, height:100}}
        />
    </View>
    
  )
}