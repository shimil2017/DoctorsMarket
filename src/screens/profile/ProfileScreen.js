import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { resetNavigationTo, openURLInView } from "../../utils";
import { Logotapi } from "../../actions/Loginactions";
import ParallaxScrollView from "react-native-parallax-scroll-view";
const window = Dimensions.get("window");
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Connection from "../../config/connection";
import { isIphoneX } from "react-native-iphone-x-helper";
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = isIphoneX() ? 90 : 70;
import LinearGradient from "react-native-linear-gradient";
import { fonts, normalize } from "../../config";
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        "Profile Details",
        "Professional Details",
        "Contact Details",
        "Change Password",
        "Terms and Policy"
      ])
    };
  }

  onPress = rowData => {
    console.log(rowData, "rowData");
    const { navigation, userid, token } = this.props;
    if (rowData === "Logout") {
      this.props.Logotapi({ id: userid, token, navigation });
    } else if (rowData === "Edit Prfoile") {
      navigation.navigate("Editprofile");
    } else if (rowData === "Change Password") {
      navigation.navigate("Changepassword");
    } else if (rowData === "Change email adress") {
      navigation.navigate("Changeemail");
    } else if (rowData === "Profile Details") {
      navigation.navigate("ProfileDetail");
    } else if (rowData === "Professional Details") {
      navigation.navigate("Professional");
    }
  };

  render() {
    const {
      onScroll = () => {},
      navigation: { navigate }
    } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <TouchableOpacity
            onPress={() => this.onPress(rowData)}
            key={rowData}
            style={styles.row}
          >
            <Text
              style={{
                fontFamily: fonts.fontPrimaryRegular,
                fontSize: normalize(18),
                fontWeight: "500",
                color: "#000000",
                opacity: 0.8
              }}
            >
              {rowData}
            </Text>
          </TouchableOpacity>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#333"
            backgroundColor={"#02B2FE"}
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderBackground={() => (
              <View key="background">
                <Image
                  source={{
                    uri:
                      "https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg",
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    width: window.width,
                    backgroundColor: "rgba(0,0,0,.4)",
                    height: PARALLAX_HEADER_HEIGHT
                  }}
                />
              </View>
            )}
            renderForeground={() => (
              <View style={{ height: 300, flex: 1, backgroundColor: "green" }}>
                <LinearGradient
                  colors={["#00B1FF", "#7EF3C7"]}
                  style={{
                    height: 300,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                >
                  <View key="parallax-header" style={styles.parallaxHeader}>
                    <TouchableOpacity onPress={() => navigate("Changeprofile")}>
                      <Image
                        style={styles.avatar}
                        source={{
                          uri:
                            "https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg",
                          width: AVATAR_SIZE,
                          height: AVATAR_SIZE
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.sectionSpeakerText}>
                      Talks by Rich Hickey
                    </Text>
                    <Text style={styles.sectionTitleText}>
                      CTO of Cognitec, Creator of Clojure
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            )}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
              </View>
            )}
            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection} />
            )}
          />
        )}
      />
    );
  }
}

const mapStateToProps = ({ SignupReducer, Loginreducer }) => {
  const { userid, token, userdata } = Loginreducer;
  return {
    userid,
    token,
    userdata
  };
};
export default connect(
  mapStateToProps,
  { Logotapi }
)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: isIphoneX() ? "flex-end" : "center"
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 20,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  rowText: {
    fontSize: 20
  }
});
