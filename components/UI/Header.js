import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {color} from "../../utils/color";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
  text: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
});
