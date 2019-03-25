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
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component {
  state = {
    movies: [],
    search: [],
    upcoming: [],
    topRated: [],
    popular: [],
    favorites: []

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
    // if (copyFavorites.find(movieObj => movieObj == movie)){
    // } else {
    //   copyFavorites.unshift(movie)
    //   this.setState({favorites: copyFavorites})
    // }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          <Router>
            <Navbar />
            <Route exact path="/home" component={Search} />
            <Route exact path="/upcoming" render={() => <Upcoming movies={this.state.upcoming} addFavorites={this.addFavorites}/>} />
            <Route exact path="/topRated" component={() => <TopRated movies={this.state.topRated} addFavorites={this.addFavorites}/>} />
            <Route exact path="/Popular" component={() => <Popular movies={this.state.popular} addFavorites={this.addFavorites}/>} />
            <Route exact path="/Favorites" component={() => <Favorites movies={this.state.favorites} addFavorites={this.addFavorites}/>} />
          </Router >
        </div>
      </div>
    );
  }
}

export default App;
