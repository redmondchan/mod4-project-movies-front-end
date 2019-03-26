import React from 'react'

class SignUp extends React.Component{
  state = {
    name: "",
    password_digest: ""
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event, newUser) => {
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
      // <div>
      //   <div>
      //     <form onSubmit={(event) => this.props.signUp(event, this.state)}>
      //       <input placeholder="Username" value={this.state.input} name="name" onChange={this.onChange}></input>
      //       <input placeholder="Password" value={this.state.input} name="password_digest" onChange={this.onChange}></input>
      //       <button>Create</button>
      //     </form>
      //   </div>
      //   <div>
      //     <form onSubmit={(event) => this.props.logIn(event, this.state)}>
      //       <input placeholder="Username" value={this.state.input} name="name" onChange={this.onChange}></input>
      //       <input placeholder="Password" value={this.state.input} name="password_digest" onChange={this.onChange}></input>
      //       <button>Login</button>
      //     </form>
      //   </div>
      // </div>

<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Sign Up</h3>
                    <form onSubmit={(event) => this.props.signUp(event, this.state)}>
                        <div class="form-group">
                             <input placeholder="Username" value={this.state.input} name="name" onChange={this.onChange}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder="Password" value={this.state.input} name="password_digest" onChange={this.onChange}></input>
                        </div>
                        <div class="form-group">
                            <button class="btnSubmit">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input placeholder="Username" value={this.state.input} name="name" onChange={this.onChange}></input>
                        </div>
                        <div class="form-group">
                            <input placeholder="Password" value={this.state.input} name="password_digest" onChange={this.onChange}></input>
                        </div>
                        <div class="form-group">
                              <button class="btnSubmit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }

}

export default SignUp
