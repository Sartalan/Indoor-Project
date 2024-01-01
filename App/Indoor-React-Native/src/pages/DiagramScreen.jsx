import {Text, View, Image } from 'react-native'
import {DiagramStyle} from '../styles/pagesStyles' 
import {
  ProgressChart,
  ContributionGraph
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const backgroundChart = '#121212'
const watered = "#A3C7D6"
const humidity = "#3F3B6C"
const temperature = "#9F73AB"
// each value represents a goal ring in Progress chart
const data = {
  labels: ["watered", "humidity", "temperature"], // optional
  data: [1, 0.6, 0.8],
  colors: [(watered), (humidity), (temperature)]
};

const commitsData = [
  { date: "2024-01-02", count: 1 },
  { date: "2024-01-03", count: 1 },
  { date: "2024-01-04", count: 1 },
  { date: "2024-01-05", count: 1 },
  { date: "2024-01-06", count: 1 },
  { date: "2024-01-30", count: 1 },
  { date: "2024-01-31", count: 1 },
  { date: "2024-03-01", count: 1 },
  { date: "2024-04-02", count: 1 },
  { date: "2024-03-05", count: 1 },
  { date: "2024-02-30", count: 1 }
];

export function DiagramScreen() {
  return (

    <View style={DiagramStyle.container}>
      <View style={DiagramStyle.chart} >
        <ProgressChart
          style={DiagramStyle.chartGraph}
          data={data}
          width={screenWidth - 20}
          height={250}
          strokeWidth={10}
          radius={30}
          chartConfig={{
            backgroundColor: (backgroundChart),
            backgroundGradientFrom: (backgroundChart),
            backgroundGradientTo: (backgroundChart),
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(250, 100, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForLabels: {
              fill: 'white',
              fontSize: 20,
              
            }
          }}
          hideLegend={true}
          withCustomBarColorFromData
        />
          <Text style={DiagramStyle.text}>Sensores</Text>
      </View>

      <View style={DiagramStyle.chart}>
      <ContributionGraph
          style={DiagramStyle.chartGraph}
          values={commitsData}
          endDate={new Date("2024-03-01")}
          numDays={100}
          width={screenWidth - 20}
          height={225}
          chartConfig={{
            backgroundGradientFrom: (backgroundChart),
            backgroundGradientTo: (backgroundChart),
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(100, 100, 200, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
        />
          <Text style={DiagramStyle.text}>Dias de Riego</Text>
      </View>
    </View>
    
    
  )
}