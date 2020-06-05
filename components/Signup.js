import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";
import firebase from './../firebase';



class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uername: '',
            password: '',
        }
    }
    goHome() {
        this.props.navigation.navigate("Home",
            {
                user: this.state.username
            }

        );
    }
    signup() {
        firebase.database().ref("/" + this.state.username).set({
            password: this.state.password
        });
        this.props.navigation.navigate("Home",
            {
                user: this.state.username,
            }
        );
    }
    render() {
        return (
            <View style={styles.container} >
                <SafeAreaView style={styles.statusBar}></SafeAreaView>
                <View style={styles.sub}>
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: "100%" }}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Username"
                    />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: "100%" }}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholder="password"
                    />
                    <TouchableOpacity onPress={this.signup.bind(this)}>
                        <Text style={{ fontSize: 30 }}>
                            Signup
                        </Text>
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
    sub: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        width: "100%",
        height: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
})

export default Signup;