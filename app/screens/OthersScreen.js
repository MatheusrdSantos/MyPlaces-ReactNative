import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListOthers from '../components/ListOthers';
class OthersScreen extends Component{
    itemDetails(data){
        //this.props.navigation.navigate('OtherPlace', {place: data});
        this.props.navigation.navigate('Place', {place: data});
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ListOthers itemDetails={(data)=>this.itemDetails(data)}></ListOthers>
            </View>
        );
    }
}

export default OthersScreen;