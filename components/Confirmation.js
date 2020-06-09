import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';


class Confirmation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            classification: "pants" //props.navigation.state.params.classification
        }

        this.getRecommendations()
    }

    async getRecommendations() {
        /*call the api to get products here with the keyword in this.state.classification. this is the onpress of the confirm*/

        // var urls = {
        //     pants = "https://www.parsehub.com/api/v2/projects/t3LXvgFShK6y/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
        //     shirts = "https://www.parsehub.com/api/v2/projects/tw8p9tJXSFT5/last_ready_run/data?api_key=tBbTET_aiw6F&format=json",
        //     shoes = ,
        //     hats = ,
        //     socks = 
        // }

        // var url_pairing = {
        //     shirts = urls[pants],
        //     pants = urls[shoes],
        //     shoes = urls[socks],
        //     socks = urls[hats],
        //     hats = urls[shirts]
        // }

        var url = "https://www.parsehub.com/api/v2/projects/t3LXvgFShK6y/last_ready_run/data?api_key=tBbTET_aiw6F&format=json"

        var text;
        var request = await (fetch(url)
        .then(response => response.text())
        .then(data => text = data)
        .catch(e => console.log(e)));

        var info = JSON.parse(text);

        var props_navigation = this.props.navigation
        if (info != undefined) {
            // var entries = info.split("},");
            // console.log("for loop");
            // for (var i = 0; i < 5; i++) {
            //     var data = entries[i].split(",");
            //     for (var j = 0; j < data.length; j++) {
            //         var values = data[j].split(': ');
            //         var key = values[0];
            //         var value = values[1];
            //         console.log(key);
            //     }
            // } 
            //console.log(text);
            console.log(info.pants[0].name); 

            props_navigation.navigate('Recommended', {
                recommendations: [info.pants[0], info.pants[1]] /*data we get back from the api */
            })
        }
        
        
    }

    render () {
        return (
            <View >
                <SafeAreaView style = {styles.statusBar}>
                </SafeAreaView>
                <View style = {{alignItems: "center", justifyContent: "center"}}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textConfirm: {
        alignSelf: 'center',
        fontSize: 50,
    },
    statusBar: {
        width: '100%',
        height: StatusBar.currentHeight,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#33B8FF",
    },
})

export default Confirmation;