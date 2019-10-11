import React, { Component } from 'react';
import { Text, View } from 'react-native';



export class HeaderWithProps extends Component {
    render() {
      return (
        <View style= {styles.container}>
          <Text>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      );
    }
  
  }