import contextFactory from "./contextFactory";
import apiHelper from "../utils/apiHelper";
import { AsyncStorage } from "react-native";
import { navigate, navigateReplace } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return { ...state, token: action.payload, error: "" };
    case "SET_AUTH_ERROR":
      return { ...state, error: action.payload };
    case "CLEAR_AUTH_ERROR":
      return { ...state, error: "" };
    case "LOG_OUT":
      return { ...state, error: "", token: "", isSignIn: false };
    default:
      return state;
  }
};

const signIn = dispatch => {
  return async ({ email, password }) => {
    // TODO: 10/23/19 Trim email and password to delete space
    email = email.trim();
    password = password.trim();
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
  return ({ email, password, passwordConfirm }) => {};
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "LOGIN_SUCCESS", payload: token });
    // navigateReplace("Main");
  }
};

const clearError = dispatch => () => {
  dispatch({ type: "CLEAR_AUTH_ERROR" });
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "LOG_OUT" });
};

export const { Provider, Context } = contextFactory(
  authReducer,
  { signIn, signUp, signOut, clearError, tryLocalSignIn },
  { isSignIn: false, token: null, error: "" }
);
