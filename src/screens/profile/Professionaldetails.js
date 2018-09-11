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
import doctorslist from "../../utils/doctorsspecialist";
import ImagePicker from "react-native-image-picker";
class Professional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialist: { value: "", id: "", locum_type_id: "" },
      doc1: { uri: "" },
      doc2: { uri: "" },
      crbveri: false,
      gmc: "",
      specialityerror: "",
      crberror: "",
      gmcerror: ""
    };
  }

  componentWillMount() {
    const { userdata } = this.props;
    console.log(userdata.specialist);
    var result = doctorslist.find(obj => {
      //  console.log(obj.id, userdata.locum_specialties_id);
      return obj.id == userdata.locum_specialties_id;
    });
    console.log(result);
    //if()
    this.setState({
      specialist: {
        value: result.value,
        id: result.id,
        locum_type_id: result.locum_type_id
      }
    });

    this.setState({ crbveri: userdata.status == 1 ? true : false });
    this.setState({ gmc: userdata.gmc_number });
    if (userdata.doc1) this.setState({ doc1: { uri: userdata.doc1 } });
    if (userdata.doc2) this.setState({ doc2: { uri: userdata.doc2 } });
    console.log(this.state.doc1, this.state.doc2);
    debugger;
  }

  onSubmit = () => {
    Keyboard.dismiss();
    this.setState({
      specialityerror: "",
      crberror: "",
      gmcerror: ""
    });
  };

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
          this.setState({ doc1: response });
          //  SignupUpdate({ prop: "doc1", value: response });
        } else if (number === 2) {
          this.setState({ doc1: response });
          // SignupUpdate({ prop: "doc2", value: response });
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
    console.log(this.state.doc1);
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
              label={"Do you need to change Speciality?"}
              data={doctorslist}
              fontSize={15}
              pickerStyle={{
                borderWidth: 1,
                borderColor: "#666666",
                borderRadius: 5
              }}
              value={this.state.specialist.value}
              itemTextStyle={[
                {
                  fontSize: 16,
                  fontFamily: fonts.fontPrimaryLight
                }
              ]}
              onChangeText={(value, index) =>
                this.setState({
                  specialist: { value: value, id: doctorslist[index].id }
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
                  selected={this.state.crbveri === true}
                  onPress={() => this.setState({ crbveri: true })}
                  label="Yes"
                />
                <Genderfield
                  selected={this.state.crbveri === false}
                  onPress={() => this.setState({ crbveri: false })}
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
              value={this.state.gmc}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={text => this.setState({ gmc: text })}
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
                    source={{ uri: this.state.doc1.uri }}
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
                  flex: 1
                }}
                onPress={() => this.documentchooser(2)}
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
                    source={{ uri: this.state.doc2.uri }}
                    style={{
                      width: width - 40,
                      height: verticalScale(200)
                    }}
                  />
                )}
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

const mapStateToProps = ({ Loginreducer }) => {
  const { userid, token, userdata } = Loginreducer;
  return {
    userid,
    token,
    userdata
  };
};
export default connect(
  mapStateToProps,
  null
)(Professional);
