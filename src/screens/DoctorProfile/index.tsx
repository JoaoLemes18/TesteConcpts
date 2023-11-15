import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors";

export default function DoctorProfile() {
  return (
    <View style={styles.container}>
      <Text>DoctorProfile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
