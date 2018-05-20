import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Screen Two</Text>
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
