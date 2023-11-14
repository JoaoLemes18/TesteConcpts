import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";

import DoctorProfile from "../screens/DoctorProfile";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabRoutes;
