import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    card:{
        marginLeft: 15,
        marginRight: 15,
        marginBottom:5,
        height:100
    },
    text:{
        marginLeft: 15
    },  
    textRating:{
        marginLeft: 15,
        fontSize:12,
        color: '#FFBF53',
        fontWeight: 'bold'
    },
    ratingIcon:{
        fontSize: 10,
        color:"#FFBF53"
    },
    textDescription:{
        marginLeft: 15,
        fontSize:13
    },  
    textAddress:{
        marginLeft: 15,
        fontSize:13
    },  
    textName:{
        marginLeft: 15,
        fontWeight: '600',
        fontSize: 15
    },  
    cardContainer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        padding:10
    },
    icon:{

    },
    textContainer:{
        flex:1,
    },
    iconContainer:{
        alignSelf: 'stretch',
        borderRightWidth: 0.5,
        borderRightColor:'#c6c6c6',
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});