import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, TextInput, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from './../firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        this.state = {
            username: '',
            password: '',
        }
        this.goHome = this.goHome.bind(this);
    }
    goHome() {
        this.props.navigation.navigate("Home",
            {
                user: this.state.username,
            }
        );
    }
    async checkLogin() {
        console.log(firebase.database().ref('/' + this.state.username).on(
            'value',
            querySnapShot => {
                let data = querySnapShot.val()
                let items = { ...data }
                console.log(items)
                if (items['password'] == this.state.password) {
                    this.goHome()

                }
                else {
                    Alert.alert("The username or password is incorrect. ")

                }
            }
        ))
    }
    signup() {
        this.props.navigation.navigate('Signup');
    }
    render() {
        return (
            <View style={styles.container} >
                <SafeAreaView style={styles.statusBar}></SafeAreaView>
                <View style={styles.sub}>
                    <View  style = {[styles.signuporloginView, {backgroundColor: 'white', borderColor: '#588FC3'}]}>
                        <TouchableOpacity onPress={this.signup.bind(this)} style = {styles.signuporloginButton}>
                            <Text style={{ fontSize: 30, color: '#588FC3'}}>
                                Signup Instead
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.textBox}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Username"
                        placeholderTextColor='white'
                    />
                    <TextInput
                        style={styles.textBox}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor='white'
                    />
                    <View style = {styles.signuporloginView}>
                        <TouchableOpacity onPress={this.checkLogin.bind(this)} style = {styles.signuporloginButton}>
                            <Text style={{ fontSize: 30, color: 'white' }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    textBox: {
        height: 50, 
        width: '85%',
        borderRadius: 40,
        marginBottom: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#7AD7f0',
        color: '#ffffff',
    },
    statusBar: {
        width: "100%",
        height: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
    signuporloginView: {
        marginBottom: 80,
        backgroundColor: "#588FC3",
        padding: 5,
        borderRadius: 10,
        borderColor: "#FFFFFF",
        borderWidth: 2.5,
        alignSelf: "center",
        justifyContent: "center",
    },
    signuporloginButton: {
        alignSelf: "center",
        justifyContent: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
})

export default Login;