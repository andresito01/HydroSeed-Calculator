import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: "center",
    height: "20%",
    width: "100%",
    marginTop: 5,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 120,
    paddingLeft: 2,
    paddingRight: 2,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    height: "20%",
    width: "98%",
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
    height: "8%",
    width: "99%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#046b99",
    borderWidth: 2,
    borderColor: "#fdb81e",
    marginTop: 10,
  },
  inputsContainer: {
    //flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  // Styling for User Inputs Section
  inputContainer: {
    flex: 1,
    width: "50%",
    margin: 1,
    // Inside Container
    backgroundColor: "#046b99",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#fdb81e",
    borderWidth: 2,
  },
  // Styling for Buttons Container
  btnContainer: {
    marginBottom: 97,
    width: "100%",
    padding: 5,
    flex: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  // Styling for Calculation Results container
  resultsContainer: {
    flex: 1,
    //height: "90%",
    width: "100%",
    marginTop: 5,
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
    alignItems: "baseline",
    justifyContent: "center",
    padding: 2,
  },
  inForm: {
    width: "100%",
    padding: 2,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  inForm2: {
    width: "100%",
    padding: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  // Styling for TextInput component
  textInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 100,
    height: 35,
    backgroundColor: "white",
    marginRight: 5,
  },
  // Unlike textInputContainer, the margin is modified for mulch mixing rate text input
  textInputContainer2: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 100,
    height: 35,
    backgroundColor: "white",
    marginRight: 0,
  },
  // styling for the text inputs in the save modal
  textInputContainer3: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    height: 45,
    backgroundColor: "white",
    fontSize: 20,
  },
  textOutputContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: 45,
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: 20,
    lineHeight: 50,
  },
  btn: {
    flex: 1,
    margin: 10,
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalContainer: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#fdb81e",
    borderRadius: 20,
  },
  modalTitle: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#046b99",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalBody: {
    height: "60%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  modalSaveBtn: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdb81e",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export { styles };
