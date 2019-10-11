import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, HeaderWithProps, DemoView, Blink } from 'components';



export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
      <DemoView style= {styles.container}>

      <Header />
      <HeaderWithProps />
      {/* <HeaderWithProps title='turtle name: ' subTitle= 'Jeff' /> */}
      <Blink text= "Hello Like to blink" />

      <Text sytle = {styles.welcome} >
        Welcome to React Native!
      </Text>

      <Text style= {styles.instructions}>
        To get started, edit App.js
      </Text>

      <Text style= {styles.instructions}>
        {instructions}
      </Text>


      </DemoView>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

