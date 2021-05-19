import React, { useState } from "react";
// Imports for Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
// Importing Screens
import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/ProjectsScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  // User Inputs Including Input fields To Save A Project
  const [inputs, setInputs] = useState([
    {
      projectName: "project1",
      projectID: "01",
      projectSize: "",
      mulchAppRate: "",
      weightOfMulch: "",
      tankCapacity: "",
      mulchMixingRate: "",
      compostAppArea: "",
      compostDepth: "",
    },
  ]);
  // Calculation Outputs
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

  // Saved Project List
  let [projectList, setProjectList] = useState([]);

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
              inputs={inputs}
              setInputs={setInputs}
              outputs={outputs}
              setOutputs={setOutputs}
              projectList={projectList}
              setProjectList={setProjectList}
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
          name="Projects"
          children={() => (
            <HistoryScreen
              projectList={projectList}
              setProjectList={setProjectList}
              inputs={inputs}
              setInputs={setInputs}
              outputs={outputs}
            />
          )}
          options={{
            tabBarLabel: "Projects",
            tabBarIcon: ({ color }) => (
              <Icon name="server-outline" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
