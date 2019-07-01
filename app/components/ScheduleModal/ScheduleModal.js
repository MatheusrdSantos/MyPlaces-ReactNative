import React, {Component} from 'react';
import styled from 'styled-components';
import {Animated, Dimensions} from 'react-native';
import {connect} from 'react-redux';

const screenHeight = Dimensions.get("window").height

class ScheduleModal extends Component {
    state = {
        top: new Animated.Value(screenHeight),
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

    /* openModal = () => {
        Animated.spring(this.state.top, {
            toValue: 174
        }).start()
    }

    closeModal = () => {
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start()
    } */
    
    render() {
        return (
            <AnimatedContainer style={{top: this.state.top}}>
                <Header />
                <Body />
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
    background: #333;
    height: 150px;
`

const Body = styled.View`
    background: #eaeaea;
    height: 900px;
`
const mapStateToProps = (state) => {
    return {
        modalState: state.app.places.others.modals.scheduleModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleModal)
