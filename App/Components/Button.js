import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


import {
  PinIcon
} from '../utils/icons'

import styleUtils from '../utils/styleUtils'


export default class Button extends Component {
  render(){

    const { buttonType } = this.props

    let buttonStyles = [styles.basic]
    let buttonTextStyles= [styles.basicText]

    if (buttonType === 'primary') {
      buttonStyles.push(styles.primary)
      buttonTextStyles.push(styles.whiteText)
    } else if (buttonType === 'secondary') {
      buttonStyles.push(styles.secondary) 
    } else {
      // other button types  
    }

    return (
      <TouchableOpacity style={buttonStyles}>
        {this.props.icon && <PinIcon />}
        <Text style={buttonTextStyles}>{this.props.text}</Text>
      </TouchableOpacity>
   );
  }
}

const styles = StyleSheet.create({
  pinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  basic: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: styleUtils.Color.gray,
    width: 60
  },

  basicText: {
    color: styleUtils.Color.charcoal
  },

  whiteText: {
    color: 'white'
  },

  primary: {
    backgroundColor: styleUtils.Color.primaryRed,
    color: 'white'
  },



  secondary: {
    backgroundColor: styleUtils.Color.primaryRed
  },

  buttonText: {
    textAlign: 'center',
  },
})

