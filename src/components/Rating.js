import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component{
  state = {
    rating: 0,
    set: false
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
  }


  render(){
    console.log(this.state)
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
