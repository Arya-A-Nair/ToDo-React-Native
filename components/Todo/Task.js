import React from "react";
import { Button, Card } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utils/color";

export const Task = ({ task, deleteTask }) => {
  return (
    <Card style={styles.card} id={task.id}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>{task.task}</Text>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 20,
    height: 40,
    justifyContent: "center",
  },
  card: {
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: color.primary,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 25,
    flex: 0.8,
  },
});
