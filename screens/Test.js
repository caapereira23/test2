import React from 'react'
import {
    View,
    Button,
    Text,
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Calendar from './Calendar';

const Drawer = createDrawerNavigator();

function Test()
{
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Signup" component={Signup} />
                <Drawer.Screen name="Calendar" component={Calendar} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Test;