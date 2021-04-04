import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
  },
  Header: {
    height: 50,
    paddingTop: 30,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default HistoryScreen;
