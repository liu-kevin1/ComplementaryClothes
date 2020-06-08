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

        this.getRecommendations()
    }

    async getRecommendations() {
        /*call the api to get products here with the keyword in this.state.classification. this is the onpress of the confirm*/
        
        var url = "https://www.parsehub.com/api/v2/projects/t3LXvgFShK6y/last_ready_run/data?api_key=tBbTET_aiw6F&format=json"

        var text;
        var request = await (fetch(url)
        .then(response => response.text())
        .then(data => text = data)
        .catch(e => console.log(e)));

        var info = JSON.parse(text);

        var props_navigation = this.props.navigation
        if (info != undefined) {
            // var entries = info.split("},");
            // console.log("for loop");
            // for (var i = 0; i < 5; i++) {
            //     var data = entries[i].split(",");
            //     for (var j = 0; j < data.length; j++) {
            //         var values = data[j].split(': ');
            //         var key = values[0];
            //         var value = values[1];
            //         console.log(key);
            //     }
            // } 
            //console.log(text);
            console.log(info.pants[1].name); 

            props_navigation.navigate('Recommended', {
                recommendations: info.pants[1] /*data we get back from recommendation api */
            })
        }
        
        
    }

    render () {
        return (
            <View >
                <SafeAreaView style = {styles.statusBar}>
                </SafeAreaView>
                <View style = {{alignItems: "center", justifyContent: "center"}}>
                    
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
