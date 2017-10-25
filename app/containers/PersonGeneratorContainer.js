import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PersonGenerator from '../components/PersonGenerator';

const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = (dispatch) => ({
  addNewPerson: (person) => {
    dispatch({
      type: 'ADD_NEW',
      person: person
    })
  },
  resetPeople: () => { dispatch({ type: 'RESET_PEOPLE'}) },
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonGenerator);
