import React from 'react'


const MovieCard = (props) => {
       let baseUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <div>
        <img src={baseUrl + props.movie.poster} />
            <h1>{props.movie.title}</h1>
                <span className='date'>{props.movie.category}</span>
            <p>{props.movie.description}</p>
    </div>
   )
}



export default MovieCard