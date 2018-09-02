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
  DeviceEventEmitter,
  ActivityIndicator
} from "react-native";
import { Locumapp } from "./src/routes";
import Toast, { DURATION } from "react-native-easy-toast";
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      store: null
    };
  }
  async componentWillMount() {
    const store = await configureStore();
    this.setState({ store });
    console.log(store, "store");
  }
  componentDidMount() {
    this.showToastListener = DeviceEventEmitter.addListener(
      "showToast",
      text => {
        this.toast.show(text, DURATION.LENGTH_LONG);
      }
    );
  }

  render() {
    console.ignoredYellowBox = ["Warning:"];
    if (this.state.store == null) {
      return (
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="white"
            translucent
            animated
          />
          <Locumapp />
          <Toast
            ref={ref => (this.toast = ref)}
            opacity={0.7}
            textStyle={{ fontSize: 12 }}
            style={{
              backgroundColor: "#02B2FE",
              borderRadius: 100,
              bottom: 1
            }}
          />
        </View>
      </Provider>
    );
  }
}
