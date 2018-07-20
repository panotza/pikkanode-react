import React, { Component } from 'react'

class Create extends Component {
  inputFileRef = React.createRef()
  state = {
    caption: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const pictureFile = this.inputFileRef.current.files[0]
    formData.append('caption', this.state.caption)
    formData.append('picture', pictureFile)
    const response = await fetch('http://guver.net/api/v1/pikka', {
      method: 'post',
      credentials: 'include',
      body: formData
    })
    const data = await response.json()
    console.log(data)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="caption" onChange={this.handleChange} /> <br />
        <input type="file" ref={this.inputFileRef}/>
        <button>Create</button>
      </form>
    )
  }
}

export default Create
