import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { HeaderComponent } from "../components/ScreenHeader";
import TripCard from "../components/TripCard";
import TripData from "../config/staticdata.json";
export default function TripListScreen(props) {
  console.log("Trip list >>>");
  //   console.log(props.navigation.toggleDrawer());
  console.log(TripData.defaultPlaces);

  const tripArray = [
    { tripName: "Trip1", tripIcon: "#032224", tripMembers: [], tripTasks: [] },
    { tripName: "Trip2", tripIcon: "#143b39", tripMembers: [], tripTasks: [] },
    { tripName: "Trip3", tripIcon: "#032224", tripMembers: [], tripTasks: [] }
  ];

  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
         you need it to navigate to other screens */}
      <HeaderComponent headerProps={props} screenTitle="My Trips" />

      {/* <Text>List of Trips</Text> */}
      <ScrollView style={styles.scrollView}>
        {TripData.defaultPlaces.map(trips => (
          <TripCard
            key={trips.tripName}
            tripName={trips.tripName}
            tripIcon={trips.image}
            tripTasks={trips.tasks}
            tripMembers={trips.members}
            parentProps={props}
          />
        ))}
      </ScrollView>
      <View>
        <TouchableHighlight style={styles.newTripButton}>
          <Text
            onPress={() =>
              props.navigation.navigate({ name: "NewTrips", params: {} })
            }
            style={styles.buttonText}
          >
            New Trip
          </Text>
        </TouchableHighlight>
      </View>
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
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 10
  },
  newTripButton: {
    margin: 10,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 25
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  }
});
