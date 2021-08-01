import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WishScreen from '../screens/WishScreen';
import {fonts} from '../assets/fonts-style';
import {withTheme} from 'react-native-paper';

const Stack = createStackNavigator();

function WishStack(props) {
    const {primary} = props.theme.colors;
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {backgroundColor: '#000'},
            headerShown: true,
            headerStyle: {
                backgroundColor: '#11CB46',
            },
            headerTintColor: primary,
            headerTitleStyle: {
                fontFamily: fonts.bold
            },
        }}>
            <Stack.Screen name="WishList" component={WishScreen} options={{
                title: 'Liste de vos favoris'
            }}/>
        </Stack.Navigator>
    );
};
export default withTheme(WishStack);
