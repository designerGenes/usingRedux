import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Masonry} from '../config';
import SOUserListContainer from '../containers/SOUserListContainer';

const ENDPOINT_URL = 'https://api.stackexchange.com/2.2/users?site=stackoverflow';

export default class ThunkScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SOUserListContainer
          url={ENDPOINT_URL} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
