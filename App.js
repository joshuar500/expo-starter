import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AlternateScreen } from "./screens/AlternateScreen";
import { HomeStackScreen } from "./navigation/HomeStackScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Alternate" component={AlternateScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
