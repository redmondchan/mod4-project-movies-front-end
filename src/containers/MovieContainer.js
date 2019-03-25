// import React from 'react'
// import Upcoming from './UpComingContainer'
// import { Route, Switch, withRouter } from "react-router-dom";
//
// class MovieContainer extends React.Component{
//   state = {
//     movies: [],
//     search: [],
//     favorites: []
//   }
//
//   componentDidMount(){
//     fetch('http://localhost:3000/movies')
//     .then(resp => resp.json())
//     .then(json => this.setState({movies: json, search: json}))
//   }
//
//   onSearch = (input) => {
//     let copyMovies = [...this.state.movies].filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
//     let secondMovies= [...this.state.movies].filter(movie => movie.overview.toLowerCase().includes(input.toLowerCase()))
//     let filteredMovies= [...copyMovies, ...secondMovies]
//     this.setState({search: filteredMovies})
//   }
//
//   addFavorites =  (movie) => {
//     let copyFavorites = [...this.state.favorites]
//     copyFavorites.find(movieObj => movieObj == movie) ? copyFavorites=copyFavorites : copyFavorites.unshift(movie)
//       this.setState({favorites: copyFavorites})
//     // if (copyFavorites.find(movieObj => movieObj == movie)){
//     // } else {
//     //   copyFavorites.unshift(movie)
//     //   this.setState({favorites: copyFavorites})
//     // }
//   }
// //
// //
// //   render(){
// //     return(
// //       <div>
// //         <Switch>
// //         <Route
// //         path ="/upcoming"
// //         render(){
// //           return (
// //             <Upcoming movies={this.state.search} addFavorites={this.addFavorites}/>
// //           )
// //         }
// //         />
// //         </Switch>
// //       </div>
// //     )
// //   }
// // }
//
// render() {
//   return (
//     <div>
//         <Switch>
//           <Route
//             path="/upcoming"
//             render={
//
//
//                   <Upcoming movies={this.state.search} addFavorites={this.addFavorites}/>
//
//               }
//           />
//         </Switch>
//       </div>
// )}
// }
//
// export default withRouter(MovieContainer)
