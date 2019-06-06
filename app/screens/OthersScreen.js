import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListOthers from '../components/ListOthers';
class OthersScreen extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <ListOthers></ListOthers>
            </View>
        );
    }
}

export default OthersScreen;