import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, Masonry} from '../config';
import store from '../store/store.js';
import PersonContainer from '../containers/PersonContainer';

export default class ComplexScreen extends Component {
  static navigationOptions = {
    title: 'Users'
  }

  renderPersonCell(item) {
    var personCell = <PersonContainer person={item.item} />;
    return personCell;
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
            <FlatList
              data={store.getState().persons}
              renderItem={this.renderPersonCell}
              keyExtractor={(item, index) => item.uuid}
            />
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
