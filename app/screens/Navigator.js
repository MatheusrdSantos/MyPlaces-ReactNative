import {createSwitchNavigator, createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SuperMarketsScreen from './SuperMarketsScreen';
import RestaurantsScreen from './RestaurantsScreen';
import OthersScreen from './OthersScreen';
import OtherPlaceScreen from './OtherPlaceScreen';
import PlaceScreen from './PlaceScreen';
import {appColors} from '../resources/colors';

const PlacesTabNav = createMaterialTopTabNavigator({
    SuperMarket: {
        screen: SuperMarketsScreen,
        navigationOptions:{
            title: 'Mercados'
        }
    },
    Restaurants: {
        screen: RestaurantsScreen,
        navigationOptions:{
            title: 'Restaurantes'
        }
    },
    Others: {
        screen: OthersScreen,
        navigationOptions:{
            title: 'Outros'
        }
    }
},{
    initialRouteName: 'Others',
    tabBarOptions: {
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: appColors.secondary,
        },
        activeTintColor: 'white',
        indicatorStyle:{
            backgroundColor: 'white'
        }
    },
    navigationOptions:{
        title: 'Categorias',
        headerStyle: {
        backgroundColor: appColors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    },
});

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Places: PlacesTabNav,
        OtherPlace: OtherPlaceScreen,
        Place: PlaceScreen
    },{
        initialRouteName: 'Home'
    }

);
const AuthStack = createStackNavigator(
    {
        login: LoginScreen
    }
);

const switchNav = createSwitchNavigator({
        app: AppStack,
        auth: AuthStack,
        signIn: SignInScreen,
    },{
        initialRouteName: 'signIn'
    }
);

const test = createStackNavigator({
    test: PlaceScreen
});
/* export default createAppContainer(switchNav) */
export default createAppContainer(test)