import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { withTheme } from 'react-native-paper';
import HomeStack from './HomeStack';
import WishStack from './WishStack';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import {fonts} from '../assets/fonts-style';

const Tab = createBottomTabNavigator();

function BottomBarStack(props) {
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
                            <View
                                style={tailwind('justify-center items-end flex-auto w-full')}
                                // style={{
                                //     position: 'absolute',
                                //     bottom: 0,
                                //     height: 68,
                                //     width: 68,
                                //     justifyContent: 'center',
                                //     alignItems: 'center',
                                // }}
                            >
                                <Text style={{color: '#fff', fontSize: 30, fontFamily: fonts.bold}}>LcFlix!</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="WishList"
                    component={WishStack}
                    options={{
                        tabBarIcon: () => (
                            <View>
                                <Icon name="heart-outline" color="grey" size={28}/>
                            </View>
                        ),
                        tabBarBadge: '4',
                        tabBarLabel: 'WishList',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default withTheme(BottomBarStack);
