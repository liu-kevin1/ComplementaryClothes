import React from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsC52_gqDR8w6Bv1C_selUrWBIEQxiMig",
  authDomain: "artfash-138e9.firebaseapp.com",
  databaseURL: "https://artfash-138e9.firebaseio.com",
  projectId: "artfash-138e9",
  storageBucket: "artfash-138e9.appspot.com",
  messagingSenderId: "362366799582",
  appId: "1:362366799582:web:6573c90e65849cc6373c4f",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class RecommendedItem extends React.Component {
  purchase() {
    const { img_url, url, title } = this.props;

    firebase.database().ref("purchases/").set({
      img_url: img_url,
      url: url,
      title: title,
    });
    Linking.openURL(url);
  }
  render() {
    const { img_url, url, title } = this.props;
    return (
      <View style={styles.background}>
        <Image
          style={{
            width: "90%",
            height: "50%",
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 20,
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
          <Icon name="md-cart" size={150} color="#33B8FF"></Icon>
          <Text style={{ color: "#33B8FF", fontSize: 20 }}>Purchase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: "97.5%",
    height: "85%",
    borderRadius: 20,
    backgroundColor: "#c3c9c9",
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "black",
  },
});
export default RecommendedItem;
