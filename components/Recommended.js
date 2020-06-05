import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import RecommendedItem from './RecommendedItem';

    this.state = {
      recommendations: props.navigation.state.params.recommendations,
    };
  }
  render() {
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <RecommendedItem url="" img_url="" title=""></RecommendedItem>
    </View>;
  }
}

export default Recommended;
