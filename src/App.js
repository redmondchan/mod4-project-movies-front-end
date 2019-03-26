import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer'
import Search from './containers/Search'
import Navbar from './components/Navbar'
import Upcoming from './containers/UpComingContainer.js'
import TopRated from './containers/TopRated.js'
import Popular from './containers/PopularContainer.js'
import Favorites from './containers/FavoritesContainer.js'
import SignUp from './components/SignUp.js'
import AllMovies from './containers/AllMoviesContainer.js'
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom'


class App extends Component {
  state = {
    movies: [],
    search: [],
    upcoming: [],
    topRated: [],
    popular: [],
    favorites: [],
    user: {}

  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/movies')
    .then(resp => resp.json())
    .then(json => this.setState({
      movies: json,
      search: json,
      upcoming: json.filter(movie => movie.category == "upcoming"),
      nowPlaying: json.filter(movie => movie.category == "now_playing"),
      topRated: json.filter(movie => movie.category == "top_rated"),
      popular: json.filter(movie => movie.category == "popular")
    }))
  }

  onSearch = (input) => {
    let copyMovies = [...this.state.movies].filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    let secondMovies= [...this.state.movies].filter(movie => movie.category.toLowerCase().includes(input.toLowerCase()))
    let filteredMovies= [...copyMovies, ...secondMovies]
    this.setState({search: filteredMovies})
  }

  addFavorites =  (movie) => {
    let copyFavorites = [...this.state.favorites]
    copyFavorites.find(movieObj => movieObj == movie) ? copyFavorites=copyFavorites : copyFavorites.unshift(movie)
      this.setState({favorites: copyFavorites})
  }

  signUp = (event, newUser) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        accepts: 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
      .then(userData => {
        this.setState({ user: userData }, () => {
          localStorage.setItem("token", userData.name);
          this.props.history.push("/AllMovies");
        })
      })
  }

  logIn = (event, userInfo) => {
    event.preventDefault()
      fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user: userInfo })
      })
        .then(resp => resp.json())
        .then(
          userData => this.setState({ user: userData.user }),
          () => this.props.history.push("/AllMovies")
        );
    };

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <div>
            <Navbar />
            <Route exact path="/" component={() => <SignUp signUp={this.signUp} logIn={this.logIn}/>} />
            <Route exact path="/AllMovies" render={() => <AllMovies movies={this.state.search} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/upcoming" render={() => <Upcoming movies={this.state.upcoming} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/topRated" render={() => <TopRated movies={this.state.topRated} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/Popular" render={() => <Popular movies={this.state.popular} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/Favorites" render={() => <Favorites movies={this.state.favorites} addFavorites={this.addFavorites} user={this.state.user}/>} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
