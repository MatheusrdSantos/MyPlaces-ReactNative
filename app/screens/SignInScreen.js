import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions'
class SignInScreen extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.checkAuthStatus()
    }

    checkAuthStatus = () =>{
        if(this.props.auth.logged){
            this.props.navigation.navigate('app')
        }
    }
    render(){
        return (
            <View style={{flex:1, textAlign: 'center', justifyContent:'center'}}>
                <Text style={{alignSelf:'center', fontSize: 20}}>SignIn</Text>
                <Button onPress={() =>{
                    this.props.doLogin()
                    this.props.navigation.navigate('app')
                }} title="Login"></Button>
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