import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";

const Buttons = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("btn pressed")}
      >
        <Text style={styles.btnText}>Clear all Fields</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => console.log("btn pressed")}
      >
        <Text style={styles.btnText}> Calculate </Text>
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
