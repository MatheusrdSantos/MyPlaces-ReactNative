import React, { Component } from 'react';
import { View, Text, Animated, TouchableNativeFeedback, StyleSheet, Dimensions} from 'react-native';
import {appColors} from '../resources/colors';
import ActionButton from 'react-native-action-button';
import {Icon} from 'native-base';
import ScheduleCard from '../components/ScheduleCard';
import firebase from 'react-native-firebase';
const AnimatedActionButton =  Animated.createAnimatedComponent(ActionButton);
class OtherPlaceScreen extends Component {

    constructor(){
        super()
        this.state = {
            scrollY: new Animated.Value(0),
            schedules:[]
        };
        this.state.scrollY.addListener(({value}) => console.log("ani: ", value))
    }
    componentDidMount(){
        const ref = firebase.firestore().collection('places').doc(this.props.navigation.getParam('place', null).id).collection('schedules');
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                //let refUser = firebase.firestore().collection('users').doc(doc.data().user.id);
                //refUser.get().then(docUser => {
                this.setState({schedules: [...this.state.schedules,{...doc.data(), id:doc.id}]});
                //}).catch(err => console.log(err));
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
        //this.props.navigation.setParams({headerHeight: this.state.scrollY,title: 'Titulo'})
    }
    static navigationOptions = {
        header: null,
    };
    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const data = [
            {title: 'Title1', data: ['item1', 'item2']},
            {title: 'Title2', data: ['item3', 'item4']},
            {title: 'Title3', data: ['item5', 'item6']},
            {title: 'Title4', data: ['item7', 'item8']},
            {title: 'Title5', data: ['item9', 'item10']},
            {title: 'Title6', data: ['item11', 'item12']},
            ];
        const headerOffset = this.state.scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -115],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        })
        const listMargin = this.state.scrollY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -115],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        })
        const fabScale = this.state.scrollY.interpolate({
            inputRange: [0, 300, 600],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        })
        const { navigation } = this.props;
        const place = navigation.getParam('place', null);
        return (
            <View style={{flex:1}}>
                <Animated.SectionList
                    style={[styles.sectionList,{
                        transform: [{ translateY: listMargin }],
                    }]}
                    scrollEventThrottle={1}
                    onScroll={
                        Animated.event(
                            [
                                { nativeEvent: 
                                    { contentOffset: { y: this.state.scrollY } } 
                                }
                            ],
                            { useNativeDriver: true },
                            /* {
                                listener: event => {
                                    console.log(event.nativeEvent.contentOffset)
                            }} */
                        )}
                    renderItem={({item, index, section}) => <ScheduleCard key={item.id} schedule={item}></ScheduleCard>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 20}}>{title}</Text>
                    )}
                    sections={[{title:'Esta semana', data:this.state.schedules}]}
                    keyExtractor={(item, index) => item.id}
                    >
                    </Animated.SectionList>
                <Animated.View style={[
                    styles.headerContainer,{
                    transform: [{ translateY: headerOffset }],
                }]}>
                    <View style={styles.headerVisible}>
                        <Text style={styles.headerTitle}>{place.name}</Text>
                    </View>
                    <AnimatedActionButton 
                        buttonColor={appColors.primary} 
                        hideShadow={false} 
                        style={styles.actionButton}
                        degrees={0}
                        offsetX={30}
                        offsetY={0}
                        fixNativeFeedbackRadius={true}
                        onPress={() => {
                            this.props.navigation.navigate('newSchedule');
                        }}>
                        <Icon type="MaterialIcons" name="add" style={{fontSize: 20,height: 22,color: 'white',}} />
                    </AnimatedActionButton>
                </Animated.View>
                <View style={styles.backButtonContainer}>
                    <TouchableNativeFeedback onPress={()=> this.goBack()} background={TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)}>
                        <View style={{padding: 8}}>
                            <Icon type="MaterialIcons" name="arrow-back" style={styles.navIcon} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

export default OtherPlaceScreen;

const styles = StyleSheet.create({
    sectionList:{
        marginTop: 175,
        //height: 'auto'
        /* backgroundColor: 'yellow', */
        /* minHeight:700, */
    },
    //add static values on height
    headerContainer:{
        height: 175+28,
        position: 'absolute',
        top: 0,
        left: 0,
        top: 0,
        right: 0,
        backgroundColor: 'transparent'
    },
    headerVisible:{
        backgroundColor: appColors.secondary,
        flex:1,
        marginBottom: 28
    },
    headerTitle:{
        color: "#fff",
        left: 0,
        right: 0,
        bottom: 15,
        paddingHorizontal: 45,
        position: 'absolute',
        fontSize: 20,
    },
    actionButton:{
        elevation:3, 
        bottom: 0,
        position: 'absolute',
        //opacity: fabScale,
        //transform:[{scale: fabScale}]
    },
    backButtonContainer:{
        position:'absolute', 
        top: 8, 
        left: 5, 
        borderRadius: 10,
        zIndex: 1
    },
    navIcon:{
        fontSize: 25,
        height: 22,
        color: 'white'
    }
});
