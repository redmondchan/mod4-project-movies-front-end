import React from 'react'
import MovieCard from '../components/MovieCard'

class Upcoming extends React.Component{
  render(){
    let moviesArr = this.props.movies.map(movie => <MovieCard movie={movie} addFavorites={this.props.addFavorites}/> )
    return(
      <div className="row">
        <h1>UpComing</h1>
        {moviesArr}
      </div>
    )
  }
}

export default Upcoming
