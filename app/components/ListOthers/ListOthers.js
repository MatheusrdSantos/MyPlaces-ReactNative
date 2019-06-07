import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import PlaceCard from '../PlaceCard';
class ListOthers extends Component {
  render() {
    return (
        <View style={styles.container}>
            <FlatList data={[
                {name:"Oficina - Lagoa Nova", id:2},
                {name:"Barbearia do João", id:1},
                {name:"Sindicato têxtil", id:3},
            ]}
            /* ItemSeparatorComponent={() => <View style={{ margin: 10 }} />} */
            L/* istFooterComponent={ <Text>Footer</Text> } */
            renderItem={({item})=><PlaceCard place={item}></PlaceCard>}
            keyExtractor={(item)=>item.id.toString()}
            ></FlatList>
        </View>
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
