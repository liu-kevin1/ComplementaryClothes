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
                <Text style={styles.name}>CompClothes</Text>
                <View>
                    <TouchableOpacity style={{alignItems: 'center', justifyContent:"center", alignSelf: "center"}} onPress={this.goToCamera.bind(this)}>
                        <Icon name="md-shirt" size = {200} color="#33B8FF" style={{alignItems: 'center', justifyContent:"center"}}>
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
        justifyContent:"center",
        alignItems: "center",
    },
    name: {
        color: "#33B8FF",
        fontSize: 50,
        alignSelf: "center"
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