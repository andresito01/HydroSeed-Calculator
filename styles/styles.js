import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const styles = ScaledSheet.create({
  scrollView: {
    alignSelf: "center",
    width: "100%",
    marginTop: 5,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 10,
  },
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  calculatorScreenHeader: {
    height: "16%",
    width: "98%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#046b99",
    borderWidth: "2@s",
    borderColor: "#fdb81e",
  },
  header2: {
    margin: "5@s",
    width: "90%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: "2@s",
    borderBottomColor: "white",
  },
  header3: {
    height: "5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#046b99",
    borderWidth: "2@s",
    borderColor: "#fdb81e",
    marginTop: "5@s",
  },
  appDescriptionContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  // Styling for User Inputs Section
  inputContainer: {
    flex: 1,
    margin: "2@s",
    backgroundColor: "#046b99",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#fdb81e",
    borderWidth: "2@s",
  },
  // Styling for Calculation Results container
  resultsContainer: {
    flex: 1,
    width: "100%",
    marginTop: "5@ms",
    padding: 2,
    alignItems: "stretch",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#477699",
    backgroundColor: "#046b99",
  },
  resultsContainer2: {
    flex: 1,
    width: "100%",
    marginTop: "5@ms",
    padding: 2,
    alignItems: "stretch",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#477699",
    backgroundColor: "#046b99",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Kohinoor Telugu",
    padding: "3@s",
    textAlign: "center",
    fontSize: "12@ms",
  },
  headerLabel: {
    color: "white",
    fontSize: "20@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
    textAlign: "center",
  },
  // Styling for each label plus text input
  forms: {
    flex: 1,
    width: "100%",
    alignItems: "baseline",
    justifyContent: "center",
    padding: "2@s",
  },
  inForm: {
    flex: 1,
    width: "100%",
    padding: 2,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: "1@s",
    borderBottomColor: "white",
  },
  inForm2: {
    flex: 1,
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
    paddingLeft: 10,
    width: "110@s",
    height: "30@s",
    backgroundColor: "white",
    marginRight: "2@s",
    fontSize: "15@s",
  },
  // Unlike textInputContainer, the margin is modified for mulch mixing rate text input
  textInputContainer2: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    width: "90@s",
    height: "30@s",
    backgroundColor: "white",
    fontSize: "15@s",
  },
  // styling for the text inputs in the save modal
  textInputContainer3: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    height: "45@ms",
    backgroundColor: "white",
    fontSize: "20@s",
  },
  textOutputContainer: {
    borderColor: "black",
    borderWidth: 1,
    //height: 20,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: "15@s",
    lineHeight: "30@s",
  },
  textOutputContainer2: {
    borderColor: "black",
    borderWidth: 1,
    height: "34@ms",
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: "15@s",
    lineHeight: "30@s",
  },
  // Styling for Buttons Container
  btnContainer: {
    width: "100%",
    padding: 5,
    flex: 7,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btn: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    height: "10%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btn2: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    height: "10%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "KohinoorBangla-Semibold",
    textAlign: "center",
    fontSize: "15@s",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00000099",
    paddingTop: "90@ms",
  },
  modalBackground2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00000099",
    paddingTop: "90@ms",
  },
  modalContainer: {
    width: "80%",
    height: "60%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#fdb81e",
    borderRadius: 20,
  },
  modalContainer2: {
    width: "80%",
    height: "90%",
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
    padding: "6@s",
  },
  modalTitle2: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#046b99",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: "6@s",
  },
  modalLabel: {
    color: "black",
    fontSize: "20@s",
  },
  modalBody: {
    height: "60%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5@s",
  },
  modalBody2: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5@s",
  },
  modalBtnContainer: {
    flexDirection: "row",
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdb81e",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalBtnContainer2: {
    flexDirection: "row",
    height: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdb81e",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalBtn1: {
    flex: 1,
    height: "100%",
    borderRightWidth: 1,
    borderRightColor: "black",
    justifyContent: "center",
  },
  modalBtn2: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  projectScreenHeader: {
    height: "16%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#046b99",
    borderWidth: "2@s",
    borderColor: "#fdb81e",
  },
  listHeader: {
    flexDirection: "row",
    marginTop: "5@s",
    alignItems: "flex-end",
    borderBottomWidth: "2@s",
    borderBottomColor: "#fdb81e",
    backgroundColor: "#046b99",
    height: "30@s",
  },
  listDateLabel: {
    flex: 0.5,
    alignItems: "flex-start",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  listNameLabel: {
    flex: 0.5,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  listIDLabel: {
    flex: 0.5,
    alignItems: "flex-end",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    marginVertical: "10@s",
    padding: "10@s",
    borderBottomWidth: "2@s",
    borderBottomColor: "#fdb81e",
    backgroundColor: "#046b99",
  },
  listName: {
    flex: 0.5,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  listID: {
    flex: 0.5,
    alignItems: "flex-end",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  listDate: {
    flex: 0.5,
    alignItems: "flex-start",
    textAlign: "center",
    color: "white",
    fontSize: "15@s",
    fontFamily: "Kohinoor Telugu",
    fontWeight: "bold",
  },
  noSavedProjectsLabel: {
    color: "black",
    fontSize: "30@s",
    fontFamily: "Kohinoor Telugu",
    textAlign: "center",
    marginTop: "30%",
  },
});

export { styles };
