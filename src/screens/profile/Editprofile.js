import React, { Component } from "react";
import {
  View,
  Text, 
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class ChangeProfileImage extends Component {  
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={{ flex: 1, marginHorizontal: 10 }}>
       <View style={{flex:0.3,backgroundColor:"green",alignItems:'center',justifyContent:"center"}}>
       </View>
       <View style={{flex:0.7,backgroundColor:"green"}}/>
       
      </View>
    );
  }
}


