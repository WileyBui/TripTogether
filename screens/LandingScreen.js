import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";
import { HeaderComponent } from "../components/ScreenHeader";

export default function LandingScreen(props) {
  return (

    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle="Add Member" />

      <View style={styles.logoContainer}>
        <Image style={styles.logo}source={require('../assets/logo.png')}></Image>
      </View>

      <View style={styles.tagline}>
        <Text style={styles.taglineText}>
          Set Roles, Budgets, and Tasks
        </Text>
      </View>



      <View style={styles.prompt}>
        <Text style={styles.promptText}>
          Plan a TripTogether
        </Text>
      </View>



      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableHighlight>
      <View style={{ alignItems: "center"}}>
        <Text style={{ color: "#032224", fontWeight: "bold" }}>
          Don't have an Account?
        </Text>
      </View>
      <TouchableHighlight
        // onPress={loginButtonPressed()}
        onPress={() => props.setShowLogin(false)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 200
  },

  logo: {
    width: 300,
    resizeMode: "contain",
  },
  tagline: {
    height: 75,
    backgroundColor: "#032224",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,

  },
  prompt: {
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0
  },
  promptText: {
    fontSize:20,
  },
  taglineText: {
    color: "#fff",
    fontSize: 25,
    fontStyle: "italic",
  },
  container: {
    marginTop: 20,
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
    marginTop: 10,
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
