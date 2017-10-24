
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './app/store/store';
import CounterContainer from './app/containers/CounterContainer';
import {Masonry} from './app/config'
import StackNavigator from './app/config/router'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator/>
      </Provider>
    );
  }
}
