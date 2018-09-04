import React, { Component } from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import {DocumentPicker, DocumentPickerUtil} from 'react-native-document-picker';
export default class SheduleScreen extends Component {

  documentchooser=()=>{
   DocumentPicker.show({
      filetype: [DocumentPickerUtil.images()],
     }, (error, res) => {
      console.log(res,"res")
  })
  
  }
  render() {
    return (
      <View style={{ flex: 1,alignItems:"center",justifyContent:"center" }}>
      <TouchableOpacity style={{width:180,height:50,backgroundColor:"red",alignItems:"center",justifyContent:"center"}} onPress={this.documentchooser}>
      <Text>Pick document</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
