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

      <Text style={styles.headertext}>Plan a TripTogether</Text>


      <TouchableHighlight
        onPress={console.log("Button Pressed")}
        style={styles.button}
      >
      <TouchableHighlight
         onPress={loginButtonPressed()}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign In</Text>
      </TouchableHighlight>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#032224", fontWeight: "bold" }}>
          Don't have an Account?
        </Text>
      </View>
      <TouchableHighlight
         onPress={loginButtonPressed()}
        style={styles.buttonAlt}
      >
        <Text style={styles.buttonTextAlt}>Sign Up</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "#fff",
    fontSize: 35
  },container: {
    margin: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    margin: 10,
    height: 50,
    borderColor: "#032224",
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 20
  },
  button: {
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  buttonAlt: {
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#032224",
    borderWidth: 3,
    borderRadius: 25
  },
  buttonTextAlt: {
    color: "#032224",
    fontWeight: "bold"
  }
});
