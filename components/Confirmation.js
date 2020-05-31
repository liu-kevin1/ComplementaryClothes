import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font, AppLoading } from "expo";

class Confirmation extends React.Component{

    render () {
        return (
            <View>
                <Text style = {styles.textConfirm}>
                    Find a pairing. Get recommended.
                </Text>
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