import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import CameraView from './CameraView';


class Home extends React.Component {    
    constructor(props){
        super(props);

    }
    goToCamera(){
        this.props.navigation.navigate('Camera')
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
                }}>
                <View style={styles.container}>
                    <SafeAreaView style = {styles.statusBar}>
                    </SafeAreaView>
                    <View style = {styles.sub}>
                        <View style = {styles.cameraLink}>
                            <TouchableOpacity onPress={this.goToCamera.bind(this)} style = {{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style = {{fontSize: 20, color: "#000080", fontWeight: 'bold'}}>What is CompClo?</Text>
                                <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                                    <Icon name="md-shirt" size = {100} color="#33B8FF" style={{marginRight: 20}}/>
                                    <Icon name="md-arrow-round-forward" size = {100} color="#ECECEC" style={{marginRight: 20}}/>
                                    <Icon name="md-search" size = {100} color="salmon"/>
                                </View>
                                <Text style={styles.prompt}>Take a picture. Find a pairing. Get recommended!</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                            <View style = {styles.smallButton}>
                                <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name="md-person" size = {60} color = "#33B8FF">
                                    </Icon>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.smallButton}>
                                <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon name="md-share" size = {60} color = "#33B8FF">
                                    </Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <CameraView/>
            </Swiper>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },
    sub:{
        justifyContent:"center",
        alignItems: "center",
        flex: 1,
    },
    statusBar: {
        width: '100%',
        height: StatusBar.currentHeight,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
    name: {
        color: "#33B8FF",
        fontSize: 48,
        alignSelf: "center"
    },
    cameraLink: {
        marginTop: 20,
        paddingBottom: 10,
        backgroundColor: '#f0fffe',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        borderWidth: 2.5,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    smallButton: {
        margin: 10,
        marginTop: 10,
        backgroundColor: '#f0fffe',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        borderWidth: 2.5,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    prompt: {
        fontSize: 14,
        color: '#000080',
    },
    start: {
        fontSize: 20,
        color: "white",
    }
});


export default Home;