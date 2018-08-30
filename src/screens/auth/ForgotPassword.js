import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale
} from "../../config";
import { TextField } from "react-native-material-textfield";
import Button from "../../components/button";
const { height, width } = Dimensions.get("window");
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: normalize(10)
        }}
      >
        <View style={{ flex: 0.2 }}>
          <Text
            style={{
              fontFamily: "SF-UI-Display-Light",
              fontSize: normalize(36),
              marginLeft: scale(10),
              color: "#000000",
              opacity: 0.8
            }}
          >
            ForgotPassword?
          </Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Text
            style={{
              fontFamily: "SF-UI-Display-Light",
              fontSize: normalize(14),
              marginLeft: scale(10),
              marginTop: normalize(5),
              color: "#000000",
              opacity: 0.5,
              textAlign: "left"
            }}
          >
            Please enter your registerred email address to get new password
          </Text>
        </View>
        <View
          style={{
            flex: 0.3,
            paddingHorizontal: normalize(10),
            marginTop: verticalScale(10)
          }}
        >
          <TextField
            ref={this.emailRef}
            value={"testme@gmail.com"}
            defaultValue={"testme@gmail.com"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="Email Address"
            error={"sure"}
            tintColor={"#02B2FE"}
          />
        </View>
        <View style={{ flex: 0.3, marginHorizontal: scale(25) }}>
          <Button
            label={"RESET PASSWORD"}
            disabled={false}
            onPress={() => alert("progress")}
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
                marginVertical: verticalScale(40)
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
      </KeyboardAwareScrollView>
    );
  }
}
