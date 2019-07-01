import React, {Component} from 'react';
import styled from 'styled-components';
import {Animated, Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
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

    closeModal = () => {
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start()
    }
    
    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Header />
                <TouchableOpacity
                    onPress={this.closeModal}
                    style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}
                >
                    <CloseView style={{ elevation: 10 }}>
                        <Icon type="MaterialCommunityIcons" name='close' size={44} color='blue' />
                    </CloseView>
                </TouchableOpacity>
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

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
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
