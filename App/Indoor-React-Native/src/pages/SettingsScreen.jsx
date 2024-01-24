import { View, Text} from 'react-native'
import { GeneralStyles } from '../styles/GeneralStyles';

export function SettingsScreen() {


  return (
    <View style={GeneralStyles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ 
    color: '#FFFFFFA1',
    fontSize: 25,
    fontStyle: 'italic',
    fontFamily: 'serif',
    }}>Coming soon...</Text>
      </View>
    </View>

  )
}