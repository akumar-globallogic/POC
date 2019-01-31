import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';
import { addNameAction, deleteNameAction } from './Actions';

import { connect } from 'react-redux';

const {width} = Dimensions.get("window")

 class ScreenOne extends Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'white',
    }
  };

  constructor (props) {
  
    super(props);

    this.state = 
      {
        inputValue: "",

      }
    
  }

  addName = () => {
    if (this.state.inputValue === '') return;

    this.props.dispatchAddName(
     this.state.inputValue,
    );

    this.setState({ inputValue: '' });
  }
  deleteName = (person) => {
    if (this.state.inputValue === '') return;

    this.props.dispatchDeleteName(this.state.inputValue,
    );

    this.setState({ inputValue: '' });
  }

  navigateToScreenTwo(){
    this.props.navigation.navigate('ScreenTwo')
  }

  navigateToScreenThree(){
    this.props.navigation.navigate('ScreenThree')
  }

  renderData(){

    var items = [];

    this.props.names.forEach((item, i) => items.push(
    <View>
      <Text style={styles.textStyle}> {item} </Text>
      </View>
    ));

    return items;
  }

  renderTextField(){
    return(
      <TextInput
        style={{height: 40, width: width -40,marginTop:10, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={(inputValue) => this.setState({inputValue})}
        value={this.state.inputValue}
      />
    )
  }
  
  renderSubmitButton(){
    return(
      <TouchableOpacity onPress={() => this.addName()} >
      <Text style={[styles.demoButton,  {backgroundColor : '#8BC34A'}]}>{"Add Name"}</Text>
  </TouchableOpacity> 
    )
  }
  renderDeleteButton(){
    return(
      <TouchableOpacity onPress={() => this.deleteName()} >
      <Text style={[styles.demoButton,  {backgroundColor : '#8BC34A'}]}>{"Delete Name"}</Text>
  </TouchableOpacity> 
    )
  }

  renderScreenTwoButton(){
    return(
      <TouchableOpacity onPress={() => this.navigateToScreenTwo()} >
      <Text style={[styles.demoButton,  {backgroundColor : '#d55555'}]}>{"Screen Two"}</Text>
  </TouchableOpacity> 
    )
  }

  renderScreenThreeButton(){
    return(
      <TouchableOpacity onPress={() => this.navigateToScreenThree()} >
      <Text style={[styles.demoButton, {backgroundColor : '#d55555'} ]}>{"Screen Three"}</Text>
  </TouchableOpacity> 
    )
  }

  functionPassed = () =>{

    this.setState({textToDisplay: "Screen 1 (state changed)"})

  }

  render() {
      return (
          <View style={styles.container}>
          {this.renderData()}   
          {this.renderTextField()} 
          {this.renderSubmitButton()} 
          {this.renderDeleteButton()} 
          {this.renderScreenTwoButton()} 
          {this.renderScreenThreeButton()} 
          </View>
      );
    }
  }

  function mapStateToProps (state) {
    return {
      names: state.namesReducer.names
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      dispatchAddName: (name) => dispatch(addNameAction(name)),
      dispatchDeleteName: (name) => dispatch(deleteNameAction(name))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ScreenOne)



   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#2196F3',
      justifyContent: 'center',
      alignItems: 'center'

    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: "700",
        color: "white"
      },
      demoButton: {
        "color": "black",
        "textAlign": "center",
        "fontSize": 17,
        "paddingTop": 10,
        "marginTop": 20,
        "width": width - 40,
        height: 44
    },
  });


  // buttonClicked(){
  //   //push
  //    //this.props.navigation.navigate('DetailScreen', {"TextPassed":"Param Passed YAHoo"}) 

  //    //, {"TextPassed":"Param Passed"}

  //   this.props.navigation.toggleDrawer();

  //  // this.props.navigation.navigate('DetailScreen', {"TextPassed":"Param Passed", functionPassed: this.functionPassed})
  // }
