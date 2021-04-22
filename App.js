import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// Imports for Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
// Importing Screens
import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  // User Inputs
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
    lbsOfMulch: 0,
    bagsOfMulch: 0,
    bagsPerTank: 0,
    tankLoads: 0,
    sqftPerTank: 0,
    cubicYardsOfCompost: 0,
    cubicFtBagsCompost: 0,
  });

  // Calculations

  const calculateResults = () => {
    calcLbsOfMulch();
    //calcBagsOfMulch();
    //calcBagsPerTank();
    //calcTankLoads();
  };

  const calcLbsOfMulch = () => {
    let acre = 43560;
    setOutputs({
      ...outputs,
      lbsOfMulch: Math.round(
        (inputs.projectSize / acre) * outputs.mulchAppRate
      ),
    });
  };

  const calcBagsOfMulch = () => {
    setOutputs({
      ...outputs,
      bagsOfMulchNeeded: Math.round(outputs.lbsOfMulch / inputs.weightOfMulch),
    });
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
