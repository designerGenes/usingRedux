import React, {Component} from 'react';
import {Colors, Masonry} from '../config';
import {View, StyleSheet, Text} from 'react-native';
import {Button, FormLabel, FormInput, Slider, ButtonGroup, FormValidationMessage} from 'react-native-elements';
const uuidv4 = require('uuid/v4');
const MARTIAL_ARTS = ['karate', 'aikido', 'kung fu', 'MMA'];

export default class PersonGenerator extends Component {
  constructor(props) {
    super(props);
    this.submitPerson = this.submitPerson.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      personName: '',
      personAge: 18,
      selectedMartialArt: 1,
      personSwimmingConfidence: 0,
    }
  }

  submitPerson() {
    this.props.addNewPerson({
      name: this.state.personName,
      age: this.state.personAge,
      favoriteMartialArt: MARTIAL_ARTS[this.state.selectedMartialArt],
      swimmingConfidence: this.state.personSwimmingConfidence,
      uuid: uuidv4()
    });
    this.resetState();
    this.props.navigate('PersonListScreen');
  }

  resetState() {
    this.setState({
      personName: '',
      personAge: 18,
      selectedMartialArt: 0,
      personSwimmingConfidence: 0,
    });
  }

  render() {
    const navigate = this.props.navigate;
    const personListIsEmpty = this.props.persons.length < 1;

    return (
      <View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={Masonry.labelBlockText}> Person Generator </Text>
          <View style={{flex: 1}}/>
          <Button
            containerViewStyle={[personListIsEmpty && Masonry.hidden]}
            buttonStyle={[styles.userListButton, {backgroundColor: Colors.green, borderRadius: 4}]}
            textStyle={{fontSize: 30, fontWeight: 'bold'}}
            title='>'
            onPress={() => navigate('PersonListScreen')}/>
        </View>

        <View style={{backgroundColor: 'white', flex: 1, alignSelf: 'center', padding: 5}}>
          <View style={[Masonry.row, styles.controlRow, {justifyContent: 'flex-start'}]}>
            <FormLabel containerStyle={styles.formLabelStyle}> Name </FormLabel>
            <FormInput
              ref={input => this.nameInput = input}
              containerStyle={styles.formContainerStyle}
              value={this.state.personName}
              onChangeText={(name) => this.setState({personName: name})} />
          </View>

          <View style={[Masonry.row, styles.controlRow, {width: '100%'}]}>
            <FormLabel containerStyle={styles.formLabelStyle}> Age </FormLabel>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
              <Slider
                value={this.state.personAge}
                minimumValue={0}
                maximumValue={90}
                step={1}
                minimumTrackTintColor={Colors.green}
                maximumTrackTintColor={Colors.grayGunmetal}
                thumbTintColor={Colors.green}
                onValueChange={(age) => this.setState({personAge: age})} />
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}> {this.state.personAge} </Text>
              </View>
            </View>
          </View>

          <View style={[Masonry.row, styles.controlRow, {width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
            <View style={{flex: 1}}>
              <FormLabel containerStyle={styles.formLabelStyle}> Favorite Martial Art </FormLabel>
              <ButtonGroup
                buttons={MARTIAL_ARTS}
                selectedIndex={this.state.selectedMartialArt}
                onPress={(idx) => this.setState({selectedMartialArt: idx})}
                containerStyle={{height: 48, width: '100%'}}
                buttonStyle={{padding: 4}} />
            </View>
          </View>

          <View style={[Masonry.row, styles.controlRow, {width: '100%'}]}>
            <FormLabel containerStyle={styles.formLabelStyle}> Swimming Confidence </FormLabel>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
              <Slider
                value={this.state.personSwimmingConfidence}
                minimumValue={0}
                maximumValue={10}
                step={1}
                minimumTrackTintColor={Colors.green}
                maximumTrackTintColor={Colors.grayGunmetal}
                thumbTintColor={Colors.green}
                onValueChange={(confidence) => this.setState({personSwimmingConfidence: confidence})}/>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}> {this.state.personSwimmingConfidence} </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}/>

          <View style={[Masonry.row, styles.controlRow, {width: '100%'}]}>
            <Button large raised
              title='Submit'
              disabled={(this.state.personName === '')}
              buttonStyle={{height: 48, padding: 16, backgroundColor: Colors.green}}
              containerViewStyle={{width: '40%'}}
              textStyle={{color: 'white', fontWeight: 'bold', fontSize: 24}}
              onPress={this.submitPerson} />
            <Button large raised
              title='Reset'
              buttonStyle={{height: 48, padding: 16, backgroundColor: Colors.grayGunmetal}}
              containerViewStyle={{width: '40%'}}
              textStyle={{color: 'white', fontWeight: 'bold', fontSize: 24}}
              onPress={this.resetState} />
          </View>
        </View>
      </View>
      )
    }
}

const styles = StyleSheet.create({
  userListButton: {
    backgroundColor: 'black',
    padding: 8,
    margin: 12,
  },
  container: {
    padding: 10
  },
  controlRow: {
    flex: 0,
    backgroundColor: 'white',
    padding: 12,
    marginTop: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  formContainerStyle: {
    width: '50%'
    // backgroundColor: 'white'
  },
  formLabelStyle: {
    backgroundColor: 'white'
  },

});
