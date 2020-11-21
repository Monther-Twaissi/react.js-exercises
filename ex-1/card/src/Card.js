import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  render() {
    const { member } = this.props;
    return (
      <div className="container">
        <div className="card">
          <img className="avatar" src={member.img} alt="" />
          <div className="name">{member.name}</div>
          <div className="location">{member.location}</div>
          <div className="title">{member.title}</div>
          <div className="description">{member.description}</div>
          {member.links.map((link, index) => (
            <a key={"LINK" + index} href={link.link} target="_blank">
              <i className={`icon ${link.icon}`} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default Card;
