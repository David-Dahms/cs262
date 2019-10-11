import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class DemoView extends Component {
    componentWillMount() {


    }

    componentDidMount() {


    }

    render() {
        return (
            <View style= {this.props.style}>
             {this.props.children}

            </View>
        );
    }

}