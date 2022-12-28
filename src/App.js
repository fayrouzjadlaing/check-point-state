import "./App.css";
import { Component } from "react";
import Profile from "./components/Profile";

class App extends Component {
  state = {
    show: false,
  };

  toggleVisibility = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        <button
          className="visibility-btn"
          onClick={this.toggleVisibility}
          style={{
            backgroundColor: "pink",
            height: "80px",
            borderRadius: "30%",
          }}
        >
          {this.state.show ? "Hide profile" : "Show profile"}
        </button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;
