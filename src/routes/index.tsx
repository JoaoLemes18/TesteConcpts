import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import DoctorProfile from "../screens/DoctorProfile";
import { colors } from "../colors";
import New from "../screens/New";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",

          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: colors.secondaryColor,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            headerShown: false,

            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            tabBarLabel: "",

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{
            tabBarLabel: "",

            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="badge-account-horizontal-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabRoutes;
