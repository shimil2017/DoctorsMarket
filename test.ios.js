import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  Platform,
  ScrollView
} from "react-native";
import DropdownAlert from 'react-native-dropdownalert';
import { StackNavigator } from "react-navigation";

import FCM, {FCMEvent, NotificationActionType } from "react-native-fcm";
import SplashScreen from 'react-native-smart-splash-screen'

export  default class Test extends Component {
async componentDidMount(){
    SplashScreen.close({
        animationType: SplashScreen.animationType.fade,
        duration: 850,
        delay: 500,
     })
    try {
        let result = await FCM.requestPermissions({
          badge: false,
          sound: true,
          alert: true
        });
      } catch (e) {
        console.error(e);
      }
    FCM.getFCMToken().then(token => {
        console.log("TOKEN (getFCMToken)", token);
       // this.setState({ token: token || "" });
      });

      FCM.on(FCMEvent.Notification, notif => {
        this.dropdown.alertWithType('error', 'Error', notif.body);
    })
}
    render(){
        return(
            <View style={{backgroundColor:"red",flex:1}}>
            <DropdownAlert
                ref={ref => this.dropdown = ref}
                containerStyle={{
                    backgroundColor:"red",
                }}
                showCancel={true}
                onClose={data => console.log(data)}
                onCancel={data => console.log(data)}
                imageSrc={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
                renderImage={(props) => console.log(props)}
                renderCancel={(props) => console.log(props)}
                />
            </View>
        )
    }
}