import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function Login(props) {
  return (
    <View style={styles.container}>
      {/* <Text>That's new update 2</Text> */}
      <Text>Login Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
