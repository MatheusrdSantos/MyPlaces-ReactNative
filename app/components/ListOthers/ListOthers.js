import React, { Component } from 'react';
import { View, Text, FlatList, Button} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import PlaceCard from '../PlaceCard';
import {requestPlaces} from '../../actions';
class ListOthers extends Component {
  componentDidMount(){
    this.props.loadPlaces()
  }
  render() {
    return (
        <View style={styles.container}>
            <FlatList data={this.props.places}
            /* ItemSeparatorComponent={() => <View style={{ margin: 10 }} />} */
            /* istFooterComponent={ <Text>Footer</Text> } */
            renderItem={({item})=><PlaceCard place={item}></PlaceCard>}
            keyExtractor={(item)=>item.id}
            ></FlatList>
        </View>
    );
  }
}

const mapStateToProps = state => {
	return {
		places: state.app.places
	}
};

const mapDispatchToProps = dispatch => {
	return {
		loadPlaces: () => dispatch(requestPlaces())
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOthers);
