import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
class AppLoading extends Component{
    render(){
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        );
    }
}

export default AppLoading;