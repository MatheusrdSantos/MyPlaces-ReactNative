/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox} from 'react-native'; 
import firebase from 'react-native-firebase';
import {Provider} from 'react-redux';
import {Spinner} from 'native-base'
import {store, persistor} from './reducers';
import {PersistGate} from 'redux-persist/integration/react'
import Navigator from './screens/Navigator';

YellowBox.ignoreWarnings(['Require cycle:']);

/* firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
}); */
const db = firebase.firestore()

export default class App extends Component{
  constructor(){
    super()
    this.state = {name: "no name"}
    /* const userRef = db.collection('users').doc('m-1') 
    userRef.onSnapshot(docSnapshot=> {
        if(docSnapshot.exists){
          this.setState({name:docSnapshot.data().name})
        }
        console.log(docSnapshot.data().name)
      }, err => {
        alert("Permission denied")
        console.log(err)
      }
    ) */
  }

  loading = ()=>{
    return (
      <View style={styles.leadingContainer}>
        <Spinner color='red'></Spinner>
        <Text>Loading</Text>
      </View>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator></Navigator>
        </PersistGate>
        {/* <View style={styles.container}>
          <Text style={styles.welcome}>{this.state.name}</Text>
        </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  leadingContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
