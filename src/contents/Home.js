import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/andrew.jpeg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic" />
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Andrew Zaytsev", "I am a React Native developer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
