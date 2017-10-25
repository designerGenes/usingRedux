import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PersonList from '../components/PersonList';


const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps)(PersonList);
