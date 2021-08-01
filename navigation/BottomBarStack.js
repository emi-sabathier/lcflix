import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { withTheme } from 'react-native-paper';
import HomeStack from './HomeStack';
import WishStack from './WishStack';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../assets/fonts-style';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

function BottomBarStack(props) {
    const {favoritesList} = useSelector(state => state.favoritesReducer);
    const {darkGrey} = props.theme.background
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           style={tailwind('flex-1')}
                           screenOptions={{
                               cardStyle: { backgroundColor: '#000' }
                           }}
                           tabBarOptions={{
                               activeTintColor: '#fff',
                               style: {
                                   backgroundColor: darkGrey,
                               },
                           }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarLabel: () => null,
                        tabBarIcon: () => (
                            <View style={tailwind('justify-center items-end flex-auto w-full')}>
                                <Text style={{color: '#fff', fontSize: 30, fontFamily: fonts.bold}}>LcFlix!</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="WishList"
                    component={WishStack}
                    options={{
                        tabBarLabel: () => null,
                        tabBarIcon: () => (
                            <View>
                                <Icon name="favorite" color="#11CB46" size={28}/>
                            </View>
                        ),
                        tabBarBadge: Object.keys(favoritesList).length}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default withTheme(BottomBarStack);
