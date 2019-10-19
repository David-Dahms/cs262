import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Home Screen 
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Homework 2 Home Screen</Text>
        <Button 
        title= "Go to Turtle Screen"
        onPress= {() => this.props.navigation.navigate('ScreenTwo')}
        />
      </View>
    );
  }
}

// Turtle Screen
class TurtleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Turtle Screen</Text>
        <Image source= {{uri: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}}
               style= {{width: 400, height: 400}}
        />
        <Button
          title="Go to Turtle Screen... again"
          onPress={() => this.props.navigation.push('ScreenTwo')}
        />
        <Button
          title= "Go to Home"
          onPress= {() => this.props.navigation.navigate('Home')}
        />
        <Button
          title= "Go Back"
          onPress= {() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

// Designates Screen Names
const AppNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  ScreenTwo: TurtleScreen,
  },
  {
    initalRouteName: 'Home',
  },
);

// Creates and returns the AppContainer
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
