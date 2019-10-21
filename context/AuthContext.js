import contextFactory from "./contextFactory";
import apiHelper from "../utils/apiHelper";
import { AsyncStorage } from "react-native";
import { navigate, navigateReplace } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload, error: "" };
    case "SET_AUTH_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const signIn = dispatch => {
  return async ({ email, password }) => {
    // TODO: 10/07/19  Check email and password not empty string
    try {
      if (!email || !password) {
        throw new Error("Please enter email and password!");
      }

      const { data } = await apiHelper.post("/api/v1/users/login", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      // navigate("Main");
      navigateReplace("Main");
    } catch (error) {
      const payload = error.response
        ? error.response.data.message
        : error.message;
      console.log(error, payload);
      dispatch({ type: "SET_AUTH_ERROR", payload });
    }
  };
};

const signUp = dispatch => {
  return ({ email, password }) => {
    //do here
  };
};
const signOut = dispatch => {
  return ({ email, password }) => {
    //do here
  };
};

export const { Provider, Context } = contextFactory(
  authReducer,
  { signIn, signUp, signOut },
  { isSignIn: false, token: null, error: "" }
);
