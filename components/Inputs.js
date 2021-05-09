import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Inputs = ({
  userInputs,
  updateInputs,
  outputs,
  setOutputs,
  calculate,
  scrollToBottom,
  showModal,
  setShowModal,
}) => {
  // This reset method resets the state however, the text fields are not clearing

  const reset = () => {
    updateInputs({});
    setOutputs({});
  };

  const [selectedUnit, setSelectedUnit] = useState("sq. ft");

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
              value={userInputs.projectSize}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, projectSize: val })
              }
            />
            <View style={{ borderWidth: 1, borderColor: "red", flexGrow: 1 }}>
              <Picker
                style={{
                  height: 35,
                  borderWidth: 1,
                  borderColor: "red",
                  backgroundColor: "white",
                  //flex: 1,
                  justifyContent: "center",
                  //alignItems: "center",
                }}
                selectedValue={selectedUnit}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedUnit(itemValue)
                }
              >
                <Picker.Item style={styles.label} label="sq. ft" value="sqFt" />
                <Picker.Item style={styles.label} label="acre" value="acre" />
              </Picker>
              {/*<Text style={styles.label}>sq. ft</Text>*/}
            </View>
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
              value={userInputs.mulchAppRate}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, mulchAppRate: val })
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
              value={userInputs.weightOfMulch}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, weightOfMulch: val })
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
              value={userInputs.tankCapacity}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, tankCapacity: val })
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
              value={userInputs.mulchMixingRate}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, mulchMixingRate: val })
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
              value={userInputs.compostAppArea}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, compostAppArea: val })
              }
            />
            <Text style={styles.label}>sq. ft.</Text>
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
              value={userInputs.compostDepth}
              onChangeText={(val) =>
                updateInputs({ ...userInputs, compostDepth: val })
              }
            />
            <Text style={styles.label}>inches</Text>
          </View>
        </View>
        {/* Buttons for Clear Fields, Calculate, Save Calculations */}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={reset}>
            <Text style={styles.btnText}>Clear all Fields</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              calculate();
              //scrollToBottom();
            }}
          >
            <Text style={styles.btnText}>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.btnText}> Save Calculations </Text>
          </TouchableOpacity>
        </View>
        {/*<Buttons userInputs={userInputs} updateInputs={updateInputs} />*/}
      </View>
    </View>
  );
};

export default Inputs;
