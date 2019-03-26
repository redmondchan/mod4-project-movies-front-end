import React from 'react'
import MovieCard from '../components/MovieCard'
import { Route, Switch, withRouter } from "react-router-dom";

class Popular extends React.Component{
  render(){
    let moviesArr = this.props.movies.map(movie => <MovieCard movie={movie} addFavorites={this.props.addFavorites} user={this.props.user}/> )
    return(
      <div>
      {Object.keys(this.props.user).length > 0 ? (
        <div className="row">
          <h1>Popular</h1>
          {moviesArr}
          </div>
      ) : this.props.history.push("/")
    }
    </div>
  )
  }
}

export default withRouter(Popular)
