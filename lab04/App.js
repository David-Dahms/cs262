import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Bananas from './components/photo';
import Blink from './components/blink';
import BananaChooser from './components/textInput';
import FlatListBananas from './components/flatlist';

export default function App() {
  function bananaButton() {
    alert('Thank you banana fan, very cool!')
  }
    return (
      <View style={styles.container}>
        <Text>Bananas!</Text>
      <Bananas />
      <Blink />
      <BananaChooser />
      <Button title= "Press if you like Bananas..." onPress={() => bananaButton()} />
      </View>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
