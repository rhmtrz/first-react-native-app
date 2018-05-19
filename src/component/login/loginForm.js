import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
 } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  login = () => {
    alert('Text');
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(username) => this.setState({username})}
          style={styles.input}/>
        <TextInput
          placeholder="Password"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          onPress={(password) => this.setState({password})}
          style={styles.input}/>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    width: 300,
    color: '#FFF',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  }
})
