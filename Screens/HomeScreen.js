import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allRequest: [],
    };
    this.requestRef = null;
  }

  getAllRequests = () => {
    this.requestRef = db
      .collection('ExchangeRequests')
      .onSnapshot((snapshot) => {
        var allRequests = [];
        snapshot.forEach((doc) => {
          allRequests.push();
          doc.data();
        });
        this.setState({
          allRequest: allRequests,
        });
      });
  };

  keyExtractor = (item, index) => {
    index.toString();
  };

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.itemName}
        subtitle={item.description}
        rightElement={
          <TouchableOpacity>
            <Text>EXCHANGE</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  componentDidMount = () => {
    this.getAllRequests();
  };

  componentWillUnmount = () => {
    this.requestRef();
  };

  render() {
    return (
      <View>
        this.state.allRequest.length === 0 ? (<Text>List Of All Barter</Text>) :
        (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.allRequest}
          renderItem={this.state.renderItem}
        />
        )
      </View>
    );
  }
}
