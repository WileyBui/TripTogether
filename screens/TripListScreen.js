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
import credentials from "../config/credentials.json";

export default function TripListScreen(props) {
  const [isReady, setIsReady] = React.useState(false);
  const [TripData, setTripData] = React.useState({});

  if (isReady) {
    return renderPage();
  } else {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.status == 200) {
        setTripData(JSON.parse(req.responseText));
        setIsReady(true);
      } else {
        retrievingData(`Error connection with the database: ${req.status}`);
      }
    };

    req.open("GET", credentials.id, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("secret-key", credentials.secretKey);
    req.send();
    return retrievingData("Retrieving data...");
  }

  function retrievingData(message) {
    return (
      <View>
        <HeaderComponent headerProps={props} screenTitle="My Trips" />
        <Text>{message}</Text>
      </View>
    );
  }

  function renderPage() {
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
