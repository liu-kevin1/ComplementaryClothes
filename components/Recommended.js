import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import RecommendedItem from './RecommendedItem';
import { Constants } from 'expo-camera';


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
          <ScrollView contentContainerStyle = {styles.container}>

            <Text style = {styles.text}>Here are your recommendations!</Text>

            <View style = {styles.container}>
                <RecommendedItem url={this.state.recommendations[0].price_url} img_url={this.state.recommendations[0].image} title={this.state.recommendations[0].name}></RecommendedItem>
                <RecommendedItem url={this.state.recommendations[1].price_url} img_url={this.state.recommendations[1].image} title={this.state.recommendations[1].name}></RecommendedItem>
            </View>
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
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
    fontSize: 22,
    color: "#000080",
    backgroundColor: "#33B8FF"
  }
});

export default Recommended;
