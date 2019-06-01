import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen
    }
);
const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen
    }
);

const switchNav = createSwitchNavigator({
        app: AppStack,
        auth: AuthStack
    },{
        initialRouteName: 'auth'
    }
);


export default createAppContainer(switchNav)