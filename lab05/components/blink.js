import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Blink extends Component {
    constructor(props) {

        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };


            });

        }, 1000);
    }
}