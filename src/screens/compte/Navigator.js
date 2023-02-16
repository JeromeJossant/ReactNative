import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './Profile'

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="profile" component={ProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default NavigationScreen;
