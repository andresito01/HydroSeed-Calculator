import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TouchableOpacity } from "react-native";
import { deleteProject } from "../components/SavedProjectListMethods";
export const ListItem = ({
  item,
  onPress,
  id,
  projectList,
  setProjectList,
}) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    onPress();
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      onPress={onItemPress}
      onLongPress={() => deleteProject(id, projectList, setProjectList)}
      style={{ flexDirection: "column" }}
      activeOpacity={0.85}
    >
      <View style={styles.listItem}>
        <Text style={styles.listDate}>{item.projectDate}</Text>
        <Text style={styles.listName}>{item.projectName}</Text>
        <Text style={styles.listID}>{item.projectID}</Text>
      </View>

      {expanded && (
        <View style={styles.resultsContainer2}>
          <Text style={styles.label}>Total Mulch Needed for Project</Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textOutputContainer2}>
              {item.lbsOfMulch} lbs of mulch
            </Text>
            <Text style={styles.textOutputContainer2}>
              {item.bagsPerTank} bags
            </Text>
          </View>
          <Text style={styles.label}>Total Tank Loads Needed for Project</Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textOutputContainer2}>
              {item.bagsPerTank} bags per tank
            </Text>
            <Text style={styles.textOutputContainer2}>
              {item.tankLoads} tank loads
            </Text>
            <Text style={styles.textOutputContainer2}>
              {item.gallonsOfWater} gallons of water
            </Text>
            {/* <Text style={styles.textOutputContainer2}>
              {item.sqftPerTank} sq. ft./tank
            </Text> */}
          </View>
          <Text style={styles.label}>Total Compost Needed for Project</Text>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textOutputContainer2}>
              {item.cubicYardsOfCompost} cubic yards of compost
            </Text>
            <Text style={styles.textOutputContainer2}>
              {item.cubicFtBagsCompost} cubic foot bags
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
