import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
const { height, width } = Dimensions.get("window");
import { TextField } from "react-native-material-textfield";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Regex from "../../utils/regex";
import NextButton from "../../components/nextbutton";
import Entypo from "react-native-vector-icons/Entypo";
import Button from "../../components/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../../config";
let styles = {
  scroll: {
    backgroundColor: "#fff",
    flex: 1
  },

  container: {
    margin: 8,
    marginTop: 24
  },

  contentContainer: {
    padding: 8
  },
  indicatorStyle: {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#fe7013",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#fe7013",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
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

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(Regex, "regetx");
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
    this.onSubmitLastName = this.onSubmitLastName.bind(this);
    this.onSubmitAbout = this.onSubmitAbout.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.firstnameRef = this.updateRef.bind(this, "firstname");
    this.lastnameRef = this.updateRef.bind(this, "lastname");
    this.aboutRef = this.updateRef.bind(this, "about");
    this.emailRef = this.updateRef.bind(this, "email");
    this.passwordRef = this.updateRef.bind(this, "password");

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      about: "",
      secureTextEntry: true
    };
  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }

  onChangeText(text) {
    ["email", "password"]
      .map(name => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }

  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry
    }));
  };

  onSubmitFirstName() {
    this.lastname.focus();
  }

  onSubmitLastName() {
    this.about.focus();
  }

  onSubmitAbout() {
    this.email.focus();
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onSubmit() {
    let errors = {};

    ["email", "password"].forEach(name => {
      let value = this[name].value();

      if (!value) {
        errors[name] = "Should not be empty";
      } else {
        if ("password" === name && value.length < 6) {
          errors[name] = "Too short";
        } else if ("email" === name && !Regex.validateEmail(email.trim())) {
          errors[name] = "email is not valid";
        }
      }
    });

    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  renderPasswordAccessory() {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry ? "visibility" : "visibility-off";

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }

  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    ///let { firstname = "name", lastname = "house" } = data;
    const {
      navigation: { navigate }
    } = this.props;

    let defaultEmail = "test@gmail.com".replace(/\s+/g, "_").toLowerCase();

    return (
      <KeyboardAwareScrollView
        style={{
          padding: 8,
          backgroundColor: "#fff",
          paddingTop: verticalScale(8)
        }}
      >
        <View style={{ flex: 0.2, paddingHorizontal: scale(10) }}>
          <Text
            style={{
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(36),
              marginLeft: scale(10),
              color: "#000000",
              opacity: 0.8
            }}
          >
            Login
          </Text>
        </View>
        <View
          style={{
            margin: 8,
            marginTop: 24,
            flex: 0.3,
            paddingHorizontal: scale(10)
          }}
        >
          <TextField
            ref={this.emailRef}
            value={data.email}
            defaultValue={defaultEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="Email Address"
            error={errors.email}
            tintColor={"#02B2FE"}
          />

          <TextField
            ref={this.passwordRef}
            value={data.password}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitPassword}
            returnKeyType="done"
            label="Password"
            error={errors.password}
            title="Choose wisely"
            maxLength={30}
            tintColor={"#02B2FE"}
            characterRestriction={20}
            renderAccessory={this.renderPasswordAccessory}
          />
        </View>
        <View
          style={{
            width,
            height: 15,
            alignItems: "flex-end"
          }}
        >
          <Text
            onPress={() => navigate("ForgotPassword")}
            style={{
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(13),
              paddingRight: scale(32),
              letterSpacing: 2,
              color: "#02B2FE"
            }}
          >
            Forgot?
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            label={"LOGIN"}
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
export default LoginScreen;
