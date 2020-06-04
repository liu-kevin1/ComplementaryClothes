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
        var test = fetch(url);
        console.log(test);
        //var test2 = fetch("www.google.com");
        //console.log(test2);
        //console.log("test2");
        var test4;
        test4 = await(
            fetch(url)
            .then(function(response){
                //console.log(response);
                //var test3 = parseXml(response)
                return response;
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
            })
        );

        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            xmlhttp = new XMLHttpRequest();
        }
        xmlhttp.open("GET",url,true);
        console.log(xmlhttp);
        
        //var test5 = xmlToJson(test4);
        console.log(test4.text());
        console.log("above is test4");
        //document.body.appendChild(s);
        // Tutorial code end

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