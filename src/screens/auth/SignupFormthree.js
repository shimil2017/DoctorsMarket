import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../../config";
const { height, width } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StepIndicator from "../../components/stepindicator";
import { TextField } from "react-native-material-textfield";
import Genderfield from "../../components/genderfield";
import NextButton from "../../components/nextbutton";
import ActionButton from "react-native-action-button";
import { isIphoneX } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/Ionicons";
let styles = {
  indicatorStyle: {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: "#02B2FE",
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: "#02B2FE",
    stepStrokeUnFinishedColor: "#02B2FE",
    separatorFinishedColor: "#02B2FE",
    separatorUnFinishedColor: "#02B2FE",
    stepIndicatorFinishedColor: "#02B2FE",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#fe7013"
  }
};

export default class SignupFormthree extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAwareScrollView
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: scale(10),
            paddingTop: verticalScale(18)
          }}
        >
          <StepIndicator
            customStyles={styles.indicatorStyle}
            currentPosition={2}
            stepCount={4}
          />
          <View
            style={{
              flex: 0.2,
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
              Professional Details
            </Text>
          </View>
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <TextField
              ref={this.emailRef}
              value={"Firstname"}
              defaultValue={"Firstname"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="First name"
              error={""}
              tintColor={"#02B2FE"}
            />
            <TextField
              ref={this.emailRef}
              value={"Firstname"}
              defaultValue={"Firstname"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="What is your speciality?"
              error={""}
              tintColor={"#02B2FE"}
            />
            <TextField
              ref={this.emailRef}
              value={"Firstname"}
              defaultValue={"Firstname"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="what is your availabilty?"
              error={""}
              tintColor={"#02B2FE"}
            />
            <View
              style={{
                height: verticalScale(70),
                width,
                marginRight: 2,

                marginTop: verticalScale(10)
              }}
            >
              <Text style={{ opacity: 0.7 }}>Enter your GMC number</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginRight: scale(50),
                  marginTop: verticalScale(10)
                }}
              >
                <Genderfield label="Yes" />
                <Genderfield label="No" />
              </View>
            </View>
            <TextField
              ref={this.emailRef}
              value={"Firstname"}
              defaultValue={"Firstname"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Enter your GMC number"
              error={""}
              tintColor={"#02B2FE"}
            />
          </View>
        </KeyboardAwareScrollView>
        <NextButton onPress={() => navigate("Signupfour")} />
      </View>
    );
  }
}
