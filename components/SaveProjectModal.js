import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";
import { addProject } from "./SavedProjectListMethods";
import { Alert } from "react-native";

const SaveProjectModal = ({
  inputs,
  setInputs,
  outputs,
  showSaveModal,
  setShowSaveModal,
  projectList,
  setProjectList,
}) => {
  return (
    <Modal
      visible={showSaveModal}
      transparent
      onRequestClose={() => setShowSaveModal(false)}
      animationType="slide"
      hardwareAccelerated
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.headerLabel}>Create and Save Project</Text>
            <Text style={styles.label}>
              * Saved Projects Will Be Found In History *
            </Text>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.forms}>
              <Text style={{ color: "black", fontSize: 20 }}>
                Project Name:
              </Text>
              <View style={styles.inForm}>
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
              </View>
            </View>
            <View style={styles.forms}>
              <Text style={{ color: "black", fontSize: 20 }}>Project ID:</Text>
              <View style={styles.inForm}>
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
              </View>
            </View>
          </View>

          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={() => {
                if (inputs.projectName && inputs.projectID) {
                  addProject(
                    inputs,
                    setInputs,
                    outputs,
                    projectList,
                    setProjectList
                  );
                  setShowSaveModal(false);
                  setInputs({ ...inputs, projectName: "", projectID: "" });
                } else {
                  Alert.alert(
                    `Error:`,
                    `Fields for project name and id must be filled in order to save project.`
                  );
                }
              }}
              style={styles.modalBtn1}
              android_ripple={{ color: "white" }}
            >
              <Text style={styles.headerLabel}>Save Project</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowSaveModal(false);
                setInputs({ ...inputs, projectName: "", projectID: "" });
              }}
              style={styles.modalBtn2}
              android_ripple={{ color: "white" }}
            >
              <Text style={styles.headerLabel}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SaveProjectModal;
