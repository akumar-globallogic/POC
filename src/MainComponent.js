import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';

import {A, B, C, D} from "./ModuleX"
import {DisplayInstructions} from "./FunctionalComponent";
import SubComponentOne from "./SubComponentOne";
import SubComponentTwo from "./SubComponentTwo";

const instructionsHere = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  type Props = {};
  export default class MainComponent extends React.PureComponent {
    
   constructor (props) {
  
       super(props);
  
       this.titleText = "Welcome to React Native"
       this.isToShowVar = false;
       this.state = { 
         "subTitleText": "Session 2",
         "arrayOfData": ["Apple","Bat","Cat","Dog"],
         "isToShow": false,
         "incrementedValue": 1
       }  
  
   }

   componentWillMount(){

       console.log("componentWillMount")

   }
  


    renderArray () {

      var items = [];
      this.state.arrayOfData.forEach((item, i) => items.push(
      <View style={styles.demoButton}>
        <Text> {item} </Text>
        </View>
      ));

      return items;

  }


  renderInstructions(){
    return(
    <DisplayInstructions  instructions={instructionsHere} stylePassed = {styles.instructions}/>
    );
  }

  renderButton(){
    return(
      <TouchableOpacity onPress={() => this.buttonClicked()} >
      <Text style={styles.demoButton}>{"Click Me"}</Text>
  </TouchableOpacity> 
    )
  }


  buttonClicked = (dataRecived) =>{
  
    // this.setState({subTitleText:dataRecived})
    //this.isToShowVar = !this.isToShowVar
    this.setState({incrementedValue: this.state.incrementedValue + 1}, ()=>{
   console.log("Ok the state is modified")
   });
   
   //var data;
   //var message = data.message;      

 }

  render() {
      return (
         <View style={styles.container}>
         {/* <Text>{this.state.subTitleText}</Text>
         {this.renderArray()} */}

          <SubComponentTwo demoButtonStyle = {styles.demoButton}   
          onButtonClicked = {this.buttonClicked}
          buttonTitle = {this.state.incrementedValue} /> 
           
        
        </View>
      );
    }
  }



  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    instructions: {
      marginTop: 15
    },
    "demoButton": {
      "color": "black",
      "textAlign": "center",
      "fontSize": 17,
      "padding": 10,
      "width": 200
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
  });