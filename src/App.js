import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    // isLoading: false,
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };

  componentDidMount() {
    console.log("redered-componentDidmount");
    this.getMovies();
  }
  render() {
    console.log("redering");
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
