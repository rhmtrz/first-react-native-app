import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
  },
})
