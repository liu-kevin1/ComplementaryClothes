import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CameraView from './components/CameraView';
import Confirmation from './components/Confirmation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Recommended from './components/Recommended';

const AppNavigator = createStackNavigator(
  {
    Camera: {
      screen: CameraView,
      navigationOptions: {
        headerShown: false
      }
    },
    Confirmation: {
      screen: Confirmation,
      navigationOptions: {
        headerShown: false
      }
    },

    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      }
    },

    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    },

    Recommended: {
      screen: Recommended,
      navigationOptions: {
        headerShown: false
      }
    },

    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false
      }
    }

  },
  {
    initialRouteName: 'Confirmation',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
