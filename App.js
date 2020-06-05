import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CameraView from './components/CameraView';
import Confirmation from './components/Confirmation';

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
        headerShown: true
      }
    }
    /*
    Recommended: {
      screen: Recommended,
      navigationOptions : {
        headerShown: false
      }
    }
    */
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
