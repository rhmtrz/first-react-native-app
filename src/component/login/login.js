import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button,
  KeyboardAvoidingView
 } from 'react-native';

import LoginForm from './loginForm';

export default class login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')} />
          <Text style={styles.title}>Hello First App</Text>
          <Button title='Complete Login' onPress={() => this.props.navigation.navigate('Login')}/> 
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
  }
})
