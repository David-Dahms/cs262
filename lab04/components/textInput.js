import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class BananaChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>Please answer the question below by tapping on it.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Banana Pudding or Banana Split?"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'Excellent Choice!').join(' ')}
        </Text>
      </View>
    );
  }
}
