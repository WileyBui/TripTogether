import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { HeaderComponent } from "../../components/ScreenHeader";
export default function AddMembersSreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle="Add Member" />
      <TextInput
      style={styles.input5}
      placeholder="Search your member"
      placeholderTextColor="#032224"
      />
      <Text style={styles.font}>or</Text>
      <TextInput
      style={styles.input}
      placeholder="Name:"
      placeholderTextColor="#032224"
      secureTextEntry={false}
      />
      <TextInput
      style={styles.input}
      placeholder="Role:"
      placeholderTextColor="#032224"
      secureTextEntry={false}
      />
       <TextInput
      style={styles.input}
      placeholder="Email:"
      placeholderTextColor="#032224"
      secureTextEntry={false}
      />
       <TextInput
      style={styles.input}
      placeholder="Phone:"
      placeholderTextColor="#032224"
      secureTextEntry={false}
      />
      <TouchableHighlight
        style={styles.button}
      >
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
    margin: 10,
    position: 'absolute',
    bottom : 0,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 0
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  font:{
    color:'#032224',
    fontSize:40,
    fontWeight:'bold',
    textShadowColor:'#C0C0C0',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
  },
  input5:{    
    margin: 15,
    height: 50,
    width: 280,
    borderBottomColor: '#032224',
    borderBottomWidth: 2.4
  },
  input: {
    margin: 15,
    height: 50,
    width: 280,
    borderColor: "#032224",
    borderWidth: 2.4,
    borderRadius: 0,
    paddingLeft: 10
  },
});
