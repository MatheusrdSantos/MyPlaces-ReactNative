import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
class HomeMenuItem extends Component{
    render(){
        return (
            <View style={[styles.bottomShadow, {backgroundColor: this.props.bgcolor, flex:1, elevation: this.props.elevation}]}>
                <Text>TESTE</Text>
            </View>
        );
    }
}

export default HomeMenuItem;