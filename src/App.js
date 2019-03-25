import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer'
import Search from './containers/Search'
import Navbar from './components/Navbar'
import Upcoming from './containers/UpComingContainer.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  state = {
    movies: [],
    search: [],
    favorites: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(json => this.setState({movies: json, search: json}))
  }

  onSearch = (input) => {
    let copyMovies = [...this.state.movies].filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    let secondMovies= [...this.state.movies].filter(movie => movie.overview.toLowerCase().includes(input.toLowerCase()))
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
    return (
      <div className="App">
        <div>
          <Router>
            <Navbar />
            <Route exact path="/home" component={Search} />
            <Route exact path="/upcoming" render={() => <Upcoming movies={this.state.search} addFavorites={this.addFavorites}/>} />
            <Route exact path="/login" component={Search} />
          </Router >
        </div>
      </div>
    );
  }
}

export default App;
