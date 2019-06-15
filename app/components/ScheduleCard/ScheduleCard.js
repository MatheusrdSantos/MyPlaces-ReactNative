import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import {Card} from 'native-base';
class ScheduleCard extends Component {
    render() {
        return (
            <Card style={styles.card}>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>Matheus Santos</Text>
                    <Text style={styles.description}>Corte de cabelo</Text>
                    <Text style={styles.status}>Confirmado</Text>
                </View>
                <View style={styles.statusBar}>

                </View>
            </Card>
        );
    }
}

export default ScheduleCard;
