import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WishScreen from '../screens/WishScreen';

const Stack = createStackNavigator();

export default function WishStack() {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {backgroundColor: '#000'},
            headerShown: false
        }}>
            <Stack.Screen name="WishList" component={WishScreen}/>
        </Stack.Navigator>
    );
};
