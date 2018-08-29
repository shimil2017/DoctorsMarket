/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  DeviceEventEmitter
} from "react-native";
import { Locumapp } from "./src/routes";
import Toast, { DURATION } from "react-native-easy-toast";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component<{}> {
  componentDidMount() {
    this.showToastListener = DeviceEventEmitter.addListener(
      "showToast",
      text => {
        this.toast.show(text, DURATION.LENGTH_LONG);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="white"
          translucent
          animated
        />

        <Locumapp />
        <Toast ref={ref => (this.toast = ref)} opacity={0.7} />
      </View>
    );
  }
}
