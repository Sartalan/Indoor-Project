import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const backgroundPages = '#090909'

//* [Routes General Styles]
export const routesStyles = StyleSheet.create({
  container: {
    backgroundColor: (backgroundPages),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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

const uiTopIconsSize = 75

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
  },

  modalTouchableContainer: {
    height: 'auto',
    width: screenWidth,
    backgroundColor: '#000',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  modalHelpImage: {
    width: uiTopIconsSize,
    height: uiTopIconsSize,
    opacity: .75
  }
})
