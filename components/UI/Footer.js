import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../utils/color";


export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Created by- Arya Nair</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        padding:10,
        backgroundColor:color.primary,
    },
    text:{
        textAlign:"center"
    }
})