import React, { Component } from "react";

class App extends Component {
  state = {
    isLoading: true,
    movie: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }
  render() {
    //react는 자동적으로 class component의 render메소드를 실행시킨다.
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;
