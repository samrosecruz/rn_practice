/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Pin from './App/Components/Pin';

export default class sampleReactNative extends Component {
  render() {
    return (
      <Pin />
    );
  }
}

AppRegistry.registerComponent('sampleReactNative', () => sampleReactNative);
