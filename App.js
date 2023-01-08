import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files

import Homescreen from "./Screens/Homescreen";
import Basketballscreen from "./Screens/Basketballscreen";
import AmericanFootballscreen from "./Screens/AmericanFootballscreen";
import Footballscreen from "./Screens/Footballscreen";



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
 
  Homescreen:Homescreen,
  Basketballscreen:Basketballscreen,
  AmericanFootballscreen:AmericanFootballscreen,
  Footballscreen:Footballscreen
});

const AppContainer = createAppContainer(AppNavigator);






