import React from 'react'

class Search extends React.Component{
  state = {
    input: ""
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    this.props.onSearch(this.state.input)
  }

  render(){
    console.log(this.state.input)
    return(
      <div>
        <input placeholder="Search Movies" value={this.state.input} name="input" onChange={this.onChange}></input>
      </div>
    )
  }

}

export default Search
