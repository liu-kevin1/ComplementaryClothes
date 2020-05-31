import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RecommendedItem from './RecommendedItem';

// clarifai api setup
const Clarifai = require('clarifai');
const app = new Clarifai.App({
apiKey: 'YOUR_API_KEY'
});

class CameraView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photoOptions: {
                base64: true
            },
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }
    async pictureAndPredict() {

        if(this.camera){

            let picture = await this.camera.takePictureAsync(this.state.photoOptions);

            app.models.predict(Clarifai.APPAREL_MODEL, picture.base64).then(
                (response) => {
                    console.log(response)
                }
            
            ).catch(
                error => {
                    console.log(error)
                }
            )
        }
        this.props.navigation.navigate('Confirmation')
    }

    render() {
        return (

            <View style = {{flex:1}}>
                <Camera style = {{flex: 1}} type = {this.state.type} ref = {ref => {this.camera = ref;}}>
                    <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
                        <TouchableOpacity style={{flex: 1, alignSelf: 'flex-end', alignItems: 'center' }} onPress = {this.pictureAndPredict.bind(this)}>
                        <Icon name="md-camera" size = {100} color="#FFFFFF"></Icon>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}

export default CameraView;
