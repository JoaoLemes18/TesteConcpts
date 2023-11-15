import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, FlatList } from "react-native";
import { colors } from "../../colors";
import pacientsList from "../../data";
import CustomCard from "../../components/Card";
import DataCard from "../../components/DataCard";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Home() {
  const [fonteLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fonteLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}></View>
        </View>
        <Text style={styles.headerText}>November, 2023</Text>
        <DataCard />
      </View>
      <Text style={styles.textHome}>Good morning, Dr. Smith</Text>
      <Text style={styles.subText}>You have 8 patients today</Text>
      <View style={styles.containerList}>
        <FlatList
          keyExtractor={(item) => item.name}
          data={pacientsList}
          renderItem={({ item }) => <CustomCard {...item} />}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  headerText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
  },
  containerList: {
    marginHorizontal: 29,
  },
  textHome: {
    left: 20,
    bottom: 17,
    fontSize: 18,
    marginTop: 13,
    fontFamily: "Poppins_400Regular",
    color: colors.whiteColor,
    fontWeight: "600",
  },
  subText: {
    bottom: 16,
    marginBottom: 10,
    marginLeft: 23,
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: colors.subtextColor,
  },
  profileContainer: {},
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.whiteColor,
  },
});
