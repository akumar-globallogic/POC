import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';

import PropTypes from 'prop-types';





export default class SubComponentOne extends Component<Props>{ 

    componentWillReceiveProps(nextProps){

        console.log("Props Recived -",nextProps)

    }

    shouldComponentUpdate(nextProps)
    {
        console.log("shouldComponentUpdate")
        if(nextProps.propsPassed === 
            "Session Over. Thank YOU"){
                console.log("shouldComponentUpdate FALSE")
                return false
            }


            return true;
    }

    componentDidCatch(){
        
    }

    

    render(){
        return(
            <View style = {this.props.stylePassed} >
            <Text> {this.props.propsPassed} </Text>
           </View>
        );
    }

  } 

 
  SubComponentOne.propTypes = {

    //This to demonstrate Prop passed to child com
    propsPassed:  PropTypes.string.isRequired,
    //This is to apply style to given comp
    stylePassed: PropTypes.number

  }

  SubComponentOne.defaultProps = {

    propsPassed: "Default Value"

  }



  export  class SubComponentThree extends Component<Props>{ 

    render(){
        return(
            <View style = {this.props.stylePassed} >
            <Text> {"Hello"} </Text>
           </View>
        );
    }

}

  