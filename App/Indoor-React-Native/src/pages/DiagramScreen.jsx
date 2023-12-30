import {Text, View, Image } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

export function DiagramScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Diagrama
        </Text>
        <View>
        <Image
          source={require('./../../assets/diagram.png')}
          style={{width:100, height:100}}
        />
        </View>
    </View>
    
  )
}