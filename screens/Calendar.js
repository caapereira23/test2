import React from 'react';
import { View, Button, Text, Dimensions, AppRegistry, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
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
          start: '2022-04-12 13:30:00',
          end: '2022-04-12 14:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
        {
          start: '2022-04-12 12:10:00',
          end: '2022-04-12 13:45:00',
          title: 'Dr. Mariana Joseph',
          summary: '3412 Piedmont Rd NE, GA 3032',
        },
      ],
    }, { showAlert: false };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  //Esta função manipula a informação que é mostra no Alert
  _eventTapped(event) {
    this.showAlert();
    // alert(JSON.stringify(event.start + '\n' + event.end + '\n' + event.title + '\n' + event.summary));
  }
  render() {
    const {showAlert} = this.state;
    return (
      <View style={{ flex: 1 }}>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message= "Test"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Ok"
          confirmButtonColor="#00ff00"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
          placeholder={{label: 'Selecionar colaborador', value: null}}
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
