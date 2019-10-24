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

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainBottomNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Login: {
      screen: LoginScreeen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: "Create an account",
      }),
    },
    Forgot: {
      screen: ForgotPasswordScreen,
      navigationOptions: () => ({
        title: "Forgot Password",
      }),
    },
    Reset: {
      screen: ResetPasswordScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
        title: "ABC",
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: () => ({
<<<<<<< HEAD
        title: "Account"
      })
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: () => ({
        title: "Change password"
      })
    }
  },
  {
    //initialRouteName: "Login"
    initialRouteName: "Password"
=======
        title: "Forgot Password",
      }),
    },
  },
  {
    //initialRouteName: "Login"
    initialRouteName: "Main",
>>>>>>> 83ca1aac0dad060895550ecfb45637f4f86ee13e
  }
);

export default createAppContainer(RootStackNavigator);
