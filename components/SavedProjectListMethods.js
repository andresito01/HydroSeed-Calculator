import React from "react";
import { Text } from "react-native";
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
import DisplayProjectModal from "./DisplayProjectModal";

export const displayProjectDetails = ({
  id,
  projectList,
  showDisplayModal,
  setShowDisplayModal,
}) => {
  const project = projectList.find((proj) => {
    return proj.id === id;
  });
  //setShowDisplayModal(true);

  Alert.alert(
    `${project.projectName} Details`,
    `ID: ${project.projectID}`,
    `Date Created: ${project.projectDate}`,
    `Date Created: ${project.projectDate}`
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
  var projectDateCreated = new Date(),
    date = projectDateCreated.toLocaleDateString();
  setProjectList([
    ...projectList,
    {
      id: projectList.length + 1,
      projectName: inputs.projectName,
      projectID: inputs.projectID,
      projectDate: date,
      lbsOfMulch: outputs.lbsOfMulch,
      bagsOfMulch: outputs.bagsOfMulch,
      bagsPerTank: outputs.bagsPerTank,
      tankLoads: outputs.tankLoads,
      gallonsOfWater: outputs.gallonsOfWater,
      sqftPerTank: outputs.sqftPerTank,
      cubicYardsOfCompost: outputs.cubicYardsOfCompost,
      cubicFtBagsCompost: outputs.cubicFtBagsCompost,
    },
  ]);
};
