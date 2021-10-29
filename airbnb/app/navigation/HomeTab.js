import React from "react";

//import navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripStack from "./TripStack";
import HostStack from "./HostStack";
import AccountStack from "./AccountStack";

//import screens
import Home from "../screens/Home";
import MessageStack from "../navigation/MessageStack";

//import styles and assets
import { EvilIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="search"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Travel"
      component={TripStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="host"
      component={HostStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="chart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="message"
      component={MessageStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="comment" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="profile"
      component={AccountStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeTab;
