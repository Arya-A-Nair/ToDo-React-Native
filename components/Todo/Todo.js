import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Button, Card } from "react-native-paper";
import { color } from "../../utils/color";

import { Task as TaskCard } from "./Task";

export const Todo = () => {
  const [Tasks, setTasks] = useState([]);
  const [newtask, setnewTask] = useState("");

  const addTask = () => {
    setTasks([...Tasks, { task: newtask, id: Tasks.length + 1 }]);
    setnewTask("");
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_2}>
        <TextInput
          style={styles.input}
          value={newtask}
          onChangeText={setnewTask}
        />
        <Button
          mode="contained"
          buttonColor={color.secondary}
          style={styles.button1}
          onPress={addTask}
        >
          Add
        </Button>
      </View>
      <ScrollView>
        {Tasks.map((task) => {
          
          return <TaskCard task={task} deleteTask={deleteTask} id={task.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
  },
  container_2: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  button1: {
    flex: 0.2,
    marginVertical: 20,
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  card: {
    marginHorizontal: 30,
    flexDirection: "row",
    backgroundColor: color.primary,
  },
});
