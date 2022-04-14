// @flow
import { Platform, StyleSheet } from 'react-native';

// const eventPaddingLeft = 4
const leftMargin = 50 - 1;

export default function styleConstructor(theme = {}, calendarHeight) {
  let style = {
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      ...theme.container,
    },
    contentStyle: {
      backgroundColor: '#ffff',
      height: calendarHeight + 10,
      ...theme.contentStyle,
    },
    header: {
      paddingHorizontal: 30,
      height: 50,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#ff0000',
      backgroundColor: '#ff8c8c',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      ...theme.header,
    },
    headerTextContainer: {
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 18,
      // color: '#ffffff',
      color: '#000000',
      ...theme.headerText,
    },
    arrow: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    arrowButton: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.arrowButton,
    },
    event: {
      position: 'absolute',
      backgroundColor: '#ff8c8c',
      opacity: 0.8,
      borderColor: '#ff0000',
      color: '#000000',
      borderWidth: 2,
      borderRadius: 5,
      paddingLeft: 4,
      minHeight: 25,
      flex: 1,
      paddingTop: 5,
      paddingBottom: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      ...theme.event,
    },
    eventTitle: {
      color: '#000000',
      fontWeight: '600',
      minHeight: 18,
      ...theme.eventTitle,
    },
    eventSummary: {
      color: '#000000',
      fontSize: 15,
      flexWrap: 'wrap',
      ...theme.eventSummary,
    },
    eventTimes: {
      marginTop: 3,
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000000',
      flexWrap: 'wrap',
      ...theme.eventTimes,
    },
    line: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'rgb(216,216,216)',
      ...theme.line,
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'red',
      ...theme.lineNow,
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: '#000000',
      fontSize: 10,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
      fontWeight: '500',
      ...theme.timeLabel,
    },
  };
  return StyleSheet.create(style);
}
