import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../reset.css";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovie = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
          ? (
            <div className="loading__spinner"></div>
          )
          : (
            <div className="wrapper">
              <h1 className="title">React Movies</h1>
              <div className="movies">
                {movies.map(movie => (
                  <Movie 
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    genres={movie.genres}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                ))}
              </div>
            </div>  
          )
        }
      </section>
    );
  }
}

export default Home;
