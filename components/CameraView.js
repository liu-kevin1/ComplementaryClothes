import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CameraView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});    }

    render() {
        return (

            <View style = {{flex:1}}>
                <Camera style = {{flex: 1}} type = {this.state.type} ref = {ref => {this.camera = ref;}}>
                    <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
                        <TouchableOpacity style={{flex: 0.25, alignSelf: 'flex-end', alignItems: 'center' }}
                        onPress = {() => {
                            this.setState({type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back})
                        }}>
                        <Icon name="md-sync" size = {75} color="#FFFFFF"></Icon>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>

        );
    }
}

export default CameraView;
