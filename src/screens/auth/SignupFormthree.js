import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  Image
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
import EIcon from "react-native-vector-icons/Entypo";
import { SignupUpdate } from "../../actions/Signupactions";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import ImagePicker from "react-native-image-picker";
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
      doc1,
      doc2,
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

  /*  documentchooser = number => {
    //alert("lpp");+
    const { SignupUpdate } = this.props;
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.images()]
      },
      (error, res) => {
        // console.log(res, "res");
        if (number === 1) {
          SignupUpdate({ prop: "doc1", value: res });
        } else if (number === 2) {
          SignupUpdate({ prop: "doc2", value: res });
        }
      }
    );
  };
*/
  documentchooser = number => {
    const { SignupUpdate } = this.props;
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        //  console.log()
        if (number === 1) {
          SignupUpdate({ prop: "doc1", value: response });
        } else if (number === 2) {
          SignupUpdate({ prop: "doc2", value: response });
        }
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  render() {
    const {
      navigation: { navigate },
      SignupUpdate
    } = this.props;
    console.log(this.props.doc1);
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
                  flex: 1
                }}
                onPress={() => this.documentchooser(1)}
              >
                {!this.props.doc2 ? (
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <EIcon name="documents" size={20} />
                    <Text>click to upload</Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: this.props.doc1.uri }}
                    style={{
                      width: width - 40,
                      height: verticalScale(200)
                    }}
                  />
                )}
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
                onPress={() => this.documentchooser(2)}
              >
                {!this.props.doc2 ? (
                  <View>
                    <EIcon name="documents" size={20} />
                    <Text>click to upload</Text>
                  </View>
                ) : (
                  <Image
                    source={{ uri: this.props.doc2.uri }}
                    style={{
                      width: width - 40,
                      height: verticalScale(200)
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width, height: verticalScale(80) }} />
        </KeyboardAwareScrollView>
        <NextButton onPress={this.onSubmit} />
      </View>
    );
  }
}
const mapStateToProps = ({ SignupReducer }) => {
  const { specialist, crbverified, gmcnumber, doc1, doc2 } = SignupReducer;
  return { specialist, crbverified, gmcnumber, SignupReducer, doc1, doc2 };
};
export default connect(
  mapStateToProps,
  { SignupUpdate }
)(SignupFormthree);
