import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainBottomNavigator from "./MainBottomNavigator";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreeen from "../screens/LoginScreen";

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainBottomNavigator,
      navigationOptions: () => ({
        headerMode: "none"
      })
    },
    Login: {
      screen: LoginScreeen,
      navigationOptions: () => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUpScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(RootStackNavigator);
