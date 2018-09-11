import React, { Component } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
export default class CustomeHeader extends Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <Header
        style={{ backgroundColor: "#FFFFFF" }}
        androidStatusBarColor={"#FFFFFF"}
      >
        <Left>
          <Button onPress={() => navigate("DrawerOpen")} transparent>
            <Icon
              style={{ fontSize: 35, color: "#000000", opacity: 0.7 }}
              name="md-menu"
            />
          </Button>
        </Left>
        <Body />
        <Right>
          <Button transparent>
            <Icon
              style={{ fontSize: 35, color: "#000000", opacity: 0.7 }}
              name="ios-notifications-outline"
            />
          </Button>
          <Button transparent>
            <Icon
              style={{ fontSize: 35, color: "#000000", opacity: 0.9 }}
              name="md-more"
            />
          </Button>
        </Right>
      </Header>
    );
  }
}
