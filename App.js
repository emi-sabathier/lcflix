/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomBarStack from "./navigation/BottomBarStack";

const theme = {
  background: {
    darkGrey: '#222',
    black:'#000'
  },
  myOwnProperty: true,
  roundness: 2,
  colors: {
    primary: '#fff',
    title: '#000',
    flashyGreen: '#11CB46'
  },
};

const App = () => {

  return (
      <PaperProvider theme={theme}>
        <BottomBarStack/>
      </PaperProvider>
  );
};
export default App;
