import React, {Component} from 'react';
import {View, Text} from 'react-native';

class OtherPlaceScreen extends Component{
    render(){
        const { navigation } = this.props;
        const place = navigation.getParam('place', null);
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>{place.name}</Text>
                <Text>{place.description}</Text>
                <Text>{place.address}</Text>
                <Text>{place.category}</Text>
                <Text>{place.rating}</Text>
            </View>
        );
    }
}

export default OtherPlaceScreen;