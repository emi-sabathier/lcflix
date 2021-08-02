import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Badge, withTheme} from 'react-native-paper';
import HomeStack from './HomeStack';
import WishStack from './WishStack';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {AlertContextProvider} from '../context/AlertContext';

const Tab = createBottomTabNavigator();

function BottomBarStack(props) {
    const {favoritesList} = useSelector(state => state.favoritesReducer); // extract favoritesList from redux store
    const {darkGrey} = props.theme.background;

    const BadgeIcon = () => (
        <View style={tailwind('w-11 self-end')}>
            <View style={[{width:17, height:17},tailwind('z-10 absolute right-2 rounded-2xl bg-red-500')]}>
                <Text style={tailwind('text-white text-xs font-bold self-center pb-1')}>{Object.keys(favoritesList).length}</Text>
            </View>
            <Icon name="favorite" color="#11CB46" size={28}/>
        </View>
    )
    return (
        // inject dropDownAlert through AlertContextProvider
        <AlertContextProvider>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home"
                               style={tailwind('flex-1')}
                               screenOptions={{
                                   cardStyle: {backgroundColor: '#000'},
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
                                <View style={[{width:225},tailwind('left-0 absolute right-0 justify-center items-end')]}>
                                    <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>LcFlix!</Text>
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
                                <BadgeIcon />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </AlertContextProvider>
    );
};
export default withTheme(BottomBarStack);
