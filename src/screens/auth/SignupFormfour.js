import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StepIndicator from "../../components/stepindicator";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../../config";
import Button from "../../components/button";
import CheckBox from "../../components/checkbox";

const { height, width } = Dimensions.get("window");
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
export default class SignupupFormfour extends Component {
  state = { isChecked: false };
  handlePressCheckedBox = checked => {
    this.setState({
      isChecked: checked
    });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: scale(10),         
          paddingTop:verticalScale(18)
        }}
      >
        <StepIndicator
          customStyles={styles.indicatorStyle}
          currentPosition={3}
          stepCount={4}
        />
        <View style={{ flex: 0.2, paddingHorizontal: scale(10), paddingTop:verticalScale(18) }}>
          <Text
            style={{
              fontFamily:fonts.fontPrimaryLight,
              fontSize: normalize(36),
              marginVertical: verticalScale(10),
              color: "#000000",
              opacity: 0.8
            }}
          >
            Terms of Services
          </Text>
        </View>
        <View style={{ flex: 0.8, marginHorizontal: scale(13) }}>
          <Text
            style={{
              fontFamily:fonts.fontPrimaryLight,
              fontSize: normalize(15),
              marginVertical: verticalScale(10),
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
            the mobile app The most common way to link to these legal agreements
            is through the browsewrap method. Through this method, you include
            links to your legal agreements somewhere in the footer of your
            website or within the mobile app.
          </Text>
          <View
            style={{
              width,
              backgroundColor:"red",
              height: verticalScale(25),
              flexDirection: "row",
              marginLeft: scale(36),
              marginVertical: verticalScale(20)
            }}
          >
            <View style={{ flex: 0.1, justifyContent: "center"  }}>
              <CheckBox
                label=""
                size={25}
                color={"#02B2FE"}               
                checked={this.state.isChecked}
                onPress={this.handlePressCheckedBox}
              />
            </View>
            <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
              <Text
                style={{
                  fontFamily:fonts.fontPrimaryLight,
                  fontSize: normalize(15),

                  color: "#000000",
                  opacity: 0.8
                }}
              >
                I accept the Terms of Service
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            label={"REGISTER"}
            disabled={false}
            onPress={() => alert("mmm")}
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
    );
  }
}
