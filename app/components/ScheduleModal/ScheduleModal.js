import React, {Component} from 'react';
import styled from 'styled-components';
import {Animated, Dimensions, TouchableOpacity, DatePickerAndroid} from 'react-native';
import {Icon, DatePicker} from 'native-base';
import {connect} from 'react-redux';
import {toggleScheduleModal} from '../../actions';
import { appColors } from '../../resources/colors';

const screenHeight = Dimensions.get("window").height

class ScheduleModal extends Component {
    state = {
        top: new Animated.Value(screenHeight),
        chosenDate: new Date()
    }
    componentDidMount() {
        this.toggleModal(); 
    }
    
    componentDidUpdate(){
        this.toggleModal(); 
    }

    toggleModal = () => {
        if (this.props.modalState) {
            Animated.spring(this.state.top, {
                toValue: 174
            }).start()
        }else{
            Animated.spring(this.state.top, {
                toValue: screenHeight
            }).start()
        }
    }

    closeModal = () => {
        this.props.toggleModalState();
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start()
    }
    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
    }
    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Header>
                    <Title>Reservar horário</Title>
                </Header>
                <TouchableOpacity
                    onPress={this.closeModal}
                    style={{ position: "absolute", top: 78, left: "75%", marginLeft: -22, zIndex: 1 }}
                >
                    <CloseView style={{ elevation: 10 }}>
                        <Icon type="MaterialCommunityIcons" name='close' size={44} style={{color:'white'}}/>
                    </CloseView>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.closeModal}
                    style={{ position: "absolute", top: 78, left: "25%", marginLeft: -22, zIndex: 1}}
                >
                    <ConfirmView style={{ elevation: 10 }}>
                        <Icon type="MaterialIcons" name='done' size={44} style={{color:'white'}}/>
                    </ConfirmView>
                </TouchableOpacity>
                <Body>
                <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    /* maximumDate={new Date(2018, 12, 31)} */
                    locale={"br"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Selecione uma data"
                    textStyle={{ color: appColors.secondary }}
                    placeHolderTextStyle={{ color: appColors.secondary }}
                    onDateChange={this.setDate}
                    disabled={false}
                />
                </Body>
            </AnimatedContainer>
        )
    }
}

const Container = styled.View`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 100;
`
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Header = styled.View`
    background: ${appColors.primary};
    height: 100px;
    text-align: center;
`
const Title = styled.Text`
    font-size: 18px;
    color: white;
    text-align: center;
    margin-top: 10px;
`
const Body = styled.View`
    background: #eaeaea;
    height: 1000px;
    align-items: center;
`

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    background-color: ${appColors.secondary};
`
const ConfirmView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    background-color: ${appColors.secondary};
`
const mapStateToProps = (state) => {
    return {
        modalState: state.app.places.others.modals.scheduleModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalState: () => dispatch(toggleScheduleModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleModal)
