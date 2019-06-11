import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text} from 'react-native';
import {Card, Thumbnail, Icon} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import {withCollapsible} from 'react-navigation-collapsible';
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
class PlaceCard extends Component {
  render() {
    return (
        <Card style={styles.card}>
            <TouchableNativeFeedback onPress={()=> {
                console.log('estabelecimento selecionado')
                this.props.itemDetails(this.props.place)
              }}>
                <View style={styles.cardContainer}>
                    <View style={styles.iconContainer}>
                        <Thumbnail small source={{uri: uri}} style={styles.icon}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textName}>{this.props.place.name}</Text>
                        <Text style={styles.textDescription}>{this.props.place.description}</Text>
                        <Text style={styles.textAddress}>{this.props.place.address}</Text>
                        <Text style={styles.textRating}><Icon type="FontAwesome" name="star" style={styles.ratingIcon}></Icon>{this.props.place.rating}</Text>
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
