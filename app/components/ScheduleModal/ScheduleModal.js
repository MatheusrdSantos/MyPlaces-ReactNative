import React, {Component} from 'react';
import styled from 'styled-components';
import {Animated, Dimensions, TouchableOpacity, DatePickerAndroid, TimePickerAndroid} from 'react-native';
import {Icon, DatePicker} from 'native-base';
import {connect} from 'react-redux';
import {toggleScheduleModal} from '../../actions';
import { appColors } from '../../resources/colors';

const screenHeight = Dimensions.get("window").height

class ScheduleModal extends Component {
    state = {
        top: new Animated.Value(screenHeight),
        chosenDateTime: new Date(),
        dateTimeSelected: false,
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

    getTime = () =>  {

        TimePickerAndroid.open({
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            is24Hour: true, // Will display '2 PM'
        }).then(res =>{
            const {action, hour, minute} = res;
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
            }
            this.state.chosenDateTime.setHours(hour);
            this.state.chosenDateTime.setMinutes(minute);
            this.setState({chosenDateTime: this.state.chosenDateTime, dateTimeSelected: true});
        }).catch(err =>{
            const {code, message} = err;
            console.warn('Cannot open time picker', message);
        });

    }

    getDate = () =>{
        DatePickerAndroid.open({
            date: new Date()
        }).then(res => {
            const {action, year, month, day} = res;
            if (action !== DatePickerAndroid.dismissedAction) {
            // Selected year, month (0-11), day
            }
            this.state.chosenDateTime.setFullYear(year, month, day);
            this.getTime();

        }).catch(err => {
            const {code, message} = err;
            console.warn('Cannot open date picker', message);
        });
    }

    formatTime = () => {
        return `${this.state.chosenDateTime.getHours()}:${this.state.chosenDateTime.getMinutes()}`;
    }
    formatDate = () =>{
        return `${this.state.chosenDateTime.getDay()}/${this.state.chosenDateTime.getMonth()+1}/${this.state.chosenDateTime.getYear()}`;
    }

    displayDate = () => {
        if(this.state.dateTimeSelected){
            return `${this.formatDate()} às ${this.formatTime()}`;
        }else{
            return "Escolha um horário";
        }
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
                    <DateContainer>
                        <Label>Data do agendamento: </Label>
                        <ScheduleTime onPress={() => this.getDate()}>{this.displayDate()}</ScheduleTime>
                        <Label>Descrição: </Label>
                    </DateContainer>
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
    align-items: stretch;
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
const ScheduleTime = styled.Text`
    font-size: 16px;
    margin-top: 10px;
    color: #000;
    text-align: center;
`

const DateContainer = styled.View`
    margin-top: 30px;
    text-align: center;
    align-items: center;
`
const Label = styled.Text`
    color: #000;
    font-size: 20px;
    border-bottom-color: #8b8b91;
    border-bottom-width: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align:center;
    width: 70%;
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
