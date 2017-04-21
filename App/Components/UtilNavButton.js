import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Back,
  Heart,
  Share,
  More
} from '../utils/icons'

export default class UtilityNavButton extends Component {
  render(){
    switch (this.props.icon){
      case "Back":
        return <Back />
      case "Heart":
        return <Heart />
      case "Share":
        return <Share />
      case "More":
        return <More />
      default:
        return "No Icon"
    }
  }
}
