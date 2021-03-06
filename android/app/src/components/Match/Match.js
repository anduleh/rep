import React from "react";
import { View, StyleSheet } from "react-native";
import TeamContainer from "./TeamContainer";
import BetContainer from "./BetContainer";

const styles = StyleSheet.create({
  match: {
    flexDirection: "row",
    height: 65,
    borderRadius: 2,
    marginBottom: 10, 
    marginHorizontal: 10, 
    overflow: "hidden",
    backgroundColor: "#dad7d7",
  }
});

class Match extends React.Component {
  static navigationOptions = {
    title: "Matches"
  };

  render() {
    return (
      <View style={styles.match}>
        <TeamContainer match={this.props.match}/>
        <BetContainer />
      </View>
    );
  }
}

export default Match;
