import React from 'react'
import MovieCard from '../components/MovieCard'
import { Route, Switch, withRouter } from "react-router-dom";

class AllMovies extends React.Component{
  state = {
    movies: []
  }

  componentDidMount(){
    Object.keys(this.props.user).length > 0 ?
    fetch('http://localhost:3000/api/v1/movies')
    .then(resp => resp.json())
    .then(json => this.setState({movies: json}))
    : this.props.history.push('/')
  }

  render(){
    let moviesArr = this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} addFavorites={this.props.addFavorites} user={this.props.user.user}/> )
    return(
      <div>
      {Object.keys(this.props.user).length > 0 ? (
        <div className="row">
          <h1>All Movies</h1> 
          {moviesArr}
          </div>
      ) : this.props.history.push("/")
    }
    </div>
  )
  }
}

export default withRouter(AllMovies)
