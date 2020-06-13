import React from "react";
import { StyleSheet, View, Image, Text, Linking, ScrollView, Button, Share } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from './../firebase';
import * as Sharing from 'expo-sharing';

class RecommendedItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  purchase() {
    const { img_url, url, title } = this.props;
    const time = Date.now()
    firebase.database().ref("/" + this.state.user + '/purchases/').update({
      [time]: {
        img_url: img_url,
        url: url,
        title: title,
      }
    });

    Linking.openURL(url);
  }

  openShareDialogAsync = async () => {
    try {
      const results = Share.share({
        message: "I used the CompClo app to buy this piecee: " + this.props.url + " Try it out yourself!"
      });
    }
    catch (error) {
      alert(error.message)
    }
  };
  render() {
    const { img_url, url, title } = this.props;
    return (

      <View style={styles.background}>
        <TouchableOpacity onPress={this.openShareDialogAsync}>
          <Text>Share</Text>
        </TouchableOpacity>
        <Image
          style={{
            width: '90%',
            height: '50%',
            borderRadius: 10,
            marginTop: 15,
            marginBottom: 15,
          }}
          source={{ uri: img_url }}
        />
        <Text onPress={() => Linking.openURL(url)} style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity
          style={{ flex: 1, alignSelf: "flex-end", alignItems: "center" }}
          onPress={this.purchase.bind(this)}
        >
          <Icon name="md-cart" size={75} color="#33B8FF"></Icon>
          <Text style={{ color: "#33B8FF", fontSize: 25 }}>Purchase</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: "97.5%",
    height: 'auto',
    borderRadius: 20,
    backgroundColor: "#c3c9c9",
    alignItems: "center",
    margin: 20,
    flexDirection: "column",
    justifyContent: 'flex-start',
    flex: 1
  },
  title: {
    fontSize: 25,
    color: "black",
  },
});
export default RecommendedItem;