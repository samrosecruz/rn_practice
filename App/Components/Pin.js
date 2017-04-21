import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  PinIcon
} from '../utils/icons'


import PinNav from './navigation/PinNav'
import Button from './Button';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingRight: 8
  },

  pinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    flex: 3
  },

  pinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  imagePlaceholder: {
    backgroundColor: '#d3d3d3',
    alignSelf: 'stretch',
    flex: 1
  },

  pinMeta: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8,
    flex: 1
  },

  pinUser: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    flex: 5
  },

  pinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },

  TextBold: {
    fontWeight: 'bold'
  }
})

export default class Pin extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        <PinNav />

        <View style={styles.pinContent}>
          <Text style={styles.imagePlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.pinMeta}>
          <View style={styles.pinMetaTextContainer}>
            <Text style={styles.pinMetaText}>Saved from</Text>
            <Text style={[styles.pinMetaText, styles.TextBold]}>website.com</Text>
          </View>
          <View style={styles.pinButtonContainer}>
            <View style={[styles.pinButton, styles.UtilityButton]}>
              <Button buttonType= "default" text="Visit"/>
            </View>
          </View>
        </View>

        <View style={styles.pinUser}>
          <View style={styles.pinUserAvatar}>

          </View>
          <View style={styles.pinUserContainer}>
            <Text style={styles.pinUserText}>
              <Text style={styles.TextBold}>User Name </Text>saved to<Text style={styles.TextBold}> Space</Text>
            </Text>
            <Text style={styles.pinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>

      </View>
    )
  }
}
