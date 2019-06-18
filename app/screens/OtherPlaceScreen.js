import React, { Component } from 'react';
import { View, Text, Animated, TouchableNativeFeedback, StyleSheet, Dimensions, Image, SectionList, Platform} from 'react-native';
import {appColors} from '../resources/colors';
import ActionButton from 'react-native-action-button';
import {Icon} from 'native-base';
import ScheduleCard from '../components/ScheduleCard';
import firebase from 'react-native-firebase';
const AnimatedActionButton =  Animated.createAnimatedComponent(ActionButton);
class OtherPlaceScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            schedules:[]
        };
        this.scrollY = new Animated.Value(0);
        this.scrollY.addListener(({value}) => console.log("ani: ", value))
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
        const toolBarHeight = 250;
        const navBarHeight = 75;
        const statusBarHeight = 10;
        const maxScroolableHeight = toolBarHeight - navBarHeight;
        const toolBarOpacity = this.scrollY.interpolate({
            inputRange: [maxScroolableHeight/2, maxScroolableHeight],
            outputRange: [1, 0]
        });

        const toolBarOverlayOpacity = this.scrollY.interpolate({
            inputRange: [maxScroolableHeight/2, maxScroolableHeight],
            outputRange: [0, 1]
        });

        const navBarOpacity = this.scrollY.interpolate({
            inputRange: [maxScroolableHeight - 0.1, maxScroolableHeight],
            outputRange: [0, 1]
        });

        const navBarOverlayOpacity = this.scrollY.interpolate({
            inputRange: [maxScroolableHeight - 0.1, maxScroolableHeight],
            outputRange: [1, 0]
        });
        

        const data = [
            {title: 'Title1', data: ['item1', 'item2']},
            {title: 'Title2', data: ['item3', 'item4']},
            {title: 'Title3', data: ['item5', 'item6']},
            {title: 'Title4', data: ['item7', 'item8']},
            {title: 'Title5', data: ['item9', 'item10']},
            {title: 'Title6', data: ['item11', 'item12']},
            ];
        return (
            <View style={styles.container}>
                <Animated.ScrollView
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
                        {
                            useNativeDriver: true,
                            /* listener: onContentScroll */
                        }
                    )}
                >
                    <Animated.View
                        style={[
                            styles.toolBarOverlay,
                            {
                                backgroundColor: appColors.primary,
                                height: toolBarHeight,
                                opacity: toolBarOverlayOpacity
                            }
                        ]}
                    />

                    <Animated.View style={{ opacity: toolBarOpacity }}>
                        <Image
                            source={{ uri: 'https://lh3.googleusercontent.com/-1m6XMEVnSPU/XDED_5V1QBI/AAAAAAAAAsg/N7HUB8rbjtM9Fy48qdhzRzJBE1FZq7ClwCEwYBhgL/' }}
                            style={{ height: toolBarHeight}}
                        />
                            {/* <View style={{elevation: 5, }}> */}
                            <View
                                style={[styles.actionButton, {marginTop: -28, alignSelf: 'flex-end', marginRight: 30}]}
                                >
                                <TouchableNativeFeedback
                                    onPress={() => {
                                        //this.props.navigation.navigate('newSchedule');
                                        alert('clicked')
                                    }}
                                    /* background={TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)} */
                                    
                                    >
                                        <Icon type="MaterialIcons" name="add" style={{fontSize: 20,height: 22,color: 'white',}} />
                                </TouchableNativeFeedback>
                                    </View>

                            {/* </View> */}
                            

                    </Animated.View>
                    <SectionList
                        renderItem={({item, index, section}) => <ScheduleCard key={item.id} schedule={item}></ScheduleCard>}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={{fontWeight: 'bold', marginVertical: 10, marginLeft: 20}}>{title}</Text>
                        )}
                        sections={[{title:'Esta semana', data:this.state.schedules}]}
                        keyExtractor={(item, index) => item.id}
                    ></SectionList>
                </Animated.ScrollView>
                
                <Animated.View
                    style={[
                        styles.navBarContainer,
                        {
                            backgroundColor: appColors.primary,
                            height: navBarHeight,
                            opacity: navBarOpacity,
                            paddingTop: statusBarHeight,
                        }
                    ]}
                >
                    
                </Animated.View>

                <Animated.View
                    style={[
                        styles.navBarOverlay,
                        {
                            height: navBarHeight,
                            opacity: navBarOverlayOpacity,
                            paddingTop: statusBarHeight,
                        }
                    ]}
                >
                </Animated.View>
                

                {/* <View style={styles.fabContainer}> */}
                    {/* <TouchableNativeFeedback
                        onPress={() => {
                            this.props.navigation.navigate('newSchedule');
                        }}
                        background={TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)}
                        >
                        <View
                            style={[styles.actionButton, styles.fabContainer]}
                        >
                            <Icon type="MaterialIcons" name="add" style={{fontSize: 20,height: 22,color: 'white',}} />
                        </View>
                    </TouchableNativeFeedback> */}
                {/* </View> */}
                
            </View>
        );
    }
}

export default OtherPlaceScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    toolBarOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    navBarContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: StyleSheet.hairlineWidth,
                shadowOffset: {
                    height: StyleSheet.hairlineWidth
                },
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'rgba(0, 0, 0, .3)'
            },
            android: {
                elevation: 4
            }
        })
    },
    navBarOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        left: 0,
        right: 0
    },
    actionButton:{
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.secondary,
        borderRadius: 28,
        elevation: 5
    },
    fabContainer:{
        position: 'absolute',
        // toobar height
        bottom: 0,
        right: 30,
        left: 0,
    }
});
