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
import EIcon from "react-native-vector-icons/Entypo";
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

import Button from "../../components/button";

import { toast } from "../../components/toast";

import RestClient from "../../utils/restclient";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialityerror: "",
      crberror: "",
      gmcerror: ""
    };
  }

  documentchooser = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.images()]
      },
      (error, res) => {
        console.log(res, "res");
      }
    );
  };
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

    if (crbverified === null) {
      this.setState({
        crberror: "Have you verifeid CRB?"
      });
      return;
    }
    if (gmcnumber.length === 0) {
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
          <View style={{ flex: 0.8, paddingHorizontal: scale(10) }}>
            <Dropdown
              error={this.state.specialityerror}
              label={"Add more speciality?"}
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

            <Text style={{ opacity: 0.7, marginTop: verticalScale(12) }}>
              Upload documnet
            </Text>
            <View
              style={{
                width: width - 40,
                marginRight: scale(50),
                height: verticalScale(200),
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#787878",
                marginTop: verticalScale(12)
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={this.documentchooser}
              >
                <EIcon name="documents" size={20} />
                <Text>click to upload</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: width - 40,
                marginRight: scale(50),
                height: verticalScale(200),
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#787878",
                marginTop: verticalScale(12)
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={this.documentchooser}
              >
                <EIcon name="documents" size={20} />
                <Text>click to upload</Text>
              </TouchableOpacity>
            </View>
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
const mapStateToProps = ({ SignupReducer }) => {
  const { specialist, crbverified, gmcnumber } = SignupReducer;
  return { specialist, crbverified, gmcnumber, SignupReducer };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(Professional);
