import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AuthScreen from "../screens/AuthScreen";
import QuizOverviewScreen from "../screens/Quiz/QuizOverviewScreen";
import NewTripScreen from "../screens/Trips/NewTripScreen";

import QuizCoverScreen from "../screens/Quiz/QuizCoverScreen";
import TripListScreen from "../screens/TripListScreen";

const Stack = createStackNavigator();

export default function StackNav(props) {
  return (
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
        <Stack.Screen
          name="Quiz"
          component={QuizOverviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewTrips"
          component={NewTripScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizCoverScreen"
          component={QuizCoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripListScreen"
          component={TripListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}