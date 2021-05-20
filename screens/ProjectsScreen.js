import React, { useRef } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { ListItem } from "../components/ListItem";
import { Transition, Transitioning } from "react-native-reanimated";
const ProjectScreen = ({ projectList, setProjectList }) => {
  const transitionRef = useRef();
  const transition = <Transition.Change interpolation="easeInOut" />;

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onPress={onPress}
      id={item.id}
      projectList={projectList}
      setProjectList={setProjectList}
    />
  );

  //console.log(projectList); * This flatlist is rerendering on every interaction throughout the app which is very bad for performance
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.projectScreenHeader}>
        <Text style={styles.headerLabel}>Saved Projects</Text>
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listDateLabel}>Date Created:</Text>
        <Text style={styles.listNameLabel}>Project Name:</Text>
        <Text style={styles.listIDLabel}>Project ID:</Text>
      </View>
      <Transitioning.View
        ref={transitionRef}
        transition={transition}
        style={{ flex: 1 }}
      >
        <FlatList
          style={{ paddingBottom: 0 }}
          data={projectList}
          ListEmptyComponent={() => {
            return (
              <Text style={styles.noSavedProjectsLabel}>
                CURRENTLY NO SAVED PROJECTS
              </Text>
            );
          }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Transitioning.View>
    </SafeAreaView>
  );
};
export default ProjectScreen;
