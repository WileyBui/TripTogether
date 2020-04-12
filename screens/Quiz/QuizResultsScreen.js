import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
export default function QuizResultsScreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Quiz Results"
      />

      <Text> Quiz Results Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
