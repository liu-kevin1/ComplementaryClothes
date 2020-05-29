import React from 'react';
import * as Permissions from 'expo-permissions';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

// const Clarifai = require('clarifai');
// const app = new Clarifai.App({
// apiKey: 'YOUR_API_KEY'
// });

class Home extends React.Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.head}>
                    <Text style = {{color:"#000"}}>Home</Text>
                </SafeAreaView>
                <View style ={styles.navigation}>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",

    },
    head: {
        flex: 1,
        width: '100%',
        height: '15%',
        backgroundColor: "blue",
        justifyContent:" Center",
        alignItems: "center"
    },
    navigation: {
        flex: 1,
        width: '100%',
        height: "15%",
        backgroundColor: "#DBF3FA",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        flexDirection: "row",
    }

});

export default Home;