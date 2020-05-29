import React from 'react';
import { View, Text, Stylesheet, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


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
                <View style ={styles.navigation}>
                    <View style = {styles.nav1}>
                        {/* <Icon>

                        </Icon> */}
                        <Text style = {{color: "#000"}}>Home</Text>
                    </View>
                    <View style = {styles.nav2}>
                        {/* <Icon>
                            
                        </Icon> */}
                        <Text style = {{color: "#000"}}>Camera</Text>
                    </View>
                    <View style = {styles.nav3}>
                        {/* <Icon>
                            
                        </Icon> */}
                        <Text style = {{color: "#000"}}>Library</Text>

                    </View>

                </View>

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
    navigation: {
        flex: 1,
        width: '100%',
        height: "15%",
        backgroundColor: "#DBF3FA",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    nav1: {
        flex: 1,
        alignItems: "center",
    },
    nav2: {
        flex: 1,
        alignItems: "center",
    },
    nav3: {
        flex: 1,
        alignItems: "center",
    },

});

export default Home;