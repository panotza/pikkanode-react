import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://guver.net/api/v1/auth/signin', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    const data = await response.json()
    console.log(data)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="email" value={this.state.email} onChange={this.handleChange} />
        <input name="password" value={this.state.password} onChange={this.handleChange} />
        <button>Sign In</button>
      </form>
    )
  }
}

export default SignIn
