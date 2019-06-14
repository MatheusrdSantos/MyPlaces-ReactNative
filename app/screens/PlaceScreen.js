import React, { Component } from 'react';
import { View, Text, ScrollView, Animated, easing, TouchableNativeFeedback} from 'react-native';
import {appColors} from '../resources/colors';
import ActionButton from 'react-native-action-button';
import {Icon} from 'native-base';

class PlaceScreen extends Component {

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
        return (
            <View style={{flex:1}}>
                <Animated.ScrollView
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
                >  
                    <View  style={{marginTop: 175, minHeight: 700}}>
                        <Text>Place name</Text>
                        <Text>Place description</Text>
                        <Text>Place address</Text>
                        <Text>Place category</Text>
                        <Text>Place rating</Text>
                        <Text>
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.

                            Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.

                            O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.

                            É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).

                            Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.
                        </Text>
                    </View>
                </Animated.ScrollView>
                <Animated.View style={{
                    height: 175+28,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    top: 0,
                    right: 0,
                    transform: [{ translateY: headerOffset }],
                    zIndex: 20
                }}>
                    <View style={{
                        backgroundColor: appColors.primary,
                        flex:1,
                        marginBottom: 28
                    }}>

                        <Text style={{
                            color: "#fff",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            paddingHorizontal: 40,
                            position: 'absolute',
                            fontSize: 20,
                        }}>Title</Text>
                    </View>
                    <ActionButton 
                        buttonColor={appColors.secondary} 
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

export default PlaceScreen;
