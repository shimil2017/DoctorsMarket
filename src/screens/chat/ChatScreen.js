import React, { Component } from "react";
import { View, Text } from "react-native";

import {
  GiftedChat,
  Actions,
  Bubble,
  SystemMessage
} from "react-native-gifted-chat";
export default class ChatScreen extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text:
            "I think we passed the first step of the tutorial. We will now need a Pusher account!",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }
  render() {
    return <GiftedChat messages={this.state.messages} />;
  }
}
