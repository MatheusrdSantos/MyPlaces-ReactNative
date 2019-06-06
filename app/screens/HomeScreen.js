import React, {Component} from 'react';
import {View, Text, Button, StatusBar, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions';
import {appColors, menuColors} from '../resources/colors';
import {GoogleSignin} from 'react-native-google-signin';
import HomeMenuItem from '../components/HomeMenuItem';
import {Icon} from 'native-base'
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
                <View style={[styles.bottomShadow, {backgroundColor: menuColors.gadient[0], elevation: 7}, styles.menuItemContainer]}>
                    <Icon type="FontAwesome5" name="store" style={styles.mainIcon}/>
                    <Text style={styles.text}>Buscar estabelecimentos</Text>
                    <Icon type="MaterialIcons" name="navigate-next" style={{fontSize: 30, color: 'white'}}/>
                </View>
                <View style={[styles.bottomShadow, {backgroundColor: menuColors.gadient[1], elevation: 5}, styles.menuItemContainer]}>
                    <Icon type="MaterialIcons" name="format-list-numbered" style={styles.mainIcon}/>
                    <Text style={styles.text}>Categorias</Text>
                    <Icon type="MaterialIcons" name="navigate-next" style={{fontSize: 30, color: 'white'}}/>
                </View>
                <View style={[styles.bottomShadow, {backgroundColor: menuColors.gadient[2], elevation: 3}, styles.menuItemContainer]}>
                    <Icon type="Ionicons" name="ios-pricetags" style={styles.mainIcon}/>
                    <Text style={styles.text}>Promoções</Text>
                    <Icon type="MaterialIcons" name="navigate-next" style={{fontSize: 30, color: 'white'}}/>
                </View>
                <View style={[styles.bottomShadow, {backgroundColor: menuColors.gadient[3], elevation: 1}, styles.menuItemContainer]}>
                    <Icon type="MaterialCommunityIcons" name="history" style={styles.mainIcon}/>
                    <Text style={styles.text}>Meus pedidos</Text>
                    <Icon type="MaterialIcons" name="navigate-next" style={{fontSize: 30, color: 'white'}}/>
                </View>
                {/* <Button onPress={() => {
                    this.signOut()
                    this.props.doLogout()
                    this.props.navigation.navigate('auth')
                }} title="Logout" color={appColors.primary}></Button> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text:{
        color: 'white',
        fontSize: 15,
        flex:1,
        marginLeft: 10
    },
    menuItemContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainIcon:{
        fontSize: 50,
        color: 'white',
        marginLeft: 10
    }
});

mapStateToPorps = () => {
    return {}
}

mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(HomeScreen);