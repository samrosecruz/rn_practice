import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import {
  PinIcon
} from '../../utils/icons'


import UtilNavButton from '../UtilNavButton';
import Button from '../Button';

const styles = StyleSheet.create({
  pinNav: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 70,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
    flex: 1,
    marginBottom: 16
  },

  utilNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  pinButton: {
    flexDirection: 'row',
    backgroundColor: '#EF3E3E',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    width: 60
  },

  pinButtonText: {
    color: 'white',
    textAlign: 'center'
  },
})

export default class PinNav extends Component {
  render(){
    return (
      <View style={styles.pinNav}>
        <View style={styles.utilNav}>
          <UtilNavButton icon="Back"/>
          <UtilNavButton icon="Heart"/>
          <UtilNavButton icon="Share"/>
          <UtilNavButton icon="More"/>
        </View>
        <View style={styles.pinButtonContainer}>
          <Button buttonType= "primary" icon text="Save"/>
        </View>
      </View>
   );
  }
}
