import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListMarkets from '../components/ListMarkets';
class SuperMarketsScreen extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <ListMarkets></ListMarkets>
            </View>
        );
    }
}

export default SuperMarketsScreen;