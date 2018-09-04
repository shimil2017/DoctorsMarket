import React, { Component } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import ImagePicker from 'react-native-image-picker';
export default class InvoicesScreen extends Component {

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log(source,"source")
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

       
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1,alignItems:"center",justifyContent:"center" }}>
       <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <Text>Press for image pciker</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
