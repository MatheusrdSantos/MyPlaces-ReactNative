import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions'

class HomeScreen extends Component{
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center'}}>
                <Text style={{alignSelf:'center', fontSize: 20}}>Home Screen</Text>
                <Button onPress={() => {
                    this.props.doLogout()
                    this.props.navigation.navigate('auth')
                }} title="Logout"></Button>
            </View>
        )
    }
}
mapStateToPorps = () => {
    return {}
}

mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(HomeScreen);