import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions';
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import AppLoading from '../components/AppLoading';
class SignInScreen extends Component{

    componentDidMount(){
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
        const currentUser = await GoogleSignin.getCurrentUser();
        //console.log("curr_user:", currentUser)
        //se o user existir chama a home
        // se não chama login
        if(currentUser){
            this.props.navigation.navigate('app')
        }else{
            this.props.navigation.navigate('auth')
        }
    };
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center'}}>
                <AppLoading></AppLoading>
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