import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


class RecommendedItem extends React.Component{

    render () {
        // const { url, title } = this.props;
        return (
            <View style = {styles.background}>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    background : {
        width: '97.5%',
        height: '75%',
        borderRadius: 20,
        backgroundColor: '#c3c9c9',
        alignSelf: 'center'
    }

})
export default RecommendedItem;