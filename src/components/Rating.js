import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component{
  state = {
    rating: 0,
    set: false
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`)
    .then(resp => resp.json())
    // .then(console.log)
    .then(json => this.setState({rating: json.user_movies.length > 0 ? json.user_movies.find(movie => movie.movie_id == this.props.movie.id).rating: 0}))
  }


  onStarHover = (nextValue, prevValue, name) => {
    if(this.state.set){
    } else {
      this.setState({rating: nextValue});
    }
  }

  onStarHoverOut = (nextValue, prevValue, name) => {
    if(this.state.set){
    } else {
      this.setState({rating: 0});
    }
  }

  onStarClick = (nextValue, prevValue, name) => {
     this.setState({set: true, rating: nextValue});
     fetch('http://localhost:3000/api/v1/user_movies', {
       method: 'POST',
       headers: {
         "Content-Type":"application/json",
         accepts: 'application/json'
       },
       body: JSON.stringify({rating: this.state.rating, user_id: this.props.user.id , movie_id: this.props.movie.id})
     })
  }


  render(){
    console.log(this.state.rating)
    return(
      <div style={{fontSize: 32}}>
          <h2>Rate:</h2>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarHover={this.onStarHover}
            onStarHoverOut={this.onStarHoverOut}
            onStarClick={this.onStarClick}
          />
        </div>
    )
  }
}

export default Rating
