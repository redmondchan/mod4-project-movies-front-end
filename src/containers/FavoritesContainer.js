import React from 'react'
import MovieCard from '../components/MovieCard'
import { Route, Switch, withRouter } from "react-router-dom";

class Upcoming extends React.Component{
  state={
    movies: [],
    favorites: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/movies')
    .then(resp => resp.json())
    .then(json => this.setState({movies: json}));

    let token = localStorage.token;
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      let allMovies = [...this.state.movies]
      let newFavoriteMovies = []
      let favoriteMovies = json.user_movies.filter(movie => movie.favorites)
      allMovies.forEach((movie)=> favoriteMovies.forEach((jsonObj)=>{if (jsonObj.movie_id == movie.id){newFavoriteMovies.push(movie)}}))
      let finalMovies = [...new Set(newFavoriteMovies)]
      this.setState({favorites: finalMovies})
    })
    }

  render(){
    console.log(this.state)
    let moviesArr = this.state.favorites.map(movie => <MovieCard key={movie.id} movie={movie} addFavorites={this.props.addFavorites} user={this.props.user}/> )
    return(
      <div>
      {Object.keys(this.props.user).length > 0 ? (
        <div className="row">
          <h1>Favorites</h1>
          {moviesArr}
          </div>
      ) : this.props.history.push("/")
    }
    </div>
  )
  }
}

export default withRouter(Upcoming)
