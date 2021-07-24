import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WishScreen from '../screens/WishScreen';

const Stack = createStackNavigator();

export default function WishStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WishList" component={WishScreen}/>
        </Stack.Navigator>
    );
};
