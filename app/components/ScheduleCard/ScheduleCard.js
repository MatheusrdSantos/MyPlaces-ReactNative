import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ScheduleCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>{this.props.item}</Text>
            </View>
        );
    }
}

export default ScheduleCard;
