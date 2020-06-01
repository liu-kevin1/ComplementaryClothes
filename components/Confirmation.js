import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font, AppLoading } from "expo";

class Confirmation extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            classification: props.navigation.state.params.classification
        }
    }
    render () {
        return (
            <View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textConfirm: {
        alignSelf: 'center',
        fontSize: 50,
    }
})

export default Confirmation;