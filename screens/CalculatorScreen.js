import React, { useState, useRef } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Modal,
} from "react-native";
//import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";
import Outputs from "../components/Outputs";
import { Input } from "react-native-elements/dist/input/Input";
import { Pressable } from "react-native";

const CalculatorScreen = ({
  userInputs,
  updateInputs,
  outputs,
  setOutputs,
  reset,
  calculate,
}) => {
  // Scroll down to outputs when calculate button is pressed
  const scrollView = useRef();
  const scrollToBottom = () => {
    scrollView.current.scrollToBottom();
  };

  const [showModal, setShowModal] = useState(false);

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

        <Modal
          visible={showModal}
          transparent
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          hardwareAccelerated
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTitle}>
                <Text style={styles.headerLabel}>Create and Save Project</Text>
              </View>
              <View style={styles.modalBody}>
                <View style={styles.forms}>
                  <Text style={{ color: "black", fontSize: 20 }}>
                    Project Name:
                  </Text>
                  <View style={styles.inForm}>
                    <TextInput
                      name="projectId"
                      keyboardAppearance="dark"
                      keyboardType="default"
                      placeholder="Input Project Name"
                      placeholderTextColor="#787878"
                      style={styles.textInputContainer3}
                    />
                  </View>
                </View>
                <View style={styles.forms}>
                  <Text style={{ color: "black", fontSize: 20 }}>
                    Project ID:
                  </Text>
                  <View style={styles.inForm}>
                    <TextInput
                      name="projectId"
                      keyboardAppearance="dark"
                      keyboardType="default"
                      placeholder="##-******"
                      placeholderTextColor="#787878"
                      style={styles.textInputContainer3}
                    />
                  </View>
                </View>
              </View>
              <Pressable
                onPress={() => setShowModal(false)}
                style={styles.modalSaveBtn}
                android_ripple={{ color: "white" }}
              >
                <Text style={styles.headerLabel}>
                  Click To Save Project In History
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
            <View style={styles.inputsContainer}>
              <Inputs
                userInputs={userInputs}
                updateInputs={updateInputs}
                outputs={outputs}
                setOutputs={setOutputs}
                reset={reset}
                calculate={calculate}
                scrollToBottom={scrollToBottom}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </View>
            <View style={styles.header3}>
              <Text style={styles.headerLabel}>Calculation Results</Text>
            </View>
            <Outputs
              userInputs={userInputs}
              outputs={outputs}
              setOutputs={setOutputs}
              calculate={calculate}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CalculatorScreen;
