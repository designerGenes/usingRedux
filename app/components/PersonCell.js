import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Colors, Masonry} from '../config';

export default class PersonCell extends Component {
  render() {
    const person = this.props.person;
    return (
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 16}}>
        <View style={styles.row}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>  {person.name}  </Text>
          <View style={{flex: 1}}/>
          <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'right', fontSize: 18}}>  Prefers {person.favoriteMartialArt}  </Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>  Age: {person.age}  </Text>
          <View style={{flex: 1}}/>
          <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'right', fontSize: 18}}>  Swimming Confidence {person.swimmingConfidence}  </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    margin: 8
  }
});
