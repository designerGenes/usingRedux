import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Masonry} from '../config';
import CounterContainer from '../containers/CounterContainer';

export default class BasicScreen extends Component {
  static navigationOptions = {
    title: 'Basic Example'
  }
  render() {
    return (
      <View style={[Masonry.container, {alignItems: 'center', justifyContent: 'center'}]}>
        <CounterContainer />
      </View>
    );
  }
}
