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
import LandingScreen from "../screens/LandingScreen";
import AddMembersScreen from "../screens/Trips/AddMembersScreen";
import AddTaskScreen from "../screens/Trips/AddTaskScreen";
import TripTimelineScreen from "../screens/Trips/TripTimelineScreen";

import QuizCoverScreen from "../screens/Quiz/QuizCoverScreen";
import QuizFormatScreen from "../screens/Quiz/QuizFormatScreen";
import TripListScreen from "../screens/TripListScreen";

const Stack = createStackNavigator();

export default function StackNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
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
          name="AddMember"
          component={AddMembersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripTimeline"
          component={TripTimelineScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizCoverScreen"
          component={QuizCoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizFormatScreen"
          component={QuizFormatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
