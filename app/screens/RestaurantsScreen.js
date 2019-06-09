import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListRestaurants from '../components/ListRestaurants';
class RestaurantsScreen extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <ListRestaurants></ListRestaurants>
            </View>
        );
    }
}

export default RestaurantsScreen;