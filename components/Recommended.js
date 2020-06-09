import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import RecommendedItem from './RecommendedItem';

class Recommended extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            recommendations: props.navigation.state.params.recommendations
        }

        
    }

    render(){
        return ( 
            <View style = {{alignItems: "center", justifyContent: "center"}}>
                <RecommendedItem url={this.state.recommendations[0].price_url} img_url={this.state.recommendations[0].image} title={this.state.recommendations[0].name}></RecommendedItem>
                <RecommendedItem url={this.state.recommendations[1].price_url} img_url={this.state.recommendations[1].image} title={this.state.recommendations[1].name}></RecommendedItem>
            </View>
        )
    }
}


export default Recommended