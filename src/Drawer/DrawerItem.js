import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import FIcon from "react-native-vector-icons/FontAwesome";
import MIcons from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../config";
export default class DrawerItem extends Component {
  constructor(props) {
    super(props);
  }
  renderIcon = () => {
    const { iconColor } = this.props;
    let icon;
    switch (this.props.iconfamily) {
      case "FontAwesome":
        return <FIcon name={this.props.icon} size={24} color={iconColor} />;
        break;
      case "MaterialIcons":
        return <MIcons name={this.props.icon} size={24} color={iconColor} />;
        break;
      case "Ionicons":
        return <Icons name={this.props.icon} size={24} color={iconColor} />;
      case "MaterialCommunityIcons":
        return <MCIcons name={this.props.icon} size={24} color={iconColor} />;
      default:
        return null;
    }
  };
  render() {
    const { onPress, labelStyle } = this.props;

    return (
      <TouchableHighlight
        style={{
          flex: 1,

          justifyContent: "center"
        }}
        onPress={onPress}
        underlayColor="transparent"
      >
        <View
          style={{
            flex: 0.5,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: normalize(18),
              fontFamily: fonts.fontPrimaryLight,
              color: "#FFFFFF",
              fontWeight: "500"
            }}
          >
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
