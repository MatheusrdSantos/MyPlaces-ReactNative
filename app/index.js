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
import AppLoading from './components/AppLoading';

YellowBox.ignoreWarnings(['Require cycle:']);

/* firebase.auth()
  .signInAnonymously()
  .then(credential => {
    if (credential) {
      console.log('default app user ->', credential.user.toJSON());
    }
}); */
const db = firebase.firestore()

class App extends Component{
  loading = ()=>{
    return (
      <View style={styles.leadingContainer}>
        <AppLoading></AppLoading>
      </View>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigator></Navigator>
        </PersistGate>
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

export default App;