import React from 'react'
import { Link } from 'react-router-dom'

const signOut = async () => {
  const response = await fetch('http://guver.net/api/v1/auth/signout', {
    method: 'post',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
}

const Navbar = (props) => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/create'>Create Pikka</Link></li>
    <li><Link to='/signup'>Sign Up</Link></li>
    <li><Link to='/signin'>Sign In</Link></li>
    <li><span onClick={signOut}>Sign Out</span></li>
  </ul>
)

export default Navbar
