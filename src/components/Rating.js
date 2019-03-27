import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component{
  state = {
    rating: 0,
    set: false
  }

  componentDidMount(){
    let token = localStorage.token;
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(json => {
      let x = json.user_movies.find(movie => movie.movie_id == this.props.movie.id) ? json.user_movies.find(movie => movie.movie_id == this.props.movie.id).rating : 0
      this.setState({rating: x})
    })
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
    let token = localStorage.token
     this.setState({set: true, rating: nextValue});
     fetch('http://localhost:3000/api/v1/user_movies', {
       method: 'POST',
       headers: {
         "Content-Type":"application/json",
         accepts: 'application/json',
         Authorization: `Bearer ${token}`
       },
       body: JSON.stringify({movie: {rating: this.state.rating, user_id: this.props.user.id , movie_id: this.props.movie.id}})
     })
  }


  render(){
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
