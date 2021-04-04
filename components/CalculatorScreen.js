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

function CalculatorScreen() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.Header}>HYDROSEED CALCULATOR</Text>
        {/* Container for Inputs start here*/}
        <View style={styles.InputsContainer}>
          {/* Input Total Project Size */}
          <View style={styles.row}>
            <Text style={styles.label}>Total Size of Project =</Text>
            <TextInput
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="sq. ft."
              style={styles.TextInputContainer}
            />
          </View>
          {/* Input Target Mulch Application Rate */}
          <View style={styles.row}>
            <Text style={styles.label}>Target Mulch Application Rate =</Text>
            <TextInput
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs/acre"
              style={styles.TextInputContainer}
            />
          </View>
          {/* Input Weight of Mulch (per bag) */}
          <View style={styles.row}>
            <Text style={styles.label}>Weight of Mulch (per bag) =</Text>
            <TextInput
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs"
              style={styles.TextInputContainer}
            />
          </View>
          {/* Input Working Capacity of Tank */}
          <View style={styles.row}>
            <Text style={styles.label}>Working Capacity of Tank =</Text>
            <TextInput
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="gal"
              style={styles.TextInputContainer}
            />
          </View>
          {/* Input Mulch Mixing Rate */}
          <View style={styles.row}>
            <Text style={styles.label}>Mulch Mixing Rate =</Text>
            <TextInput
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs/100 gal"
              style={styles.TextInputContainer}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Button pressed")}
            >
              <Text> Clear all Fields </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Button pressed")}
            >
              <Text> Calculate </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar></StatusBar>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
  },
  Header: {
    height: 50,
    paddingTop: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  InputsContainer: {
    flexDirection: "column",
    flex: 1,
    borderWidth: 3,
    borderColor: "green",
  },
  /* Styling for TextInput components */
  TextInputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 150,
    backgroundColor: "white",
  },
  btnContainer: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    height: 70,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "column",
  },
  label: {
    color: "black",
    paddingBottom: 10,
    fontWeight: "bold",
  },
});

export default CalculatorScreen;
