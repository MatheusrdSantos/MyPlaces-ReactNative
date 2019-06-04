import React, {Component} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
class AppLoading extends Component{
    render(){
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        return (
            <Image style={{width:85, height:85, alignSelf:"center"}} source={require('./images/app-icon-2.png')} />
        );
    }
}

export default AppLoading;