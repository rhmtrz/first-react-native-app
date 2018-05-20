import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './../login/login';
import ScreenOne from './screenOne';
import Signup from './../signup/signup';
import { StackNavigator } from 'react-navigation';


export default class Home extends Component {
  render() {
    return(
        <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new StackNavigator({
  ScreenOne: { screen: ScreenOne },
  Signup: { screen: Signup },
  Login: { screen: Login },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});
