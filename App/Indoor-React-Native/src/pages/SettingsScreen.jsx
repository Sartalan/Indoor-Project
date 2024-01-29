import { View, Text} from 'react-native'
import { useEffect, useState  } from 'react';
import { GeneralStyles } from '../styles/GeneralStyles';

export function SettingsScreen() {


  let [connection, setConnection] = useState(false)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.name)
          setConnection(connection = true)
          console.log(connection)
        },
        (error) => {
          console.log("error")
          setConnection(connection = false)
        }
      )
  }, []);

  const getContent = () => {

    if(connection == true) {
      return <Text style={{color: '#fff', fontSize: 50}}>Conectado</Text>
    }

    else {
      return <Text style={{color: '#fff', fontSize: 50}}>Desconectado</Text>
    }

  }

  


return (

  <View style={GeneralStyles.container}>
    {getContent()}
  </View>
    




    // <View style={GeneralStyles.container}>
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <Text style={{ 
    // color: '#FFFFFFA1',
    // fontSize: 25,
    // fontStyle: 'italic',
    // fontFamily: 'serif',
    // }}>Coming soon...</Text>
    //   </View>
    // </View>

  )
}