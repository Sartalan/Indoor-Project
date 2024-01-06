import { View , Button} from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export function SettingsScreen() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={routesStyles.container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
    </View>
    
  )
}