import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../colors";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

interface CustomCardProps {
  name: string;
  age: number;
  healthIssue: string;
  image: string;
  schedule: {
    startTime: string;
    endTime: string;
  };
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  age,
  healthIssue,
  image,
  schedule,
}) => {
  const [isChecked, setChecked] = useState(false);
  const [fonteLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fonteLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.scheduleText}>
        {schedule.startTime} - {schedule.endTime}
      </Text>

      <View style={styles.card}>
        <Image source={image} style={styles.patientImage} />

        <View style={styles.cardContent}>
          <View>
            <Text style={styles.nameText}>{name} </Text>
            <Text style={styles.ageText}> {age}y </Text>
          </View>
          <Text style={styles.healthIssueText}>{healthIssue}</Text>
        </View>

        <TouchableOpacity
          style={[styles.checkbox, isChecked && styles.checked]}
          onPress={() => setChecked(!isChecked)}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginBottom: 10,
  },
  card: {
    width: 325,
    height: 105,
    borderRadius: 18,
    backgroundColor: colors.themeColor,
    overflow: "hidden",
    position: "relative",
  },
  patientImage: {
    width: 60,
    height: 60,
    top: 10,
    left: 5,
  },
  checkbox: {
    position: "absolute",
    top: 18,
    right: 24,
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: "#383434",
  },
  checked: {
    backgroundColor: colors.checkboxColor,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  nameText: {
    left: 75,
    bottom: 60,
    fontFamily: "Poppins_400Regular",
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: "700",
  },
  ageText: {
    color: colors.subtextColor,
    bottom: 58,
    fontFamily: "Poppins_400Regular",

    fontSize: 16,
    left: 75,
    fontWeight: "normal",
  },
  healthIssueText: {
    color: colors.subtextColor,
    bottom: 83,
    fontSize: 16,
    left: 120,
    fontFamily: "Poppins_400Regular",
  },

  scheduleText: {
    color: colors.whiteColor,
    fontSize: 14,
    marginRight: 10,
    marginBottom: 5,
  },
});

export default CustomCard;
