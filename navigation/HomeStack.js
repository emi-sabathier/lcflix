import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {backgroundColor: '#000'},
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MovieDetails" component={MovieDetailsScreen}/>
        </Stack.Navigator>
    );
};
