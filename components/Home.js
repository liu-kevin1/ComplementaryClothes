import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';
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
                <SafeAreaView style = {styles.head}>
                    <Text style = {{color:"white", fontSize: 20}}>Home</Text>
                </SafeAreaView>
                <View style = {styles.cameraLink}>
                    <Text style={styles.name}>CompClothes</Text>
                    <TouchableOpacity onPress={this.goToCamera.bind(this)} style = {{alignItems: "center"}}>
                        <Icon name="md-shirt" size = {200} color="#33B8FF">
                        </Icon>
                        <Text style={styles.prompt}>Find a pairing. Get recommended.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        width: '100%',
        height: '8%',
        backgroundColor: "blue",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
    name: {
        color: "#33B8FF",
        fontSize: 50,
        alignSelf: "center"
    },
    cameraLink: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: "center",
    },
    prompt: {
        fontSize: 20
    },
    start: {
        fontSize: 20,
        color: "white"
    }
});


export default Home;