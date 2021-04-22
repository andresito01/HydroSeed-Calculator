import React from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
//import Buttons from "./Buttons";

const Inputs = ({
  userInputs,
  updateInputs,
  outputs,
  setOutputs,
  calculate,
}) => {
  // This reset method resets the state however, the text fields are not clearing

  const reset = () => {
    updateInputs({});
    setOutputs({});
  };
  return (
    <View style={styles.inputsContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.header2}>
          <Text style={styles.headerLabel}>Mulch</Text>
        </View>

        {/* Input Total Project Size */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Total Size of Project: {userInputs.projectSize}
          </Text>
          <TextInput
            name="projectSize"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="sq. ft."
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={userInputs.projectSize}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, projectSize: Number(val) })
            }
          />
        </View>

        {/* Input Target Mulch Application Rate */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Target Mulch Application Rate {userInputs.mulchAppRate}
          </Text>
          <TextInput
            name="mulchAppRate"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="lbs/acre"
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.mulchAppRate)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, mulchAppRate: Number(val) })
            }
          />
        </View>

        {/* Input Weight of Mulch (per bag) */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Weight of Mulch (per bag) {userInputs.weightOfMulch}
          </Text>
          <TextInput
            name="weightOfMulch"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="lbs"
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.weightOfMulch)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, weightOfMulch: Number(val) })
            }
          />
        </View>

        {/* Input Working Capacity of Tank */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Working Capacity of Tank {userInputs.tankCapacity}
          </Text>
          <TextInput
            name="tankCapacity"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="gal"
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.tankCapacity)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, tankCapacity: Number(val) })
            }
          />
        </View>

        {/* Input Mulch Mixing Rate */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Mulch Mixing Rate {userInputs.mulchMixingRate}
          </Text>
          <TextInput
            name="mulchMixingRate"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="lbs/100 gal"
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.mulchMixingRate)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, mulchMixingRate: Number(val) })
            }
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.header2}>
          <Text style={styles.headerLabel}>Compost</Text>
        </View>

        {/* Input Compost Application Area */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Enter Application Area {userInputs.compostAppArea}
          </Text>
          <TextInput
            name="compostAppArea"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="sq. ft."
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.compostAppArea)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, compostAppArea: Number(val) })
            }
          />
        </View>

        {/* Input Desired Compost Depth */}
        <View style={styles.forms}>
          <Text style={styles.label}>
            Enter Desired Compost Depth {userInputs.compostDepth}
          </Text>
          <TextInput
            name="compostDepth"
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="inches"
            placeholderTextColor="#787878"
            style={styles.textInputContainer}
            value={Number(userInputs.compostDepth)}
            onChangeText={(val) =>
              updateInputs({ ...userInputs, compostDepth: Number(val) })
            }
          />
        </View>

        {/* Buttons for Clear Fields, Calculate, Save Calculations */}
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={reset}>
            <Text style={styles.btnText}>Clear all Fields</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={calculate}>
            <Text style={styles.btnText}>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log("btn pressed")}
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
