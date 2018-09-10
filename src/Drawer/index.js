import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Platform,
  TouchableHighlight,
  NativeModules
} from "react-native";
const { height, width } = Dimensions.get("window");
import LinearGradient from "react-native-linear-gradient";
import DrawerItem from "./DrawerItem";
import Divider from "./Divider";
import { scale, verticalScale, fonts } from "../config";
import { normalize } from "react-native-elements";
import { connect } from "react-redux";
import { Logotapi } from "../actions/Loginactions";
import Dash from "react-native-dash";
class Drawer extends Component {
  state = { active: "one", LoadingImage: true, image: null };
  handleLogout = () => {
    //alert("lop");
    const { userid, token, navigation } = this.props;
    this.props.Logotapi({ id: userid, token, navigation });
  };
  render() {
    return (
      <LinearGradient
        colors={["#00B1FF", "#7EF3C7"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View
          style={{
            flex: 0.3,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("../images/sidemenu.png")}
            resizeMode={"contain"}
            style={{ width: scale(100), height: verticalScale(100) }}
          />
        </View>
        <View style={{ flex: 0.5, marginLeft: scale(25) }}>
          <DrawerItem label={"Dashboard"} />
          <Dash style={{ width: width, height: 0.5 }} dashColor={"#FFFFFF"} />
          <DrawerItem label={"App Settings"} />
          <Dash style={{ width: width, height: 0.5 }} dashColor={"#FFFFFF"} />
          <DrawerItem label={"About DoctorsMarket"} />
          <Dash style={{ width: width, height: 0.5 }} dashColor={"#FFFFFF"} />
          <DrawerItem label={"Help & FAQs"} />
          <Dash style={{ width: width, height: 0.5 }} dashColor={"#FFFFFF"} />
          <DrawerItem label={"Terms of Services"} />
          <Dash style={{ width: width, height: 0.5 }} dashColor={"#FFFFFF"} />
          <DrawerItem label={"Logout"} onPress={this.handleLogout} />
        </View>
        <View
          style={{
            flex: 0.2,
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: scale(25)
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "#FFFFFF",
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(14)
            }}
          >
            Copyright©2018 doctorsmarket.co.uk All Rights Reserved.
          </Text>
        </View>
      </LinearGradient>
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
  { Logotapi }
)(Drawer);
