import React, { useState, useRef } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
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
  const [unit, setUnit] = useState("sq. ft");
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.calculatorScreenHeader}>
          <Text style={styles.headerLabel}>HYDROSEED CALCULATOR</Text>
          <View style={styles.appDescriptionContainer}>
            <Text style={styles.label}>
              Cal Trans Sponsored Hydroseed Calculator
            </Text>
          </View>
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
                unit={unit}
                setUnit={setUnit}
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
