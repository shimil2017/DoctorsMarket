import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { isIphoneX } from "react-native-iphone-x-helper";

export default class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ActionButton
        buttonColor={"red"}
        offsetY={isIphoneX() ? 95 : 70}
        offsetX={10}
      />
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
