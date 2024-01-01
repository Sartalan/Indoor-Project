import {Text, View, Image, StyleSheet } from 'react-native'
import {routesStyles} from '../styles/pagesStyles' 

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

export function PlantScreen() {


  return (
    <View style={routesStyles.container}>
        <Text style={routesStyles.text}>
          Planta
        </Text>
        <Image
          source={require('./../../assets/plant.png')}
          style={{width:150, height:150}}
        />

        <View style={plantStyles.bottomContainer}>
            <View style={plantStyles.bottomBox}>
                <Text style={plantStyles.bottomText}>{date + ' /'}</Text>
                <Text style={plantStyles.bottomText}>{month + ' /'}</Text>
                <Text style={plantStyles.bottomText}>{year}</Text>
            </View>
        </View>
    </View>
    
  )
}

const plantStyles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 10,
    right: 30,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderBottomWidth: 2.5,
    borderBottomColor:'#343737A9'

  },
  bottomBox: {
    flexDirection: 'row',
    gap: 10,
    padding: 10
  },

  bottomText: {
    color: '#FFFFFFCE',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    
  }

})