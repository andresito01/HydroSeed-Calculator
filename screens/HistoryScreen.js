import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  FlatList,
} from "react-native";
import { styles } from "../styles/styles";
import Outputs from "../components/Outputs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import Swipeout from "react-native-swipeout";

const HistoryScreen = ({ outputs, userInputs }) => {
  let PROJECTS = [
    {
      id: 1,
      projectID: 1,
      projectName: "project1",
    },
    {
      id: 2,
      projectID: 2,
      projectName: "project2",
    },
  ];

  const Item = ({ id, projectID, projectName }) => {
    const handlePress = (id) => {
      const project = PROJECTS.find((proj) => {
        return proj.id === id;
      });

      Alert.alert(
        "Project Details",
        `Project : ${project.projectName} \n Project ID: ${project.projectID}`
      );
    };

    const deleteProject = (id) => {
      const project = PROJECTS.find((proj) => {
        return proj.id === id;
      });

      PROJECTS = PROJECTS.filter((proj) => {
        return proj.id !== project.id;
      });
    };
    /*
    const activeRowKey = null;

    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {},
      onOpen: (secId, rowId, direction) => {},
      right: [
        {
          onPress: () => {},
          text: "Delete",
          type: "delete",
        },
      ],
      rowId: index,
      sectionId: 1,
    };
*/
    return (
      <Swipeout {...swipeSettings}>
        <TouchableOpacity
          onLongPress={() => deleteProject(id)}
          onPress={() => handlePress(id)}
          style={styles.listItem}
        >
          <Text style={styles.listName}>{projectName}</Text>
          <Text style={styles.listID}>{projectID}</Text>
        </TouchableOpacity>
      </Swipeout>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      projectID={item.projectID}
      projectName={item.projectName}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.historyHeader}>
        <Text style={styles.headerLabel}>Calculation History</Text>
      </View>
      <FlatList
        data={PROJECTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;
