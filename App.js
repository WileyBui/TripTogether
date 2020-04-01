import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import AuthScreen from "./screens/AuthScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import SideNav from "./navigation/SideNav";
// import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function App() {
  return (
    // <View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
