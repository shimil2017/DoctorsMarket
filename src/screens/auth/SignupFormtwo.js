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
import StepIndicatorView from "../../components/stpeindicatorview";
import { SignupUpdate } from "../../actions/Signupactions";
import { connect } from "react-redux";
import Regex from "../../utils/regex";
//import NextButton from "../../compo/nents/nextbutton";
import { Dropdown } from "react-native-material-dropdown";
import NextButton from "../../components/nextbutton";
import country from "../../utils/country";
class SignupFormtwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contryerror: ""
    };
  }
  render() {
    console.log(country, "kkk");
    const {
      navigation: { navigate },
      SignupUpdate
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
          <StepIndicatorView position={1} />
          <View
            style={{
              flex: 0.2,
              paddingHorizontal: scale(10),
              paddingTop: verticalScale(10)
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
              Contact Details
            </Text>
          </View>
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <TextField
              ref={this.cointryref}
              value={this.props.country}
              defaultValue={this.props.country}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data =>
                SignupUpdate({ prop: "country", value: data })
              }
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Country"
              disabled={false}
              error={""}
              tintColor={"#02B2FE"}
            />
            <View style={{ flex: 1 }}>
              <Dropdown
                label={"Select Nationalty"}
                data={country}
                fontSize={15}
                pickerStyle={{
                  borderWidth: 1,
                  borderColor: "#666666",
                  borderRadius: 5
                }}
                value={this.props.nationality}
                containerStyle={{
                  color: "#666666"
                }}
                itemTextStyle={[
                  {
                    fontSize: 16,
                    fontFamily: fonts.fontPrimaryLight
                  }
                ]}
                onChangeText={data =>
                  SignupUpdate({ prop: "nationality", value: data })
                }
              />
            </View>

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
              ref={this.postalcode}
              value={this.props.postalcode}
              defaultValue={""}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data =>
                SignupUpdate({ prop: "postalcode", value: data })
              }
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
        <NextButton onPress={() => navigate("Signupthree")} />
      </View>
    );
  }
}

const mapStateToProps = ({ SignupReducer }) => {
  const { country, nationality, postalcode } = SignupReducer;
  return {
    country,
    nationality,
    postalcode
  };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(SignupFormtwo);
