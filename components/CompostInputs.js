import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput } from "react-native";
import Buttons from "./Buttons";

const CompostInputs = () => {
  return (
    <View style={styles.compostInputsContainer}>
      <View style={styles.header2}>
        <Text style={styles.headerLabel}>Compost</Text>
      </View>

      {/* Input Compost Application Area */}
      <View style={styles.forms}>
        <Text style={styles.label}>Enter Application Area</Text>
        <TextInput
          name="compostAppArea"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="sq. ft."
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.compostAppArea)}
          onChangeText={(val) => setInputs({ ...inputs, compostAppArea: val })}
        />
      </View>

      {/* Input Desired Compost Depth */}
      <View style={styles.forms}>
        <Text style={styles.label}>Enter Desired Compost Depth</Text>
        <TextInput
          name="compostDepth"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="inches"
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.compostDepth)}
          onChangeText={(val) => setInputs({ ...inputs, compostDepth: val })}
        />
      </View>

      <Buttons />
    </View>
  );
};

export default CompostInputs;
