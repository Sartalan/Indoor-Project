import {Text, View, Image } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

export function SettingsScreen() {
  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Settings
        </Text>
        <Image
          source={require('./../../assets/setting.png')}
          style={{width:100, height:100}}
        />
    </View>
    
  )
}