import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import LessonScreen from './Lesson'

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lesson" component={LessonScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default NavigationScreen;
