import React, { Component } from 'react';
import MovieContainer from './MoviesContainer'
import SearchBar from './SearchBar'
import NavBar from './Nav'
import './App.css';

class App extends Component {

  state = {
    movies:[],
    filtered:[],
    searchTerm:''
  }



  componentDidMount(){
    fetch('http://localhost:3000/api/v1/movies')
        .then(res=> res.json())
        .then(movies => this.setState({movies}))
  }

  changeHandler = e => {
      let userInput = e.target.value
      let newArray = [...this.state.movies]
      let filteredArray = newArray.filter(movie => movie.title.toLowerCase().includes(userInput.toLowerCase()))
    this.setState({filtered:filteredArray, searchTerm:userInput})
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
            <NavBar />
            <SearchBar changeHandler={this.changeHandler} value={this.state.searchTerm}/>
           <MovieContainer  movies={this.state.movies} filtered={this.state.filtered}/>
      </div>
    );
  }
}

export default App;
