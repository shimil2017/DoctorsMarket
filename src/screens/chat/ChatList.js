import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import json from "./sample.json";
export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.setState({ users: json.users });
  }

  render() {
    console.log(this.state.users);
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#FFFFFF" }}
      >
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatview}
              onPress={() => navigate("ChatScreen")}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  h2text: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 36,
    fontWeight: "bold"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "red"
  }
});
