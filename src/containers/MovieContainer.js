import React from 'react'
import MovieCard from '../components/MovieCard'

class MovieContainer extends React.Component{
  render(){
    let moviesArr = this.props.movies.map(movie => <MovieCard movie={movie}/> )
    return(
      <div className="row">
        <h1>Container</h1>
        {moviesArr}
      </div>
    )
  }
}

export default MovieContainer
