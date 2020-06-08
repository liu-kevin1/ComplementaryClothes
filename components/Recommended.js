import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import RecommendedItem from './RecommendedItem';


class Recommended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendations: props.navigation.state.params.recommendations,
      user: this.props.navigation.state.params.user
    };
  }

  render() {
    <View style={{ alignItems: "center", justifyContent: "center" }}>
    </View>;
  }
}

export default Recommended;
