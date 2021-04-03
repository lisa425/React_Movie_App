import React, {Component} from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => { //async = 비동기, await은 async가 있어야 함.
    const {
      data : {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
   this.setState({ movies, isLoading:false }); //movies 1:state의 movies, 2:axios의 movies
  };
  componentDidMount(){
    this.getMovies();
  };

  render(){
    const { isLoading, movies } = this.state;
    return <div>
    { isLoading ? "Loading..." : movies.map(movie => (
        <Movie 
          key = {movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} 
        />
    ))};
    </div>;
  };
}

export default App;
