import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
// Imports for Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
// Importing Screens
import CalculatorScreen from "./components/CalculatorScreen";
import HistoryScreen from "./components/HistoryScreen";

const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Calculator"
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: "#046b99" }}
      >
        <Tabs.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            tabBarLabel: "Calculator",
            tabBarIcon: ({ color }) => (
              <Icon name="calculator" color={color} size={20} />
            ),
          }}
        />
        <Tabs.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color }) => (
              <Icon name="server-outline" color={color} size={20} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
