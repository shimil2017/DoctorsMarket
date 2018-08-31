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
import NextButton from "../../components/nextbutton";
export default class SignupFormtwo extends Component {
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
            paddingTop:verticalScale(18)
          }}
        >
          <StepIndicator
            customStyles={styles.indicatorStyle}
            currentPosition={1}
            stepCount={4}
          />
          <View style={{ flex: 0.2, paddingHorizontal: scale(10),paddingTop:verticalScale(10) }}>
            <Text
              style={{
                fontFamily: fonts.fontPrimaryLight,
                fontSize: normalize(36),
                marginVertical: verticalScale(10),
                color: "#000000",
                opacity: 0.8
              }}
            >
              Contact Details
            </Text>
          </View>
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <TextField
              ref={this.emailRef}
              value={"Country"}
              defaultValue={"India"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Country"
              error={""}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref={this.emailRef}
              value={"State"}
              defaultValue={"state"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="State"
              error={""}
              tintColor={"#02B2FE"}
            />
            <TextField
              ref={this.emailRef}
              value={"City"}
              defaultValue={"City"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="City"
              error={""}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref={this.emailRef}
              value={"Street name"}
              defaultValue={"Street name"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Street name"
              error={""}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref={this.emailRef}
              value={"Postal code"}
              defaultValue={"Street name"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Postal code"
              error={""}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref={this.emailRef}
              value={"Mobile number"}
              defaultValue={"mobilenumber"}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Mobile number"
              error={""}
              tintColor={"#02B2FE"}
            />
          </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            width: 60,
            height: 60,
            backgroundColor: "#00B1FF",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => navigate("Signupthree")}
        >
          <Icon name="md-arrow-forward" size={25} color={"#fff"} />
        </TouchableOpacity>
      </View>
    );
  }
}
