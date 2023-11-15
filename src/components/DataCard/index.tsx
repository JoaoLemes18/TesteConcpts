import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const currentDate = new Date();
const currentDay = currentDate.getDate();

const GradientCard = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <LinearGradient
        colors={[
          "rgba(214,100,202,1)",
          "rgba(210,109,215,1)",
          "rgba(212,185,227,1)",
        ]}
        style={{
          borderRadius: 50,
          width: 55,
          height: 55,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          {currentDay}
        </Text>
      </LinearGradient>
      <View
        style={{
          marginTop: 8,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 50,
          padding: 5,
        }}
      >
        <Text style={{ color: "#000" }}>
          {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            currentDate
          )}
        </Text>
      </View>
    </View>
  );
};

export default GradientCard;
