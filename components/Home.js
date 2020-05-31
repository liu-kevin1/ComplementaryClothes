import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraView from './CameraView';
import Confirmation from './Confirmation';

class Home extends React.Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.contaicner}>
                <SafeAreaView style = {styles.head}>
                    <Text style = {{color:"white", fontSize: 20}}>Home</Text>
                </SafeAreaView>
                {/* // <View style ={styles.navigation}>
                //     <View style = {styles.nav1}>  /* I think I don't need this but I'm not sure/*
                //         <TouchableHighlight style = {} onPress={}>
                //             <Icon>
                //             </Icon>
                //             <Text style = {{color: "#000"}}>Home</Text>
                //         </TouchableHighlight>
                //     </View>
                //     <View style = {styles.nav2}>
                //         <TouchableHighlight>
                //             <Icon>
                                
                //             </Icon>
                //             <Text style = {{color: "#000"}}>Camera</Text>
                //         </TouchableHighlight>
                        
                //     </View>
                //     <View style = {styles.nav3}>
                //         <TouchableHighlight>

                //             <Icon>
                                
                //             </Icon>
                //             <Text style = {{color: "#000"}}>Library</Text>
                //         </TouchableHighlight>
                //     </View>
                // </View> */}
                
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
        width: '100%',
        height: '30%',
        backgroundColor: "#33B8FF",
        justifyContent:"center",
        alignItems: "center",
    },

});


export default Home;