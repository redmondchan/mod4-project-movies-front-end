import React, { Component } from 'react';
<<<<<<< HEAD
import MovieContainer from './MoviesContainer'
import SearchBar from './SearchBar'
import NavBar from './Nav'
=======
>>>>>>> k
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
import {Route, withRouter} from 'react-router-dom'


class App extends Component {
<<<<<<< HEAD

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

=======
  state = {
    user: {}
  }

  componentDidMount = () => {
  let token = localStorage.token;
  token
    ? fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => {
          this.setState({ user }, () => {
            console.log(user);
            this.props.history.push("/AllMovies");
          });
        })
    : this.props.history.push("/");
};

  // componentDidMount(){
  //   let token = localStorage.token;
  //   token ?
  //     fetch("http://localhost:3000/api/v1/current_user", {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //         accepts: "application/json",
  //         Authorization: `${token}`
  //       }
  //     })
  //       .then(resp => resp.json())
  //       .then(user => {
  //         this.setState({ user: user }, () => {
  //           fetch('http://localhost:3000/api/v1/movies')
  //           .then(resp => resp.json())
  //           .then(json => this.setState({
  //             movies: json,
  //             search: json,
  //             upcoming: json.filter(movie => movie.category == "upcoming"),
  //             nowPlaying: json.filter(movie => movie.category == "now_playing"),
  //             topRated: json.filter(movie => movie.category == "top_rated"),
  //             popular: json.filter(movie => movie.category == "popular")
  //           })),
  //           this.props.history.push("/AllMovies");
  //         });
  //       })
  //       : this.props.history.push("/");
  //         if (Object.keys(this.state.user).length > 0){
  //         fetch('http://localhost:3000/api/v1/movies')
  //         .then(resp => resp.json())
  //         .then(json => this.setState({
  //           movies: json,
  //           search: json,
  //           upcoming: json.filter(movie => movie.category == "upcoming"),
  //           nowPlaying: json.filter(movie => movie.category == "now_playing"),
  //           topRated: json.filter(movie => movie.category == "top_rated"),
  //           popular: json.filter(movie => movie.category == "popular")
  //         }))
  //       }
  //     }

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/movies')
  //   .then(resp => resp.json())
  //   .then(json => this.setState({
  //     movies: json,
  //     search: json,
  //     upcoming: json.filter(movie => movie.category == "upcoming"),
  //     nowPlaying: json.filter(movie => movie.category == "now_playing"),
  //     topRated: json.filter(movie => movie.category == "top_rated"),
  //     popular: json.filter(movie => movie.category == "popular")
  //   }))
  // }

  onSearch = (input) => {
    let copyMovies = [...this.state.movies].filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    let secondMovies= [...this.state.movies].filter(movie => movie.category.toLowerCase().includes(input.toLowerCase()))
    let filteredMovies= [...copyMovies, ...secondMovies]
    this.setState({search: filteredMovies})
  }

  // addFavorites =  (movie) => {
  //   let copyFavorites = [...this.state.favorites]
  //   copyFavorites.find(movieObj => movieObj == movie) ? copyFavorites=copyFavorites : copyFavorites.unshift(movie)
  //     this.setState({favorites: copyFavorites})
  // }

  addFavorites = (movie) => {
    let token = localStorage.token
     fetch('http://localhost:3000/api/v1/user_movies', {
       method: 'POST',
       headers: {
         "Content-Type":"application/json",
         accepts: 'application/json',
         Authorization: `Bearer ${token}`
       },
       body: JSON.stringify({movie: { user_id: this.state.user.user.id , movie_id: movie.id, favorites: true}})
     })
     .then(resp => resp.json())
     .then(console.log)
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
          localStorage.setItem("token", userData.jwt);
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
        .then(userData => {
          this.setState({ user: userData }, () => {
            localStorage.setItem("token", userData.jwt);
            this.props.history.push("/AllMovies");
          })
        })
    };

    signOut = () => {
      localStorage.removeItem("token")
      this.props.history.push("/")
    }

>>>>>>> k
  render() {
    console.log(this.state.searchTerm)
    return (
      <div className="App">
<<<<<<< HEAD
            <NavBar />
            <SearchBar changeHandler={this.changeHandler} value={this.state.searchTerm}/>
           <MovieContainer  movies={this.state.movies} filtered={this.state.filtered}/>
=======
        <div>
            <Navbar signOut={this.signOut}/>
            <Route exact path="/" render={() => <SignUp signUp={this.signUp} logIn={this.logIn}/>} />
            <Route exact path="/AllMovies" render={() => <AllMovies movies={this.state.search} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/upcoming" render={() => <Upcoming movies={this.state.upcoming} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/topRated" render={() => <TopRated movies={this.state.topRated} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/Popular" render={() => <Popular movies={this.state.popular} addFavorites={this.addFavorites} user={this.state.user}/>} />
            <Route exact path="/Favorites" render={() => <Favorites movies={this.state.favorites} addFavorites={this.addFavorites} user={this.state.user.user}/>} />
        </div>
>>>>>>> k
      </div>
    );
  }
}

export default withRouter(App);
