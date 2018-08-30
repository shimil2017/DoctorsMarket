import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { resetNavigationTo, openURLInView } from "../../utils";
export default class ProfileScreen extends Component {
  signOutUser = () => {
    const { navigation } = this.props;

    resetNavigationTo("auth", navigation);
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Logout" onPress={() => this.signOutUser()} />
      </View>
    );
  }
}
