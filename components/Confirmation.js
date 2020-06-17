import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView } from 'react-native';


class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: this.props.navigation.state.params.classification,
      user: this.props.navigation.state.params.user
    }

    this.getRecommendations()
  }

  async getRecommendations() {
    var urls = {
      pants: "https://www.parsehub.com/api/v2/projects/t3LXvgFShK6y/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
      shirts: "https://www.parsehub.com/api/v2/projects/tw8p9tJXSFT5/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
      shoes: "https://www.parsehub.com/api/v2/projects/tAkYL63zFrYr/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
      hats: "https://www.parsehub.com/api/v2/projects/ty4wWgwzAdTM/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
      socks: "https://www.parsehub.com/api/v2/projects/tswSoJj-ZgBt/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",

      necklace: "https://www.parsehub.com/api/v2/projects/t6BCzgpDmeiu/last_ready_run/data?api_key=tTMbQ11Q_Boi&format=json",
      ring: "https://www.parsehub.com/api/v2/projects/t5WhmCQr3VR_/last_ready_run/data?api_key=tTMbQ11Q_Boi&format=json",
      watch: "https://www.parsehub.com/api/v2/projects/tTrL7tTBwYjP/last_ready_run/data?api_key=tTMbQ11Q_Boi&format=json",
      bracelet: "https://www.parsehub.com/api/v2/projects/t4H5pWYomZbV/last_ready_run/data?api_key=tTMbQ11Q_Boi&format=json"
    }

    var url_pairing = {
      top: urls["pants"],
      pants: urls["shoes"],
      shoes: urls["socks"],
      socks: urls["hats"],
      hats: urls["shirts"],

      ring: urls["bracelet"],
      necklace: urls["shirts"],
      sunglasses: urls["hats"],
      bag: urls["watch"],
      necktie: urls["shirts"],
      earrings: urls["ring"],
      "men's watch": urls["ring"],
      bracelet: urls["ring"]
    }

    var url = url_pairing[this.state.classification.toLowerCase()];
    console.log(this.state.classification.toLowerCase());
    if (typeof url === 'undefined') {
      url = urls["shirts"];
    }

    var text;
    var request = await (fetch(url)
      .then(response => response.text())
      .then(data => text = data)
      .catch(e => console.log(e)));
    //console.log(text);
    var info = JSON.parse(text);
 
    var props_navigation = this.props.navigation
    if (info != undefined) {
      var values = ["name", "image", "price_url"];
      var return_count = 10;
      var recommended_items = [];

      var info_items_length = Object.keys(info.items).length;

      // Sort through info.items and pick out only items that have all the necessary data
      for (var i = 2; i < info_items_length; i++) {
        var validItem = true;
        for (var j = 0; j < values.length; j++) {
          if (info.items[i] == undefined || info.items[i][values[j]] == undefined) {
            validItem = false;
            j = values.length;
          }
        }
        if (validItem) {
          recommended_items.push(info.items[i]);
          if (recommended_items.length == return_count) {
            i = info_items_length;
          }
        }
      }

      props_navigation.navigate('Recommended', {
        user: this.state.user,
        recommendations: recommended_items
      });
    }


  }

  render() {
    return (
      <View >
        <SafeAreaView style={styles.statusBar}>
        </SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textConfirm: {
    alignSelf: 'center',
    fontSize: 50,
  },
  statusBar: {
    width: '100%',
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33B8FF",
  },
})

export default Confirmation;