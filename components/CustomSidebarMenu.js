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
import { DrawerItems } from 'react-navigation-drawer';

export default class CustCustomSidebarMenu extends React.Component {
  render() {
    return (
      <View>
        <DrawerItems {...this.props} />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignupLoginScreen');
            firebase.auth().signOut();
          }}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
