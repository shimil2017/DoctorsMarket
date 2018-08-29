import React, { Component } from "react";
import { AppRegistry, ScrollView, View } from "react-native";

import { TextField } from "react-native-material-textfield";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Regex from "../../utils/regex";
import NextButton from "../../components/nextbutton";
import StepIndicator from "../../components/stepindicator";
import Entypo from "react-native-vector-icons/Entypo";
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
    ["firstname", "lastname", "about", "email", "password"]
      .map(name => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry
    }));
  }

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

    ["firstname", "lastname", "email", "password"].forEach(name => {
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
    let { firstname = "name", lastname = "house" } = data;

    let defaultEmail = `${firstname}@${lastname}.com`
      .replace(/\s+/g, "_")
      .toLowerCase();

    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        <StepIndicator
          customStyles={styles.indicatorStyle}
          currentPosition={1}
        />
        <View style={styles.container}>
          <TextField
            ref={this.firstnameRef}
            value={data.firstname}
            autoCorrect={false}
            tintColor={"#37a6ff"}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitFirstName}
            returnKeyType="next"
            label="First Name"
            error={errors.firstname}
          />

          <TextField
            ref={this.lastnameRef}
            value={data.lastname}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitLastName}
            returnKeyType="next"
            label="Last Name"
            error={errors.lastname}
          />

          <TextField
            ref={this.aboutRef}
            value={data.about}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitAbout}
            returnKeyType="next"
            multiline={true}
            blurOnSubmit={true}
            label="About (optional)"
            characterRestriction={140}
          />

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
            characterRestriction={20}
            renderAccessory={this.renderPasswordAccessory}
          />

          <TextField
            value={data.lastname}
            label="House"
            title="Derived from last name"
            disabled={true}
          />
        </View>
        <NextButton />

        <View style={styles.container} />
      </ScrollView>
    );
  }
}
export default LoginScreen;
