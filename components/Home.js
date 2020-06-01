import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableHighlight, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


class Home extends React.Component {    
    constructor(props){
        super(props);

    }
    goToCamera(){
        this.props.navigation.navigate('Camera')
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.statusBar}>
                </SafeAreaView>
                <View style = {styles.sub}>
                    <View style = {styles.cameraLink}>
                        <TouchableOpacity onPress={this.goToCamera.bind(this)} style = {{justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="md-shirt" size = {180} color="#33B8FF">
                            </Icon>
                            <Text style={styles.prompt}>Find a pairing. Get recommended!</Text>
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
        backgroundColor: '#E0FBFF',
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
        backgroundColor: '#E0FBFF',
        borderRadius: 20,
        borderColor: '#FFFFFF',
        borderWidth: 2.5,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    prompt: {
        fontSize: 18,
        color: '#000080',
        fontWeight: 'bold',
    },
    start: {
        fontSize: 20,
        color: "white"
    }
});


export default Home;