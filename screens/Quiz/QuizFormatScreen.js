import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight
} from "react-native";

import { HeaderComponent } from "../../components/ScreenHeader";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function QuizFormatScreen(props) {
  const questions = [
    {
      label: 'Option 1',
      value: 'op1'
    },
    {
      label: 'Option 2',
      value: 'op2'
    },
    {
      label: 'Option 3',
      value: 'op3'
    },
    {
      label: 'Option 4',
      value: 'op4'
    }
  ];

  function continueBtnClicked() {
    props.navigation.navigate({ name: "QuizCoverScreen", params: { title: props.route.params.title } });
  }


  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle={props.route.params.title + " Question"} />

      <Text style={styles.title}>{props.route.params.title + " Question"}</Text>

      <RadioForm
        radio_props={questions}
        buttonColor={'#032224'}
        onPress={() => console.log(2)}
        labelStyle={{ fontSize: 20, color: '#032224' }}
        buttonSize={13}
        buttonOuterSize={30}
        style={styles.radioButton}
      />
      <TouchableHighlight
        onPress={() => continueBtnClicked()}
        style={styles.continueButton}
      >
        <Text style={styles.continue}>CONTINUE</Text>
      </TouchableHighlight>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    marginTop: "25%",
    fontSize: 37,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  radioButton: {
    fontSize: 20,
    marginTop: "15%"
  },

  continue: {
    color: "white",
    textAlign: 'center',
    paddingVertical: 15,
  },
  continueButton: {
    backgroundColor: "#032224",
    width: "90%",
    marginTop: "46%"
    // marginHorizontal: 50,
  }
});
