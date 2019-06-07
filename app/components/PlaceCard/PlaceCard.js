import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
class PlaceCard extends Component {
  render() {
    return (
        <Card style={styles.card}>
            <TouchableNativeFeedback onPress={()=> console.log('estabelecimento selecionado')}>
                <View style={styles.cardContainer}>
                    <View style={styles.iconContainer}>
                        <Thumbnail small source={{uri: uri}} style={styles.icon}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{this.props.place.name}</Text>
                        <Text style={styles.text}>{this.props.place.name}</Text>
                        <Text style={styles.text}>{this.props.place.name}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </Card>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(PlaceCard);
