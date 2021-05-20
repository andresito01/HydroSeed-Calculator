import React, { useState } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import { addProject } from "./SavedProjectListMethods";

const SaveProjectModal = ({
  showSaveModal,
  setShowSaveModal,
  inputs,
  setInputs,
  outputs,
  projectList,
  setProjectList,
}) => {
  // Create Project Form Validation
  const [projectNameError, setProjectNameError] = useState("");
  const [projectIDError, setProjectIDError] = useState("");

  // First two digits of Project ID must contain one of the following, which are district numbers
  let districtNums = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  /*
  const checkIfInput = (name, id) => {
    // Check if Project Name and ID contains any user input if not return false
    if (!name) {
      setProjectNameError("Field is required");
    }
    if (!id) {
      setProjectIDError("Field is required");
    }

    if (!name || !id) {
      return false;
    }

    // return true if no error
    return true;
  };

  const checkNameCharLength = (name, error) => {
    // Check if user input has the valid amount of characters for a Project Name
    let projectNameLength = name.length;
    if (projectNameLength > 24) {
      error = "Name cannot surpass 24 characters";
    }
  };

  const checkIdFirstTwoDigits = (id) => {
    // Check if user input has the valid input being first two characters in the Project ID must contain any district number from the districtNums array
    let length = districtNums.length;
    while (length--) {
      if (id.substring(0, 1) === districtNums[length]) {
        break;
      } else {
        errors = "Project ID's first two digits must contain a district number";
      }
    }
    setProjectIDError(
      "Project ID's first two digits must contain a district number"
    );
    return false;
  };
  */
  let validate = () => {
    let projectName = inputs.projectName;
    let projectID = inputs.projectID;
    let projectNameErrors = "";
    let projectIDErrors = "";
    setProjectNameError("");
    setProjectIDError("");
    // check if any errors occur, if they do return false
    let projectNameLength = projectName;
    if (projectNameLength.length > 24) {
      projectNameErrors = "Name cannot surpass 24 characters";
    }

    let length = districtNums.length;
    let count = 0;
    while (length--) {
      if (projectID.substring(0, 2) === districtNums[length]) {
        count++;
      } else {
        projectIDErrors =
          "Project ID's first two digits must contain a district number";
      }
    }

    if (count > 0) {
      projectIDErrors = "";
    }

    if (!projectName) {
      projectNameErrors = "Field is required";
    }
    if (!projectID) {
      projectIDErrors = "Field is required";
    }

    if (projectNameErrors || projectIDErrors) {
      setProjectNameError(projectNameErrors);
      setProjectIDError(projectIDErrors);
      return false;
    }

    return true;
  };

  /*  if (
      !checkIfInput(projectName, projectID) ||
      !checkNameCharLength(projectName) ||
      !checkIdFirstTwoDigits(projectID)
    ) {
      return false;
    }

    // return true if there are no errors in user input
    return true; */

  return (
    <Modal
      visible={showSaveModal}
      transparent
      onRequestClose={() => setShowSaveModal(false)}
      animationType="slide"
      hardwareAccelerated
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.saveModalBackground}>
          <View style={styles.saveModalContainer}>
            <View style={styles.modalTitle}>
              <Text style={styles.headerLabel}>Create and Save Project</Text>
              <Text style={styles.label}>
                * Saved Projects Will Be Found In History *
              </Text>
            </View>
            <View style={styles.modalBody}>
              <View style={styles.forms}>
                <Text style={styles.modalLabel}>Project Name:</Text>
                <View style={styles.inForm2}>
                  <TextInput
                    name="projectName"
                    keyboardAppearance="dark"
                    keyboardType="default"
                    placeholder="Input Project Name"
                    placeholderTextColor="#787878"
                    style={styles.textInputContainer3}
                    value={inputs.projectName}
                    onChangeText={(val) =>
                      setInputs({ ...inputs, projectName: val })
                    }
                  />
                  <Text style={styles.errorMsg}>{projectNameError}</Text>
                </View>
              </View>
              <View style={styles.forms}>
                <Text style={styles.modalLabel}>Project ID:</Text>
                <View style={styles.inForm2}>
                  <TextInput
                    name="projectID"
                    keyboardAppearance="dark"
                    keyboardType="default"
                    placeholder="##-******"
                    placeholderTextColor="#787878"
                    style={styles.textInputContainer3}
                    value={inputs.projectID}
                    onChangeText={(val) =>
                      setInputs({ ...inputs, projectID: val })
                    }
                  />
                  <Text style={styles.errorMsg}>{projectIDError}</Text>
                </View>
              </View>
            </View>

            <View style={styles.modalBtnContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (validate()) {
                    addProject(
                      inputs,
                      setInputs,
                      outputs,
                      projectList,
                      setProjectList
                    );
                    setShowSaveModal(false);
                    setInputs({ ...inputs, projectName: "", projectID: "" });
                  }
                }}
                style={styles.modalSaveBtn}
                android_ripple={{ color: "white" }}
              >
                <Text style={styles.headerLabel}>Save Project</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowSaveModal(false);
                  setInputs({ ...inputs, projectName: "", projectID: "" });
                  setProjectNameError("");
                  setProjectIDError("");
                }}
                style={styles.modalCloseBtn}
                android_ripple={{ color: "white" }}
              >
                <Text style={styles.headerLabel}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SaveProjectModal;
