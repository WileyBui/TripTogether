import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { HeaderComponent } from "../components/ScreenHeader";
export default function LandingScreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle="Add Member" />

      <Text style={styles.header}>Plan a TripTogether</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center"
  }
});
