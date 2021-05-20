import React from "react";
import { styles } from "../styles/styles";
import { Text, View } from "react-native";

const Outputs = ({ outputs }) => {
  return (
    <View style={styles.resultsContainer}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.label}>Total Mulch Needed for Project</Text>
        <Text style={styles.textOutputContainer}>
          {outputs.lbsOfMulch} lbs of mulch
        </Text>
        <Text style={styles.textOutputContainer}>
          {outputs.bagsOfMulch} bags
        </Text>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={styles.label}>Total Tank Loads Needed for Project</Text>
        <Text style={styles.textOutputContainer}>
          {outputs.bagsPerTank} bags per tank
        </Text>
        <Text style={styles.textOutputContainer}>
          {outputs.tankLoads} tank loads
        </Text>
        <Text style={styles.textOutputContainer}>
          {outputs.gallonsOfWater} gallons of water
        </Text>
        {/* <Text style={styles.textOutputContainer}>
          {outputs.sqftPerTank} sq. ft./tank{" "}
        </Text> */}
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={styles.label}>Total Compost Needed for Project</Text>
        <Text style={styles.textOutputContainer}>
          {outputs.cubicYardsOfCompost} cubic yards of compost or
        </Text>
        <Text style={styles.textOutputContainer}>
          {outputs.cubicFtBagsCompost} cubic foot bags
        </Text>
      </View>
    </View>
  );
};

export default Outputs;
