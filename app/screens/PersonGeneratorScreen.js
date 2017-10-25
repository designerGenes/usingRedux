import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Masonry} from '../config';
import {Button, FormLabel, FormInput, Slider, ButtonGroup, FormValidationMessage} from 'react-native-elements';
import store from '../store/store.js'

import PersonGeneratorContainer from '../containers/PersonGeneratorContainer';

export default class PersonGeneratorScreen extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.screenProps.route_index === 0) {
      console.log('\n\nRETURNED HOME');
    }
  }

  static navigationOptions = {
    title: 'Set State'
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={[Masonry.container, {padding: 10, backgroundColor: Colors.grayMid}]}>
        <PersonGeneratorContainer navigate={navigate}/>
      </View>
    )
  }
}
