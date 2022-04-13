import React from 'react'
import {
    View,
    Button,
    Text,
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Profile from './Profile';
import Calendar from './Calendar';

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