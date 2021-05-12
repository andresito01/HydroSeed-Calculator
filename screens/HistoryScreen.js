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

    const addProject = () => {
      const newID = userInputs.projectID;
      const newProjectName = userInputs.projectName;
      if (newID && newProjectName) {
        PROJECTS.push({
          id: PROJECTS[PROJECTS.length - 1].id + 1,
          id: newID,
          Name: newProjectName,
        });
      } else {
        Alert.alert("Error", "Fields Must Not Be Empty!");
      }
    };

    const deleteProject = (id) => {
      const project = PROJECTS.find((proj) => {
        return proj.id === id;
      });

      PROJECTS = PROJECTS.filter((proj) => {
        return proj.id !== project.id;
      });
    };

    return (
      <TouchableOpacity
        onLongPress={() => deleteProject(id)}
        onPress={() => handlePress(id)}
        style={styles.listItem}
      >
        <Text style={styles.listName}>{projectName}</Text>
        <Text style={styles.listID}>{projectID}</Text>
      </TouchableOpacity>
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
