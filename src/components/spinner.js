import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Modal, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  textContent: {
    top: 80,
    height: 50,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    };
  }
  render() {
    <Modal
      onRequestClose={() => this._handleOnRequestClose()}
      supportedOrientations={["landscape", "portrait"]}
      transparent
      visible={this.props.visible}
    >
      >
      <View style={styles.background}>
        <ActivityIndicator color={"#FFF"} size={"large"} style={{ flex: 1 }} />
        <View style={styles.textContainer}>
          <Text style={[styles.textContent, this.props.textStyle]}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>;
  }
}
