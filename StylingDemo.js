import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native';
import React, { Component } from 'react';

var { height, width } = Dimensions.get('window');
   
  var box_count = 3;
  var box_height = height / box_count;
   
  export default class StylingDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          screen: Dimensions.get('window'),
        };
      }

  componentWillMount(){
    Dimensions.addEventaListener("change", this.handler);
  }

  getOrientation(){
    if (this.state.screen.width > this.state.screen.height) {
      return 'LANDSCAPE';
    }else {
      return 'PORTRAIT';
    }
  }


  getStyle(){
    if (this.getOrientation() === 'LANDSCAPE') {
      return styles.boxLanscape;
    } else {
      return styles.box;
    }
  }

  handler = () =>{
      console.log("onLayout")
    this.setState({screen: Dimensions.get('window')});
  }


    render() {
      return (
          <View style={styles.container}>
           <View style={styles.topContainer}>
           <View style={[styles.topBox, styles.box1]}></View>
           <View style={[styles.topBox, styles.box2]}></View>
           <View style={[styles.topBox, styles.box3]}></View>              
           </View>
          <View style={styles.middleContainer}>
  
          </View>
           <View style={styles.bottomContainer}>
              <View style={[this.getStyle(), styles.box1]}></View>
              <View style={[this.getStyle(), styles.box2]}></View>
              <View style={[this.getStyle(), styles.box3]}></View>
              </View>
              
          </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "yellow" 
    },
    topContainer: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "purple"  
    },
    middleContainer:{
      flex: 0.2,
      backgroundColor: "black"  
    },
    bottomContainer: {
      flex: 0.4,
      flexDirection: 'column',
      backgroundColor: "pink",
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    box: { 
      height: 90,
      width: width 
    },
    boxLanscape: { 
        height: 60,
        width: 700 
    },
    box1: {
      backgroundColor: '#2196F3'
    },
    box2: {
      backgroundColor: '#8BC34A'
    },
    box3: {
      backgroundColor: '#e3aa1a'
    },
    topBox: {
      width: width / 4
    },
  });