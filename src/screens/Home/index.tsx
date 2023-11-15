import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, FlatList } from "react-native";
import { colors } from "../../colors";
import pacientsList from "../../data";
import CustomCard from "../../components/Card";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}></View>
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
    backgroundColor: colors.themeColor,
    flex: 1,
  },
  containerList: {
    left: 29,
  },
  textHome: {
    margin: 20,
    fontSize: 18,
    color: colors.whiteColor,
    fontWeight: "600",
  },
  profileContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.whiteColor,
  },
  subText: {
    bottom: 16,
    marginLeft: 23,
    fontSize: 18,
    color: colors.subtextColor,
  },
});
