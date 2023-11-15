import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../colors";

export default function ButtonNew({ focused, size, color }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#9292e4" : "#b9b9e3" },
      ]}
    >
      <Entypo name="plus" color={focused ? "#fff" : "#ddd"} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accentColor,
    marginBottom: 20,
  },
});
