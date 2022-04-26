// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React from 'react';
//import React in our code.
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      // .get('https://jsonplaceholder.typicode.com/posts')
      .get('http://localhost:8080/mx')
      .then(function (response) {
        // handle success

        // alert(response.data[0].title);
        // alert(JSON.stringify(response.data[0].title));

        alert(JSON.stringify(response.data.recordsets[0][0]));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        // alert('Finally called');
      });
  };

  return (
    <View style={styles.container}>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;