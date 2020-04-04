import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TextInput
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
import { Ionicons } from "@expo/vector-icons";

export default function AddMembersSreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Add Member"
      />

      <View
        style={{
          flexDirection: "row",
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 30,
          paddingTop: 15
        }}
      >
        <View style={styles.leftComponent}>
          <Text>
            <Ionicons name="ios-search" size={20} color="#818181" />
          </Text>
        </View>
        <View style={styles.rightComponent}>
          {/* <Text>Search for Member</Text> */}
          <TextInput
            style={styles.searchBarInput}
            placeholder="Search User"
            placeholderTextColor="#818181"
            secureTextEntry={false}
          />
        </View>
      </View>

      <Text style={styles.font}>Or</Text>
      <TextInput
        style={styles.input}
        placeholder="Name:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Role:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone:"
        placeholderTextColor="#818181"
        secureTextEntry={false}
      />
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Send Invitation</Text>
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
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  font: {
    color: "#032224",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 10,
    height: 50,
    width: 320,
    borderColor: "#B5B3B3",
    borderWidth: 1.5,
    borderRadius: 0,
    paddingLeft: 20
  },
  searchBarInput: {
    borderColor: "#B5B3B3",
    // borderWidth: 1.5,
    borderRadius: 0,
    borderWidth: 0
    // paddingLeft: 20
  },
  leftComponent: {
    // backgroundColor: "red",
    width: "10%",
    // paddingBottom: 5,
    // paddingLeft: 10,
    borderBottomColor: "#B5B3B3",
    borderBottomWidth: 1.5
    // alignItems: "center"
  },
  rightComponent: {
    // backgroundColor: "blue",
    width: "90%",
    borderBottomColor: "#B5B3B3",
    borderBottomWidth: 1.5
  }
});
