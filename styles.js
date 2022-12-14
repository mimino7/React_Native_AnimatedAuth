import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    height: 55,
    backgroundColor: "#416A80",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginHorizontal: 28,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  formButton: {
    height: 55,
    backgroundColor: "#416A80",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: "white",
    //  Shadow =============
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  button_container: {
    justifyContent: "center",
    height: height / 3,
    zIndex: 1,
  },
  formInputContainer: {
    marginBottom: 15,
    ...StyleSheet.absoluteFill, //StyleSheet.absoluteFill - зто то же самое что и style={position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}
    zIndex: -1,
    justifyContent: "center",
  },
  closeButtonContainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    top: -20,
    //  Shadow =============
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  textInput: {
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 7,
    paddingLeft: 10,
    backgroundColor: "white",
  },
});

export default styles;
