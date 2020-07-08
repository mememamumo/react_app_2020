import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000)
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Welcome!"}</div>;
  }
}

export default App;
