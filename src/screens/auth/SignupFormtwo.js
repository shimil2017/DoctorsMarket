import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  DeviceEventEmitter
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
import Icon from "react-native-vector-icons/Ionicons";
import StepIndicatorView from "../../components/stpeindicatorview";
import { SignupUpdate, LocationUpdate } from "../../actions/Signupactions";
import { connect } from "react-redux";
import Regex from "../../utils/regex";
//import NextButton from "../../compo/nents/nextbutton";
import { Dropdown } from "react-native-material-dropdown";
import NextButton from "../../components/nextbutton";
import country from "../../utils/country";
import Spinner from "../../components/spinner";
import { locationfetching } from "../../utils/locationfetching";
import Modal from "react-native-modalbox";

class SignupFormtwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryerror: "",
      visible: false,
      nationalerror: "",
      staterror: "",
      cityerror: "",
      streeterror: "",
      postalerror: "",
      telephoneerror: ""
    };
  }

  async componentWillMount() {
    if (!this.props.country && !this.state.state) {
      this.setState({ visible: true });
      locationfetching()
        .then(res => {
          this.props.LocationUpdate(res);
          this.setState({ visible: false });
        })
        .catch(error => {
          console.log(error);
          DeviceEventEmitter.emit(
            "showToast",
            "Unable to fetch location details"
          );
          this.setState({ visible: false });
        });
    }
  }

  submit = () => {
    this.setState({
      countryerror: "",
      nationalerror: "",
      staterror: "",
      cityerror: "",
      streeterror: "",
      postalerror: "",
      telephoneerror: ""
    });

    const {
      country,
      state,
      nationality,
      city,
      streetname,
      postalcode,
      telephone,
      navigation: { navigate }
    } = this.props;
    const {
      countryerror,
      nationalerror,
      staterror,
      cityerror,
      streeterror,
      postalerror,
      telephoneerror
    } = this.state;
    if (country.length === 0) {
      this.setState({
        countryerror: "Please fill the country name"
      });
      return;
    }

    if (country.length > 2 && !Regex.validateString(country)) {
      this.setState({
        countryerror: "Country name contain illegal charecter"
      });
      return;
    }

    if (state.length === 0) {
      this.setState({
        staterror: "Please fill the state name"
      });
      return;
    }

    if (state.length > 2 && !Regex.validateString(state)) {
      this.setState({
        staterror: "state name contain illegal charecter"
      });
      return;
    }

    if (nationality.length === 0) {
      this.setState({
        nationalerror: "Please select nationality"
      });
      return;
    }

    if (nationality.length > 2 && !Regex.validateString(nationality)) {
      this.setState({
        nationalerror: "Nationality name contain illegal charecter"
      });
      return;
    }

    if (city.length === 0) {
      this.setState({
        cityerror: "Please fill city name"
      });
      return;
    }

    if (city.length > 2 && !Regex.validateString(city)) {
      this.setState({
        cityerror: "City name contains illegal charecter"
      });
      return;
    }

    if (streetname.length === 0) {
      this.setState({
        streeterror: "Please fill street name"
      });
      return;
    }

    if (streetname.length > 2 && !Regex.validateString(streetname)) {
      this.setState({
        streeterror: "Street name contains illegal charecter"
      });
      return;
    }

    if (postalcode.length === 0) {
      this.setState({
        postalerror: "Please fill street name"
      });
      return;
    }
    if (telephone.length === 0) {
      this.setState({
        telephoneerror: "Please fill telephone number"
      });
      return;
    }

    if (telephone.length > 2 && !Regex.validateNumbers(telephone)) {
      this.setState({
        telephoneerror: "Telephone number contains illegal charecter"
      });
      return;
    }
    navigate("Signupthree");
  };

  _handleFocusNextField = nextField => {
    this.refs[nextField].focus();
  };

  render() {
    //alert(this.state.visible);
    // console.log(this.props.position, "streetname");
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
              ref="country"
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
              onSubmitEditing={() => this.refs["country"].blur()}
              returnKeyType="next"
              label="Country"
              disabled={false}
              error={this.state.countryerror}
              tintColor={"#02B2FE"}
            />
            <View style={{ flex: 1 }}>
              <Dropdown
                error={this.state.nationalerror}
                label={"Select Nationalty"}
                data={country}
                fontSize={15}
                pickerStyle={{
                  borderWidth: 1,
                  borderColor: "#666666",
                  borderRadius: 5
                }}
                value={this.props.nationality}
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
              ref="state"
              value={this.props.state}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data =>
                SignupUpdate({ prop: "state", value: data })
              }
              onSubmitEditing={this._handleFocusNextField.bind(this, "city")}
              returnKeyType="next"
              label="State"
              error={this.state.staterror}
              tintColor={"#02B2FE"}
            />
            <TextField
              ref="city"
              value={this.props.city}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data => SignupUpdate({ prop: "city", value: data })}
              onSubmitEditing={this._handleFocusNextField.bind(this, "street")}
              returnKeyType="next"
              label="City"
              error={this.state.cityerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="street"
              value={this.props.streetname}
              defaultValue={""}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data =>
                SignupUpdate({ prop: "streetname", value: data })
              }
              onSubmitEditing={this._handleFocusNextField.bind(
                this,
                "postalcode"
              )}
              returnKeyType="next"
              label="Street name"
              error={this.state.streeterror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="postalcode"
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
              onSubmitEditing={this._handleFocusNextField.bind(
                this,
                "telephone"
              )}
              returnKeyType="next"
              label="Postal code"
              error={this.state.postalerror}
              tintColor={"#02B2FE"}
            />

            <TextField
              ref="telephone"
              value={this.props.telephone}
              defaultValue={""}
              keyboardType="number"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={data =>
                SignupUpdate({ prop: "telephone", value: data })
              }
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Telephone"
              error={this.state.telephoneerror}
              tintColor={"#02B2FE"}
            />
            <View style={{ width, height: 40 }} />
          </View>
          <Modal
            backdrop={false}
            isOpen={this.state.visible}
            onClosed={() => this.setState({ visible: false })}
            style={{
              flex: 1,
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center"
            }}
            position={"center"}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ActivityIndicator color={"#02B2FE"} size={"large"} />

              <Text style={{ color: "#02B2FE" }}>
                Fecthing location details...
              </Text>
            </View>
          </Modal>
        </KeyboardAwareScrollView>
        <NextButton onPress={this.submit} />
      </View>
    );
  }
}

const mapStateToProps = ({ SignupReducer }) => {
  const {
    country,
    nationality,
    postalcode,
    streetname,
    state,
    city,
    position,
    telephone
  } = SignupReducer;
  return {
    country,
    nationality,
    postalcode,
    streetname,
    state,
    city,
    position,
    telephone
  };
};
export default connect(
  mapStateToProps,
  { SignupUpdate, LocationUpdate }
)(SignupFormtwo);
