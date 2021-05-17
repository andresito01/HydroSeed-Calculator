import React, { useState } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Inputs from "../components/Inputs";
import Outputs from "../components/Outputs";
import SaveProjectModal from "../components/SaveProjectModal";

const CalculatorScreen = ({
  inputs,
  setInputs,
  outputs,
  setOutputs,
  projectList,
  setProjectList,
}) => {
  const [showSaveModal, setShowSaveModal] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>HYDROSEED CALCULATOR</Text>
        </View>
        <SaveProjectModal
          inputs={inputs}
          setInputs={setInputs}
          outputs={outputs}
          showSaveModal={showSaveModal}
          setShowSaveModal={setShowSaveModal}
          projectList={projectList}
          setProjectList={setProjectList}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
            <View style={styles.inputsContainer}>
              <Inputs
                inputs={inputs}
                setInputs={setInputs}
                outputs={outputs}
                setOutputs={setOutputs}
                setShowSaveModal={setShowSaveModal}
              />
            </View>
            <View style={styles.header3}>
              <Text style={styles.headerLabel}>Calculation Results</Text>
            </View>
            <Outputs outputs={outputs} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CalculatorScreen;
