import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';

export default class SubComponentTwo extends Component<Props>{ 

   

    render(){
        return(
           
             <TouchableOpacity onPress={() => this.props.onButtonClicked("My VAlue")} >
              <Text style={this.props.demoButtonStyle}>{this.props.buttonTitle}</Text>
          </TouchableOpacity>
         
        );
    }

  } 
  
