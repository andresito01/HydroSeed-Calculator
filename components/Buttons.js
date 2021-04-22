import React, { useState, useRef } from "react";
import { styles } from "../styles/styles";
import { Text, View, TouchableOpacity } from "react-native";
import Inputs from "./Inputs";
//import { Input } from "react-native-elements";
//import { TextInput } from "react-native-gesture-handler";

const Buttons = ({ userInputs, updateInputs }) => {
  // This reset method resets the state however, the text fields are not clearing
  /* const reset = () => {
    updateInputs({
      projectSize: 0,
      mulchAppRate: 0,
      weightOfMulch: 0,
      tankCapacity: 0,
      mulchMixingRate: 0,
      compostAppArea: 0,
      compostDepth: 0,
    });
  }; */

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={reset}>
        <Text style={styles.btnText}>Clear all Fields</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("btn pressed")}
      >
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("btn pressed")}
      >
        <Text style={styles.btnText}> Save Calculations </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
