import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import {Colors, Masonry} from '../config';
import PersonCell from './PersonCell';

export default class PersonList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.persons}
        renderItem={this.renderPersonCell}
        keyExtractor={(item, index) => item.uuid}
      />
    )
  }

  renderPersonCell(person) {
    console.log(person.item);
    var personCell = <PersonCell person={person.item} />;
    return personCell;
  }
}
