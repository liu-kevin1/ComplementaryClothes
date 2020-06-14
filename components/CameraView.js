import React from "react";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


// clarifai api setup
const Clarifai = require("clarifai");
const app = new Clarifai.App({
<<<<<<< HEAD
  apiKey: "b773aaaf124243599f504e95cf707881",
=======
  apiKey: "ad404cfb185144f28d06ef50718948f0",
>>>>>>> 756190a11c0b5712786037e01f71d27ff89f1d24
});

class CameraView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photoOptions: {
        base64: true,
      },
      user: this.props.navigation.state.params.user,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async pictureAndPredict() {
    if (this.camera) {
      let picture = await this.camera.takePictureAsync(this.state.photoOptions);
      app.models
        .predict(Clarifai.APPAREL_MODEL, picture.base64)
        .then((response) => {
          console.log(response["outputs"][0]["data"]["concepts"][0]["name"]);
          this.props.navigation.navigate("Confirmation", {
            classification:
              response["outputs"][0]["data"]["concepts"][0]["name"],
            user: this.state.user
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.statusBar}></SafeAreaView>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, alignSelf: "flex-end", alignItems: "center" }}
              onPress={this.pictureAndPredict.bind(this)}
            >
              <Icon name="md-camera" size={100} color="#33B8FF"></Icon>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33B8FF",
  },
});
export default CameraView;
