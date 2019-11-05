import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    //life cycle method 로써, 마운트된후 실행
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
    this.getMovies();
  }
  render() {
    //react는 자동적으로 class component의 render메소드를 실행시킨다.
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;
