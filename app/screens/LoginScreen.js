import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions';
import firebase from 'react-native-firebase';
import {GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import {appColors} from '../resources/colors';
class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(){
        super()
        this.state = {
            userInfo: null
        }
    }

    /* componentDidMount(){
        this.checkAuthStatus()
    }

    checkAuthStatus = () =>{
        if(this.props.auth.logged){
            this.props.navigation.navigate('app')
        }
    } */

    // Calling this function will open Google for login.
    signInGoogleFirebase =  async () => {
        try {
            // add any configuration settings here:
            await GoogleSignin.configure({
                webClientId: '639170825338-p85j9sf438pb7bkhrfoa364v6u1m39ee.apps.googleusercontent.com',
                offlineAccess: true
            });
            
            const data = await GoogleSignin.signIn();
            console.log(data)
            // create a new firebase credential with the token
            //const tokens = await GoogleSignin.getTokens()
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken)
            // login with credential
            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
            //console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
            this.props.doLogin()
            this.props.navigation.navigate('app')
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
            } else {
                // some other error happened
                console.log(error)
            }
        }
    }
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center', backgroundColor: appColors.secondary}}>
                <Text style={{alignSelf:'center', fontSize: 20, color: 'white'}}>SignIn</Text>
                <TextInput style={{color:'white', marginBottom:20, marginLeft: 20, marginRight:20, fontSize:15}} underlineColorAndroid='black' placeholder="Usuário"></TextInput>
                <TextInput style={{color:'white', marginBottom:20, marginLeft: 20, marginRight:20, fontSize:15}} underlineColorAndroid='black' placeholder="Senha"></TextInput>
                <Button onPress={() =>{
                    alert('Ainda não disponível')
                }} title="Login" color={appColors.primary}></Button>
                <View style={{marginBottom:20}}></View>
                <Button onPress={() =>{
                    this.signInGoogleFirebase()
                }} title="Login with Google" color={appColors.primary}></Button>
                {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => this.signIn()}
                disabled={this.state.isSigninInProgress}
                disabled={false} /> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);