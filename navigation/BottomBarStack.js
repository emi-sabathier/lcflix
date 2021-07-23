import React from 'react';
import {Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import WishStack from "./WishStack";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomBarStack() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           tabBarOptions={{
                               activeTintColor: '#fff',
                               style: {
                                   backgroundColor: '#0E0E0E'
                               }
                           }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarLabel: () => null,
                        tabBarIcon: () => (
                            // <View
                            //     style={{
                            //         position: 'absolute',
                            //         bottom: 0,
                            //         height: 68,
                            //         width: 68,
                            //         borderRadius: 68,
                            //         justifyContent: 'center',
                            //         alignItems: 'center',
                            //     }}
                            // >
                            <Text style={{color: '#fff'}}>LcFlix!</Text>
                            // </View>
                        )
                    }}
                />
                <Tab.Screen
                    name="WishList"
                    component={WishStack}
                    options={{
                        tabBarIcon: () => (
                            <Icon name="film-outline" color="grey" size={28}/>
                        ),
                        tabBarBadge: '4',
                        tabBarLabel: 'WishList',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
