import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, Masonry} from '../config';
var Dimensions = require('Dimensions');

export default class SelectScreen extends Component {
  static navigationOptions = {
    title: 'Select Screen'
  }
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={[Masonry.container, {backgroundColor: Colors.grayGunmetal}]}>
        <View style={{alignItems: 'center', alignSelf: 'center', flex: 1, marginTop: '50%'}}>
          <Button
            large raised
            buttonStyle={[styles.screenButton, {backgroundColor: Colors.blue}]}
            title={'Basic Example'}
            textStyle={styles.screenButtonText}
            onPress={() => navigate("BasicScreen") }/>
          <Button
            large raised
            buttonStyle={[styles.screenButton, {backgroundColor: Colors.blue}]}
            title={'Complex Example'}
            textStyle={styles.screenButtonText}
            onPress={() => navigate("ComplexScreenGenerator")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenButton: {
    borderRadius: 12,
    margin: 12
  },
  screenButtonText: {
    color: 'white'
  }
});
