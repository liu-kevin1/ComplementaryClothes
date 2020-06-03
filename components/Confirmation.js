import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView } from "react-native";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classification: props.navigation.state.params.classification,
    };
  }

        this.state = {
            classification: "pants" //props.navigation.state.params.classification
        }

        this.getRecommendations()
    }

    getRecommendations(){
        /*call the recommendation ebay api here with the keyword in this.state.classification. this is th onpress of the confirm*/
        
        // Tutorial code start
        var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=MyAppID";
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

        console.log("test1_1")
        var test = fetch(url);
        console.log(test);
        console.log("test2")
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
    alignSelf: "center",
    fontSize: 50,
  },
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33B8FF",
  },
});

export default Confirmation;
