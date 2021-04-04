import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

class CalculatorScreen extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.Container}>
          <View style={styles.Header}>
            <Text style={styles.label}>HYDROSEED CALCULATOR</Text>
          </View>
          {/* Container for Mulch Calculation Inputs start here*/}
          <View style={styles.MulchInputsContainer}>
            <View style={styles.InnerMulchInputsContainer}>
              <Text style={styles.label}>How Much Mulch Is Needed?</Text>

              {/* Input Total Project Size */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Total Size of Project =</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="sq. ft."
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Input Target Mulch Application Rate */}
              <View style={styles.Forms}>
                <Text style={styles.label}>
                  Target Mulch Application Rate =
                </Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="lbs/acre"
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Input Weight of Mulch (per bag) */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Weight of Mulch (per bag) =</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="lbs"
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Input Working Capacity of Tank */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Working Capacity of Tank =</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="gal"
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Input Mulch Mixing Rate */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Mulch Mixing Rate =</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="lbs/100 gal"
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>
            </View>
          </View>

          {/* Container for Compost Calculation Inputs start here*/}
          <View style={styles.CompostInputsContainer}>
            <View style={styles.InnerCompostInputsContainer}>
              <Text style={styles.label}>Compost</Text>

              {/* Input Compost Application Area */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Enter Application Area</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="sq. ft."
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Input Desired Compost Depth */}
              <View style={styles.Forms}>
                <Text style={styles.label}>Enter Desired Compost Depth</Text>
                <TextInput
                  keyboardAppearance="dark"
                  keyboardType="numeric"
                  placeholder="inches"
                  placeholderTextColor="#787878"
                  style={styles.TextInputContainer}
                />
              </View>

              {/* Container for Buttons*/}
              <View style={styles.BtnContainer}>
                <View style={styles.InnerBtnContainer}>
                  <TouchableOpacity
                    style={styles.Button}
                    onPress={() => console.log("Button pressed")}
                  >
                    <Text style={styles.BtnText}>Clear all Fields</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.Button}
                    onPress={() => console.log("Button pressed")}
                  >
                    <Text style={styles.BtnText}> Calculate </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.Button}
                    onPress={() => console.log("Button pressed")}
                  >
                    <Text style={styles.BtnText}> Save Calculations </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <StatusBar></StatusBar>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Header: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D5F5E3",
  },
  label: {
    color: "black",
    fontWeight: "bold",
    padding: 5,
  },
  // Styling for entire Mulch User Inputs Section
  MulchInputsContainer: {
    width: "60%",
    height: "65%",
    padding: 5,
  },
  InnerMulchInputsContainer: {
    flex: 1,
    backgroundColor: "#D5F5E3",
    alignItems: "center",
  },
  // Styling for entire Compost User Inputs Section
  CompostInputsContainer: {
    width: "40%",
    height: "65%",
    padding: 5,
  },
  InnerCompostInputsContainer: {
    flex: 1,
    backgroundColor: "#D5F5E3",
    alignItems: "center",
  },
  // Styling for each label plus text input
  Forms: {
    alignItems: "center",
  },
  // Styling for TextInput component
  TextInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 150,
    backgroundColor: "white",
  },
  // Styling for Buttons
  BtnContainer: {
    width: "100%",
    height: "47%",
    padding: 5,
  },
  InnerBtnContainer: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Button: {
    flex: 3,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    width: "100%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
  },
  BtnText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CalculatorScreen;
