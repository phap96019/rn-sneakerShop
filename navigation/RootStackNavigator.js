import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainBottomNavigator from "./MainBottomNavigator";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreeen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AccountScreen from "../screens/AccountScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ScreenForTest from "../screens/ScreenForTest";

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainBottomNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: LoginScreeen,
      navigationOptions: () => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: "Create an account"
      })
    },
    Forgot: {
      screen: ForgotPasswordScreen,
      navigationOptions: () => ({
        title: "Forgot Password"
      })
    },
    Reset: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
        title: "ABC"
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: () => ({
        title: "Account"
      })
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: () => ({
        title: "Change password"
      })
    },
    Test: {
      screen: ScreenForTest,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    //initialRouteName: "Login"
    initialRouteName: "Test"
  }
);

export default createAppContainer(RootStackNavigator);
