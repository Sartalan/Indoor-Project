import { StyleSheet } from "react-native";

const backgroundPages = '#090909'
//* [Routes General Styles]
export const routesStyles = StyleSheet.create({
  container: {
    backgroundColor: (backgroundPages),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column-reverse",
    gap:10
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontStyle: 'italic'
  }
});
//? -----------------
//? [Diagram  Styles]
//? -----------------



export const DiagramStyle = StyleSheet.create({
  
  container: {
    backgroundColor: (backgroundPages),
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },

  text: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#FFFFFFA1',
    backgroundColor: (backgroundPages),
    padding: 10
  },

  chart: {
    backgroundColor: (backgroundPages),
  },

  chartGraph: {
    borderRadius: 20,
    backgroundColor: (backgroundPages)
  }
})
