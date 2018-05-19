import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Splash extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Hello! this is Splash</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
