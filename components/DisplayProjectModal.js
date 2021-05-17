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
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer2}>
          <View style={styles.modalTitle}>
            <Text style={styles.headerLabel}>
              {project.projectName} Details
            </Text>
            <Text style={styles.headerLabel}>{project.projectID}</Text>
          </View>

          <View style={styles.modalBody}>
            <View style={styles.resultsContainer}>
              <Text style={styles.label}>Total Mulch Needed for Project</Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer}>
                  {project.lbsOfMulch} lbs of mulch
                </Text>

                <Text style={styles.textOutputContainer}>
                  {project.bagsOfMulch} bags
                </Text>
              </View>
              <Text style={styles.label}>
                Total Tank Loads Needed for Project
              </Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer}>
                  {project.bagsPerTank} bags per tank
                </Text>
                <Text style={styles.textOutputContainer}>
                  {project.tankLoads} tank loads
                </Text>
                <Text style={styles.textOutputContainer}>
                  {project.gallonsOfWater} gallons of water
                </Text>
                <Text style={styles.textOutputContainer}>
                  {project.sqftPerTank} sq. ft./tank
                </Text>
              </View>
              <Text style={styles.label}>Total Compost Needed for Project</Text>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textOutputContainer}>
                  {project.cubicYardsOfCompost} cubic yards of compost
                </Text>
                <Text style={styles.textOutputContainer}>
                  {project.cubicFtBagsCompost} cubic foot bags
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.modalBtn1}
              android_ripple={{ color: "white" }}
            >
              <Text style={styles.headerLabel}>Share Project</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setShowDisplayModal(false);
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
export default DisplayProjectModal;
