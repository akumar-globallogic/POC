import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';

export default class ScreenFour extends Component {


    render() {
      return (
          <View style={styles.container}>
          <Text style={styles.textStyle}> Screen 4</Text>   
              
          </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#2196F3',
      justifyContent: 'center'
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center',
        margin: 20,
        fontWeight: "700"
      }
  });