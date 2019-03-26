import React, {Component} from 'react'
import MovieCard from './MovieCard'


class MovieContainer extends Component {

    render(){

        console.log(this.props)

        let movieArray = this.props.movies.map(movieObj => <MovieCard movie={movieObj} key={movieObj.id}/>)
        let filteredArray = this.props.filtered.map(movieObj => <MovieCard movie={movieObj} key={movieObj.id}/>)

    return (
        <div>
            <h1>Movie Container</h1>
            {filteredArray.length > 0 ? filteredArray : movieArray}
        </div>
        )
    }
}

export default MovieContainer