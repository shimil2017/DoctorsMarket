import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale
} from "../../config";
const { height, width } = Dimensions.get("window");
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StepIndicator from "../../components/stepindicator";
import { TextField } from "react-native-material-textfield";
import Genderfield from "../../components/genderfield";
import NextButton from "../../components/nextbutton";
let styles = {
  scroll: {
    backgroundColor: "#fff"
  },
  container: {
    margin: 8,
    marginTop: 24
  },
  contentContainer: {
    padding: 8
  },
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

export default class SignupFormone extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: scale(10)
        }}
      >
        <StepIndicator
          customStyles={styles.indicatorStyle}
          currentPosition={0}
          stepCount={4}
        />
        <View style={{ flex: 0.2, paddingHorizontal: scale(10) }}>
          <Text
            style={{
              fontFamily: "SF-UI-Display-Light",
              fontSize: normalize(36),
              marginVertical: verticalScale(10),
              color: "#000000",
              opacity: 0.8
            }}
          >
            Personal Details
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
            value={"lastname"}
            defaultValue={"lastname"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="Last name"
            error={""}
            tintColor={"#02B2FE"}
          />

          <TextField
            ref={this.emailRef}
            value={"email adress"}
            defaultValue={"email adress"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="email adress"
            error={""}
            tintColor={"#02B2FE"}
          />
          <TextField
            ref={this.emailRef}
            value={"Phone number"}
            defaultValue={"Phone numbere"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="Phone number"
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
            <Text style={{ opacity: 0.7 }}>Select gender</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginRight: scale(50),
                marginTop: verticalScale(10)
              }}
            >
              <Genderfield label="male" />
              <Genderfield label="female" />
              <Genderfield label="others" />
            </View>
          </View>
          <TextField
            ref={this.emailRef}
            value={"password"}
            defaultValue={"lastname"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="password"
            error={""}
            tintColor={"#02B2FE"}
          />
          <TextField
            ref={this.emailRef}
            value={"confirm password"}
            defaultValue={"lastname"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="confirm password"
            error={""}
            tintColor={"#02B2FE"}
          />
        </View>
        <NextButton reducer={0} onPress={() => navigate("Signuptwo")} />
      </KeyboardAwareScrollView>
    );
  }
}
