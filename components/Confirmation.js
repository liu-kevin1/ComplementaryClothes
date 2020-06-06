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

    async getRecommendations(){
        /**
         * Changes XML to JSON
         * Modified version from here: http://davidwalsh.name/convert-xml-json
         * @param {string} xml XML DOM tree
         */
        
        /*call the recommendation ebay api here with the keyword in this.state.classification. this is th onpress of the confirm*/
        
        // Tutorial code start
        var url = "https://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=KevinLiu-CompClo-SBX-a2eb84eea-0ca6a20e";
        url += "&GLOBAL-ID=EBAY-US";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&callback=_cb_findItemsByKeywords";
        url += "&REST-PAYLOAD";
        url += "&" + this.state.classification;
        url += "&paginationInput.entriesPerPage=3";

        
        function _cb_findItemsByKeywords(root) {
            var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
            var html = [];
            html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
            for (var i = 0; i < items.length; ++i) {
                var item     = items[i];
                var title    = item.title;
                var pic      = item.galleryURL;
                var viewitem = item.viewItemURL;
                if (null != title && null != viewitem) {
                html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
                '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
                }
            }
            html.push('</tbody></table>');
            //document.getElementById("results").innerHTML = html.join("");
        }
        
        /*
        s=document.createElement('script'); // create script element
        s.src= url;
        */

        console.log("test1_1");
        var test = await (fetch(url)
            .then(function(response) {
                //console.log("Status: " + response.status);
            })
            .catch(function(error) {
                //console.log("Error: " + error);
                throw error;
            })
        )

        //console.log(test);

        var url2 = "https://www.parsehub.com/api/v2/runs/tULuvdyJysmM/data?api_key=tBbTET_aiw6F&format=json";

        console.log("info from url2");

        var info = fetch(url2)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(e => console.log(e))
        
        
        

        

        this.props.navigation.navigate('Recommended', {
            recommended: /*data we get back from recommendation api */ ''
        })
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