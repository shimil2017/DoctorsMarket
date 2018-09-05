import React, { Component } from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";

import routes from "./routes";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from "react-navigation";
class AppNavigation extends Component {
  constructor(props) {
    super(props);

    this.currentRouteName = "auth";
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      console.log(this.currentRouteName.routeName);
    });
  }

  render() {
    const { userid, token } = this.props;

    const AppNavigator = StackNavigator(routes, {
      initialRouteName: userid && token ? "Main" : "auth",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: "transparent"
      }
    });
    return (
      <AppNavigator
        onNavigationStateChange={(prevState, currentState, action) => {
          this.currentRouteName = currentState.routes[currentState.index];
        }}
      />
    );
  }
}

const mapStateToProps = ({ Loginreducer }) => {
  const { userid, token } = Loginreducer;
  return {
    userid,
    token
  };
};

export default connect(
  mapStateToProps,
  null
)(AppNavigation);
