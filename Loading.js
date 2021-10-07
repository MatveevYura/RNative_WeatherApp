import React from "react";
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return <View style={styles.container}>
    <Text style={styles.text}>Получение погоды...</Text>
    <StatusBar barStyle="dark-content" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  }
})