import React from 'react';
import {Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import WishStack from "./WishStack";
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const jpp = {
    fontFamily: 'merriweather-bold'
};
function BottomBarStack(props) {
    const {fonts} = props.theme;
    console.log('fonts',props.theme.fonts.fontFamily)
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           style={tailwind('flex-1')}
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
                            <View
                                style={[{backgroundColor: 'blue'},tailwind('justify-center items-end flex-1 w-full')]}
                                // style={{
                                //     position: 'absolute',
                                //     bottom: 0,
                                //     height: 68,
                                //     width: 68,
                                //     borderRadius: 68,
                                //     justifyContent: 'center',
                                //     alignItems: 'center',
                                // }}
                            >
                            <Text  style={{color: '#fff', fontFamily:jpp.fontFamily}}>LcFlix!</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen
                    name="WishList"
                    component={WishStack}
                    options={{
                        tabBarIcon: () => (
                            <Icon name="heart-outline" color="grey" size={28}/>
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
