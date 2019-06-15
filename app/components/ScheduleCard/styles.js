import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row'
    },
    infoContainer:{
        flex: 1,
        padding: 15
    },
    statusBar:{
        width: 10,
    },
    name: {
        fontSize: 16,
    },
    description:{
        fontSize: 12
    },
    status:{
        fontSize: 12
    },
    timeContainer:{
        paddingTop: 20,
        paddingRight: 10
    },
    time: {
        fontSize: 12
    },
    date:{
        fontSize: 12
    },
    textCancelled:{
        color: 'red'
    },
    textConfirmed:{
        color: 'green'
    },
    textPendding:{
        color: '#e8cb4a'
    },
    barCancelled:{
        backgroundColor: 'red'
    },
    barConfirmed:{
        backgroundColor: 'green'
    },
    barPendding:{
        backgroundColor: '#e8cb4a'
    }
});