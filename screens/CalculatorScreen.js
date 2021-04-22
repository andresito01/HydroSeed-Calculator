import React, { useState } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
//import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";
import Outputs from "../components/Outputs";
import { Input } from "react-native-elements/dist/input/Input";

const CalculatorScreen = ({
  userInputs,
  updateInputs,
  outputs,
  setOutputs,
  reset,
  calculate,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>HYDROSEED CALCULATOR</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
            <View style={styles.inputsContainer}>
              <Inputs
                userInputs={userInputs}
                updateInputs={updateInputs}
                outputs={outputs}
                setOutputs={setOutputs}
                reset={reset}
                calculate={calculate}
              />
            </View>
            <View style={styles.header3}>
              <Text style={styles.headerLabel}>Calculation Results</Text>
            </View>
            <Outputs
              userInputs={userInputs}
              outputs={outputs}
              setOutputs={setOutputs}
              calculate={calculate}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CalculatorScreen;
