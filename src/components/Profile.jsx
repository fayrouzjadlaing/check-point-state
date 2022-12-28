import React, { Component } from "react";
import image from "../../src/img.jpeg";

class Profile extends Component {
  state = {
    person: {
      fullName: "Fayrouz Jadla",
      bio: "has experience working as a React.js developer. In-depth knowledge of JavaScript, CSS, HTML, and front-end languages. Knowledge of React tools including React.js, Webpack, . Experience with user interface design. Experience with browser-based debugging and performance testing software. Excellent troubleshooting skills. Good project management skills. Collaborates closely with product managers, designers, and other engineering teams.",
      profession: "develooper",
      imgSrc: image,
    },
    timer: 0,
  };
  componentDidMount = () => {
    this.inter = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <p style={{ color: "green", fontSize: "50px" }}>
          {this.state.person.profession}
        </p>
        <span style={{ fontSize: "80px", color: "red" }}>
          {this.state.timer}
        </span>
        <img
          src={image}
          alt="imagee"
          style={{ height: "300px", borderRadius: "50%", width: "250px" }}
        />
      </div>
    );
  }
}
export default Profile;
