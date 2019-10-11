import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Shell Squad is really cool!</Text>
          <Text>Especially the turtles</Text>
        </View>
      );
    }
  }
  
  

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  
  export default Header;