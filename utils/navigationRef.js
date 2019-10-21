import { NavigationActions, StackActions } from "react-navigation";

let _navigator;

export const setNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
export const navigateReplace = (routeName, params) => {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  );
};

// add other navigation functions that you need and export them
