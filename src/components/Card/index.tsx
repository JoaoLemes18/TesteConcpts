import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Day {
  id: string;
  name: string;
}

const daysOfWeek: Day[] = [
  { id: "1", name: "Sunday" },
  { id: "2", name: "Monday" },
  { id: "3", name: "Tuesday" },
  { id: "4", name: "Wednesday" },
  { id: "5", name: "Thursday" },
  { id: "6", name: "Friday" },
  { id: "7", name: "Saturday" },
];

interface DayCardProps {
  day: Day;
  onPress: (id: string) => void;
  isSelected: boolean;
}

const DayCard: React.FC<DayCardProps> = ({ day, onPress, isSelected }) => (
  <TouchableOpacity onPress={() => onPress(day.id)}>
    <View
      style={[
        styles.dayContainer,
        { backgroundColor: isSelected ? "#9292e4" : "transparent" },
      ]}
    >
      <Text style={styles.dayNumber}>{day.id}</Text>
      <Text style={styles.dayName}>{day.name}</Text>
    </View>
  </TouchableOpacity>
);

const FlatListDays: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const handleDayPress = (id: string) => {
    setSelectedNumber(id);
  };

  return (
    <FlatList
      data={daysOfWeek}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <DayCard
          day={item}
          onPress={handleDayPress}
          isSelected={selectedNumber === item.id}
        />
      )}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    margin: 5,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dayName: {
    fontSize: 14,
  },
});

export default DayCard;
