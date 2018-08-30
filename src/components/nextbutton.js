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
        onPress={this.props.onPress}
        buttonColor={"#00B1FF"}
        offsetY={
          isIphoneX() ? 95 - this.props.reducer : 70 - this.props.reducer
        }
        offsetX={18}
        renderIcon={() => (
          <Icon name="md-arrow-forward" size={25} color={"#fff"} />
        )}
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
