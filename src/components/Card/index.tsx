import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../colors";
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

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={image} style={styles.patientImage} />

        <View style={styles.cardContent}>
          <View>
            <Text style={styles.nameText}>{name} </Text>
            <Text style={styles.ageText}> {age}y</Text>
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
    height: 145,
    borderRadius: 18,
    backgroundColor: colors.secondaryColor,
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
    borderWidth: 1,
    borderColor: colors.whiteColor,
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
    bottom: 68,
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: "bold",
  },
  ageText: {
    color: colors.subtextColor,
    bottom: 65,
    fontSize: 16,
    left: 75,
    fontWeight: "normal",
  },
  healthIssueText: {
    color: colors.subtextColor,
    bottom: 87,
    fontSize: 16,
    left: 108,
    fontStyle: "italic",
  },
  scheduleContainer: {
    marginBottom: 120,
  },
  scheduleText: {
    color: colors.subtextColor,
    fontSize: 14,
    bottom: 50,
  },
});

export default CustomCard;
