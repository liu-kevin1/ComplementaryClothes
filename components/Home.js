import React from 'react';
import * as Permissions from 'expo-permissions';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
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
                    <Text style = {{color="#000"}}>Home</Text>
                </SafeAreaView>

            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",

    },
    head: {
        width: '100%',
        height: '10%',
        backgroundColor: "blue",
        justifyContent:" Center",
        alignItems: "center"
    }

});

export default Home;