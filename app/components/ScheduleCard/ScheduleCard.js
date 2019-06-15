import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';
import {Card} from 'native-base';
class ScheduleCard extends Component {
    displayStatusBar = () =>{
        if(this.props.schedule.status == 'pendente'){
            return (
                <View style={[styles.statusBar, styles.barPendding]}>

                </View>
            );
        }else if(this.props.schedule.status == 'confirmado'){
                return (
                    <View style={[styles.statusBar, styles.barConfirmed]}>
    
                    </View>
                );
        }else if(this.props.schedule.status == 'cancelado'){
            return (
                <View style={[styles.statusBar, styles.barCancelled]}>

                </View>
            );
        }
    }
    displayStatusText = () =>{
        if(this.props.schedule.status == 'pendente'){
            return (
                <Text style={[styles.status, styles.textPendding]}>{this.props.schedule.status}</Text>
            );
        }else if(this.props.schedule.status == 'confirmado'){
                return (
                    <Text style={[styles.status, styles.textConfirmed]}>{this.props.schedule.status}</Text>
                );
        }else if(this.props.schedule.status == 'cancelado'){
            return (
                <Text style={[styles.status, styles.textCancelled]}>{this.props.schedule.status}</Text>
            );
        }
    }
    render() {
        return (
            <Card style={styles.card}>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{`${this.props.schedule.user.name} ${this.props.schedule.user.lastname}`}</Text>
                    <Text style={styles.description}>{this.props.schedule.description}</Text>
                    {this.displayStatusText()}
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.date}><Icon style={styles.date} type="FontAwesome" name="calendar"></Icon> 15/06</Text>
                    <Text style={styles.time}><Icon style={styles.time} type="MaterialIcons" name="access-time"></Icon> 20:20</Text>
                </View>
                {this.displayStatusBar()}
            </Card>
        );
    }
}

export default ScheduleCard;
