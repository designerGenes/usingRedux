import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {SelectScreen, BasicScreen, PersonListScreen, PersonGeneratorScreen} from '../screens';

export default StackNavigator({
  PersonGeneratorScreen: {screen: PersonGeneratorScreen},
  SelectScreen: {screen: SelectScreen},
  BasicScreen: {screen: BasicScreen},
  PersonListScreen: {screen: PersonListScreen},
});
