import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderComponentWithBackButton = props => {
  console.log("Header Component ++++++>");
  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableHighlight
          onPress={() => props.headerProps.navigation.goBack()}
        >
          {/* <Text>Open Menu</Text> */}
          <Ionicons name="md-arrow-back" size={32} color="#032224" />
        </TouchableHighlight>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.headerTitle}>{props.screenTitle}</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableHighlight
        // onPress={() => props.headerProps.navigation.toggleDrawer()}
        >
          {/* <Text>Open Menu</Text> */}
          <Ionicons name="ios-search" size={32} color="#032224" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
export const HeaderComponent = props => {
  console.log("Header Component ++++++>");
  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableHighlight
          onPress={() => props.headerProps.navigation.toggleDrawer()}
        >
          {/* <Text>Open Menu</Text> */}
          <Ionicons name="ios-menu" size={32} color="#032224" />
        </TouchableHighlight>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.headerTitle}>{props.screenTitle}</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableHighlight
        // onPress={() => props.headerProps.navigation.toggleDrawer()}
        >
          {/* <Text>Open Menu</Text> */}
          <Ionicons name="ios-search" size={32} color="#032224" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#f0f0f0",
    elevation: 2
    // justifyContent: "center"
  },
  middleSection: {
    width: "50%",
    height: 50,
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  rightSection: {
    width: "25%",
    height: 50,
    // backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  leftSection: {
    width: "25%",
    height: 50,
    // backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20
  }
});
