import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer'
import Search from './containers/Search'

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
    console.log(this.state.favorites)
    return (
      <div className="App">
        <Search onSearch={this.onSearch}/>
        <MovieContainer movies={this.state.search} addFavorites={this.addFavorites}/>
      </div>
    );
  }
}

export default App;
