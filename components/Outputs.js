import React from "react";
import { styles } from "../styles/styles";
import { Text, View } from "react-native";

const Outputs = ({ userInputs, outputs }) => {
  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.label}>Total Mulch Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>lbs of mulch</Text>

        <Text style={styles.textInputContainer2}>bags</Text>
      </View>
      <Text style={styles.label}>Total Tank Loads Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>bags per tank</Text>
        <Text style={styles.textInputContainer2}>tank loads</Text>
        <Text style={styles.textInputContainer3}>sq. ft./tank </Text>
      </View>
      <Text style={styles.label}>Total Compost Needed for Project</Text>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textInputContainer2}>cubic yards of compost</Text>
        <Text style={styles.textInputContainer2}>cubic foot bags</Text>
      </View>
    </View>
  );
};

export default Outputs;
