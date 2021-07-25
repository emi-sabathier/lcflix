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
    title: '#000'
  },
  slider: {
    activeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: "#11CB46"
    },
    inactiveDot: {
      backgroundColor: "#fff"
    }
  }
};

const App = () => {

  return (
      <PaperProvider theme={theme}>
        <BottomBarStack/>
      </PaperProvider>
  );
};
export default App;
