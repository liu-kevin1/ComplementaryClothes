import React from 'react';
import * as Permissions from 'expo-permissions';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Clarifai = require('clarifai');
const app = new Clarifai.App({
apiKey: 'YOUR_API_KEY'
});

class Home extends React.Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = Stylesheet.create({

});

export default Home;