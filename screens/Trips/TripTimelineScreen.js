import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { HeaderComponentWithBackButton } from "../../components/ScreenHeader";
export default function TripTimelineScreen(props) {
  return (
    <View style={styles.container}>
      {/* Don't delete this: This is the header component and
       you need it to navigate to other screens */}
      <HeaderComponentWithBackButton
        headerProps={props}
        screenTitle="Trip Timeline"
      />

      <Calendar
        // Initially visible month. Default = Date()
        current={Date()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={undefined}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={undefined}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"MMM yyyy"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed ou
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // Hide day names. Default = false
        hideDayNames={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(substractMonth) => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        //Marked dates
        markingType={"custom"}
        markedDates={{
          "2020-04-17": {
            customStyles: {
              container: {
                backgroundColor: "#032224",
              },
              text: {
                color: "white",
                fontWeight: "bold",
              },
            },
          },
        }}
        style={styles.calendar}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#032224",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "#032224",
          todayTextColor: "blue",
          dayTextColor: "#032224",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#032224",
          arrowColor: "#032224",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#032224",
          indicatorColor: "#032224",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 15,
        }}
      />

      <View style={styles.assignments}>
        <Text style={styles.title}>Assignments</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <TouchableOpacity style={styles.square}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 17,
                marginTop: "12%",
              }}
            >
              +134
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    backgroundColor: "#fafafa",
  },
  button: {
    margin: 5,
    marginTop: 5,
    alignItems: "center",
    // justifyContent: "center",
    width: 400,
    height: 20,
    backgroundColor: "#032224",
    borderColor: "#032224",
    // borderWidth: 2,
    borderRadius: 20,
  },

  calendar: {
    borderWidth: 0,
    borderColor: "gray",
    height: 300,
    width: 400,
  },

  assignments: {
    marginTop: 60,
  },

  title: {
    color: "#032224",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginTop: 17,
    justifyContent: "center",
  },

  square: {
    width: 114,
    height: 114,
    backgroundColor: "#032224",
    marginHorizontal: 7,
    paddingVertical: 28,
    paddingHorizontal: 0,
  },
});
