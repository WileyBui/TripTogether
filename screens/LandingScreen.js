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



      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(true)}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign In</Text>
      </TouchableHighlight>

      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(false)}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign Up</Text>
      </TouchableHighlight>

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
