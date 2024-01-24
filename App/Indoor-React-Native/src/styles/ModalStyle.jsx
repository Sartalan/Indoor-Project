import { StyleSheet } from "react-native";
import {screenWidth} from './screens/DiagramStyle'
export const uiTopIconsSize = 75
const modalRadius = 25
export const ModalStyle = StyleSheet.create({

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  allContent: {
    width: screenWidth - 100,
    height: 500,

  },

  /*Top */
/*------- */

  top: {
    borderTopEndRadius: modalRadius,
    borderTopStartRadius: modalRadius,
    width: 'auto',
    height: 75,
    backgroundColor: '#181921',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  modalImage: {
    width: 50,
    height: 50,
    margin: 10,
    opacity: .5
  },


  /*Bottom */
/*---------- */

  bottom: {
    backgroundColor: '#000000',
    flex: 1,
    borderRadius: modalRadius
  },

  text: {
    color: '#FFFFFFA1',
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontSize: 25
  }
});