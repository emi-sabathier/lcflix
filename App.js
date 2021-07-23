/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import {DefaultTheme, configureFonts, Provider as PaperProvider} from 'react-native-paper';
import BottomBarStack from "./navigation/BottomBarStack";

const fontConfig = {
  regular: {
    fontFamily: 'merriweather-regular',
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: 'merriweather-bold',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'merriweather-light',
    fontWeight: 'normal',
  },
  italic: {
    fontFamily: 'merriweather-italic',
    fontWeight: 'normal',
  },
};

const theme = {
  ...DefaultTheme,
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
