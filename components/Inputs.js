import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput } from "react-native";
import Buttons from "./Buttons";

const Inputs = ({
  inputs,
  setInputs,
  outputs,
  setOutputs,
  setShowSaveModal,
  unit,
  setUnit,
}) => {
  return (
    <View style={styles.inputsContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.header2}>
          <Text style={styles.headerLabel}>Mulch</Text>
        </View>

        {/* Input Total Project Size */}
        <View style={styles.forms}>
          <Text style={styles.label}>Total Size of Project:</Text>
          <View style={styles.inForm}>
            <TextInput
              name="projectSize"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="sq. ft."
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.projectSize}
              onChangeText={(val) => setInputs({ ...inputs, projectSize: val })}
            />
            <Text style={styles.label}>{unit}</Text>
          </View>
        </View>

        {/* Input Target Mulch Application Rate */}
        <View style={styles.forms}>
          <Text style={styles.label}>Target Mulch Application Rate:</Text>
          <View style={styles.inForm}>
            <TextInput
              name="mulchAppRate"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs/acre"
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.mulchAppRate}
              onChangeText={(val) =>
                setInputs({ ...inputs, mulchAppRate: val })
              }
            />
            <Text style={styles.label}>lbs/acre</Text>
          </View>
        </View>

        {/* Input Weight of Mulch (per bag) */}
        <View style={styles.forms}>
          <Text style={styles.label}>Weight of Mulch (per bag):</Text>
          <View style={styles.inForm}>
            <TextInput
              name="weightOfMulch"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs"
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.weightOfMulch}
              onChangeText={(val) =>
                setInputs({ ...inputs, weightOfMulch: val })
              }
            />
            <Text style={styles.label}>lbs</Text>
          </View>
        </View>

        {/* Input Working Capacity of Tank */}
        <View style={styles.forms}>
          <Text style={styles.label}>Working Capacity of Tank:</Text>
          <View style={styles.inForm}>
            <TextInput
              name="tankCapacity"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="gal"
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.tankCapacity}
              onChangeText={(val) =>
                setInputs({ ...inputs, tankCapacity: val })
              }
            />
            <Text style={styles.label}>gal</Text>
          </View>
        </View>

        {/* Input Mulch Mixing Rate */}
        <View style={styles.forms}>
          <Text style={styles.label}>Mulch Mixing Rate:</Text>
          <View style={styles.inForm2}>
            <TextInput
              name="mulchMixingRate"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="lbs/100 gal"
              placeholderTextColor="#787878"
              style={styles.textInputContainer2}
              value={inputs.mulchMixingRate}
              onChangeText={(val) =>
                setInputs({ ...inputs, mulchMixingRate: val })
              }
            />
            <Text style={styles.label}>lbs/100 gal</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.header2}>
          <Text style={styles.headerLabel}>Compost</Text>
        </View>

        {/* Input Compost Application Area */}
        <View style={styles.forms}>
          <Text style={styles.label}>Enter Application Area:</Text>
          <View style={styles.inForm}>
            <TextInput
              name="compostAppArea"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="sq. ft."
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.compostAppArea}
              onChangeText={(val) =>
                setInputs({ ...inputs, compostAppArea: val })
              }
            />
            <Text style={styles.label}>{unit}</Text>
          </View>
        </View>

        {/* Input Desired Compost Depth */}
        <View style={styles.forms}>
          <Text style={styles.label}>Enter Desired Compost Depth:</Text>
          <View style={styles.inForm}>
            <TextInput
              name="compostDepth"
              keyboardAppearance="dark"
              keyboardType="numeric"
              placeholder="inches"
              placeholderTextColor="#787878"
              style={styles.textInputContainer}
              value={inputs.compostDepth}
              onChangeText={(val) =>
                setInputs({ ...inputs, compostDepth: val })
              }
            />
            <Text style={styles.label}>inches</Text>
          </View>
        </View>
        <Buttons
          inputs={inputs}
          setInputs={setInputs}
          outputs={outputs}
          setOutputs={setOutputs}
          setShowSaveModal={setShowSaveModal}
          unit={unit}
          setUnit={setUnit}
        />
      </View>
    </View>
  );
};

export default Inputs;
