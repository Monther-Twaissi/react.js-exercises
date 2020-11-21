import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import { getTeamMembers } from "./members";
class App extends Component {
  state = {
    members: [],
  };

  componentDidMount() {
    this.setState({
      members: getTeamMembers(),
    });
  }

  render() {
    const { members } = this.state;

    return (
      <div>
        {members.map((member, index) => (
          <Card member={member} />
        ))}
      </div>
    );
  }
}

export default App;
