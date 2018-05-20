import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends Component {

  static navigationOption = {
    header: 'none',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Screen One</Text>
        <Button title="Log in" onPress={() => this.props.navigation.navigate('Login')}/>
        <Button title="Sign up" onPress={() => this.props.navigation.navigate('Signup')}/>
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
