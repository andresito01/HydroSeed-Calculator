import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
// Imports for Navigation
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
// Importing Components
import Navigation from "./components/Navigation";
import { styles } from "./styles/styles";
import { SafeAreaView } from "react-native";

const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return <Navigation />;
}
