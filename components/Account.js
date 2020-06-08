import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from './../firebase';
import Login from "./Login";
import Signup from "./Signup";


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.navigation.state.params.user,
        }
    }

    getUser() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/' + us).once('username');
    }
    
    render() {
        return (
            <View style = {{ flex: 1 }}>
                <SafeAreaView style={styles.statusBar}></SafeAreaView>
                <Text style = {{fontWeight: 'bold', alignSelf: 'center', marginTop: 10,fontSize: 20 }}>@Username</Text>
                <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 20, width: '85%'}}>
                    <View style = {{flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center'}}>
                        <Text style = {styles.info1}>?</Text>
                        <Text style = {styles.info2}>Pictures</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center'}}>
                        <Text style = {styles.info1}>?</Text>
                        <Text style = {styles.info2}>Streaks</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center'}}>
                        <Text style = {styles.info1}>?</Text>
                        <Text style = {styles.info2}>Friends</Text>
                    </View>
                </View>
                <View style = {styles.photoHeader}>
                    <Icon name = 'md-grid' size = {35}></Icon>
                </View>
                <ScrollView style = {styles.scroll}>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        width: "100%",
        height: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
    sub: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    info1: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    info2: {
        fontSize: 16,
    },
    photoHeader: {
        marginTop: 10,
        width: '105%',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#f0fffe',
        alignItems: 'center',
        paddingTop: 5,
    },
    scroll: {
        marginTop: 5,
    }
});

export default Account;