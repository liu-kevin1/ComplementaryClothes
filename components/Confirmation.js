import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: props.navigation.state.params.classification,
    };
  }

  getRecommendations() {
    /*call the recommendation ebay api here with the keyword in this.state.classification. this is th onpress of the confirm*/
    this.props.navigation.navigate("Recommended", {
      recommended: /*data we get back from recommendation api */ "",
    });
  }
  render() {
    return (
      <View>
        <SafeAreaView style={styles.statusBar}></SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}></View>
      </View>
    );
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
