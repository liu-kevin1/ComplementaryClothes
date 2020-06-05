import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, Button } from "react-native";
import RecommendedItem from "./RecommendedItem";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: props.navigation.state.params.classification,
      user: props.navigation.state.params.user,
    };
  }

  async getRecommendations() {
    /*call the recommendation ebay api here with the keyword in this.state.classification. this is th onpress of the confirm*/
    // Tutorial code start
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=KevinLiu-CompClo-SBX-a2eb84eea-0ca6a20e";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&" + 'pants';
    url += "&paginationInput.entriesPerPage=3";
    console.log(url)
    console.log("test1_1")
    var test = fetch(url).then(response => console.log(response)).catch(e => console.log(e));
    console.log(test);
    console.log("test2")

    this.props.navigation.navigate('Recommended', {
      recommended: /*data we get back from recommendation api */ '',
      user: this.state.user
    });
  }
  render() {
    return (
      <View >
        <SafeAreaView style={styles.statusBar}>
        </SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button onPress={this.getRecommendations.bind(this)} title="hello"></Button>
        </View>
      </View>
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
