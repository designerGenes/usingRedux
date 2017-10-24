import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {SelectScreen, BasicScreen, ComplexScreen, ComplexScreenGenerator} from '../screens';

export default StackNavigator({
  ComplexScreenGenerator: {screen: ComplexScreenGenerator},
  SelectScreen: {screen: SelectScreen},
  BasicScreen: {screen: BasicScreen},
  ComplexScreen: {screen: ComplexScreen},
});
