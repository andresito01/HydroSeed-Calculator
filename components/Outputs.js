import React from "react";
import { styles } from "../styles/styles";
import { Text, View } from "react-native";

const Outputs = ({ outputs }) => {
  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.label}>Total Mulch Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>
          {outputs.lbsOfMulch} lbs of mulch
        </Text>

        <Text style={styles.textInputContainer2}>
          {outputs.bagsOfMulch} bags
        </Text>
      </View>
      <Text style={styles.label}>Total Tank Loads Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>
          {outputs.bagsPerTank} bags per tank
        </Text>
        <Text style={styles.textInputContainer2}>
          {outputs.tankLoads} tank loads
        </Text>
        <Text style={styles.textInputContainer2}>
          {outputs.sqftPerTank} sq. ft./tank{" "}
        </Text>
      </View>
      <Text style={styles.label}>Total Compost Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>
          {outputs.cubicYardsOfCompost} cubic yards of compost
        </Text>
        <Text style={styles.textInputContainer2}>
          {outputs.cubicFtBagsCompost} cubic foot bags
        </Text>
      </View>
    </View>
  );
};

export default Outputs;
