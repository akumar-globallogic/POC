import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import React from "react";

export  const DisplayInstructions = ({ instructions, stylePassed }) => {
    return (
      <View style = {stylePassed} >
       <Text> {instructions} </Text>
      </View>
    );
  };