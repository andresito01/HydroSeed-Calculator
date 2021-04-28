import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// Imports for Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
// Importing Screens
import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";
// Importing Custom useEffect Hook
import useDidMountEffect from "./components/useDidMountEffect";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  // User Inputs
  const [inputs, setInputs] = useState({
    projectSize: "",
    mulchAppRate: "",
    weightOfMulch: "",
    tankCapacity: "",
    mulchMixingRate: "",
    compostAppArea: "",
    compostDepth: "",
  });
  // Outputs
  const [outputs, setOutputs] = useState({
    lbsOfMulch: "",
    bagsOfMulch: "",
    bagsPerTank: "",
    tankLoads: "",
    sqftPerTank: "",
    cubicYardsOfCompost: "",
    cubicFtBagsCompost: "",
  });

  const calculateResults = () => {
    var acre = 43560;
    var newLbsOfMulch = Math.round(
      (Number(inputs.projectSize) / acre) * Number(inputs.mulchAppRate)
    );
    console.log("newLbsOfMulch: " + newLbsOfMulch);
    //setOutputs({ ...outputs, lbsOfMulch: String(newLbsOfMulch) });
    //console.log("lbsOfMulch: " + outputs.lbsOfMulch);

    var newBagsOfMulch = newLbsOfMulch / Number(inputs.weightOfMulch);
    console.log("newBagsOfMulch: " + newBagsOfMulch);
    //setOutputs({ ...outputs, bagsOfMulch: String(newBagsOfMulch) });
    //console.log("bagsOfMulch: " + outputs.bagsOfMulch);

    var newBagsPerTank = Number(inputs.tankCapacity) / 100;
    console.log("newBagsPerTank: " + newBagsPerTank);
    //setOutputs({ ...outputs, bagsPerTank: String(newBagsPerTank) });
    //console.log("bagsPerTank: " + outputs.bagsPerTank);

    var newTankLoads = (newBagsOfMulch / newBagsPerTank).toFixed(2);
    console.log("newTankLoads: " + newTankLoads);
    //setOutputs({ ...outputs, tankLoads: String(newTankLoads) });
    //console.log("tankLoads: " + outputs.tankLoads);
    //var sqftPerTank =
    //var cubicYardsOfCompost =
    //var cubicFtBagsCompost =
    const newOutputs = { ...outputs };
    newOutputs.lbsOfMulch = String(newLbsOfMulch);
    newOutputs.bagsOfMulch = String(newBagsOfMulch);
    newOutputs.bagsPerTank = String(newBagsPerTank);
    newOutputs.tankLoads = String(newTankLoads);
    setOutputs(newOutputs);
  };

  useDidMountEffect(() => {
    console.log("lbsOfMulch: " + outputs.lbsOfMulch);
    console.log("bagsOfMulch: " + outputs.bagsOfMulch);
    console.log("bagsPerTank: " + outputs.bagsPerTank);
    console.log("tankLoads: " + outputs.tankLoads);
  }, [outputs]);

  // Calculations
  // State is asynchronous, so solve this issue by finding a way to update state instantly
  /*const calculatedResults = () => {
    calcLbsOfMulch();
    console.log(outputs.lbsOfMulch);
    //calcBagsOfMulch();
    //calcBagsPerTank();
    //calcTankLoads();
  };

  const calcLbsOfMulch = () => {
    var ps = Number(inputs.projectSize);
    var mar = Number(inputs.mulchAppRate);
    var result = Math.round((ps / 43560) * mar);
    const newOutputs = { ...outputs };
    newOutputs.lbsOfMulch = String(result);
    setOutputs(newOutputs);
    console.log("lbOfMulch = " + outputs.lbsOfMulch);
  };

  const calcBagsOfMulch = () => {
    var lom = Number(outputs.lbsOfMulch);
    var wom = Number(inputs.weightOfMulch);
    var result = Math.round(lom / wom);
    setOutputs({
      ...outputs,
      bagsOfMulch: String(result),
    });
    //console.log("bagsOfMulch = " + outputs.bagsOfMulch);
  };

  const calcBagsPerTank = () => {
    setOutputs({
      ...outputs,
      bagsPerTank: inputs.tankCapacity / 100,
    });
  };

  const calcTankLoads = () => {
    setOutputs({
      ...outputs,
      tankLoads: outputs.bagsOfMulch / outputs.bagsPerTank,
    });
  };

  // Method to clear all text fields
  /*const handleReset = () => {
    Array.from(document.querySelectorAll("TextInput")).forEach(
      (TextInput) => (TextInput.value = "")
    );
    setInputs({
      projectSize: 0,
      mulchAppRate: 0,
      weightOfMulch: 0,
      tankCapacity: 0,
      mulchMixingRate: 0,
      compostAppArea: 0,
      compostDepth: 0,
    });
  };*/

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Calculator"
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: "#046b99" }}
        tabBarPosition="bottom"
      >
        <Tab.Screen
          name="Calculator"
          children={() => (
            <CalculatorScreen
              userInputs={inputs}
              updateInputs={setInputs}
              outputs={outputs}
              setOutputs={setOutputs}
              calculate={calculateResults}
            />
          )}
          options={{
            tabBarLabel: "Calculator",
            tabBarIcon: ({ color }) => (
              <Icon name="calculator" color={color} size={20} />
            ),
          }}
        />

        <Tab.Screen
          name="History"
          children={() => <HistoryScreen userInputs={inputs} />}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color }) => (
              <Icon name="server-outline" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
