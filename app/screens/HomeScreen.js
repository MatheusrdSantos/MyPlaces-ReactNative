import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions';
import {appColors} from '../resources/colors';
import {GoogleSignin} from 'react-native-google-signin';
class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: appColors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'normal',
        },
    };
    signOut = async () => {
        try {
            await GoogleSignin.configure();  
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
    };
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center'}}>
                <StatusBar barStyle="light-content" backgroundColor={appColors.primary}></StatusBar>
                <Text style={{alignSelf:'center', fontSize: 20}}>Home Screen</Text>
                <Button onPress={() => {
                    this.signOut()
                    this.props.doLogout()
                    this.props.navigation.navigate('auth')
                }} title="Logout" color={appColors.primary}></Button>
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