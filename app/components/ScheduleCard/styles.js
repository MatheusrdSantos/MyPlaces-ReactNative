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
        backgroundColor: 'green'
    },
    name: {
        fontSize: 20,
    },
    description:{
        fontSize: 12
    },
    status:{
        fontSize: 12,
        color: 'green'
    }
});