import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SOUserList from '../components/SOUserList';

const mapStateToProps = state => ({
  userList: [] // thunk goes here
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SOUserList);
