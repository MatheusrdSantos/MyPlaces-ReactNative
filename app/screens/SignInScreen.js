import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions';
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import AppLoading from '../components/AppLoading';
import firebase from 'react-native-firebase';

class SignInScreen extends Component{
    componentDidMount(){
        // remove this timeout
        setTimeout(() => this.getCurrentUser(),
            1000
        )
        //this.checkAuthStatus()
    }

    /* checkAuthStatus = () =>{
        if(this.props.auth.logged){
            this.props.navigation.navigate('app')
        }
    } */

    getCurrentUser = async () => {
        //const currentUser = await GoogleSignin.getCurrentUser();
        var user = firebase.auth().currentUser;
        //console.log("curr_user:", currentUser)
        console.log("fire_user:", user)
        //se o user existir chama a home
        // se não chama login
        if(user){
            this.props.navigation.navigate('app')
        }else{
            this.props.navigation.navigate('auth')
        }
    };
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center'}}>
                {/* <AppLoading></AppLoading> */}
            </View>
        )
    }
}
mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        doLogin: () => dispatch(login())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);