import React from 'react'

class MovieCard extends React.Component{
  render(){
    return(
      <div className="column">
        <div className="card">
          <img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`}/>
          <h4>{this.props.movie.title}</h4>
        </div>
      </div>
    )
  }
}

export default MovieCard
