import React, { Component } from 'react';
import { View, Text, ScrollView, Animated, easing, TouchableNativeFeedback} from 'react-native';
import {appColors} from '../resources/colors';
import ActionButton from 'react-native-action-button';
import {Icon} from 'native-base';
import ScheduleCard from '../components/ScheduleCard';

class OtherPlaceScreen extends Component {

    constructor(){
        super()
        this.state = {
            scrollY: new Animated.Value(0),
        };
        this.state.scrollY.addListener(({value}) => console.log("ani: ", value))
    }
    componentDidMount(){
        
        //this.props.navigation.setParams({headerHeight: this.state.scrollY,title: 'Titulo'})
    }
    static navigationOptions = {
        header: null,
    };
    render() {
        const headerOffset = this._headerOffset = this.state.scrollY.interpolate({
            inputRange: [0, 300],
            outputRange: [0, -115],
            extrapolate: 'clamp',
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        })
        const { navigation } = this.props;
        const place = navigation.getParam('place', null);
        return (
            <View style={{flex:1}}>
                <Animated.SectionList
                style={{marginTop: 175, minHeight:700}}
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
                renderItem={({item, index, section}) => <ScheduleCard key={index} item={item}></ScheduleCard>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                    {title: 'Title1', data: ['item1', 'item2']},
                    {title: 'Title2', data: ['item3', 'item4']},
                    {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                keyExtractor={(item, index) => item + index}
                >
                </Animated.SectionList>
                <Animated.View style={{
                    height: 175+28,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    top: 0,
                    right: 0,
                    transform: [{ translateY: headerOffset }]
                }}>
                    <View style={{
                        backgroundColor: appColors.secondary,
                        flex:1,
                        marginBottom: 28
                    }}>

                        <Text style={{
                            color: "#fff",
                            left: 0,
                            right: 0,
                            bottom: 10,
                            paddingHorizontal: 40,
                            position: 'absolute',
                            fontSize: 20,
                        }}>{place.name}</Text>
                    </View>
                    <ActionButton 
                        buttonColor={appColors.primary} 
                        hideShadow={false} 
                        style={{
                            elevation:3, 
                            bottom: 0,
                            position: 'absolute',
                            zIndex:9999
                        }}
                        offsetX={30}
                        offsetY={0}
                        fixNativeFeedbackRadius={true}>
                        <Icon type="MaterialIcons" name="add" style={{fontSize: 20,height: 22,color: 'white',}} />
                    </ActionButton>
                </Animated.View>
            </View>
        );
    }
}

export default OtherPlaceScreen;
