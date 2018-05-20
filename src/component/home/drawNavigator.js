import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import ScreenOne from './screenOne';

const AppDrawerNavigator = new DrawerNavigator({
  ScreenOne: { screen: ScreenOne },

})

export default AppDrawerNavigator;

const styles = StyleSheet.create({

})
