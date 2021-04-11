import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput } from "react-native";

const MulchInputs = () => {
  return (
    <View style={styles.mulchInputsContainer}>
      <View style={styles.header2}>
        <Text style={styles.headerLabel}>Mulch</Text>
      </View>

      {/* Input Total Project Size */}
      <View style={styles.forms}>
        <Text style={styles.label}>Total Size of Project</Text>
        <TextInput
          name="projectSize"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="sq. ft."
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.projectSize)}
          onChangeText={(val) => setInputs({ ...inputs, projectSize: val })}
        />
      </View>

      {/* Input Target Mulch Application Rate */}
      <View style={styles.forms}>
        <Text style={styles.label}>Target Mulch Application Rate</Text>
        <TextInput
          name="mulchAppRate"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="lbs/acre"
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.mulchAppRate)}
          onChangeText={(val) =>
            setInputs({ ...inputs, mulchAppRate: Number(val) })
          }
        />
      </View>

      {/* Input Weight of Mulch (per bag) */}
      <View style={styles.forms}>
        <Text style={styles.label}>Weight of Mulch (per bag)</Text>
        <TextInput
          name="weightOfMulch"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="lbs"
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.weightOfMulch)}
          onChangeText={(val) => setInputs({ ...inputs, weightOfMulch: val })}
        />
      </View>

      {/* Input Working Capacity of Tank */}
      <View style={styles.forms}>
        <Text style={styles.label}>Working Capacity of Tank</Text>
        <TextInput
          name="tankCapacity"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="gal"
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.tankCapacity)}
          onChangeText={(val) => setInputs({ ...inputs, tankCapacity: val })}
        />
      </View>

      {/* Input Mulch Mixing Rate */}
      <View style={styles.forms}>
        <Text style={styles.label}>Mulch Mixing Rate</Text>
        <TextInput
          name="mulchMixingRate"
          keyboardAppearance="dark"
          keyboardType="numeric"
          placeholder="lbs/100 gal"
          placeholderTextColor="#787878"
          style={styles.textInputContainer}
          //value={String(inputs.mulchMixingRate)}
          onChangeText={(val) => setInputs({ ...inputs, mulchMixingRate: val })}
        />
      </View>
    </View>
  );
};

export default MulchInputs;
