import React from 'react'
import MovieCard from '../components/MovieCard'
import { Route, Switch, withRouter } from "react-router-dom";

class Upcoming extends React.Component{
  componentDidMount(){
    let user = this.props.user.user
    let token = localStorage.token;
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(console.log)
    }

  render(){
    console.log(this.props.user.user)
    // let moviesArr = this.props.movies.map(movie => <MovieCard movie={movie} addFavorites={this.props.addFavorites}/> )
    return(
      <div>
      {Object.keys(this.props.user).length > 0 ? (
        <div className="row">
          <h1>Favorites</h1>
          </div>
      ) : this.props.history.push("/")
    }
    </div>
  )
  }
}

export default withRouter(Upcoming)
