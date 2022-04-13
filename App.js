import 'react-native-gesture-handler';
import React from 'react'
import {
    View,
    Button,
    Text,
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Calendar from './screens/Calendar';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

function Test()
{
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Calendar" component={Calendar} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Test;