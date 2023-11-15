import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>Good morning, Dr.Smith</Text>
      <Text style={styles.subText}>You have 8 patients today</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeColor,
    flex: 1,
  },
  textHome: {
    margin: 100,
    right: 80,
    fontSize: 18,
    color: colors.whiteColor,
    fontWeight: "600",
  },
  subText: {
    bottom: 100,
    left: 23,
    fontSize: 18,
    color: colors.subtextColor,
  },
});
