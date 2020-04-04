import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";

export default function CurrentTripScreen(props) {
  console.log("NEW TRIP >>>>>>>>>>");
  console.log(props);

  // const imageList = Object.values(props.route.params.members);
  return (
    <View style={styles.screenContainer}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle={
          props.route.params.name ? props.route.params.name : "Untitled"
        }
      />
      <ScrollView>
        {/* Members */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Add Members</Text>
          <View style={styles.messageAndAddRow}>
            <View style={[styles.leftColumn, { flexDirection: "row" }]}>
              {props.route.params.members ? (
                Object.values(props.route.params.members).map(imageURL => (
                  <Image
                    style={styles.memberImage}
                    source={{
                      uri: imageURL
                    }}
                  />
                ))
              ) : (
                <Text>No members yet</Text>
              )}
            </View>
            <View style={styles.rightColumn}>
              <TouchableOpacity style={styles.addTouchableOpacity}>
                <Text style={styles.addButton}>+Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Tasks</Text>
          <View style={styles.messageAndAddRow}>
            <View style={styles.leftColumn}>
              {props.route.params.tasks ? (
                props.route.params.tasks.map(tasks => (
                  <View style={{ flexDirection: "row" }}>
                    <Text>
                      {tasks.taskName + " "} Due: {tasks.taskDate}{" "}
                    </Text>
                    <MaterialIcons
                      name={
                        tasks.isDone ? "check-box" : "check-box-outline-blank"
                      }
                      size={16}
                      color="#003300"
                    />
                  </View>
                ))
              ) : (
                <Text>No tasks yet</Text>
              )}
            </View>
            <View style={styles.rightColumn}>
              <TouchableOpacity style={styles.addTouchableOpacity}>
                <Text style={styles.addButton}>+Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Progress</Text>
          <Text style={styles.message}>
            No progresses made yet / to be written
          </Text>
        </View>

        {/* Schedule */}
        <View style={styles.container}>
          <Text style={styles.boldHeader}>Schedule</Text>
          <View style={styles.messageAndAddRow}>
            <View style={styles.leftColumn}>
              <Text>Monday:</Text>
              <Text>Tuesday:</Text>
              <Text>Wednesday:</Text>
              <Text>Thursday:</Text>
              <Text>Friday:</Text>
              <Text>Saturday:</Text>
              <Text>Sunday:</Text>
            </View>
            <View style={styles.rightColumn}>
              <TouchableOpacity style={styles.expandTouchableOpacity}>
                <Text style={styles.addButton}>Expand Schedule</Text>
                {/* <Ionicons name="ios-expand" size={16} color="#fff" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center"
  },
  container: {
    marginTop: 15,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 15,
    paddingTop: 20,
    paddingLeft: 20
  },

  boldHeader: {
    fontWeight: "bold"
  },

  messageAndAddRow: {
    flex: 1,
    flexDirection: "row"
    // alignItems: "center",
    // justifyContent: "center"
  },

  rightColumn: {
    // backgroundColor: "red",
    width: "30%",
    marginTop: 20
  },
  leftColumn: {
    // backgroundColor: "blue",
    width: "70%",
    marginTop: 20
    // flexDirection: "row"
  },

  message: {
    // flex: 13,
    // flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10
  },

  addTouchableOpacity: {
    // flex: 3,
    backgroundColor: "#032224",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    borderRadius: 50
    // paddingVertical: 5,
    // paddingHorizontal: 0
  },

  addButton: {
    color: "white",
    textAlign: "center"
  },

  squareButton: {
    width: 80,
    height: 80,
    marginVertical: 2,
    marginHorizontal: 5,
    backgroundColor: "#032224",
    alignItems: "center",
    justifyContent: "center"
  },

  expandTouchableOpacity: {
    width: "80%",
    height: 90,
    backgroundColor: "#032224",
    marginHorizontal: 15,
    paddingVertical: 28,
    paddingHorizontal: 0
  },

  memberImage: {
    // flex: 1,
    height: 40,
    width: 40,

    borderRadius: 20,

    marginHorizontal: 5
  }
});
