import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from './../firebase';
import Login from "./Login";
import Signup from "./Signup";


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.state.params.user,
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={styles.statusBar}></SafeAreaView>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 10, fontSize: 20 }}>{'@' + this.state.user} </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, width: '85%' }}>
                    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={styles.info1}>?</Text>
                        <Text style={styles.info2}>Purchases</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={styles.info1}>?</Text>
                        <Text style={styles.info2}>Streaks</Text>
                    </View>
                </View>
                <View style={styles.photoHeader}>
                    <Icon name='md-grid' size={35}></Icon>
                </View>
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
        width: '100%',
        borderWidth: 0.5,
        backgroundColor: '#f0fffe',
        alignItems: 'center',
        paddingTop: 5,
    }
});

export default Account;