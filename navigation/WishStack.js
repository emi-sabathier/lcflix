import React from 'react';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';
import WishScreen from '../screens/WishScreen';
import {fonts} from '../assets/fonts-style';
import {withTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

function WishStack(props) {
    const {primary} = props.theme.colors;
    const navigation = useNavigation();
    console.log(navigation);
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
            headerLeft: () => (
                <HeaderBackButton tintColor={primary} onPress={() => navigation.goBack()} />
            ),
        }}>
            <Stack.Screen name="WishList" component={WishScreen} options={{
                title: 'Liste de vos favoris'
            }}/>
        </Stack.Navigator>
    );
};
export default withTheme(WishStack);
