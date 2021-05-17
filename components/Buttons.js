import React from "react";
import { styles } from "../styles/styles";
import { Text, View, TouchableOpacity } from "react-native";
import useDidMountEffect from "./useDidMountEffect";
const Buttons = ({
  inputs,
  setInputs,
  outputs,
  setOutputs,
  setShowSaveModal,
  unit,
  setUnit,
}) => {
  // FUNCTIONS FOR CLEAR FIELDS, CALCULATE AND THE SAVE CALCULATIONS BTNS WILL BE STORED HERE IN THE SAME FILE.

  // Function to delete all values to inputs and outputs
  const reset = () => {
    setInputs({});
    setOutputs({});
  };

  // Calculate results by storing the results in new local variables, create a new object called newOutputs that is a copy of the object outputs (that is a state), assign results to the new object then copy it back to the state outputs.
  const calculateResults = () => {
    var acre = 43560;
    var newLbsOfMulch;
    if (unit === "sq. ft") {
      newLbsOfMulch = (
        (Number(inputs.projectSize) / acre) *
        Number(inputs.mulchAppRate)
      ).toFixed(2);
    } else if (unit === "acre") {
      newLbsOfMulch = (
        Number(inputs.projectSize) * Number(inputs.mulchAppRate)
      ).toFixed(2);
    }

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

    var newCubicYardsOfCompost;
    if (unit === "sq. ft") {
      newCubicYardsOfCompost = (
        (inputs.compostAppArea * (inputs.compostDepth / 12)) /
        27
      ).toFixed(2);
    } else if (unit === "acre") {
      newCubicYardsOfCompost = (
        (inputs.compostAppArea * acre * (inputs.compostDepth / 12)) /
        27
      ).toFixed(2);
    }

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
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={reset}>
        <Text style={styles.btnText}>Clear all Fields</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          calculateResults();
        }}
      >
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowSaveModal(true)}
      >
        <Text style={styles.btnText}> Create Project </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (unit === "sq. ft") {
            setUnit("acre");
          } else if (unit === "acre") {
            setUnit("sq. ft");
          }
        }}
      >
        <Text style={styles.btnText}>Change Unit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
