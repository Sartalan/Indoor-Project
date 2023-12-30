import {Text, View, Image } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

export function PlantScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Planta
        </Text>
        <Image
          source={require('./../../assets/plant.png')}
          style={{width:100, height:100}}
        />
    </View>
    
  )
}