import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import PlacesScreen from './PlacesScreen';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Places: PlacesScreen
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
        signIn: SignInScreen
    },{
        initialRouteName: 'signIn'
    }
);


export default createAppContainer(switchNav)