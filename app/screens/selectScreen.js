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
        <View style={styles.buttonHolder}>
          <Button
            large
            buttonStyle={[styles.screenButton, {backgroundColor: Colors.green}]}
            title={'Basic Example'}
            textStyle={styles.screenButtonText}
            onPress={() => navigate("BasicScreen") }/>
          <Button
            large
            buttonStyle={[styles.screenButton, {backgroundColor: Colors.green}]}
            title={'Complex Example'}
            textStyle={styles.screenButtonText}
            onPress={() => navigate("PersonGeneratorScreen")} />
          <Button
            large
            buttonStyle={[styles.screenButton, {backgroundColor: Colors.green}]}
            title={'Thunk Example'}
            textStyle={styles.screenButtonText}
            onPress={() => navigate("ThunkScreen")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenButton: {
    height: 60,
    flexDirection: 'row',
    borderRadius: 12,
    margin: 16,
  },
  screenButtonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  buttonHolder: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginTop: '50%',
    width: '100%'
  }
});
