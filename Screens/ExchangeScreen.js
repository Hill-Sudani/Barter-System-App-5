import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import db from '../Config';

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      description: '',
      username: firebase.auth().currentUser.email,
    };
  }

  addItem = async (itemName, description) => {
    db.collection('ExchangeRequests').add({
      user: this.state.username,
      itemName: itemName,
      description: description,
    });
    this.setState({
      itemName: '',
      description: '',
    });
    return Alert.alert('Item Ready To Exchange', '', {
      text: 'ok',
      onPress: () => {
        this.props.navigation.navigate('HomeScreen');
      },
    });
  };

  render() {
    return (
      <View>
        <KeyboardAvoidingView>
          console.log(this.state.username);
          <TextInput
            placeholder="Item Name"
            onChangeText={(text) => {
              this.setState({
                itemName: text,
              });
            }}
            value={this.state.itemName}
          />
          <TextInput
            placeholder="Item Description"
            onChangeText={(text) => {
              this.setState({
                description: text,
              });
            }}
            value={this.state.description}
          />
          <TouchableOpacity
            onPress={this.addItem(this.state.itemName, this.state.description)}
            style={{ marginTop: '40%' }}>
            <Text>ADD ITEM</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
