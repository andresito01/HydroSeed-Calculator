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
import { Input } from "react-native-elements";
import MulchInputs from "../components/MulchInputs";
import CompostInputs from "../components/CompostInputs";
import Buttons from "../components/Buttons";
import Outputs from "../components/Outputs";

function CalculatorScreen() {
  const acre = 43560;
  const [inputs, setInputs] = useState({
    projectSize: 0,
    mulchAppRate: 0,
    weightOfMulch: 0,
    tankCapacity: 0,
    mulchMixingRate: 0,
    compostAppArea: 0,
    compostDepth: 0,
  });

  const [outputs, setOutputs] = useState({
    lbsOfMulchNeeded: 0,
    bagsOfMulchNeeded: 0,
    bagsPerTankNeeded: 0,
    tankLoadsNeeded: 0,
    areaPerTank: 0,
    cubicYardsOfCompost: 0,
    cubicFootBags: 0,
  });

  /*const inputHandler = (enteredText) => {
    setInputs({ ...inputs, projectSize: enteredText });
  };

  ...outputs,
      bagsOfMulchNeeded: Math.round(
        outputs.lbsOfMulchNeeded / inputs.weightOfMulch
      ),
      ...outputs,
      bagsPerTankNeeded: inputs.tankCapacity / 100,
      ...outputs,
      tankLoadsNeeded: outputs.bagsOfMulchNeeded / outputs.bagsPerTankNeeded,

  function enactCalculations() {
   // calculate total lbs of mulch
    setOutputs({
      ...outputs,
      lbsOfMulchNeeded: Math.round(
        (inputs.projectSize / acre) * inputs.mulchAppRate
      ),
    });

    console.log(inputs);
    console.log(outputs);
  } */

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

        <View style={{ height: "75%", width: "100%" }}>
          <ScrollView
            style={{
              width: "95%",
              margin: 5,
              marginLeft: 9,
              marginBottom: 0,
            }}
            contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          >
            <View style={styles.inputsContainer}>
              <MulchInputs />
              <CompostInputs />
            </View>
            <View style={styles.header3}>
              <Text style={styles.headerLabel}>Calculation Results</Text>
            </View>
            <Outputs></Outputs>
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default CalculatorScreen;

/* 
<View style={styles.header2}>
          <Text style={{ color: "black", fontWeight: "bold", padding: 5 }}>
            Calculation Results
          </Text>
</View>

*/
