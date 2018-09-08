import React, { Component } from "react";
import {
  
  Image,
  ScrollView,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Dimensions
} from "react-native";
const { height, width } = Dimensions.get("window");
import { Button } from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { resetNavigationTo, openURLInView } from "../../utils";
import {Logotapi} from "../../actions/Loginactions"
import ParallaxScrollView from "react-native-parallax-scroll-view";
const window = Dimensions.get("window");
import {connect} from "react-redux"
import Icon from "react-native-vector-icons/FontAwesome";
import EIcon from "react-native-vector-icons/Entypo";
import Connection from "../../config/connection";
import LinearGradient from "react-native-linear-gradient";
import {
  colors,
  normalize,
  scale,
  verticalScale,
  moderateScale,
  fonts
} from "../../config";
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 90;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 120;
import ScrollableTabView from 'react-native-scrollable-tab-view';
 class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tobabarlabel:"Profile Details",
      scroll:false
    };
  }

  onPress = (rowData) => {
    console.log(rowData,"rowData")
    const { navigation,userid,token } = this.props;
    if(rowData==='Logout'){
     this.props.Logotapi({id:userid,token,navigation})
    }else if(rowData==='Edit Prfoile'){
      navigation.navigate('Editprofile');
    }else if(rowData==='Changepassword'){
      navigation.navigate('Changepassword');
    }
  };
  changeTab=(x)=>{
   // console.log(x.ref.props.tabLabel)
    this.setState({ tobabarlabel:x.ref.props.tabLabel})
  }
  render() {
    const { onScroll = () => {
     this.setState({scroll:!this.state.scroll})
    },navigation:{navigate} } = this.props;
    return (    
      <ParallaxScrollView
      onScroll={onScroll}
      backgroundColor={"white"}
      headerBackgroundColor="white"
      stickyHeaderHeight={STICKY_HEADER_HEIGHT}
      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
      backgroundSpeed={10}
      renderBackground={() => (
       <View/>
      )}
      renderForeground={() => (
        <View style={{ height: 300, flex: 1,backgroundColor:"green" }}>
           <LinearGradient
            colors={["#00B1FF", "#7EF3C7"]}
            style={{height: 300, flex: 1,alignItems:"center",justifyContent:"center"}}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
         <View key="parallax-header" style={styles.parallaxHeader}>
        <TouchableOpacity onPress={()=>navigate('Changeprofile')}>
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
             <Icon name="gear" style={{margin:scale(15),marginLeft:scale(15)}}  size={20} color={"black"} />
          <Text style={styles.stickySectionText}>{this.state.tobabarlabel}</Text>
        </View>
      )}
      renderFixedHeader={() => (
        <View key="sticky-header" style={styles.fixedSection}>
          <Icon name="bell" style={{margin:scale(15)}} size={20} color={this.state.scroll?"#000000":"#FFFFFF"} />
          <EIcon name="dots-three-vertical" style={{margin:scale(15),marginRight:scale(5)}}  size={20} color={this.state.scroll?"#000000":"#FFFFFF"} />
        </View>
      )}
    >
     <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={1}
        onChangeTab={a =>this.changeTab(a)}
        tabBarActiveTextColor={'#000000'}
        tabBarInactiveTextColor={'#333'}
        tabBarTextStyle={{fontFamily:fonts.fontPrimaryLight,fontSize:normalize(12),letterSpacing:1}}
        tabBarUnderlineStyle={{backgroundColor:"#16BCF4",paddingRight:10}}
        >
        <ScrollView tabLabel="Profile Details" style={styles.tabView}>
          <View style={styles.card}>
            <Text>News</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Professional Details" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Friends</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Contact Details" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Messenger</Text>
          </View>
        </ScrollView>
        
        </ScrollableTabView>

 
    </ParallaxScrollView>



         
    );
  }
}

const mapStateToProps = ({ SignupReducer,Loginreducer }) => {
  const {userid,token,userdata}=Loginreducer
  return {
   
    userid,token,userdata
  };
};
export default connect(mapStateToProps,{Logotapi})(ProfileScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
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
    justifyContent: "flex-start", 
    alignItems:"center",
    flexDirection:"row"
  },
  stickySectionText: {
    color: "black",
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: "absolute",
    flexDirection:"row",   
    bottom: scale(30),
    right: scale(20),
    

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
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  rowText: {
    fontSize: 20
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
