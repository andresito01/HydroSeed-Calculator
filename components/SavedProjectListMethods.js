import React from "react";
import { Text } from "react-native";
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";

export const displayProjectDetails = (id, projectList) => {
  const project = projectList.find((proj) => {
    return proj.id === id;
  });

  Alert.alert(
    `${project.projectName} Details`,
    `Project ID: ${project.projectID}`
  );
};

export const deleteProject = (id, projectList, setProjectList) => {
  const project = projectList.find((proj) => {
    return proj.id === id;
  });

  setProjectList(
    projectList.filter((proj) => {
      if (proj.id >= project.id) {
        proj.id--;
      }
      return proj.id !== project.id;
    })
  );
};

export const addProject = (
  inputs,
  setInputs,
  outputs,
  projectList,
  setProjectList
) => {
  setProjectList([
    ...projectList,
    {
      id: projectList.length + 1,
      projectName: inputs.projectName,
      projectID: inputs.projectID,
    },
  ]);
  setInputs({ ...inputs, projectName: "", projectID: "" });
};
