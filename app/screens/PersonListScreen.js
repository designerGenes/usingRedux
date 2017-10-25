import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, Masonry} from '../config';
import store from '../store/store.js';
import PersonListContainer from '../containers/PersonListContainer';

export default class PersonListScreen extends Component {
  static navigationOptions = {
    title: 'Users'
  }

  constructor(props) {
    super(props);
    store.subscribe(() => {
      console.log('store was changed');
    });
  }

  resetPeople() {
    store.dispatch({
      type: 'RESET_PEOPLE'
    });
  }

  render() {
    return (
      <View style={[Masonry.container, {backgroundColor: Colors.grayMid}]}>
        <View style={{flex: 1, width: '100%', height: 300, backgroundColor: Colors.grayMid}}>
          <View style={{alignSelf: 'flex-start'}}>
            <Text style={[Masonry.labelBlockText]}> Person List </Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'white', width: '100%'}}>
            <PersonListContainer/>
          </View>
        </View>
        <View style={{flex: 0.2, width: '100%'}}>
          <View style={{flex: 1}}/>

          <Button large raised
            onPress={this.resetPeople}
            title='Reset All'
            buttonStyle={{backgroundColor: Colors.red, padding: 12, margin: 8, borderRadius: 8}}
            containerViewStyle={{alignSelf: 'center', width: '80%'}}
            textStyle={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}
          />
        </View>
      </View>
    )
  }
}
