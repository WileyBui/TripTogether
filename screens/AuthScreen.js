import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function AuthScreen(props) {
  console.log(">>>>>>>>>>>>");

  console.log(props.navigation);

  return (
    <View style={styles.container}>
      <Text>Auth Screen:</Text>
      <Login />
      <SignUp />
      <Button title="Login" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
