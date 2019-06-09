import React, { Component } from 'react';
import { View, Text, FlatList, Button} from 'react-native';
import {Spinner} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import PlaceCard from '../PlaceCard';
import {requestPlaces} from '../../actions';
import {appColors} from '../../resources/colors';
class ListMarkets extends Component {
  componentDidMount(){
    this.props.loadPlaces('markets')
  }
  render() {
    if(this.props.fetchingState == 'fetching'){
      return (
        <View style={styles.loadingContainer}>
          <Text>Buscando estabelecimentos</Text>
          <Spinner color={appColors.secondary} />
        </View>
      )
    }else if(this.props.fetchingState == 'success'){
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
    }else if(this.props.fetchingState == 'error'){
      return (
          <View style={styles.loadingContainer}>
              <Text>Ocorreu algum erro, verifique sua conexão com a internet</Text>
          </View>
      );
    }else{
      return (<View></View>)
    }
  }
}

const mapStateToProps = state => {
	return {
    places: state.app.places.markets.data,
    fetchingState: state.app.places.markets.fetchingState
	}
};

const mapDispatchToProps = dispatch => {
	return {
		loadPlaces: (category) => dispatch(requestPlaces(category))
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMarkets);
