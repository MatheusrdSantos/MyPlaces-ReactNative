import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class ListOthers extends Component {
  render() {
    return (
        <TouchableNativeFeedback onPress={()=> console.log('estabelecimento selecionado')}>
            <View style={styles.card}>
                <Text style={styles.text}>carda</Text>
            </View>
        </TouchableNativeFeedback>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ListOthers);
