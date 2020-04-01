import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from "react-native";
export default function TripCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: props.tripIcon,
            borderRadius: 25
          }}
        />
      </View>
      <View style={styles.middleSection}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          {props.tripName}
        </Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableHighlight style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#C0C0C0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
    // justifyContent: "center"
  },
  middleSection: {
    width: "50%",
    height: 60,
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  rightSection: {
    width: "25%",
    height: 60,
    // backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  leftSection: {
    width: "25%",
    height: 60,
    paddingLeft: 10,
    // backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  editButton: {
    margin: 10,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 35,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
