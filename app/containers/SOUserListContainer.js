import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SOUserList from '../components/SOUserList';
import {usersFetchData} from '../actions/SOUserListActions';

const mapStateToProps = state => ({
  users: state.users,
  hasErrored: state.usersHasErrored,
  isLoading: state.usersIsLoading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(usersFetchData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SOUserList);
