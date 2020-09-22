import { NavigationActions } from "react-navigation";

let Navigator;

export const setNavigator = (nav) => {
  Navigator = nav;
};

export const navigate = (routeName, params) => {
  Navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
