import React, { Component } from "react";
import {
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
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
import Icon from "react-native-vector-icons/FontAwesome"
import ImagePicker from 'react-native-image-picker';
const { height, width } = Dimensions.get("window");
import {connect} from "react-redux"
import Button from "../../components/button";
import Spinner from "../../components/spinner";
import RestClient from "../../utils/restclient";
import {profileimageupdate} from "../../actions/Loginactions"
class ChangeProfileImage extends Component { 

    constructor(props){
        super(props);
        this.state={
            image:this.props.userdata.profile_pic,
            chaning:false,
            loader:false
        }
    }
   
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <Icon size={20} color={"#37a6ff"} style={{marginHorizontal:scale(25)}} name={"pencil"} onPress={() => params.onPressicon()} />
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ onPressicon: this.selectPhotoTapped });
        console.log(this.props.userdata,"userdata")
    }    

    savephoto=()=>{
       
        const {userid,token,navigation:{navigate}}=this.props;
        var formData = new FormData();
        //  formData.append("email",email);
        formData.append("id", userid);
        formData.append("api_token",token);
        formData.append("profile_pic",{
            name: this.state.image.match(/[-_\w]+[.][\w]+$/i)[0],
            uri:this.state.image,
            type: "image/jpg"
          })
         // console.log("formadatra",formData,RestClient.imageUpload);
         this.setState({loader:true})
         RestClient.imageUpload("/apis/updateImage", {}, formData).then(response => {
              console.log(response,"response")
              if(response.status==200){
                this.setState({loader:false})
                 data=response.data
                this.props.profileimageupdate(data);
                DeviceEventEmitter.emit(
                  "showToast",
                  "Profile image update successfully."
                );
              }else if(response.status==401){
                navigate("auth")
                DeviceEventEmitter.emit(
                    "showToast",
                    "Alreay logined on another deivce"
                  );
              }
          })
          
          

    }
    selectPhotoTapped=()=> {       
        const options = {
          quality: 1.0,
          maxWidth: width,
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
          
            this.setState({image:response.uri,chaning:true})   
              
          }
        });
      }
     componentWillUnmount(){
       this.setState({chaning:false})
      }
  render() {
      console.log(this.state.loader,"loader");
    const {
      navigation: { navigate }
    } = this.props;
    const {image}=this.state;
    return (
      <View style={{ flex: 1,backgroundColor:"white",justifyContent:"center" }}>
       
       <View style={{flex:0.6,alignItems:"center",justifyContent:"center"}}>
       <Image source={image?{uri:image}:require('../../images/avatar.png')} style={{width,height:verticalScale(250)}} resizeMode={'contain'}/>
       </View>
     {this.state.chaning&&<View style={{flex:0.3,justifyContent:"center",alignItems:"center"}}>
       <Button
            label={"SAVE"}
            disabled={false}
            onPress={this.savephoto}
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
                marginVertical: 5
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
       </View>}
       {this.state.loader&&<Spinner   visible={this.state.loader} text={"Uploading image...."}/>}
      </View>
    );
  }
}

const mapStateToProps = ({ Loginreducer }) => {
    const {userdata,userid,token}=Loginreducer
    return {     
        userdata,
        userid,
        token    
    };
  };
export default connect(mapStateToProps,{profileimageupdate})(ChangeProfileImage)
