/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './redux/index';
import BottomBarStack from './navigation/BottomBarStack';

const theme = {
    background: {
        darkGrey: '#222',
        black: '#000',
    },
    myOwnProperty: true,
    roundness: 2,
    colors: {
        primary: '#fff',
        title: '#000',
        flashyGreen: '#11CB46',
    },
};

const App = () => {

    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <BottomBarStack/>
            </PaperProvider>
        </Provider>
    );
};
export default App;
