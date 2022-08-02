import React, { createContext,useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Todo } from "./components/Todo/Todo";
import { Header } from "./components/UI/Header";
import { Footer } from "./components/UI/Footer";

export default function App() {
  return (
      <View style={styles.container}>
        <Header></Header>
        <Todo></Todo>
        <Footer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
