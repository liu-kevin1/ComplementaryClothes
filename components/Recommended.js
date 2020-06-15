import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import RecommendedItem from './RecommendedItem';
import { Constants } from 'expo-camera';
import CameraView from './CameraView';

class Recommended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendations: props.navigation.state.params.recommendations,
      user: this.props.navigation.state.params.user
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.text}>Here are your recommendations!</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <Icon name="md-return-left" size={40} style={{ marginLeft: 20, marginBottom: -10, color: '#000080' }} />
          </TouchableOpacity>
          <View style={styles.container}>
            <RecommendedItem user={this.state.user} url={this.state.recommendations[0].price_url} img_url={this.state.recommendations[0].image} title={this.state.recommendations[0].name}></RecommendedItem>
            <RecommendedItem user={this.state.user} url={this.state.recommendations[1].price_url} img_url={this.state.recommendations[1].image} title={this.state.recommendations[1].name}></RecommendedItem>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: "90%",
    height: "85%",
    borderRadius: 20,
    backgroundColor: "#c3c9c9",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    fontSize: 20,
    color: "#000080",
    backgroundColor: "#33B8FF",
    textAlign: 'center'
  }
});

export default Recommended;