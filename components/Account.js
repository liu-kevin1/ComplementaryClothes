import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import firebase from './../firebase';
import RecommendedItem from "./RecommendedItem";




class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.state.params.user,
            purchases: []
        }
    }

    componentDidMount() {
        firebase.database().ref('/' + this.state.user + '/purchases/').on(
            'value',
            querySnapShot => {
                let data = querySnapShot.val()
                let i;
                for (i in data) {
                    this.setState({ purchases: [...this.state.purchases, data[i]] })
                }
            }
        )

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={styles.statusBar}></SafeAreaView>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 10, fontSize: 20 }}>{'@' + this.state.user} </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, width: '85%' }}>
                    <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={styles.info1}>{this.state.purchases.length}</Text>
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
                <ScrollView style={styles.scroll}>
                    {this.state.purchases.map(purchase => <RecommendedItem user={this.state.user} img_url={purchase.img_url} url={purchase.url} title={purchase.title}></RecommendedItem>)}

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