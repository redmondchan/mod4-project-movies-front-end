import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer'
import Search from './containers/Search'

class App extends Component {
  state = {
    movies: [],
    search: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(json => this.setState({movies: json, search: json}))
  }

  onSearch = (input) => {
    let copyMovies = [...this.state.movies].filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({search: copyMovies})
  }



  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch}/>
        <MovieContainer movies={this.state.search}/>
      </div>
    );
  }
}

export default App;
