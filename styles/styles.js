import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5,
  },
  header: {
    marginLeft: 9,
    height: "25%",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#046b99",
    borderWidth: 2,
    borderColor: "#fdb81e",
  },
  header2: {
    margin: 5,
    width: "90%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  header3: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#046b99",
    borderWidth: 2,
    borderColor: "#fdb81e",
    marginTop: 10,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  // Styling for entire Mulch User Inputs Section
  mulchInputsContainer: {
    flex: 1,
    margin: 5,
    // Inside Container
    padding: 5,
    backgroundColor: "#046b99",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#fdb81e",
    borderWidth: 2,
  },
  // Styling for entire Compost User Inputs Section
  compostInputsContainer: {
    flex: 1,
    margin: 5,
    // Inside Container
    padding: 2,
    backgroundColor: "#046b99",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#fdb81e",
    borderWidth: 2,
  },
  // Styling for Buttons Container
  btnContainer: {
    width: "100%",
    padding: 5,
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  // Styling for Calculation Results container
  resultsContainer: {
    flex: 1,
    width: "100%",
    margin: 5,
    padding: 2,
    alignItems: "stretch",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#477699",
    backgroundColor: "#046b99",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Kohinoor Telugu",
    padding: 3,
    textAlign: "center",
  },
  headerLabel: {
    color: "white",
    fontSize: 20,
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
    padding: 3,
    textAlign: "center",
  },
  // Styling for each label plus text input
  forms: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  // Styling for TextInput component
  textInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 130,
    height: 35,
    backgroundColor: "white",
  },
  textInputContainer2: {
    borderColor: "black",
    borderWidth: 1,
    padding: 7,
    width: "100%",
    height: 33,
    backgroundColor: "white",
  },
  textInputContainer3: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 0,
    padding: 7,
    width: "100%",
    height: 33,
    backgroundColor: "white",
  },
  btn: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "KohinoorBangla-Semibold",
    textAlign: "center",
  },
});

export { styles };