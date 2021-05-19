import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  FlatList,
  TextInput,
} from "react-native";
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import { render } from "react-dom";
import {
  displayProjectDetails,
  deleteProject,
} from "../components/SavedProjectListMethods";
import DisplayProjectModal from "../components/DisplayProjectModal";
const ProjectScreen = ({
  projectList,
  setProjectList,
  inputs,
  setInputs,
  outputs,
}) => {
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const Item = ({ id, projectID, projectName, projectDate }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          displayProjectDetails(
            id,
            projectList,
            showDisplayModal,
            setShowDisplayModal
          )
        }
        onLongPress={() => deleteProject(id, projectList, setProjectList)}
        style={styles.listItem}
      >
        <Text style={styles.listDate}>{projectDate}</Text>
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
      projectDate={item.projectDate}
    />
  );

  //console.log(projectList); * This flatlist is rerendering on every interaction throughout the app which is very bad for performance
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginRight: 5,
        marginLeft: 5,
      }}
    >
      <View style={styles.projectScreenHeader}>
        <Text style={styles.headerLabel}>Saved Projects</Text>
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listDateLabel}>Date Created:</Text>
        <Text style={styles.listNameLabel}>Project Name:</Text>
        <Text style={styles.listIDLabel}>Project ID:</Text>
      </View>
      {/* <DisplayProjectModal
        id={id}
        showDisplayModal={showDisplayModal}
        setShowDisplayModal={setShowDisplayModal}
        projectList={projectList}
      /> */}
      <FlatList
        data={projectList}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontFamily: "Kohinoor Telugu",
                padding: 3,
                textAlign: "center",
                marginTop: "50%",
              }}
            >
              CURRENTLY NO SAVED PROJECTS
            </Text>
          );
        }}
        //extraData={projectList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
export default ProjectScreen;
