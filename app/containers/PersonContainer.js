import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PersonCell from '../components/PersonCell.js';


const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  uuid: state.uuid,
  favoriteMartialArt: state.favoriteMartialArt,
  swimmingConfidence: state.swimmingConfidence
})

const mapDispatchToProps = (dispatch) => ({
  addNew: (person) => {dispatch({type: 'ADD_NEW', person: person}) } ,
  resetPeople: () => { dispatch({ type: 'RESET_PEOPLE'}) },
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonCell);
