/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import ScreenFour from './src/ScreenFour';
import ScreenOne from './src/ScreenOne';
import ScreenThree from './src/ScreenThree';
import ScreenTwo from './src/ScreenTwo';
import MainComponent, {AnotherClassInTheFile} from "./src/MainComponent";
import configureStore from './configureStore'
import StylingDemo from './StylingDemo'

const store = configureStore()
type Props = {};


// const RootStack = createStackNavigator({
//   Dashboard: {
//     screen: ScreenOne
//   },
//   DetailScreen: {
//     screen: ScreenOne
//   },
// });


const ExampleStackNavigator = createStackNavigator(
  {
    ScreenOne: ScreenOne,
    ScreenTwo:  ScreenTwo,
    ScreenThree: ScreenThree
  },
  {
    initialRouteName: "ScreenOne",
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    
    }
  }
);

// const RootStack = createBottomTabNavigator(
//   {
//     Dashboard: ScreenOne,
//     SubDetailScreen: ScreenThree,

//     },
//     {
//       initialRouteName: "Dashboard",
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
// );

// const RootStack = createDrawerNavigator(
//   {
//     "Screen 1": ScreenOne,
//     "Screen 2":  ScreenTwo,
//     "Screen 3": ScreenThree
//     },
//     {
//       "contentOptions": {"activeTintColor": "blue"},
//       "drawerBackgroundColor": "yellow",
//       "gesturesEnabled": false,
//       "initialRouteName": "Screen 1"
      
//     }
// );


export default class App extends Component<Props> {
  


  render() {
    
    return (

      // <View style={styles.container}>
    //  <MainComponent/>
     <StylingDemo/>
     
    //  </View>

      // <Provider store={store}>
      // <ExampleStackNavigator/>
      // </Provider>     
  

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

