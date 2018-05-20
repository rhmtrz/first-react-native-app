import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import Home from './src/component/home/home';
import Splash from './src/component/splash';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'Splash',
    };

    console.log('Start Doing Some Tasks For About 3 Secconds');
    setTimeout(() => {
      console.log('Done Some Tasks For About 3 Secconds');
      this.setState({
        currentScreen: 'Home',
      });
    }, 3000);
  }

  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Home />;
    return mainScreen;
  }
}

AppRegistry.registerComponent('firstApp', () => Main);
