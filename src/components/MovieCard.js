import React from 'react'
import Rating from './Rating'

class MovieCard extends React.Component{

  handleRatingClick = () => {

  }
  render(){
    return(
      <div className="column">
        <div className="card">
          <img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`}/>
          <h4>{this.props.movie.title}</h4>
          <Rating movie={this.props.movie}/>
          <button></button>
        </div>
      </div>
    )
  }
}

export default MovieCard
