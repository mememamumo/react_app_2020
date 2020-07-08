import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Welcome!"}</div>;
  }
}

export default App;
