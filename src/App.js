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
import HomeScreen from './screens/Home';
import ChuckScreen from './screens/Chuck';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import SessionScreen from './screens/Session';
import SignerScreen from './screens/Signer';

function App() {

    let isSigneIn = false;

    return (
        isSigneIn ? (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Chuck" component={ChuckScreen} />
                    <Stack.Screen name="Session" component={SessionScreen} />
                    <Stack.Screen name="Signer" component={SignerScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        ) : (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    )}

export default App;
