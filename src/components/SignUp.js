import React from 'react'

class SignUp extends React.Component{
  state = {
    name: "",
    password_digest: ""
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        accepts: 'application/json'
      },
      body: JSON.stringify(this.state)
    })

  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.onSubmit}>
        <input placeholder="Username" value={this.state.input} name="name" onChange={this.onChange}></input>
        <input placeholder="Password" value={this.state.input} name="password_digest" onChange={this.onChange}></input>
        <button>Create</button>
      </form>
    )
  }

}

export default SignUp
