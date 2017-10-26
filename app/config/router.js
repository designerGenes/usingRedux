import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {SelectScreen, BasicScreen, PersonListScreen, PersonGeneratorScreen, ThunkScreen} from '../screens';
import Colors from './colors'



export default TabNavigator({
  PersonGeneratorTab: {screen: StackNavigator({
    PersonGeneratorScreen: {screen: PersonGeneratorScreen},
    PersonListScreen: {screen: PersonListScreen},
  })},
  BasicTab: {screen: BasicScreen},
  ThunkTab: {screen: ThunkScreen},
}, {
  tabBarOptions: {
    activeTintColor: Colors.orange
  }
});
