import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import SideNav from "../navigation/SideNav";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        // backgroundColor: "red"
      }}
    >
      <Text>Home Screen</Text>
      {/* <SideNav /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "red"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
