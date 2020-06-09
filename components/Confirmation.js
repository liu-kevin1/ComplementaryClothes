import React from "react";
import { ScrollView, View, StatusBar, StyleSheet, SafeAreaView, Button } from "react-native";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: props.navigation.state.params.classification,
      user: this.props.navigation.state.params.user,
    };
  }

  async getRecommendations() {

  }
  render() {
    return (
      <View >
        <SafeAreaView style={styles.statusBar}>
        </SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button onPress={this.getRecommendations.bind(this)} title="confirm"></Button>

        </View>

      </View >
    )
  }
}

const styles = StyleSheet.create({
  textConfirm: {
    alignSelf: "center",
    fontSize: 50,
  },
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33B8FF",
  },
});

export default Confirmation;
