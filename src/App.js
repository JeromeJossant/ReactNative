/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import HomeScreen from './screens/home/Home';
import ChuckScreen from './screens/home/Chuck';
import LoginScreen from './screens/Login';
import AppScreen from './screens/AppScreen';
import RegisterScreen from './screens/Register';
import SessionScreen from './screens/Session';
import SignerScreen from './screens/Signer';
import LessonScreen from './screens/home/Lesson';
import ProfileScreen from './screens/compte/Profile';

function App() {

    let isSigneIn = false;

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login"  component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="AppScreen" options={{headerShown: false}} component={AppScreen} />
            </Stack.Navigator>
        </NavigationContainer>

      /*  isSigneIn ? (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Chuck" component={ChuckScreen} />
                    <Stack.Screen name="Session" component={SessionScreen} />
                    <Stack.Screen name="Signer" component={SignerScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        ) : (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Lesson" component={LessonScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )*/
    )}

export default App;
