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
import StepIndicatorView from "../../components/stpeindicatorview";
import doctorslist from "../../utils/doctorsspecialist";
import { Dropdown } from "react-native-material-dropdown";
import { connect } from "react-redux";
import Regex from "../../utils/regex";
import { SignupUpdate } from "../../actions/Signupactions";
class SignupFormthree extends Component {
  render() {
    const {
      navigation: { navigate },
      SignupUpdate
    } = this.props;
    // alert(this.props.crbverified);
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
          <StepIndicatorView position={2} />
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
            <Dropdown
              error={""}
              label={"what is you speciality?"}
              data={doctorslist}
              fontSize={15}
              pickerStyle={{
                borderWidth: 1,
                borderColor: "#666666",
                borderRadius: 5
              }}
              value={this.props.specialist}
              itemTextStyle={[
                {
                  fontSize: 16,
                  fontFamily: fonts.fontPrimaryLight
                }
              ]}
              onChangeText={data =>
                SignupUpdate({ prop: "specialist", value: data })
              }
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
              <Text style={{ opacity: 0.7 }}>Are you CRB verified?</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginRight: scale(50),
                  marginTop: verticalScale(10)
                }}
              >
                <Genderfield
                  selected={this.props.crbverified === true}
                  onPress={() =>
                    SignupUpdate({ prop: "crbverified", value: true })
                  }
                  label="Yes"
                />
                <Genderfield
                  selected={this.props.crbverified === false}
                  onPress={() =>
                    SignupUpdate({ prop: "crbverified", value: false })
                  }
                  label="No"
                />
              </View>
            </View>
            <TextField
              ref="gmcnumber"
              value={this.props.gmcnumber}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text =>
                SignupUpdate({ prop: "gmcnumber", value: text })
              }
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
const mapStateToProps = ({ SignupReducer }) => {
  const { specialist, crbverified, gmcnumber } = SignupReducer;
  return { specialist, crbverified, gmcnumber };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(SignupFormthree);
