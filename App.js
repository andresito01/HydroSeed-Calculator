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
  const [inputs, setInputs] = useState([
    {
      projectSize: "",
      mulchAppRate: "",
      weightOfMulch: "",
      tankCapacity: "",
      mulchMixingRate: "",
      compostAppArea: "",
      compostDepth: "",
    },
  ]);
  // Outputs
  const [outputs, setOutputs] = useState([
    {
      lbsOfMulch: "",
      bagsOfMulch: "",
      bagsPerTank: "",
      tankLoads: "",
      gallonsOfWater: "",
      sqftPerTank: "",
      cubicYardsOfCompost: "",
      cubicFtBagsCompost: "",
    },
  ]);

  // Calculate results by storing the results in new local variables, create a new object called newOutputs that is a copy of the object outputs (that is a state), assign results to the new object then copy it back to the state outputs.
  const calculateResults = () => {
    var acre = 43560;

    var newLbsOfMulch = (
      (Number(inputs.projectSize) / acre) *
      Number(inputs.mulchAppRate)
    ).toFixed(2);
    console.log("newLbsOfMulch: " + newLbsOfMulch);

    var newBagsOfMulch = (newLbsOfMulch / Number(inputs.weightOfMulch)).toFixed(
      2
    );
    console.log("newBagsOfMulch: " + newBagsOfMulch);

    var newBagsPerTank = Number(inputs.tankCapacity) / 100;
    console.log("newBagsPerTank: " + newBagsPerTank);

    var newTankLoads = (newBagsOfMulch / newBagsPerTank).toFixed(2);
    console.log("newTankLoads: " + newTankLoads);

    var newGallonsOfWater = (
      ((100 / inputs.mulchMixingRate) * newLbsOfMulch) /
      8.34
    ).toFixed(2);

    //var newSqFtPerTank = ;

    var newCubicYardsOfCompost = (
      (inputs.compostAppArea * (inputs.compostDepth / 12)) /
      27
    ).toFixed(2);

    //var newCubicFtBagsCompost = ;

    const newOutputs = { ...outputs };
    newOutputs.lbsOfMulch = String(newLbsOfMulch);
    newOutputs.bagsOfMulch = String(newBagsOfMulch);
    newOutputs.bagsPerTank = String(newBagsPerTank);
    newOutputs.tankLoads = String(newTankLoads);
    newOutputs.gallonsOfWater = String(newGallonsOfWater);
    //newOutputs.sqftPerTank = String(newSqFtPerTank);
    newOutputs.cubicYardsOfCompost = String(newCubicYardsOfCompost);
    //newOutputs.cubicFtBagsCompost = String(newCubicFtBagsCompost);
    setOutputs(newOutputs);
  };

  // Use the custom useEffect hook to log the values of ouputs after every change to outputs (this custom hook prevents being called on initial render)
  useDidMountEffect(() => {
    console.log("lbsOfMulch: " + outputs.lbsOfMulch);
    console.log("bagsOfMulch: " + outputs.bagsOfMulch);
    console.log("bagsPerTank: " + outputs.bagsPerTank);
    console.log("tankLoads: " + outputs.tankLoads);
    console.log("gallonsOfWater: " + outputs.gallonsOfWater);
    //console.log("sqftPerTank: " + outputs.sqftPerTank);
    console.log("cubicYardsOfCompost: " + outputs.cubicYardsOfCompost);
    //console.log("cubicFtBagsCompost: " + outputs.cubicFtBagsCompost);
  }, [outputs]);

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
          children={() => (
            <HistoryScreen userInputs={inputs} outputs={outputs} />
          )}
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
