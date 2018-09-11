import React, { Component } from "react";
import { View, Text, Dimensions, Keyboard } from "react-native";
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
import { isIphoneX } from "react-native-iphone-x-helper";
import { TextField } from "react-native-material-textfield";
import Genderfield from "../../components/genderfield";
import NextButton from "../../components/nextbutton";
import FormInput from "../../components/FormInput";
import StepIndicatorView from "../../components/stpeindicatorview";
import { SignupUpdate } from "../../actions/Signupactions";
import { connect } from "react-redux";

import Button from "../../components/button";

import { toast } from "../../components/toast";
import Regex from "../../utils/regex";
import RestClient from "../../utils/restclient";

class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.userdata.fname ? this.props.userdata.fname : "",
      secondname: this.props.userdata.lname ? this.props.userdata.lname : "",
      firstnameerror: "",
      secondnameerror: "",
      email: this.props.userdata.email ? this.props.userdata.email : "",
      emailerror: "",
      phonenumber: this.props.userdata.phone_number
        ? this.props.userdata.phone_number
        : "",
      phonenumbererror: ""
    };
  }

  onFocus = () => {};
  nextPage = () => {
    Keyboard.dismiss();
    this.setState({
      firstnameerror: "",
      secondnameerror: "",
      emailerror: "",
      phonenumbererror: ""
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
    this.setState({ valuated: true });
    if (!Regex.validateStringMinimumLength2(firstname)) {
      this.setState({
        firstnameerror: "Name should contain minum two charecter"
      });
      return;
    }

    if (!Regex.validateStringMinimumLength2(lastname)) {
      this.setState({
        secondnameerror: "Name should contain minum two charecter"
      });
      return;
    }

    if (firstname.length > 2 && !Regex.validateString(firstname)) {
      this.setState({
        firstnameerror: "Name contain illegal charecter"
      });
      return;
    }

    if (lastname.length > 2 && !Regex.validateString(lastname)) {
      this.setState({
        secondnameerror: "Name contain illegal charecter"
      });
      return;
    }

    if (!Regex.validateEmail(email)) {
      this.setState({
        emailerror: "Please enter valid email adress"
      });
      return;
    }

    if (!Regex.validateMobile(phonenumber)) {
      this.setState({
        phonenumbererror: "Please enter valid mobile numer"
      });
      return;
    }

    if (!gender) {
      this.setState({
        gendererror: "Please select gender"
      });
      return;
    }

    if (!password) {
      this.setState({
        passworderror: "Please enter a password"
      });
      return;
    }

    if (
      password != this.state.confirmpassword ||
      this.state.confirmpassword.length == 0
    ) {
      this.setState({
        matcherror: "Password does not match"
      });
      return;
    }

    navigate("Signuptwo");
  };
  _handleFocusNextField = nextField => {
    this.refs[nextField].focus();
  };

  render() {
    console.log(this.props.userdata, "userdata");
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
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <TextField
              ref={this.firstname}
              value={this.state.firstname}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ firstname: text })}
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
              value={this.state.secondname}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ secondname: text })}
              onSubmitEditing={this._handleFocusNextField.bind(this, "email")}
              returnKeyType="next"
              label="Last name"
              error={this.state.secondnameerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="email"
              value={this.state.email}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ email: text })}
              onSubmitEditing={this._handleFocusNextField.bind(
                this,
                "phonenumber"
              )}
              returnKeyType="next"
              label="Email Adress"
              error={this.state.secondnameerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="phonenumber"
              value={this.state.phonenumber}
              defaultValue={""}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ phonenumber: text })}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              returnKeyType="done"
              label="Phone number"
              error={this.state.phonenumbererror}
              tintColor={"#02B2FE"}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              label={"SAVE"}
              disabled={false}
              onPress={this.onSubmit}
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
          {this.state.loader && (
            <Spinner visible={this.state.loader} text="Changing email.." />
          )}
          <View style={{ width, height: 50, backgroundColor: "#fff" }} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ Loginreducer }) => {
  const { userdata, userid, token } = Loginreducer;
  return {
    userdata,
    userid,
    token
  };
};
export default connect(
  mapStateToProps,
  null
)(ProfileDetail);
