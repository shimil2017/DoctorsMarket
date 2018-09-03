import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Keyboard
} from "react-native";
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
  constructor(props) {
    super(props);
    this.state = {
      specialityerror: "",
      crberror: "",
      gmcerror: ""
    };
  }
  onSubmit = () => {
    Keyboard.dismiss();
    this.setState({
      specialityerror: "",
      crberror: "",
      gmcerror: ""
    });
    //alert(this.props.crbverified)
    const {
      specialist,
      crbverified,
      gmcnumber,
      navigation: { navigate }
    } = this.props;
    const { specialityerror, crberror, gmcerror } = this.state;
    if (!specialist.value && !specialist.id) {
      this.setState({
        specialityerror: "Please select your speciality?"
      });
      return;
    }

    if (!crbverified) {
      this.setState({
        crberror: "Have you verifeid CRB?"
      });
      return;
    }
    if (crbverified && gmcnumber.length === 0) {
      this.setState({
        gmcerror: "Please enter GMC number"
      });
      return;
    }

    //  console.log(this.props.SignupReducer, "SignupReducer");

    navigate("Signupfour");
  };
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
              error={this.state.specialityerror}
              label={"What is you speciality?"}
              data={doctorslist}
              fontSize={15}
              pickerStyle={{
                borderWidth: 1,
                borderColor: "#666666",
                borderRadius: 5
              }}
              value={this.props.specialist.value}
              itemTextStyle={[
                {
                  fontSize: 16,
                  fontFamily: fonts.fontPrimaryLight
                }
              ]}
              onChangeText={(value, index) =>
                SignupUpdate({
                  prop: "specialist",
                  value: { value: value, id: doctorslist[index].id }
                })
              }
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
              <Text
                style={{
                  color: "rgb(213, 0, 0)",
                  fontSize: 12,
                  marginVertical: verticalScale(2)
                }}
              >
                {this.state.crberror}
              </Text>
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
              onSubmitEditing={() => Keyboard.dismiss()}
              returnKeyType="next"
              label="Enter your GMC number"
              error={this.state.gmcerror}
              tintColor={"#02B2FE"}
            />
          </View>
        </KeyboardAwareScrollView>
        <NextButton onPress={this.onSubmit} />
      </View>
    );
  }
}
const mapStateToProps = ({ SignupReducer }) => {
  const { specialist, crbverified, gmcnumber } = SignupReducer;
  return { specialist, crbverified, gmcnumber, SignupReducer };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(SignupFormthree);
