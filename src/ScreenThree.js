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

class ScreenThree extends Component {

  static navigationOptions = {
    title: 'Screen Three'
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

  renderData(){

    var items = [];

    this.props.names.forEach((item, i) => items.push(
    <View>
      <Text style={styles.textStyle}> {item} </Text>
      </View>
    ));

    return items;
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderData()}   
      {this.renderTextField()}
        {this.renderSubmitButton()}
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
)(ScreenThree)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8e41f4',
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