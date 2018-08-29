import React, { Component } from "react";
import {
  Modal,
  ActivityIndicator,
  Text,
  View,
  DeviceEventEmitter
} from "react-native";
import Swiper from "react-native-swiper";
import OpenAppSettings from "react-native-app-settings";
import { Icon } from "react-native-elements";
import Button from "../../components/button";
import { ViewContainer } from "../../components/viewcontainer";
import { colors } from "../../config";
import { resetNavigationTo } from "../../utils";

//import Button from "../../components/button";
const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
};
export default class AuthScreen extends Component {
  loginUser = () => {
    const {
      navigation: { navigate }
    } = this.props;
    //alert("huu");
    navigate("Login");
  };
  registerUser = () => {
    /* const {
      navigation: { navigate }
    } = this.props;
    */
    const { navigation } = this.props;
    //alert("huu");
    resetNavigationTo("Main", navigation);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          label={"LOGIN"}
          disabled={false}
          onPress={() => this.loginUser()}
          styles={{
            button: styles.btnStyle,

            label: [
              styles.btnTextStyle,
              {
                fontSize: 20
              }
            ]
          }}
        />

        <Button
          label={"REGISTER NOW"}
          disabled={false}
          onPress={() => this.loginUser()}
          styles={{
            button: styles.btnStyle,

            label: [
              styles.btnTextStyle,
              {
                fontSize: 20
              }
            ]
          }}
        />
      </View>
    );
  }
}
