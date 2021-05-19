import React, { useState } from "react";
import { styles } from "../styles/styles";
import { Text, View, TouchableOpacity, Modal } from "react-native";

const DisplayProjectModal = ({
  id,
  inputs,
  setInputs,
  outputs,
  showDisplayModal,
  setShowDisplayModal,
  projectList,
  setProjectList,
}) => {
  const project = projectList.find((proj) => {
    return proj.id === id;
  });

  return (
    <Modal
      visible={showDisplayModal}
      transparent
      onRequestClose={() => setShowDisplayModal(false)}
      animationType="slide"
      hardwareAccelerated
    >
      <View style={styles.modalBackground2}>
        <View style={styles.modalContainer2}>
          <View style={styles.modalTitle2}>
            <Text style={styles.headerLabel}>
              {projectList.projectName} Details
            </Text>
            <Text style={styles.headerLabel}>ID:</Text>
          </View>

          <View style={styles.modalBody2}>
            <View style={styles.resultsContainer2}>
              <Text style={styles.label}>Total Mulch Needed for Project</Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer2}>lbs of mulch</Text>
                <Text style={styles.textOutputContainer2}>bags</Text>
              </View>
              <Text style={styles.label}>
                Total Tank Loads Needed for Project
              </Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer2}>bags per tank</Text>
                <Text style={styles.textOutputContainer2}>tank loads</Text>
                <Text style={styles.textOutputContainer2}>
                  gallons of water
                </Text>
                <Text style={styles.textOutputContainer2}>sq. ft./tank</Text>
              </View>
              <Text style={styles.label}>Total Compost Needed for Project</Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer2}>
                  cubic yards of compost
                </Text>
                <Text style={styles.textOutputContainer2}>cubic foot bags</Text>
              </View>
            </View>
          </View>

          <View style={styles.modalBtnContainer2}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.modalBtn2}
              android_ripple={{ color: "white" }}
            >
              <Text style={styles.headerLabel}>Share Project</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowDisplayModal(false)}
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
export default DisplayProjectModal;
