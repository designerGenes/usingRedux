import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Colors, Masonry} from '../config';

const ENDPOINT_URL = 'https://api.stackexchange.com/2.2/users?site=stackoverflow';

// Stack Overflow User JSON model
// { badge_counts: { bronze: 892, silver: 805, gold: 128 },
//     account_id: 9867,
//     is_employee: false,
//     last_modified_date: 1508188590,
//     last_access_date: 1508880194,
//     age: 44,
//     reputation_change_year: 39288,
//     reputation_change_quarter: 3337,
//     reputation_change_month: 3337,
//     reputation_change_week: 565,
//     reputation_change_day: 30,
//     reputation: 455266,
//     creation_date: 1221783887,
//     user_type: 'registered',
//     user_id: 18393,
//     accept_rate: 82,
//     location: 'New York, NY',
//     website_url: 'http://www.cforcoding.com',
//     link: 'https://stackoverflow.com/users/18393/cletus',
//     profile_image: 'https://www.gravatar.com/avatar/2f364c2e36b52bc80296cbf23da8b231?s=128&d=identicon&r=PG',
//     display_name: 'cletus' } ],

export default class SOUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      hasErrored: false,
      isLoading: true,
    };
  }

  loadingMessageComponent() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingMessageText}>  Loading... </Text>
      </View>
    )
  }

  errorMessageComponent() {
    return (
      <View style={styles.container}>
        <Text style={styles.errorMessageText}>  Error!  Something bad happened! </Text>
      </View>
    )
  }

  renderUserCell(user) {
    var user = user.item;
    var badgeCounts = user.badge_counts;
    return(
      <View style={{backgroundColor: 'white', flex: 1, padding: 8, width: '100%'}}>
        <View style={styles.row}>
          <Text style={styles.nameText}> {user.display_name} </Text>
        </View>
        <Text style={styles.locationText}> {user.location} </Text>
        <View style={[styles.row, {backgroundColor: 'black'}]}>
          <Text style={[styles.badgeCountText, {color: 'white', fontSize: 22, marginRight: 8}]}> Badges: </Text>
          <Text style={[styles.badgeCountText, {color: Colors.gold}]}> {badgeCounts.gold} </Text>
          <Text style={[styles.badgeCountText, {color: 'gray'}]}> {badgeCounts.silver} </Text>
          <Text style={[styles.badgeCountText, {color: Colors.bronze}]}> {badgeCounts.bronze} </Text>
        </View>
      </View>
    )
  }

  componentDidMount() {
    this.fetchData(ENDPOINT_URL);
  }

  fetchData(url) {
    return fetch(url)
            .then( (response) => response.json() )
            .then((responseJSON) => this.setState({users: responseJSON.items, isLoading: false, hasErrored: false}))
            .catch(() => this.setState({hasErrored: true, isLoading: false}));
  }

  render() {
    if (this.state.hasErrored) {
      return this.errorMessageComponent()
    }
    if (this.state.isLoading) {
      return this.loadingMessageComponent()
    }
    return(
      <View style={[styles.container, { padding: 0, margin: 16, marginTop: 57, alignItems: 'flex-start'}]}>
        <Text style={[styles.badgeCountText, {margin: 12, padding: 10}]}> SO Users </Text>
        <View style={{width: '100%'}}>
          <FlatList
            data={this.state.users}
            renderItem={this.renderUserCell}
            keyExtractor={(item, index) => item.account_id} />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  nameText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 20,
    color: 'black'
  },
  badgeCountText: {
    color: 'white',
    backgroundColor: 'black',
    padding: 4,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  errorMessageText: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    margin: 8
  },
  loadingMessageText: {
    fontSize: 30,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
    margin: 8
  }
});
