import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
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

import { TextField } from "react-native-material-textfield";
import Genderfield from "../../components/genderfield";
import NextButton from "../../components/nextbutton";
import FormInput from "../../components/FormInput";
import StepIndicatorView from "../../components/stpeindicatorview";
import { SignupUpdate } from "../../actions/Signupactions";
import { connect } from "react-redux";
import Regex from "../../utils/regex";

class SignupFormone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmpassword: "",
      firstnameerror: "",
      secondnameerror: "",
      emailerror: "",
      phonenumbererror: "",
      gendererror: "",
      passworderror: "",
      matcherror: ""
    };
  }

  onFocus = () => {};
  nextPage = () => {
    this.setState({
      firstnameerror: "",
      secondnameerror: "",
      emailerror: "",
      phonenumbererror: "",
      gendererror: "",
      passworderror: "",
      matcherror: ""
    });
    const {
      email,
      firstname,
      lastname,
      phonenumber,
      gender,
      password,
      navigation: { navigate }
    } = this.props;
    const {
      firstnameerror,
      secondnameerror,
      emailerror,
      phonenumbererror,
      gendererror,
      passworderror,
      matcherror
    } = this.state;

    if (!Regex.validateStringMinimumLength2(firstname))
      this.setState({
        firstnameerror: "Name should contain minum two charecter"
      });

    if (!Regex.validateStringMinimumLength2(lastname))
      this.setState({
        secondnameerror: "Name should contain minum two charecter"
      });

    if (firstname.length > 2 && !Regex.validateString(firstname))
      this.setState({
        firstnameerror: "Name contain illegal charecter"
      });
    if (lastname.length > 2 && !Regex.validateString(lastname))
      this.setState({
        secondnameerror: "Name contain illegal charecter"
      });

    if (!Regex.validateEmail(email))
      this.setState({
        emailerror: "Please enter valid email adress"
      });

    if (!Regex.validateMobile(phonenumber))
      this.setState({
        phonenumbererror: "Please enter valid mobile numer"
      });
    if (!gender)
      this.setState({
        gendererror: "Please select gender"
      });
    if (!password)
      this.setState({
        passworderror: "Please enter a password"
      });
    if (
      password != this.state.confirmpassword ||
      this.state.confirmpassword.length == 0
    )
      this.setState({
        matcherror: "Password does not match"
      });

    if (
      !firstnameerror &&
      !secondnameerror &&
      !emailerror &&
      !phonenumbererror &&
      !gendererror &&
      !passworderror &&
      !matcherror
    ) {
      navigate("Signuptwo");
    }
  };
  _handleFocusNextField = nextField => {
    this.refs[nextField].focus();
  };

  render() {
    const {
      navigation: { navigate },
      SignupUpdate
    } = this.props;
    let { error, validemail } = this.state;
    console.log(validemail, "validemail");
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
          <StepIndicatorView position={0} />
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
              Personal Details
            </Text>
          </View>
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <TextField
              ref={this.firstname}
              value={this.props.firstname}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text =>
                SignupUpdate({ prop: "firstname", value: text })
              }
              onSubmitEditing={this._handleFocusNextField.bind(
                this,
                "lastname"
              )}
              returnKeyType="next"
              label="First name"
              error={this.state.firstnameerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="lastname"
              value={this.props.lastname}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text =>
                SignupUpdate({ prop: "lastname", value: text })
              }
              onSubmitEditing={this._handleFocusNextField.bind(this, "email")}
              returnKeyType="next"
              label="Last name"
              error={this.state.secondnameerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="email"
              value={this.props.email}
              defaultValue={""}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus("email")}
              onChangeText={text =>
                SignupUpdate({ prop: "email", value: text })
              }
              onSubmitEditing={this._handleFocusNextField.bind(
                this,
                "phonenumber"
              )}
              returnKeyType="next"
              label="email adress"
              error={this.state.emailerror}
              tintColor={"#02B2FE"}
            />
            <TextField
              ref="phonenumber"
              value={this.props.phonenumber}
              defaultValue={""}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text =>
                SignupUpdate({ prop: "phonenumber", value: text })
              }
              onSubmitEditing={() => this.refs["phonenumber"].blur()}
              returnKeyType="next"
              label="Phone number"
              error={this.state.phonenumbererror}
              tintColor={"#02B2FE"}
            />
            <View
              style={{
                height: verticalScale(70),
                width,
                marginRight: 0,

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
                <Genderfield
                  label="male"
                  selected={this.props.gender === "male"}
                  onPress={() =>
                    SignupUpdate({ prop: "gender", value: "male" })
                  }
                />
                <Genderfield
                  label="female"
                  selected={this.props.gender === "female"}
                  onPress={() =>
                    SignupUpdate({ prop: "gender", value: "female" })
                  }
                />
                <Genderfield
                  label="others"
                  selected={this.props.gender === "others"}
                  onPress={() =>
                    SignupUpdate({ prop: "gender", value: "others" })
                  }
                />
              </View>
              <Text
                style={{
                  color: "rgb(213, 0, 0)",
                  fontSize: 12,
                  marginVertical: verticalScale(2)
                }}
              >
                {this.state.gendererror}
              </Text>
            </View>
            <TextField
              ref="password"
              value={this.props.password}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text =>
                SignupUpdate({ prop: "password", value: text })
              }
              onSubmitEditing={() => this.refs["cpassword"].focus()}
              returnKeyType="next"
              label="password"
              error={this.state.passworderror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="cpassword"
              value={this.state.confirmpassword}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ confirmpassword: text })}
              returnKeyType="next"
              label="confirm password"
              error={this.state.matcherror}
              tintColor={"#02B2FE"}
              secureTextEntry={true}
            />
          </View>
          <View style={{ width, height: 50, backgroundColor: "#fff" }} />
        </KeyboardAwareScrollView>
        <NextButton onPress={this.nextPage} />
      </View>
    );
  }
}

const mapStateToProps = ({ SignupReducer }) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    gender,
    password
  } = SignupReducer;
  return {
    firstname,
    lastname,
    email,
    phonenumber,
    gender,
    password
  };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(SignupFormone);
