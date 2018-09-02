import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  DeviceEventEmitter
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StepIndicatorView from "../../components/stpeindicatorview";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../../config";
import Button from "../../components/button";
//import CheckBox from "../../components/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
const { height, width } = Dimensions.get("window");
import CheckBox from "react-native-modest-checkbox";
export default class SignupupFormfour extends Component {
  state = { isChecked: false };
  handlePressCheckedBox = checked => {
    this.setState({
      isChecked: checked
    });
  };
  register = () => {
    const {
      navigation: { navigate }
    } = this.props;
    if (!this.state.isChecked) {
      DeviceEventEmitter.emit(
        "showToast",
        "Please accept the terms of service"
      );
      return;
    }
    navigate("Main");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: scale(10),
          paddingTop: verticalScale(18)
        }}
      >
        <StepIndicatorView position={3} />
        <View
          style={{
            flex: 0.1,
            paddingHorizontal: scale(10),
            paddingTop: verticalScale(18)
          }}
        >
          <Text
            style={{
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(36),
              marginVertical: verticalScale(10),
              color: "#000000",
              opacity: 0.8
            }}
          >
            Terms of Services
          </Text>
        </View>
        <View
          style={{
            flex: 0.9,
            marginBottom: verticalScale(15)
          }}
        >
          <ScrollView
            style={{
              flex: 0.5,
              paddingTop: verticalScale(15),
              marginLeft: scale(2)
            }}
          >
            <Text
              style={{
                fontFamily: fonts.fontPrimaryLight,
                fontSize: normalize(15),
                marginHorizontal: scale(10),
                color: "#000000",
                opacity: 0.8,
                textAlign: "left"
              }}
            >
              A Terms and Conditions agreement or a Privacy Policy are legally
              binding agreements between you (the company, the mobile app
              developer, the website owner, the e-commerce store owner etc.) and
              users using your website, mobile app, Facebook app etc. The most
              common way to link to these legal agreements is through the
              browsewrap method. Through this method, you include links to your
              legal agreements somewhere in the footer of your website or within
              the mobile app The most common way to link to these legal
              agreements is through the browsewrap method. Through this method,
              you include links to your legal agreements somewhere in the footer
              of your website or within the mobile app.
            </Text>
          </ScrollView>
          <View
            style={{
              flex: 0.2,
              alignItems: "flex-start",
              justifyContent: "center",
              paddingLeft: scale(10)
            }}
          >
            <CheckBox
              label="I accept the Terms of Service"
              labelStyle={{
                fontFamily: fonts.fontPrimaryLight,
                fontSize: normalize(15),
                color: "#000000",
                opacity: 0.8
              }}
              checkboxStyle={{
                width: 20,
                height: 20
              }}
              checked={this.state.isChecked}
              onChange={checked =>
                this.setState({ isChecked: !this.state.isChecked })
              }
            />
          </View>
          <View
            style={{
              flex: 0.3,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              label={"REGISTER"}
              disabled={false}
              onPress={this.register}
              styles={{
                button: {
                  height: verticalScale(50),
                  width: width - 70,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 50,
                  marginVertical: 5
                },

                label: [
                  {
                    fontSize: normalize(16),
                    color: "#FFFFFF",
                    letterSpacing: 5
                  }
                ]
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
