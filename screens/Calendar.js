import React from 'react';
import { Alert, View, Button, Text, Dimensions, AppRegistry, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import EventCalendar from '../src/EventCalendar';
import RNPickerSelect from 'react-native-picker-select';
import AwesomeAlert from 'react-native-awesome-alerts';
import { event } from 'react-native-reanimated';

let { width } = Dimensions.get('window');

export default class CalendarEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: '2022-04-14 13:30:00',
          end: '2022-04-14 14:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2022-04-14 12:10:00',
          end: '2022-04-14 13:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
      ],
    };
  }

  //Esta função manipula a informação que é mostra no Alert
  _eventTapped(event) {
    console.log("\nInício: " + event.start + '\n' + "Fim: " + event.end + '\n' + "Título: " + event.title + '\n' + "Sumário: " + event.summary)
    Alert.alert(
      'Tarefa',
      "Início: " + event.start + '\n' + "Fim: " + event.end + '\n' + "Título: " + event.title + '\n' + "Sumário: " + event.summary,
      [
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
    //alert("Início: " + event.start + '\n' + "Fim: " + event.end + '\n' + "Título: " + event.title + '\n' + "Sumário: " + event.summary);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
          placeholder={{ label: 'Selecionar colaborador', value: null }}
        />
        <EventCalendar
          eventTapped={this._eventTapped.bind(this)}
          events={this.state.events}
          width={width}
          //initDate={'2017-09-07'}
          scrollToFirst
          upperCaseHeader
          uppercase
        //scrollToFirst={false}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

AppRegistry.registerComponent('Calendar', () => Calendar)
