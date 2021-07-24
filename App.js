/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import {DefaultTheme, configureFonts, Provider as PaperProvider} from 'react-native-paper';
import BottomBarStack from "./navigation/BottomBarStack";

const theme = {
  background: {
    darkGrey: '#222'
  },
  myOwnProperty: true,
  fonts: {
    fontFamily: 'merriweather-regular',
    fontWeight: 'normal',
  },
  roundness: 2,
  // fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
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
