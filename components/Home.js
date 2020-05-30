import React from 'react';
import { View, Text, Stylesheet, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

export default class App extends React.Component{ 
    render() {
        return (
            <AppContainer/>
        );
    }
}

class Home extends React.Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style = {styles.head}>
                    <Text style = {{color:"#000"}}>Home</Text>
                </SafeAreaView>
                {/* <View style ={styles.navigation}>
                    <View style = {styles.nav1}>  /* I think I don't need this but I'm not sure/*
                        <TouchableHighlight style = {} onPress={}>
                            <Icon>
                            </Icon>
                            <Text style = {{color: "#000"}}>Home</Text>
                        </TouchableHighlight>
                    </View>
                    <View style = {styles.nav2}>
                        <TouchableHighlight>
                            <Icon>
                                
                            </Icon>
                            <Text style = {{color: "#000"}}>Camera</Text>
                        </TouchableHighlight>
                        
                    </View>
                    <View style = {styles.nav3}>
                        <TouchableHighlight>

                            <Icon>
                                
                            </Icon>
                            <Text style = {{color: "#000"}}>Library</Text>
                        </TouchableHighlight>
                    </View>

                </View> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",

    },
    head: {
        flex: 1,
        width: '100%',
        height: '15%',
        backgroundColor: "blue",
        justifyContent:" Center",
        alignItems: "center"
    },
    // navigation: {
    //     flex: 1,
    //     width: '100%',
    //     height: "15%",
    //     backgroundColor: "#DBF3FA",
    //     alignItems: "flex-end",
    //     justifyContent: "space-evenly",
    //     flexDirection: "row",
    // },
    // nav1: {
    //     flex: 1,
    //     alignItems: "center",
    // },
    // nav2: {
    //     flex: 1,
    //     alignItems: "center",
    // },
    // nav3: {
    //     flex: 1,
    //     alignItems: "center",
    // },
});

const bottomNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon name = "home" size = {30} color = {'#bde0eb'} />
                )
            }
        }
        CameraView: {
            screen: CameraView,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon name = "home" size = {30} color = {'#bde0eb'} />
                )
            }
        },
    },
    {
        initialRouteName: 'Home'
    }
)
const AppContainer = createAppContainer(bottomNavigator);

export default Home;