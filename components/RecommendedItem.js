import React from 'react';
import { StyleSheet, View, Image, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


class RecommendedItem extends React.Component{

    render () {
        const { img_url, url, title } = this.props;
        return (
            <View style = {styles.background}>
                <Image style = {{width: '90%', height: '50%', borderRadius: 10, marginTop: 20, marginBottom: 20}}source= {{uri: img_url}}/>
                <Text onPress={() => Linking.openURL(url)} style={styles.title}>{title}</Text>
                <TouchableOpacity style={{flex: 1, alignSelf: 'flex-end', alignItems: 'center'}} onPress={() => Linking.openURL(url)}>
                    <Icon name="md-cart" size = {150} color="#33B8FF"></Icon>
                    <Text style={{color: "#33B8FF", fontSize: 20}}>Purchase</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    background : {
        width: '97.5%',
        height: '85%',
        borderRadius: 20,
        backgroundColor: '#c3c9c9',
        alignSelf: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: "black"
    },

})
export default RecommendedItem;