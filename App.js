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
import Login from './screens/Login';
import Signup from './screens/Signup';
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
            <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#ff8c8c',
                drawerActiveTintColor: '#ff0000',
                drawerInactiveTintColor: '#000000',
                drawerStyle: {
                    backgroundColor: '#fff',
                  }
              }}
            >
            
                
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Calendar" component={Calendar} />

                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Signup" component={Signup} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Test;