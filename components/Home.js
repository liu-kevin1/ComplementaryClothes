import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import CameraView from "./CameraView";
import Account from "./Account";
import firebase from './../firebase';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      purchases: [],
      isModal: false,
      streaks: 0,
    }
  }

  

  goToCamera() {
    this.props.navigation.navigate("Camera",
      {
        user: this.state.user,
      }
    );
  }
  goToAccount() {
    this.props.navigation.navigate("Account",
      {
        user: this.state.user,
      }
    );
  }

  componentDidMount() {
    firebase.database().ref('/' + this.state.user + '/purchases/').on(
        'value',
        querySnapShot => {
            let data = querySnapShot.val()
            let i;
            if (! (data === null)) {
              for (i = data.length() - 1; i >= 1; i--) {
                  if (Math.floor(data[i] / 86400) == Math.floor(data[i - 1] / 86400) + 1)
                      this.setState({ streaks:  data.length() })
                  else if (Math.floor(data[i] / 86400) >= Math.floor(data[i - 1] / 86400) + 1)
                      this.setState({ streaks: data.length() - i - 1})
              }
            }
            else {
              this.state.streaks = 0;
            }
        }
    )
  }

  render() {
    return (
      <Swiper
        loop={false}
        dotStyle={{
          width: 4,
          height: 4,
          marginBottom: -30,
        }}
        activeDotStyle={{
          width: 8,
          height: 8,
          marginBottom: -30,
        }}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.statusBar}></SafeAreaView>
          <View style={styles.sub}>
            <Modal
            animationType="slide"
            style={styles.modal}
            transparency={true}
            visible={this.state.isModal}>
              <Text>kirb egg</Text>
              <TouchableOpacity onPress={() => this.setState({ isModal: false })}>
                <Text>spleen kirb egg</Text>
              </TouchableOpacity>
            </Modal>
            <ImageBackground
              source = {require('./fire.png')}
              style = {{width: 120, height: 120, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}
            >
              <Text style = {{marginLeft: 2, marginTop: 45, fontSize: 30, fontWeight: 'bold'}}>{this.state.streaks}</Text>
            </ImageBackground>
            <View style={styles.cameraLink}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={styles.largeText}
                >
                  What is CompClo?
                </Text>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <Icon
                    name="md-shirt"
                    size={100}
                    color="#33B8FF"
                    style={{ marginRight: 20 }}
                  />
                  <Icon
                    name="md-arrow-round-forward"
                    size={100}
                    color="#ECECEC"
                    style={{ marginRight: 20 }}
                  />
                  <Icon name="md-search" size={100} color="salmon" />
                </View>
                <Text style={styles.prompt}>
                  Take a picture. Find a pairing. Get recommended!
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <View style={styles.smallButton}>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                  onPress={() => this.setState({ isModal: true })}
                >
                  <Icon name="md-person" size={60} color="#33B8FF"></Icon>
                </TouchableOpacity>
              </View>
              <View style={styles.smallButton}>
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Icon name="md-share" size={60} color="#33B8FF"></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
        <CameraView navigation={this.props.navigation} />
        <Account navigation={this.props.navigation} />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sub: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    flex: 1,
  },
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33B8FF",
  },
  name: {
    color: "#33B8FF",
    fontSize: 48,
    alignSelf: "center",
  },
  cameraLink: {
    marginTop: 20,
    paddingBottom: 10,
    backgroundColor: "#f0fffe",
    borderRadius: 20,
    borderColor: "#FFFFFF",
    borderWidth: 2.5,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
  },
  smallButton: {
    margin: 10,
    marginTop: 10,
    backgroundColor: "#f0fffe",
    borderRadius: 20,
    borderColor: "#FFFFFF",
    borderWidth: 2.5,
    width: "45%",
    alignSelf: "center",
    justifyContent: "center",
  },
  prompt: {
    fontSize: 14,
    color: "#000080",
  },
  start: {
    fontSize: 20,
    color: "white",
  },
  largeText: {
    fontSize: 20,
    color: "#000080",
    fontWeight: "bold"
  },
  recents: {
    backgroundColor: 'red',
    paddingBottom: 10,
    backgroundColor: "#f0fffe",
    borderRadius: 20,
    borderColor: "#FFFFFF",
    borderWidth: 2.5,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: 'white',
    padding: 50,
    margin: 50,
    borderRadius: 10,
    borderColor: 'white',
  }
});

export default Home;
